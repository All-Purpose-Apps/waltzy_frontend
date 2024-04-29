import { SelectInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
const ageCategoryChoices = [
    { id: 'preteen i', name: 'Preteen I' },
    { id: 'preteen ii', name: 'Preteen II' },
    { id: 'junior', name: 'Junior' },
    { id: 'a', name: 'A' },
    { id: 'a1', name: 'A1' },
    { id: 'a2', name: 'A2' },
    { id: 'b', name: 'B' },
    { id: 'b1', name: 'B1' },
    { id: 'b2', name: 'B2' },
    { id: 'c', name: 'C' },
    { id: 'c1', name: 'C1' },
    { id: 'c2', name: 'C2' },
    { id: 'c3', name: 'C3' },
];

const levelChoices = [
    { id: 'novice', name: 'Novice' },
    { id: 'newcomer', name: 'Newcomer' },
    { id: 'associate bronze', name: 'Associate Bronze' },
    { id: 'associate silver', name: 'Associate Silver' },
    { id: 'associate gold', name: 'Associate Gold' },
    { id: 'full bronze', name: 'Full Bronze' },
    { id: 'full silver', name: 'Full Silver' },
    { id: 'full gold', name: 'Full Gold' },
];
export const CoupleCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <ReferenceInput source="leader._id" reference="person">
                <SelectInput label="Leader" source="_id" optionText={record => `${record.firstName} ${record.lastName}`} />
            </ReferenceInput>
            <ReferenceInput source="follower._id" reference="person">
                <SelectInput label="Follower" source="_id" optionText={record => `${record.firstName} ${record.lastName}`} />
            </ReferenceInput>
            <ReferenceInput source="dance._id" reference="dances" sort={{ field: 'danceCategory', order: 'ASC' }} perPage={100}>
                <SelectInput label="Dance" source="_id" optionText={record => `${record.danceCategory.name} - ${record.title} `} />
            </ReferenceInput>
            <SelectInput source="ageCategory" choices={ageCategoryChoices} />
            <SelectInput source="level" choices={levelChoices} />
            <TextInput source="scores" />
            <TextInput source="placements" />
            <TextInput source="penalties" />
            <TextInput source="deductions" />
            <TextInput source="comments" />
        </SimpleForm>
    </Create>
);