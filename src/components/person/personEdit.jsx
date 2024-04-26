import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

export const PersonEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <NumberInput source="age" />
            <ReferenceInput reference="studios" source="studio" label="Studio" link="show">
                <SelectInput label="Studio" source="_id" optionText="name" />
            </ReferenceInput>
            <SelectInput source="identifier" choices={[
                { id: 'student', name: 'Student' },
                { id: 'coach', name: 'Coach' },
                { id: 'teacher/professional', name: 'Teacher/Professional' },
            ]} />
        </SimpleForm>
    </Edit>
);
