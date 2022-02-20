import React from "react";
import "./StudentCardComponent.css"

class StudentCardComponent extends React.Component {
    render() {
        return (
                <div className="studentCard">
                    <h2 className="studentCard--title">Студенческий билет</h2>
                    <div className="flexContainer">
                        <div className="studentImage--container">
                            <img className="image studentImage"/>
                        </div>
                        <div className="studentInfo">
                            <div className="personalInfo">
                                <p><strong>ФИО:</strong> Харитонов Руслан Германнович</p>
                                <p><strong>Факультет:</strong> ФИТКБ</p>
                                <p><strong>Форма обучения:</strong> очная</p>
                            </div>
                            <div className="cardInfo">
                                <p><strong>Дата выдачи:</strong> 02.09.1191</p>
                                <p><strong>Действителен по:</strong> 31.12.1192</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default StudentCardComponent;