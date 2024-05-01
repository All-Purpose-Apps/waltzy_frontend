import { Datagrid, EmailField, List, TextField, CreateButton, BulkDeleteButton, NumberField } from 'react-admin';
import { Box, Typography } from '@mui/material';

const Empty = () =>
    <Box textAlign="center" sx={{ justifyContent: 'center' }}>
        <Typography variant="h4" paragraph>
            A studio must exist to continue!
        </Typography>
        <CreateButton />
    </Box>

const formatPhoneNumber = (value) => {
    if (!value) return;
    const phoneNumber = value.replace(/[^0-9]/g, '');
    if (phoneNumber.length === 10) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    }
    return value;
};

export const StudioList = () => {
    return (
        <List exporter={false} empty={<Empty />} sx={{ justifyContent: 'center', }}  >
            <Datagrid rowClick="show" bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
                <TextField source="name" />
                <TextField source="location" />
                <NumberField source="phone" transform={value => formatPhoneNumber(value)} />
                <EmailField source="email" />
                <TextField source="website" />
                <TextField source="studioType" sx={{ textTransform: 'capitalize' }} label="Studio Type" />
            </Datagrid>
        </List>
    )
};
