import React, { useState } from "react";
import "./QuoteCreation.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { QuoteService } from "../../services/quote.service";
import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type Inputs = {
  text: string;
  mediaUrl: string;
};

const quoteService = new QuoteService();

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function QuoteCreationPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(form: any) {}

  function onFileUpload(event) {
    console.log("file", event?.target?.files);
    let file = event?.target?.files;
    const image = file[0]?.name;
    console.log("image", image);
    quoteService.uploadImage(image);
  }

  return (
    <div className="container-fluid">
      <div className="mt-2">
        <header className="header">Quotes</header>
      </div>
      <hr></hr>
      <div className="container-fluid d-flex align-items-center justify-content-center mt-3 h80">
        <div className="card pt-5 pb-5 ps-5 pe-5 d-flex align-items-center justify-content-center">
          <div className="quote-header mb-4">Create Quote</div>
          <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <TextField
                size="small"
                id="outlined-basic"
                label="Quote Text"
                variant="outlined"
                {...register("text", {
                  required: "Quote Text is required",
                })}
              />
              {errors.text && (
                <p className="error-message">{errors.text.message}</p>
              )}
            </div>
            <div className="d-flex flex-row align-items-center">
              <TextField
                disabled
                className="me-3"
                size="small"
                id="outlined-basic"
                label="Image"
                variant="outlined"
                {...register("mediaUrl", {
                  required: "Image is required",
                })}
              />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                <VisuallyHiddenInput
                  type="file"
                  onChange={onFileUpload}
                  multiple
                />
              </Button>
            </div>
            <div className="d-flex flex-column">
              {errors.mediaUrl && (
                <p className="error-message">{errors.mediaUrl.message}</p>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <Button fullWidth type="submit" variant="outlined">
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuoteCreationPage;
