
import { Show, SimpleShowLayout, TextField, Datagrid, ReferenceManyField, ReferenceField } from 'react-admin';

export const CategoryShow = (props) => {
    console.log(props)

    return (
        <Show {...props}>
            <SimpleShowLayout >
                <TextField source="name" />
                <ReferenceManyField reference="dances" target='category' source="id" label="Dances">
                    <Datagrid rowClick="show">
                        <TextField source="title" />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    );
}