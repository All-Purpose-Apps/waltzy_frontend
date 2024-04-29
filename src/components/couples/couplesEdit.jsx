import { SelectInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CoupleEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="leader._id" reference="person">
                <SelectInput label="Leader" source="_id" optionText={record => `${record.firstName} ${record.lastName}`} />
            </ReferenceInput>
            <ReferenceInput source="follower._id" reference="person">
                <SelectInput label="Follower" source="_id" optionText={record => `${record.firstName} ${record.lastName}`} />
            </ReferenceInput>
            <ReferenceInput source="dance._id" reference="dances">
                <SelectInput label="Dance" source="_id" optionText={record => `${record.danceCategory.name} - ${record.title} `} />
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