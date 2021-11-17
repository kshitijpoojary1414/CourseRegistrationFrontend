import React from "react";
import client from "../../../apis/client";
import CircleProgressBar from '../CircularProgressBar';

// reactstrap components
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    // Media,
    Progress,
    // UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom"

// core components

class CoursesTable extends React.Component {
    state = {
        data: [
            {
                schedule: {
                    days: []
                },
                registration: {
                    registered: 0,
                    limit: 0
                },
                students: [{}],
                teachers: [],
                hasRegistered: false
            }
        ],
        courses: null
    }
    orderList = () => {
        let orderedList = this.state.data.sort((a, b) => {
            var nameA = a.name.toUpperCase()
            var nameB = b.name.toUpperCase()
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
        })
        return orderedList
    }
    componentDidMount() {

        // axios.get(`${process.env.REACT_APP_API_PORT}/courses`)
        client({
            method: 'get',
            url: '/courses',
        }).then(res => {
            const data = res.data;
            console.log("og data", data)
            this.setState({ data: data })
        }).catch(err => {
            console.log("Error - ", err)
        })
    }

    fetchCoursesByMajor = (major_id) => {

    }
    componentDidUpdate = () => {

        console.log('Props internal - ', this.props);
    }

    renderRegistration = (course) => {
        // console.log('Course in renderreg is ', course);
        // console.log('reg % is ', Math.round(course.registration?.registered / course.registration.limit * 100));
        if (this.props.location.pathname === "/teacher/courses") {
            return (
                <td>
                    <Link to={`course/${course.id}`}>
                        <div className="d-flex align-items-center">
                            <div>
                                <CircleProgressBar percent={Math.round(course.registration?.registered / course.registration.limit * 100)} />
                            </div>
                        </div>
                    </Link>
                </td>
            )
        }
    }

    render() {
        console.log(this.orderList())
        console.log(this.state.data[0]);
        console.log(this.props.location.pathname);
        //console.log("Has registered", this.state.data[0].hasRegistered)
        return (
            <>
                {
                    this.props.courses?.map((course, key) =>
                        <tr key={key}>
                            <td>
                                <Link to={`course/${course.id}`}>
                                    {course.name}
                                </Link>
                            </td>

                            <td>
                                <Link to={`course/${course.id}`}>
                                    {course.subject}
                                </Link>
                            </td>

                            {this.props.location.pathname !== '/teacher/courses' &&
                                <td>
                                    {
                                        course.teachers.map((teacher, key) => {
                                            return (
                                                <div className="avatar-group" key={key}>
                                                    <Link to={`teacher/${teacher.id}`}>
                                                        <span className="avatar avatar-sm" >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </span>
                                                        <span>{teacher.first_name} {teacher.last_name}</span>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }

                                </td>
                            }

                            {
                                this.renderRegistration(course)
                            }

                            <td>
                                <Link to={`course/${course.id}`}>
                                    <Badge color="" className="badge-dot mr-4">

                                        {
                                            course.schedule.days.map((day, i) => {
                                                return (
                                                    <span style={{ display: "block" }} className="pb-2 text-left">
                                                        {day}s: {course.schedule.startTime} - {course.schedule.endTime}
                                                    </span>
                                                )
                                            })
                                        }
                                    </Badge>
                                </Link>
                            </td>



                        </tr>
                    )
                }
                {/* {
                    this.orderList().map((course, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <Link to={`course/${course.id}`}>
                                        {course.name}
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`course/${course.id}`}>
                                        {course.subject}
                                    </Link>
                                </td>

                                {this.props.location.pathname !== '/teacher/courses' &&
                                    <td>
                                        {
                                            course.teachers.map((teacher, key) => {
                                                return (
                                                    <div className="avatar-group" key={key}>
                                                        <Link to={`teacher/${teacher.id}`}>
                                                            <span className="avatar avatar-sm" >
                                                                <img
                                                                    alt="..."
                                                                    className="rounded-circle"
                                                                    src={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                                                />
                                                            </span>
                                                            <span>{teacher.first_name} {teacher.last_name}</span>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }

                                    </td>
                                }

                                {
                                    this.renderRegistration(course)
                                }

                                <td>
                                    <Link to={`course/${course.id}`}>
                                        <Badge color="" className="badge-dot mr-4">

                                            {
                                                course.schedule.days.map((day, i) => {
                                                    return (
                                                        <span style={{ display: "block" }} className="pb-2 text-left">
                                                            {day}s: {course.schedule.startTime} - {course.schedule.endTime}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </Badge>
                                    </Link>
                                </td>



                            </tr>
                        )
                    })
                } */}
            </>
        );
    }
}

export default CoursesTable;
