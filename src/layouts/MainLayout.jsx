import { Layout, useGetIdentity } from "react-admin";
import { MainMenu } from "./MainMenu";

export const MainLayout = ({ children }) => {
    const { data } = useGetIdentity();
    localStorage.setItem("uid", JSON.stringify(data));

    return (
        <Layout menu={MainMenu}>
            {children}
        </Layout>
    );
}