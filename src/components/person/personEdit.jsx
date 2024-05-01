import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput, Labeled, required, minValue, choices, } from 'react-admin';

export const PersonEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" validate={required()} label="First Name" />
            <TextInput source="lastName" validate={required()} label="Last Name" />
            <NumberInput source="age" validate={[required(), minValue(0)]} />
            <ReferenceInput reference="studios" source="studio" label="Studio" link="show">
                <SelectInput
                    label="Studio" source="_id" optionText="name" validate={required()} />
            </ReferenceInput>
            <SelectInput source="identifier" choices={[
                { id: 'student', name: 'Student' },
                { id: 'coach', name: 'Coach' },
                { id: 'teacher/professional', name: 'Teacher/Professional' },
            ]} validate={[required(), choices(['student', 'coach', 'teacher/professional'])]} />
        </SimpleForm>
    </Edit>
);
