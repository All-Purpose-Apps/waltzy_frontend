import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { CategoryList } from "./components/categories/categoriesList";
import { CategoryEdit } from "./components/categories/categoriesEdit";
import { CategoryCreate } from "./components/categories/categoriesCreate";
import { CategoryShow } from "./components/categories/categoriesShow";
import { PersonList } from "./components/person/personList";
import { PersonCreate } from "./components/person/personCreate";
import { DanceCreate } from "./components/dance/danceCreate";
import { DanceList } from "./components/dance/danceList";
import { StudioList } from "./components/studios/studioList";
import { StudioCreate } from "./components/studios/studioCreate";
// import { DanceShow } from "./components/dance/danceShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource
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
      // show={DanceShow}
    /> */}
    <Resource name="person" list={PersonList} create={PersonCreate} />
    <Resource name="studios" list={StudioList} create={StudioCreate} />
  </Admin>
);
