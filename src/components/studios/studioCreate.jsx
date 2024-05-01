import { SelectInput, Create, Labeled, SimpleForm, TextInput, required, email, choices } from 'react-admin';

export const StudioCreate = () => (
    <Create redirect="list">
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
            <Labeled isRequired>
                <TextInput source="name" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <TextInput source="location" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <TextInput source="phone" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <TextInput source="email" validate={[email(), required()]} />
            </Labeled>
            <Labeled isRequired>
                <TextInput source="website" validate={required()} />
            </Labeled>
            <Labeled isRequired>
                <SelectInput source="studioType" choices={[
                    { id: 'independent', name: 'Independent' },
                    { id: 'franchise', name: 'Franchise' },
                ]}
                    validate={[required(), choices(['independent', 'franchise'])]}
                />
            </Labeled>
            <TextInput source="contactPerson" />
            <TextInput source="contactPersonPhone" />
            <TextInput source="contactPersonEmail" />
            <TextInput source="studioOwner" />
            <TextInput source="studioOwnerPhone" />
            <TextInput source="studioOwnerEmail" />
            <TextInput source="studioManager" />
            <TextInput source="studioManagerPhone" />
            <TextInput source="studioManagerEmail" />
        </SimpleForm>
    </Create>
);