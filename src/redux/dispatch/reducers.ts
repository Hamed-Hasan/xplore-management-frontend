import api from "../api/api";
import servicesSlice from "../api/features/services/servicesSlice";
import userSlice from "../api/features/user/userSlice";

export const reducer = {
  [api.reducerPath]: api.reducer,
  services: servicesSlice,
  user: userSlice,
};
