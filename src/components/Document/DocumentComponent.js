import React, {useEffect, useState} from "react";
import DocumentService from "../../services/Document/DocumentService";
import "./DocumentComponent.css"
import DocumentList from "./DocumentList";
import LoadingData from "./DocumentLoading";

function DocumentComponent() {

    const DataLoading = LoadingData(DocumentList);

    const [appState, setAppState] = useState({
        loading: false,
        docs: null
    });

    useEffect(() => {
        setAppState({loading: true, docs: null})
        DocumentService.getDocuments()
            .then((resp) => {
                const respDocs = resp.data;
                setAppState({
                    loading: false,
                    docs: respDocs
                });
            });
    }, [setAppState]);


    return (
        <section className="documentList">
            <h2 className="documentList--title">Документы</h2>
            <DataLoading isLoading={appState.loading} docs={appState.docs}/>
        </section>
    )
}

export default DocumentComponent;