import React from "react";
import "./DocumentComponent.css"

class DocumentComponent extends React.Component {

    render() {
        return (
            <section className="documentList">
                <table>
                    <caption><h2 className="documentList--title">Документы</h2></caption>
                    <tr>
                        <td>Иконка</td>
                        <td>Название документа</td>
                        <td>Кнопка 1</td>
                        <td>Кнопка 2</td>
                    </tr>
                </table>
            </section>
        )
    }

}

export default DocumentComponent;