import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { FirebaseAuthProvider } from "react-admin-firebase";
//Category
import { CategoryList } from "./components/categories/categoriesList";
import { CategoryShow } from "./components/categories/categoriesShow";
import { CategoryCreate } from "./components/categories/categoriesCreate";
import { CategoryEdit } from "./components/categories/categoriesEdit";
//Person
import { PersonList } from "./components/person/personList";
import { PersonShow } from "./components/person/personShow";
import { PersonCreate } from "./components/person/personCreate";
//Dance
import { DanceList } from "./components/dance/danceList";
import { DanceShow } from "./components/dance/danceShow";
import { DanceCreate } from "./components/dance/danceCreate";
import { DanceEdit } from "./components/dance/danceEdit";
//Studio
import { StudioList } from "./components/studios/studioList";
import { StudioShow } from "./components/studios/studioShow";
import { StudioCreate } from "./components/studios/studioCreate";
import { StudioEdit } from "./components/studios/studioEdit";
//auth components
import CustomLoginPage from "./components/authComponents/loginComponent";
//firebase auth
import { config } from "./firebaseConfig";
const authProvider = FirebaseAuthProvider(config, {});

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={CustomLoginPage}
  >
    <Resource
      name="danceCategory"
      options={{ label: "Categories" }}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      show={CategoryShow}
    />
    <Resource
      name="dances"
      list={DanceList}
      create={DanceCreate}
      show={DanceShow}
      edit={DanceEdit}
    />
    <Resource
      name="person"
      list={PersonList}
      create={PersonCreate}
      show={PersonShow}
    />
    <Resource
      name="studios"
      list={StudioList}
      create={StudioCreate}
      show={StudioShow}
      edit={StudioEdit}
    />
  </Admin>
);
