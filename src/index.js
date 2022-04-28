import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.css";
import App from "./App";
import AuthorizationComponent from "./components/Authorization/AuthorizationComponent";
import RegistrationComponent from "./components/Authorization/RegistrationComponent";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
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

