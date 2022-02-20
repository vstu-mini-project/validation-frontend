import React from "react";
import StudentService from "../../services/Student/StudentService";

class StudentComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            students:[]
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((responce) => {
            this.setState({ students: responce.data })
        });
    }

    render (){
        return (
            <div>
                <h1>Students List</h1>
                <table>
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Description</td>
                        </tr>
                    </thead>

                    <tbody>
                         {
                             this.state.students.map(
                                 student =>
                                 <tr key = {student.id}>
                                     <td> {student.id} </td>
                                     <td> {student.firstName} </td>
                                     <td> {student.lastName} </td>
                                     <td> {student.description} </td>
                                 </tr>
                             )
                         }
                    </tbody>
                </table>                
            </div>
        )
    }
}

export default StudentComponent;