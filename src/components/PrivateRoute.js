import React, {useEffect, useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import DocumentService from "../services/Document/DocumentService";

const PrivateRoute = () => {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        function validate() {
            DocumentService.getDocuments()
                .then((resp) => {
                    setAuth(true)
                    console.log(auth)
                }).catch((e) => {
                    setAuth(false)
                    console.log(auth)
                }
            )
            console.log("end " + auth)
        }
        validate()
    }, [auth])

    return ({auth} ? <Outlet/> : <Navigate to="/sign-in"/>);
}

export default PrivateRoute;