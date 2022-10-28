import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NavigationState {
  visible: boolean;
}

const initialState: NavigationState = {
  visible: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggleNavigation } = navigationSlice.actions;
export const selectNavigation = (state: RootState) => state.navigation.visible;
export default navigationSlice.reducer;
