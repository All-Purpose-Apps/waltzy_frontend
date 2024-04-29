import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CoupleShow = () => (
    <Show>
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