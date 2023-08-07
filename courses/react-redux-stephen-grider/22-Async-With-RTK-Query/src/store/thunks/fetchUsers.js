import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const res = await axios.get("http://localhost:3001/users");
    await wait(500);
    return res.data;
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
