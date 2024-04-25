import { Datagrid, DateField, EmailField, List, ReferenceField, TextField } from 'react-admin';

export const StudioList = () => (
    <List>
        <Datagrid rowClick="edit">
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
