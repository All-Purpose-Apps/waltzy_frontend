import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const DanceList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show">
            <TextField source="title" />
            <ReferenceField reference="danceCategory" source="danceCategory._id" label="Category" link="show">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);