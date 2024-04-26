// react-admin create page for categories is a form with a single input field for the category name.
import { Create, SimpleForm, TextInput } from 'react-admin';
export const CategoryCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create >
);
