// react-admin create page for categories is a form with a single input field for the category name.
import { Create, SimpleForm, TextInput, useGetList, ReferenceInput, SelectInput } from 'react-admin';

export const DanceCreate = () => {
    const { data, isLoading } = useGetList('danceCategory')

    return (
        <Create redirect="list">
            <SimpleForm>
                <TextInput source="title" />
                <ReferenceInput reference="danceCategory" source="_id">
                    <SelectInput
                        label="Category"
                        source="_id"
                        optionText="name"
                    />
                </ReferenceInput>
            </SimpleForm>
        </Create >
    )
};
