import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackBar } from "../../context/SnackbarContext/SnackbarContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomSubmitButton from "../../components/Dumb/CustomSubmitButton/CustomSubmitButton";
import LoginSignupOptionComponent from "../../components/Dumb/LoginSignupOptionComponent/LoginSignupOptionComponent";
import { emailRegex } from "../../utils/regex/regex";
import { auth } from "../../firebase";

import classes from "./LoginPage.module.css";

const styles = {
  formContainer: {
    maxWidth: "35rem",
    margin: "5rem auto",
    padding: "2rem",
    boxShadow: 2,
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    marginBottom: "3rem",
  },
  emailAndPassInputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "3rem",
  },
};

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (inputsData) => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        inputsData.email,
        inputsData.password
      );
      const { accessToken, refreshToken } = response.user;
      setIsLoading(false);
      showSnackBar({
        text: `Hello ${response.user.email}`,
        type: "success",
        hideDuration: 6000,
      });
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      navigate("/");
    } catch (error) {
      showSnackBar({
        text: `${error.message}`,
        type: "error",
        hideDuration: 6000,
      });
      setIsLoading(false);
    }
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={styles.formContainer} className={classes.formContainer}>
      <Typography sx={styles.title} variant="h3">
        Log In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.emailAndPassInputContainer}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email field is required.",
              pattern: {
                value: emailRegex,
                message: "Please enter a valid email.",
              },
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                inputRef={ref}
                {...field}
                error={!!error}
                helperText={errors?.email?.message || " "}
                sx={{
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password field is required.",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                type={isPasswordVisible ? "text" : "password"}
                fullWidth
                label="Password"
                variant="outlined"
                inputRef={ref}
                {...field}
                error={!!error}
                helperText={errors?.password?.message || " "}
                sx={{
                  textTransform: "uppercase",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        className={classes.visibilityIcon}
                        aria-label="toggle password visibility"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      >
                        {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <CustomSubmitButton
          text="login"
          style={{ fontWeight: "bolder" }}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>
      <LoginSignupOptionComponent
        firstParagraph="Do not have an account?"
        firstLink="/signup"
        firstLinkTitle="Register"
      />
    </Box>
  );
};

export default LoginPage;
