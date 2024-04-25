import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const StudioCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput source="website" />
            <TextInput source="contactPerson" />
            <TextInput source="contactPersonPhone" />
            <TextInput source="contactPersonEmail" />
            <TextInput source="studioType" />
            <TextInput source="studioOwner" />
            <TextInput source="studioOwnerPhone" />
            <TextInput source="studioOwnerEmail" />
            <TextInput source="studioManager" />
            <TextInput source="studioManagerPhone" />
            <TextInput source="studioManagerEmail" />
        </SimpleForm>
    </Create>
);