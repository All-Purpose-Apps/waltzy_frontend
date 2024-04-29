import { Datagrid, List, TextField } from 'react-admin';

export const CategoryList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField source="name" />
        </Datagrid>
    </List>
);