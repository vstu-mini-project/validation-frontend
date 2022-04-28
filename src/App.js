import * as React from "react";
import Link from "@mui/material/Link";

export default function App() {
    return (
        <section>
            <h1>App page</h1>
            <ul>
                <li><Link href="/sign-in">Логин</Link></li>
                <li><Link href="/sign-up">Регистрация</Link></li>
            </ul>
        </section>
    );
}
