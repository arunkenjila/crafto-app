import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { useForm } from "react-hook-form";
import { QuoteService } from "../../services/quote.service";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  otp: string;
};

const quoteService = new QuoteService();

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(form: any) {
    const data = await quoteService.login(form.username, form.otp);
    if (data?.token) {
      localStorage.setItem("token", data.token);
      navigate("/quotes");
      navigate(0);
    } else {
      setErrorMessage("Wrong OTP!. Please try again.");
    }
  }

  return (
    <div className="h100 container-fluid d-flex align-items-center justify-content-center">
      <div className="login-card pt-5 pb-5 ps-5 pe-5">
        <div className="login-header mb-4">Quotes</div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField
              size="small"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <TextField
              size="small"
              id="outlined-basic"
              label="OTP"
              variant="outlined"
              {...register("otp", {
                required: "OTP is required",
              })}
            />
            {errors.otp && (
              <p className="error-message">{errors.otp.message}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button fullWidth type="submit" variant="outlined">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
