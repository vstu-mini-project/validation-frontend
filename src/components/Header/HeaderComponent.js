import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './MenuComponent';
import { Menu } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(

    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(7),
                },
            }),
        },
    }),
);

function HeaderComponent() {

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    let MenuIcon;

    if (open) {
        MenuIcon = <ChevronLeftIcon />
    } else {
        MenuIcon = <Menu />
    }

    return (
        <Drawer variant="permanent" anchor="left" open={open}
            sx={{
                marginRight: 8
            }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: [1],
                    py: 5
                }}
            >
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Student" src="/assets/images/profile.png" />
                </IconButton>
            </Toolbar>
            <Divider />
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    {MenuIcon}
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
            </List>
            <Divider sx={{ my: 1 }} />
            <List component="nav" sx={{
                pb: 5,
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                alignContent: 'end',
                flexWrap: 'wrap'
            }}>
                {secondaryListItems}
            </List>
        </Drawer>
    )
}



export default HeaderComponent;