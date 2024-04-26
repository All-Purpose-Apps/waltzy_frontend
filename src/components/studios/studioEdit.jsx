import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const StudioEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="location" fullWidth />
            <TextInput source="phone" />
            <TextInput source="email" fullWidth />
            <TextInput source="website" fullWidth />
            <TextInput source="studioType" />
            <TextInput source="contactPerson" />
            <TextInput source="contactPersonPhone" />
            <TextInput source="contactPersonEmail" fullWidth />
            <TextInput source="studioOwner" />
            <TextInput source="studioOwnerPhone" />
            <TextInput source="studioOwnerEmail" fullWidth />
            <TextInput source="studioManager" />
            <TextInput source="studioManagerPhone" />
            <TextInput source="studioManagerEmail" fullWidth />
        </SimpleForm>
    </Edit>
);