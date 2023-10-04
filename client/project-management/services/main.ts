import axios from "axios";
// 
import instance from "./axios";

// user login
export const loginUser = (async (val: any) => {
  try {
    let res = await instance.post("/login", val);
    console.log("Response", res)
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});

// register user
export const registerUser = (async (val: any) => {
  try {
    let res = await instance.post("/register", val);
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});
