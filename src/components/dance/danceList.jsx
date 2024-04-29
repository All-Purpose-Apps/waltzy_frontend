import { Datagrid, List, TextField } from 'react-admin';

export const DanceList = () => (
    <List exporter={false} >
        <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField source="title" />
            <TextField source="danceCategory.name" label="Dance Category" />
        </Datagrid>
    </List>
);