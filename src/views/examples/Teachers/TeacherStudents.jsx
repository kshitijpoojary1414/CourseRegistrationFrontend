
import React from "react";
import client from "../../../apis/client";


// reactstrap components
import {
    Media,
    Input
    // UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
import Button from "reactstrap/lib/Button";
// core components

class TeacherStudents extends React.Component {
    state = {
        students: null,
        currentCourseID: null,
        data: [
            {
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                avatar: '',
                role: '',
                school: '',
                created_at: '',
                courses: [
                    {
                        schedule: [
                            {
                                days: [],
                                startDate: '',
                                endDate: '',
                                startTime: '',
                                endTime: ''
                            }
                        ],
                        teachers: [
                            {
                                first_name: '',
                                last_name: '',
                                avatar: '',
                                id: ''
                            }
                        ],
                        registration: {
                            registered: 0,
                            limit: 0
                        },
                        id: '',
                        name: '',
                        subject: ''
                    }
                ],

            }
        ]
    }

    submitGrade = (course_id, user_id, grades, comments) => {
        console.log(course_id, user_id, grades, comments);
        client({
            method: 'post',
            url: '/grades',
            data: {
                course_id,
                student_id: user_id,
                grades,
                comments
            }
        }).then(data => {

            //now set state for only that student...


            // this.setState({
            //     ...this.state,
            //     course_id: course_id,
            //     student_id: user_id,
            //     grades: grades,
            //     comments: comments,

            // })
            console.log('Submitted grade ... ', data);

        }).catch(error => {
            alert("Some error occured. Please refresh the page")
        })

    }

    handleSubmitGrade = (e) => {
        e.preventDefault();
        console.log('Clicked user - ', e.target.id);
        console.log('Course is - ', this.state.currentCourseID);
        const student = this.state.students.find(student => student.user_id == e.target.id)

        // var grade = document.getElementById(`grade-${e.target.id}`).value;
        // var comment = document.getElementById(`comment-${e.target.id}`).value;
        console.log('Grades and Comments - ', student);
        this.submitGrade(this.state.currentCourseID, student.user_id, student.grades, student.comments);

    }

    handleChangeGrade = (e) => {
        var studentID = e.target.className.split(/(\s+)/)[0];
        console.log(studentID);

        var value = e.target.value;
        // console.log(e.target.value, e.target.className);
        let newStudent;
        let newIndex;
        console.log(this.state.students);
        this.state.students.map((student, index) => {

            if (student.id === studentID) {
                newStudent = student;
                newStudent.grades = value
                newIndex = index;
            }


        });
        let updatedStudents = this.state.students;
        console.log("update students are here", updatedStudents, newIndex);

        updatedStudents[newIndex] = newStudent;
        this.setState({
            ...this.state,
            students: updatedStudents
        });
    }

    handleChangeComment = (e) => {
        var studentID = e.target.className.split(/(\s+)/)[0];
        console.log(studentID);

        var value = e.target.value;
        // console.log(e.target.value, e.target.className);
        let newStudent;
        let newIndex;
        console.log(this.state.students);
        this.state.students.map((student, index) => {

            if (student.id === studentID) {
                newStudent = student;
                newStudent.comments = value
                newIndex = index;
            }


        });
        console.log(newStudent, newIndex);
        let updatedStudents = this.state.students;
        updatedStudents[newIndex] = newStudent;
        this.setState(updatedStudents);
    }


    orderList = () => {
        let orderedList = this.state.data.sort((a, b) => {
            var studentA = a.last_name.toUpperCase()
            var studentB = b.last_name.toUpperCase()
            return studentA < studentB ? -1 : studentA > studentB ? 1 : 0
        })
        return orderedList
    }

    componentDidMount() {
        console.log('props in teacher students ', this.props);
        // axios.get(`${process.env.REACT_APP_API_PORT}/students`)
        client({
            method: 'get',
            url: `/users/roles/student`,
        })
            .then(res => {
                const data = res.data.users

                this.setState({ data: data })
            }).catch(err => {
                console.log(err)
                console.log("Error")
            })
    }
    componentDidUpdate() {
        console.log('props in teacher students ', this.props);
        if (this.props.students.length > 0) {

            if (this.state.students === null) {
                this.setState({
                    students: this.props.students,
                    currentCourseID: this.props.students[0].course_id
                })
            }
        }





    }
    render() {
        return (
            <>
                {this.state.students !== null &&
                    this.state.students.map((student, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <Media className="align-items-center">
                                        <Link
                                            to={`student/${student.id}`}
                                            className="avatar rounded-circle mr-3"
                                        >
                                            <img
                                                src={require("../../../assets/img/theme/team-4-800x800.jpg")} alt="avatar"
                                            />
                                        </Link>
                                        <Media>
                                            <span className="mb-0 text-sm">
                                                <Link to={`student/${student.id}`}>
                                                    {student.first_name} {student.last_name}
                                                </Link>
                                            </span>
                                        </Media>
                                    </Media>
                                </td>

                                {/* Grade */}
                                <td style={{ paddingLeft: '1.6rem' }}>

                                    <Input style={{ width: '4em' }} value={student.grades} id={`grade-${student.id}`}
                                        onChange={(e, student) => this.handleChangeGrade(e, student)} className={student.id} />
                                </td>

                                {/* Comment */}
                                <td style={{ paddingLeft: '1.6rem' }}>

                                    <Input value={student.comments} id={`comment-${student.id}`} className={student.id}
                                        onChange={this.handleChangeComment} />
                                </td>

                                <td style={{ paddingLeft: '1.6rem' }}>
                                    <Button id={student.user_id} onClick={(e) => this.handleSubmitGrade(e)}>Submit</Button>
                                </td>

                                <td className="text-left">
                                    <Button>Drop</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </>
        );
    }
}

export default TeacherStudents;
