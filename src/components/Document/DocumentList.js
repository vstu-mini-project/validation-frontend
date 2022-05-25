import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function DocumentList(props) {

    const {docs} = props

    if (!docs || docs.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <TableContainer component={Paper} sx={{maxWidth: '1360px'}}>
                <Table sx={{tableLayout: 'auto'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"} sx={{width: 100}}>ID</TableCell>
                            <TableCell align={"center"} sx={{width: 150}}>Серия/Номер</TableCell>
                            <TableCell align={"center"} sx={{width: 300}}>ФИО</TableCell>
                            <TableCell align={"center"} sx={{width: 100}}>Пол</TableCell>
                            <TableCell align={"center"} sx={{width: 150}}>Дата рождения</TableCell>
                            <TableCell align={"center"} sx={{width: 150}}>Место рождения</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            docs.map((document) => {
                                let date = new Date(document.birthDate[0],document.birthDate[1],document.birthDate[2])
                                const monthNameLong = date.toLocaleString("ru-RU", { month: "long" });
                                return (
                                    <TableRow key={document.id}>
                                        <TableCell align={"center"}>{document.id}</TableCell>
                                        <TableCell align={"center"}>{document.serial} {document.number}</TableCell>
                                        <TableCell align={"center"}>{document.lastName} {document.firstName} {document.middleName}</TableCell>
                                        <TableCell align={"center"}>{document.gender}</TableCell>
                                        <TableCell align={"center"}>{document.birthDate[2]} {monthNameLong} {document.birthDate[0]}</TableCell>
                                        <TableCell align={"center"}>{document.birthPlace}</TableCell>
                                    </TableRow>
                                )}
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DocumentList