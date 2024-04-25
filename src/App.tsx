import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
//Category
import { CategoryList } from "./components/categories/categoriesList";
import { CategoryEdit } from "./components/categories/categoriesEdit";
import { CategoryCreate } from "./components/categories/categoriesCreate";
import { CategoryShow } from "./components/categories/categoriesShow";
//Person
import { PersonList } from "./components/person/personList";
import { PersonCreate } from "./components/person/personCreate";
import { PersonShow } from "./components/person/personShow";
//Dance
import { DanceCreate } from "./components/dance/danceCreate";
import { DanceList } from "./components/dance/danceList";
import { DanceShow } from "./components/dance/danceShow";
//Studio
import { StudioList } from "./components/studios/studioList";
import { StudioCreate } from "./components/studios/studioCreate";
import { StudioShow } from "./components/studios/studioShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
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
    />
  </Admin>
);
