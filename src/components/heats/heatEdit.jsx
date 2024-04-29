import { ReferenceArrayInput, DateTimeInput, Create, SimpleForm, SelectArrayInput, Edit } from 'react-admin';

const optionRenderer = (choice) => `${choice.leader.fullName} & ${choice.follower.fullName} dancing ${choice.dance.title}`;
export const HeatEdit = () => (
  <Edit>
    <SimpleForm>
      <DateTimeInput source="dateTime" />
      <ReferenceArrayInput source="couples" reference="couples">
        <SelectArrayInput optionText={optionRenderer} />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);