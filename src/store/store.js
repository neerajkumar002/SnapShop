import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product-slice/index";
import authReducer from "./slice/Auth-slice/index";
import cartReducer from "./slice/Cart-Slice/index";
import addressReducer from "./slice/Address-slice/index";
import orderReducer from "./slice/Order-slice/index";
import adminorderReducer from "./admin/order-slice/index";
const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    adminOrders: adminorderReducer,
  },
});

export default store;
