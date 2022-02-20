import React from "react";
import "./HeaderComponent.css";

class HeaderComponent extends React.Component {

    render() {
        return (
            <header className="mainHeader">
                <div className="profileLogo-container">
                    <img className="image image--rounded profileLogo" />
                </div>
                <nav className="mainMenu">
                    <ul>
                        <li className="menuItem"><a href="#"><div className="image--icon icon--home" ></div></a></li>
                        <li className="menuItem active"><a href="#"><div className="image--icon icon--document active" ></div></a></li>
                        <li className="menuItem"><a href="#"><div className="image--icon icon--ticket" ></div></a></li>
                        <li className="menuItem"><a href="#"><div className="image--icon icon--mail" ></div></a></li>
                        <li className="menuItem"><a href="#"><div className="image--icon icon--settings" ></div></a></li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default HeaderComponent;