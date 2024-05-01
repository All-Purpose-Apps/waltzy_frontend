import { Layout, useGetIdentity } from "react-admin";
import { MainMenu } from "./MainMenu";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const MainLayout = ({ children }) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            localStorage.setItem("userEmail", JSON.stringify(user.email));
        } else {
            console.log("No user is logged in");
        }
    });
    const { data } = useGetIdentity();
    localStorage.setItem("uid", JSON.stringify(data));

    console.log(localStorage.getItem("identity"), localStorage.getItem("userEmail"));
    return (
        <Layout menu={MainMenu}>
            {children}
        </Layout>
    );
}