import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

export const DanceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="danceCategory._id" reference="danceCategory" label="Dance Category">
                <SelectInput label="Dance Category" source="_id" optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);