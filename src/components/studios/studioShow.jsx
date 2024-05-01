import { EmailField, NumberField, Show, SimpleShowLayout, TextField, UrlField } from 'react-admin';

export const StudioShow = () => {
    const formatPhoneNumber = (value) => {
        if (!value) return;
        const phoneNumber = value.replace(/[^0-9]/g, '');
        if (phoneNumber.length === 10) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        }
        return value;
    };

    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="location" />
                <NumberField source="phone" transform={value => formatPhoneNumber(value)} />
                <EmailField source="email" />
                <UrlField source="website" />
                <TextField source="studioType" sx={{ textTransform: 'capitalize' }} />
                <TextField source="contactPerson" />
                <NumberField source="studioManagerPhone" transform={value => formatPhoneNumber(value)} />
                <EmailField source="contactPersonEmail" />
                <TextField source="studioOwner" />
                <NumberField source="studioOwnerPhone" transform={value => formatPhoneNumber(value)} />
                <EmailField source="studioOwnerEmail" />
                <TextField source="studioManager" />
                <NumberField source="studioManagerPhone" transform={value => formatPhoneNumber(value)} />
                <EmailField source="studioManagerEmail" />
            </SimpleShowLayout>
        </Show>
    )
};