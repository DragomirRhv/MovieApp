import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  Help as HelpIcon,
} from "@mui/icons-material";
import { useSnackBar } from "../../context/SnackbarContext/SnackbarContext";
import { emailRegex, passwordRegex } from "../../utils/regex/regex";
import CustomSubmitButton from "../../components/Dumb/CustomSubmitButton/CustomSubmitButton";
import LoginSignupOptionComponent from "../../components/Dumb/LoginSignupOptionComponent/LoginSignupOptionComponent";
import CustomToolTip from "../../components/Dumb/CustomToolTip/CustomToolTip";
import { passTooltipText } from "../../components/Dumb/PasswordRequirements/PasswordRequirements";
import classes from "./SignupPage.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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
};

const SignupPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    first: false,
    second: false,
  });

  const passRef = useRef({});
  const userEmailRef = useRef({});
  passRef.current = watch("password", "");
  userEmailRef.current = watch("email");

  const onSubmit = async (inputsData) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        inputsData.email,
        inputsData.password
      );
      setIsLoading(false);
      showSnackBar({
        text: "Successfully created an account. You may log in immediately",
        type: "success",
        hideDuration: 6000,
      });
      navigate("/login");
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
      password_confirm: "",
    });
  };

  return (
    <Box sx={styles.formContainer} className={classes.formContainer}>
      <Typography sx={styles.title} variant="h3">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
            pattern: {
              value: passwordRegex,
              message: "Password does't meet the requirements",
            },
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => (
            <TextField
              type={isPasswordVisible.first ? "text" : "password"}
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
                  <>
                    <InputAdornment position="end">
                      <CustomToolTip tooltipText={passTooltipText}>
                        <HelpIcon style={{ fill: "#594c4b" }} />
                      </CustomToolTip>
                    </InputAdornment>
                    <InputAdornment position="end">
                      <IconButton
                        className={classes.visibilityIcon}
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setIsPasswordVisible((prevState) => {
                            return {
                              ...prevState,
                              first: !prevState.first,
                            };
                          })
                        }
                      >
                        {isPasswordVisible?.first ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  </>
                ),
              }}
            />
          )}
        />
        <Controller
          name="password_confirm"
          control={control}
          defaultValue=""
          rules={{
            required: "Confirm password field is required.",
            validate: (value) =>
              value === passRef.current || "Passwords do not match.",
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => (
            <TextField
              type={isPasswordVisible.second ? "text" : "password"}
              fullWidth
              label="Confirm Password"
              variant="outlined"
              inputRef={ref}
              {...field}
              error={!!error}
              helperText={errors?.password_confirm?.message || " "}
              sx={{
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.visibilityIcon}
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setIsPasswordVisible((prevState) => {
                          return {
                            ...prevState,
                            second: !prevState.second,
                          };
                        })
                      }
                    >
                      {isPasswordVisible?.second ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <CustomSubmitButton
          text="Register"
          style={{ fontWeight: "bolder" }}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>
      <LoginSignupOptionComponent
        firstParagraph="Already have an account?"
        firstLink="/login"
        firstLinkTitle="Log In"
      />
    </Box>
  );
};

export default SignupPage;
