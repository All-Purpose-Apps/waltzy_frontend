import { Create, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';

export const PersonCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <NumberInput source="age" />
            <SelectInput source="identifier" choices={[
                { id: 'student', name: 'student' },
                { id: 'coach', name: 'coach' },
                { id: 'teacher/professional', name: 'teacher/professional' },
            ]} />
        </SimpleForm>
    </Create>
);