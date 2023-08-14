import { FC } from "react";
import { LayoutProps } from "@types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
};

export default Layout;
