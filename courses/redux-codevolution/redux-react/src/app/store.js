import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/icecreamSlice.js";
import userReducer from "../features/user/userSlice.js";

// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

