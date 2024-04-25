import { ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const DanceShow = () => (
    <Show>
        <SimpleShowLayout >
            <TextField source="title" />
            <ReferenceField reference="danceCategory" source="danceCategory._id" label="Dance Category" link="show">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);