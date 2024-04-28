import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CoupleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="leader.fullName" label="Leader" />
            <TextField source="follower.fullName" label="Follower" />
            <TextField source="dance.title" label="Dance" />
            <TextField source="dance.danceCategory.name" label="Dance Category" />
            <TextField source="ageCategory" sx={{ textTransform: 'uppercase' }} />
            <TextField source="level" sx={{ textTransform: 'capitalize' }} />
        </SimpleShowLayout>
    </Show>
);