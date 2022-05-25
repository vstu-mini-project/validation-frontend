import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AuthorisationService from "../../services/Autorization/AuthorisationService";
import Copyright from "../Footer/Copyright";
import {useNavigate} from "react-router-dom";

const theme = createTheme();


// Заменили функцию на класс
export default function SignIn() {

    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        // Достаем данные из формы
        const data = new FormData(event.currentTarget)
        // Здесь должна быть валидация формы и проверка, что форма валидна
        if (true) {
            // Отправляем запрос на бэк через сервис
            AuthorisationService.login(data.get('username'), data.get('password')).then(
                () => {
                    /*
                     Выводим результат в консоль.
                     Скорее всего здесь надо менять страницу и тп.
                    */
                    console.log(localStorage.getItem('user'))
                    navigate("/")
                    // window.location.reload();
                },
                error => {
                    console.log(error)
                }
            );
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Вход
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Почта"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Вход
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/" variant="body2">
                                    Назад
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Зарегистрироваться"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}