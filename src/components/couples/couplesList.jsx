import { Datagrid, List, TextField, ReferenceField, BulkDeleteButton } from 'react-admin';

export const CouplesList = () => (
    <List exporter={false}>
        <Datagrid rowClick="show" bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
            <TextField source="leader.fullName" label="Leader" />
            <TextField source="follower.fullName" label="Follower" />
            <ReferenceField reference="dances" source="dance._id" label="Dance" link="show">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField reference="dances" source="dance._id" label="Dance Category" link="show">
                <TextField source="danceCategory.name" />
            </ReferenceField>
            <TextField source="ageCategory" sx={{ textTransform: 'uppercase' }} label="Age Category" />
            <TextField source="level" sx={{ textTransform: 'capitalize' }} />
        </Datagrid>
    </List>
);