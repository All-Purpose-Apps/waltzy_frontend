import { Menu } from 'react-admin'
import HomeIcon from '@mui/icons-material/Home';


export const MainMenu = () => (
    <Menu>
        <Menu.Item
            to="/home"
            primaryText="Home"
            leftIcon={<HomeIcon />}
        />
        <Menu.ResourceItems />
    </Menu>
)