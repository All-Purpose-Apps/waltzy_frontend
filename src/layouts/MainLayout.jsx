import { Layout } from "react-admin";
import { MainMenu } from "./MainMenu";
export const MainLayout = ({ children }) => {
    return (
        <Layout menu={MainMenu}>
            {children}
        </Layout>
    );
}