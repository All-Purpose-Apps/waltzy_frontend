import { Menu, useGetList } from 'react-admin'
import DashboardIcon from '@mui/icons-material/Dashboard';



export const MainMenu = () => {
    // const userId = JSON.parse(localStorage.getItem('uid'));

    const studiosList = useGetList(
        'studios',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'name', order: 'DESC' },
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

    if (studiosList.total === 0 && peopleList.total === 0 && couplesList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/"
                    primaryText="Dashboard"
                    leftIcon={<DashboardIcon />}
                />
                <Menu.ResourceItem name="studios" />
            </Menu>
        )
    } else if (studiosList.total > 0 && peopleList.total === 0 && couplesList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/"
                    primaryText="Dashboard"
                    leftIcon={<DashboardIcon />}
                />
                <Menu.ResourceItem name="studios" />
                <Menu.ResourceItem name="person" />
            </Menu>
        )
    } else if (studiosList.total > 0 && peopleList.total > 0 && couplesList.total === 0) {
        return (
            <Menu>
                <Menu.Item
                    to="/"
                    primaryText="Dashboard"
                    leftIcon={<DashboardIcon />}
                />
                <Menu.ResourceItem name="studios" />
                <Menu.ResourceItem name="person" />
                <Menu.ResourceItem name="couples" />
            </Menu>
        )
    }
    return (
        <Menu>
            <Menu.Item
                to="/"
                primaryText="Dashboard"
                leftIcon={<DashboardIcon />}
            />
            <Menu.ResourceItems />
        </Menu>)
    // }
}