import { SelectInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CoupleEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="leader._id" reference="person/multiple">
                <SelectInput label="Leader" source="_id" optionText="fullName" />
            </ReferenceInput>
            <ReferenceInput source="follower._id" reference="person/multiple">
                <SelectInput label="Follower" source="_id" optionText="fullName" />
            </ReferenceInput>
            <TextInput source="ageCategory" />
            <TextInput source="level" />
            <TextInput source="scores" />
            <TextInput source="placements" />
            <TextInput source="penalties" />
            <TextInput source="deductions" />
            <TextInput source="comments" />
        </SimpleForm>
    </Edit>
);


// <TextField source="leader.fullName" label="Leader" />
// <TextField source="follower.fullName" label="Follower" />
// <TextField source="dance.title" label="Dance" />
// <TextField source="dance.danceCategory.name" label="Dance Category" />
// <TextField source="ageCategory" sx={{ textTransform: 'uppercase' }} />
// <TextField source="level" sx={{ textTransform: 'capitalize' }} />

{/* <ReferenceInput reference="danceCategory" source="danceCategory">
    <SelectInput
        label="Category"
        source="_id"
        optionText="name"
    />
</ReferenceInput>

            <ReferenceInput source="danceCategory._id" reference="danceCategory" label="Dance Category">
                <SelectInput label="Dance Category" source="_id" optionText="name" />
            </ReferenceInput> */}