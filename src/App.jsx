import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
  CustomRoutes
} from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import { FirebaseAuthProvider } from "react-admin-firebase";

import Home from "./views/Home"
//Category
import { CategoryList } from "./components/categories/categoriesList";
import { CategoryCreate } from "./components/categories/categoriesCreate";
import { CategoryShow } from "./components/categories/categoriesShow";
import { CategoryEdit } from "./components/categories/categoriesEdit";
//Person
import { PersonList } from "./components/person/personList";
import { PersonCreate } from "./components/person/personCreate";
import { PersonShow } from "./components/person/personShow";
import { PersonEdit } from "./components/person/personEdit";
//Dance
import { DanceList } from "./components/dance/danceList";
import { DanceCreate } from "./components/dance/danceCreate";
import { DanceShow } from "./components/dance/danceShow";
import { DanceEdit } from "./components/dance/danceEdit";
//Studio
import { StudioList } from "./components/studios/studioList";
import { StudioCreate } from "./components/studios/studioCreate";
import { StudioShow } from "./components/studios/studioShow";
import { StudioEdit } from "./components/studios/studioEdit";
//Couples
import { CouplesList } from "./components/couples/couplesList";
import { CoupleCreate } from "./components/couples/couplesCreate";
import { CoupleShow } from "./components/couples/couplesShow";
import { CoupleEdit } from "./components/couples/couplesEdit";
//Heats
import { HeatList } from "./components/heats/heatsList";
import { HeatCreate } from "./components/heats/heatCreate";
import { HeatShow } from "./components/heats/heatsShow";
import { HeatEdit } from "./components/heats/heatEdit";
//layouts
import { MainLayout } from "./layouts/MainLayout";
//icons
import ClassIcon from '@mui/icons-material/Class';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PersonIcon from '@mui/icons-material/Person';
import DomainIcon from '@mui/icons-material/Domain';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
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
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
    layout={MainLayout}
  >
    <Resource
      name="heats"
      list={HeatList}
      show={HeatShow}
      create={HeatCreate}
      edit={HeatEdit}
      icon={LocalFireDepartmentIcon}
    />
    <Resource
      name="couples"
      list={CouplesList}
      create={CoupleCreate}
      show={CoupleShow}
      edit={CoupleEdit}
      icon={PeopleIcon}
    />
    <Resource
      name="person"
      list={PersonList}
      create={PersonCreate}
      show={PersonShow}
      edit={PersonEdit}
      icon={PersonIcon}
    />
    <Resource
      name="studios"
      list={StudioList}
      create={StudioCreate}
      show={StudioShow}
      edit={StudioEdit}
      icon={DomainIcon}
    />
    <Resource
      name="danceCategory"
      options={{ label: "Categories" }}
      list={CategoryList}
      // edit={CategoryEdit}
      // create={CategoryCreate}
      show={CategoryShow}
      icon={ClassIcon}
    />
    <Resource
      name="dances"
      list={DanceList}
      // create={DanceCreate}
      show={DanceShow}
      // edit={DanceEdit}
      icon={DirectionsRunIcon}
    />
    <CustomRoutes>
      <Route path="/home" element={<Home />} />
    </CustomRoutes>
  </Admin>
);
