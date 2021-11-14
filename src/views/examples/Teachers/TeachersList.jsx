/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import client from "../../../apis/client";


// reactstrap components
import {
    Badge,
    Media
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'

class TeachersTable extends React.Component {
    state = {
        teachers: [
            {
                students: [{}],
                courses: [
                    {
                        schedule: [
                            {
                                days: [],
                            }
                        ],
                        registration: {},
                    }
                ]
            }
        ]
    }
    componentDidMount() {
        // axios.get(`${process.env.REACT_APP_API_PORT}/users/teacher`)
        client({
            method: 'get',
            url: '/users/roles/teacher',
        })
            .then(res => {
                const teachers = res.data.users
                console.log(teachers)
                this.setState({ teachers })
            }).catch(err => {
                console.log("Error - ", err)
            })
    }
    orderList = () => {
        let orderedList = this.state.teachers.sort((a, b) => {
            var teacherA = a.last_name.toUpperCase()
            var teacherB = b.last_name.toUpperCase()
            return teacherA < teacherB ? -1 : teacherA > teacherB ? 1 : 0
        })
        return orderedList
    }
    // renderStudents = (teacher) => {
    //     console.log(teacher.students);



    //     if (teacher.students) {
    //         return (
    //             <td>
    //                 <div>
    //                     <Link to={`teacher/${teacher.id}`}>
    //                         {teacher.students.length} students
    //                     </Link>
    //                 </div>
    //             </td>
    //         )
    //     } else if (this.props.location.pathname === '/admin/teachers') {
    //         return (
    //             <td>
    //                 <div>
    //                     <Link to={`teacher/${teacher.id}`}>
    //                         0 students
    //                     </Link>
    //                 </div>
    //             </td>
    //         )
    //     }
    // }
    render() {

        return (
            <>
                {
                    this.orderList().map((teacher, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <Media className="align-items-center">
                                        <Link
                                            to={`teacher/${teacher.id}`}
                                            className="avatar rounded-circle mr-3"
                                        >
                                            <img
                                                alt="..."
                                                src={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                            />
                                        </Link>
                                        <Media>
                                            <span className="mb-0 text-sm">

                                                <Link to={this.props.location.pathname === '/teacher/teachers' ? `profile/${teacher.id}` : `teacher/${teacher.id}`}>
                                                    {teacher.first_name} {teacher.last_name}
                                                </Link>
                                            </span>
                                        </Media>
                                    </Media>
                                </td>
                                <td>
                                    {
                                        teacher.courses?.map((course, key) => {
                                            return (
                                                <div key={key}>
                                                    <Link to={`course/${course.id}`}>
                                                        {course.name}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        teacher.courses?.map((course, key) => {
                                            return (
                                                <div key={key}>
                                                    <Link to={`course/${course.id}`} onClick={e => { e.stopPropagation() }}>
                                                        {course.subject}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                {/* {
                                    this.renderStudents(teacher)
                                } */}
                                {/* <td>
									<Badge color="" className="badge-dot mr-4">
										<i className="bg-warning" />
										pending
									</Badge>
								</td> */}
                            </tr>
                        )
                    })
                }
            </>
        );
    }
}

export default TeachersTable;
