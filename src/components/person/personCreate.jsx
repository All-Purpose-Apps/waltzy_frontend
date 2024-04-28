import { Create, SimpleForm, TextInput, NumberInput, SelectInput, ReferenceField, ReferenceInput } from 'react-admin';

export const PersonCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <NumberInput source="age" />
            <ReferenceInput reference="studios" source="studio" label="Studio" link="show">
                <SelectInput
                    label="Studio" source="_id" optionText="name" />
            </ReferenceInput>
            <SelectInput source="identifier" choices={[
                { id: 'student', name: 'Student' },
                { id: 'coach', name: 'Coach' },
                { id: 'teacher/professional', name: 'Teacher/Professional' },
            ]} />
        </SimpleForm>
    </Create>
);