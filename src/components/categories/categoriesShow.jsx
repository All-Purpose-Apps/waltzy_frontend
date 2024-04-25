
import { Show, SimpleShowLayout, TextField, Datagrid, ReferenceManyField } from 'react-admin';

export const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <ReferenceManyField reference="dances" source="dances" target="" label="Dances">
                <Datagrid>
                    <TextField source="title" />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);