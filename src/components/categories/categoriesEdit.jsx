import { DateInput, Edit, SimpleForm, TextInput, ReferenceArrayInput } from 'react-admin';

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceArrayInput source="dances._id" reference="dances" target="" />
        </SimpleForm>
    </Edit>
);