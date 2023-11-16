import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServicesState {
  services: any[];
  filters: Record<string, any>;
}

const initialState: ServicesState = {
  services: [],
  filters: {},
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    storeProduct: (state, action: PayloadAction<AnyAction>) => {
      if (action.payload) {
        const isItemAlreadyInArray = state.services.some((serv) => {
          return serv.id === action.payload.id;
        });

        if (!isItemAlreadyInArray) {
          state.services.push(action.payload);
        }
      }
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.services = state.services.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    resetCart: (state) => {
      state.services = [];
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { storeProduct, removeProduct, resetCart, setFilters } =
  servicesSlice.actions;

export default servicesSlice.reducer;
