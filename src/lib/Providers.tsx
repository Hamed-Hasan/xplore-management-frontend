"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import AuthProvider from "./Authprovider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <StyledComponentsRegistry >
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </Provider>
    </AuthProvider>
  );
};

export default Providers;
