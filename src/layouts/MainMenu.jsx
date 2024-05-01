import { Menu, useGetList } from 'react-admin'
import HomeIcon from '@mui/icons-material/Home';



export const MainMenu = () => {
    const studiosList = useGetList(
        'studios',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'name', order: 'DESC' }
        }
    );

    const peopleList = useGetList(
        'person',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'name', order: 'DESC' }
        }
    );

    const couplesList = useGetList(
        'couples',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'name', order: 'DESC' }
        }
    );

    if (studiosList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/home"
                    primaryText="Home"
                    leftIcon={<HomeIcon />}
                />
                <Menu.ResourceItem name="studios" />

            </Menu>)
    } else if (studiosList.total > 0 && peopleList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/home"
                    primaryText="Home"
                    leftIcon={<HomeIcon />}
                />
                <Menu.ResourceItem name="studios" />
                <Menu.ResourceItem name="people" />

            </Menu>)
    } else if (peopleList.total > 0 && couplesList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/home"
                    primaryText="Home"
                    leftIcon={<HomeIcon />}
                />
                <Menu.ResourceItem name="studios" />
                <Menu.ResourceItem name="person" />
                <Menu.ResourceItem name="couples" />

            </Menu>)
    } else if (couplesList.total > 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/home"
                    primaryText="Home"
                    leftIcon={<HomeIcon />}
                />
                <Menu.ResourceItems />
            </Menu>)
    }
}