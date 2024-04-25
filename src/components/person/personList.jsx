import { Datagrid, DateField, List, NumberField, TextField, ReferenceField } from 'react-admin';

export const PersonList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="firstName" />
            <TextField source="lastName" />
            <NumberField source="age" />
            <ReferenceField reference="studios" source="studio" label="Studio" link="show">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="identifier" sx={{ textTransform: 'capitalize' }} />
        </Datagrid>
    </List>
);