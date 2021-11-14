
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
                ]
            }
        ]
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
        // axios.get(`${process.env.REACT_APP_API_PORT}/students`)
        client({
            method: 'get',
            url: `/users/roles/student`,
        })
            .then(res => {
                const data = res.data.users
                console.log("D", res)
                this.setState({ data: data })
            }).catch(err => {
                console.log(err)
                console.log("Error")
            })
    }
    render() {
        return (
            <>
                {
                    this.orderList().map((student, key) => {
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

                                <td style={{ paddingLeft: '1.6rem' }}>
                                    <Input style={{ width: '4em' }} />
                                </td>


                                <td style={{ paddingLeft: '1.6rem' }}>
                                    <Input />
                                </td>

                                <td style={{ paddingLeft: '1.6rem' }}>
                                    <Button>Submit</Button>
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
