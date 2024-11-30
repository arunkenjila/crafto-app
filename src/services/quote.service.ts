import axios from "axios";
import { BASE_URL } from "../utils/constants";
import FormData from "form-data";
import * as fs from "fs";

export class QuoteService {
  BASE_URL: string = BASE_URL;
  loginErrorMessage: string = "";

  async login(username: string, otp: string): Promise<any> {
    this.loginErrorMessage = "";
    try {
      const payload = {
        username: username,
        otp: otp,
      };
      const res = await axios.post(BASE_URL + "/login", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res?.data;
      this.loginErrorMessage = "";
      return data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async getQuotes() {
    try {
      const res = await axios.get(
        BASE_URL + "/getQuotes?limit=20&offset=0",
        {}
      );
      console.log("res", res);
      return res?.data;
    } catch (err: any) {
      console.log("error", err);
    }
  }

  async uploadImage(image: string) {
    try {
      const form = new FormData();
      form.append("file", image);
      const res = await axios.post(
        "https://crafto.app/crafto/v1.0/media/assignment/upload",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("res", res);
      return res?.data;
    } catch (err: any) {
      console.log("error", err);
    }
  }

  async createPost(text: string, mediaUrl: string) {
    try {
      const payload = {
        text: text,
        mediaUrl:
          "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      };

      const res = await axios.post(BASE_URL + "/postQuote", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res?.data;
    } catch (err: any) {
      console.log("error", err);
    }
  }
}
