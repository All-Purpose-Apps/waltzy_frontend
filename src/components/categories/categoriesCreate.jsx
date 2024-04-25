// react-admin create page for categories is a form with a single input field for the category name.
import { Create, SimpleForm, TextInput, ReferenceInput } from 'react-admin';
export const CategoryCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="name" />
            {/* <ReferenceInput source="dances._id" reference="dances" /> */}
        </SimpleForm>
    </Create >
);
