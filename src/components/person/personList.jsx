import { Datagrid, BulkDeleteButton, List, NumberField, TextField, ReferenceField } from 'react-admin';

export const PersonList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show" bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
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