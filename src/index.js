import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.css";
import App from "./App";
import AuthorizationComponent from "./components/Authorization/AuthorizationComponent";
import RegistrationComponent from "./components/Authorization/RegistrationComponent";
import PrivateRoute from "./components/PrivateRoute";

const rootElement = document.getElementById("root");
console.log(localStorage.getItem("user"))
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PrivateRoute/>}>
                <Route path="/" element={<App/>}/>
            </Route>
            <Route path="/sign-in" element={<AuthorizationComponent/>}/>
            <Route path="/sign-up" element={<RegistrationComponent/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    rootElement
);

