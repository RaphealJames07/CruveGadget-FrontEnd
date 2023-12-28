import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curveGadgetUser: {},
};

const features = createSlice({
    name: "curvegadget",
    initialState,
    reducers: {
        curveGadgetUserLogin: (state, {payload}) => {
            state.curveGadgetUser = payload
            console.log("User Data:", payload);
        },
        curveGadgetUserLogOut: (state) => {
            state.curveGadgetUser = {};
        },
    },
});

export const {
  curveGadgetUserLogin,
  curveGadgetUserLogOut,
} = features.actions;

export default features.reducer;
