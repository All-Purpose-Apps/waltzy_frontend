import { Title } from 'react-admin'

import Container from '@mui/material/Container';

const styles = {
    marginTop: '1em',
    height: '80vh',
}

export default function Dashboard() {
    return (
        <>
            <Title title="Home" />
            <Container style={styles}>
                Hello
            </Container>
        </>
    )
}
