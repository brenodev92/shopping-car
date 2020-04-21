import { createAction } from "@reduxjs/toolkit";

export const showAlert = createAction("SHOW_ALERT");
export const hideAlert = createAction("HIDE_ALERT");
export const addMessages = createAction("ADD_MESSAGES");
export const removeMessages = createAction("REMOVE_MESSAGES");
