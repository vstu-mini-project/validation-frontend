import React from "react";
import StudentCardComponent from "./StudentCard/StudentCardComponent";
import DocumentComponent from "../Document/DocumentComponent";
import StudentComponent from "../Student/StudentComponent";
import "./PersonalPageComponent.css"

class PersonalPageComponent extends React.Component {
    render() {
        return (
            <section className="personalPage">
                <StudentCardComponent/>
                <DocumentComponent/>
                <StudentComponent/>
            </section>
        )
    }
}

export default PersonalPageComponent;