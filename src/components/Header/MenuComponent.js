import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import {Home, Badge, LocalActivity, Mail, Settings} from '@mui/icons-material';
import Link from "@mui/material/Link";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Главная"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Badge/>
            </ListItemIcon>
            <ListItemText primary="Документы"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LocalActivity/>
            </ListItemIcon>
            <ListItemText primary="Мероприятия"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Mail/>
            </ListItemIcon>
            <ListItemText primary="Почта"/>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton component={Link} href={"/sign-in"}>
            <ListItemIcon>
                <LoginIcon/>
            </ListItemIcon>
            <ListItemText primary="Авторизация"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Settings/>
            </ListItemIcon>
            <ListItemText primary="Настройки"/>
        </ListItemButton>
    </React.Fragment>
);
