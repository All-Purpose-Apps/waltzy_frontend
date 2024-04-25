import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const StudioList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="location" />
            <TextField source="phone" />
            <EmailField source="email" />
            <TextField source="website" />
            <TextField source="contactPerson" />
            <TextField source="contactPersonPhone" />
            <TextField source="contactPersonEmail" />
            <TextField source="studioType" />
            <TextField source="studioOwner" />
            <TextField source="studioOwnerPhone" />
            <TextField source="studioOwnerEmail" />
            <TextField source="studioManager" />
            <TextField source="studioManagerPhone" />
        </Datagrid>
    </List>
);
