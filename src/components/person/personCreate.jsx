import { Create, SimpleForm, TextInput, NumberInput, SelectInput, Labeled, ReferenceInput, required, minValue, choices, } from 'react-admin';

export const PersonCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <Labeled isRequired>
                <TextInput source="firstName" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <TextInput source="lastName" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <NumberInput source="age" validate={[required(), minValue(0)]} />
            </Labeled>
            <Labeled isRequired>
                <ReferenceInput reference="studios" source="studio" label="Studio" link="show">
                    <SelectInput
                        label="Studio" source="_id" optionText="name" validate={required()} />
                </ReferenceInput>
            </Labeled>
            <Labeled isRequired>
                <SelectInput source="identifier" choices={[
                    { id: 'student', name: 'Student' },
                    { id: 'coach', name: 'Coach' },
                    { id: 'teacher/professional', name: 'Teacher/Professional' },
                ]} validate={[required(), choices(['student', 'coach', 'teacher/professional'])]} />
            </Labeled>
        </SimpleForm>
    </Create>
);