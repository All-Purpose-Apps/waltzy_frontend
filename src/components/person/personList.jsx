import { Datagrid, BulkDeleteButton, List, NumberField, TextField, ReferenceField } from 'react-admin';

export const PersonList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show" bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
            <TextField source="firstName" label="First Name" sx={{ textTransform: 'capitalize' }} />
            <TextField source="lastName" label="Last Name" sx={{ textTransform: 'capitalize' }} />
            <NumberField source="age" />
            <ReferenceField reference="studios" source="studio" label="Studio" link="show">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="identifier" sx={{ textTransform: 'capitalize' }} />
        </Datagrid>
    </List>
);