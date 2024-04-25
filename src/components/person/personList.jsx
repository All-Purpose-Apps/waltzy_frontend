import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const PersonList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <NumberField source="age" />
            <TextField source="ageCategory" />
            <TextField source="level" />
            <TextField source="studio" />
            <TextField source="title" />
            <TextField source="identifier" />
            <DateField source="__v" />
        </Datagrid>
    </List>
);