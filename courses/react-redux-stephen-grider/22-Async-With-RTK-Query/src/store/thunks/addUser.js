import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

export const addUser = createAsyncThunk("users/add", async () => {
    const res = await axios.post("http://localhost:3001/users", {
        name: faker.person.fullName(),
    });
    // await wait(20_000);

    return res.data;
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
