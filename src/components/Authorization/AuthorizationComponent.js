import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthorisationService from "../../services/Student/Autorization/AuthorisationService";
import Copyright from "../Footer/Copyright";

const theme = createTheme();

// Заменили функцию на класс
class SignIn extends Component{
    // Сделали базовую структуру (похоже бесполезно)
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

  handleSubmit(event) {
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
          // this.props.history.push("/profile");
          // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
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
                  <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{mt: 1}}>
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
                      <FormControlLabel
                          control={<Checkbox value="remember" color="primary"/>}
                          label="Запомнить"
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
                              <Link href="#" variant="body2">
                                  Забыли пароль?
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
        )}
}

export default SignIn;