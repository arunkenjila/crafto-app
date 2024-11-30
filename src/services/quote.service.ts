import axios from "axios";
import { BASE_URL } from "../utils/constants";

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
}
