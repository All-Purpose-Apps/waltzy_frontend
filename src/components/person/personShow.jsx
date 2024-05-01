import { useRecordContext, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, DeleteButton } from 'react-admin';

const PersonTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.firstName} ${record.lastName}` : ''}</span>;
}

export const PersonShow = () => (
    <Show title={<PersonTitle />}>
        <SimpleShowLayout>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <NumberField source="age" />
            <ReferenceField reference="studios" source="studio" label="Studio" link="show">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="identifier" sx={{ textTransform: 'capitalize' }} />
            <DeleteButton mutationMode="pessimistic" />
        </SimpleShowLayout>
    </Show>
);