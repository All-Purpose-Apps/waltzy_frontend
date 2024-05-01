import { useRecordContext, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const CoupleTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.leader.fullName} & ${record.follower.fullName}` : ''}</span>;
}

export const CoupleShow = () => (
    <Show title={<CoupleTitle />}>
        <SimpleShowLayout>
            <TextField source="leader.fullName" label="Leader" />
            <TextField source="follower.fullName" label="Follower" />
            <ReferenceField reference="dances" source="dance._id" label="Dance" link="show">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField reference="dances" source="dance._id" label="Dance Category" link="show">
                <TextField source="danceCategory.name" />
            </ReferenceField>
            <TextField source="ageCategory" sx={{ textTransform: 'uppercase' }} />
            <TextField source="level" sx={{ textTransform: 'capitalize' }} />
        </SimpleShowLayout>
    </Show>
);