import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, DeleteButton } from 'react-admin';

export const PersonShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <NumberField source="age" />
            <ReferenceField reference="studios" source="studio" label="Studio" link="show">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="identifier" />
            <DeleteButton mutationMode="pessimistic" />
        </SimpleShowLayout>
    </Show>
);