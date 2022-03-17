# JWT
## О технологии
- https://www.youtube.com/watch?v=fN25fMQZ2v0&t=445s - На русском про JWT
- https://www.youtube.com/watch?v=YGuNVadu9w4&t=2916s - Пример React + Spring на англ.
 
Статьи React + Spring JWT пример
- https://www.bezkoder.com/spring-boot-react-jwt-auth/ - Общий пример
- https://www.bezkoder.com/react-jwt-auth/ - С кодом

## API
- localhost:8080/api/v1/auth/login 
- localhost:8080/api/v1/auth/register

Запустить Spring
`http://localhost:8080/swagger-ui/index.html`
## Цели
### Логин
Необходимо сделать авторизацию по логину и паролю. Принимать JWT токен
Ответ:
- username
- token

Data Service
- Bearer_токен

function authHeader
- Authorization
### Регистрация
Исправить регистрацию, поля как в БД:
- Логин
- Email
- Пароль
- Повтор пароля 

Обеспечить валидацию полей
- Логин - не менее 6 символов, только буквы и цифры
- Пароль - не менее 8 символов, минимум 1 буква и цифра, можно использовать спецсимволы: # ! " $ ( ) и тд.
- Повтор пароля - должен совпадать с предыдущим
- Email - проверять на наличие @
