import "./loginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password  field is empty")
    .min(6, "Password should be min 6 characters")
    .max(15),
  email: yup
    .string()
    .email("Please enter valid email ")
    .required("Email field is empty")
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const Navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid container my={8}>
      <Grid item xs></Grid>
      <Grid item lg={4}>
        <Paper sx={{ padding: "50px" }}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              if (data.email === "xyz@gmail.com" && data.password === "123456") {
                Navigate("/home");
                 
              }else{
                alert("incorrect password")
              }
            })}
          >
            <Stack spacing={3}>
              <img
                width="150px"
                id="nokia"
                src="https://www.freepnglogos.com/uploads/nokia-brand-logos-12.png"
                alt="nokia"
              ></img>

              {/* <Typography id='font' variant='h3' sx={{color: 'rgb(11, 11, 94)'}}>NOKIA</Typography> */}

              <Typography variant="h4" id="sub">
                FACILIVISS
              </Typography>
              <TextField
                label="Email"
                {...register("email")}
                error={errors.email?.message}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon id="user" />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                type={showPassword ? "text" : "password"}
                error={errors.password?.message}
                helperText={errors.password?.message}
                label="Password"
                {...register("password")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRoundedIcon id="lock" />
                    </InputAdornment>
                  ),

                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityOff id="visibility" />
                        ) : (
                          <Visibility id="visibility" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <a href="text">
                <Typography
                  variant="body2"
                  id="password"
                  sx={{ float: "right" }}
                  gutterBottom
                >
                  Forgot Password ?
                </Typography>
              </a>
              <Button
                variant="contained"
                color="info"
                id="button"
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}
