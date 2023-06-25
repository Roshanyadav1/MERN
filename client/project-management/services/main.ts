import axios from "axios";
import { cache } from "react";
import instance from "./axios";

// user login
export const loginUser = cache(async (val: any) => {
  try {
    let res = await instance.post("/login", val);
    console.log("Response" , res)
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});

// register user
export const registerUser = cache(async (val: any) => {
    try {
        let res = await instance.post("/register", val);
        const data = res.data;
        return data;
      } catch (error) {
        return error;
      }
});
