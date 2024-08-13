import { configureStore } from "@reduxjs/toolkit";
import { brawlersApi } from "./api";

export const store = configureStore({
  reducer: {
    [brawlersApi.reducerPath]: brawlersApi.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(brawlersApi.middleware)
})