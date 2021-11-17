
import React from "react";
import client from "../../../apis/client";


// reactstrap components
import {
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Col,
    Button,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Dropdown
} from "reactstrap";
// core components
import Header from "../../../components/Headers/Header.jsx";
import TableHead from "../TableHead.jsx"


//Teachers Tables here.
import TeacherCoursesTable from "../Teachers/TeachersCoursesTable";
import TeachersTeachersTable from "../Teachers/TeachersList";
import TeachersStudentsTable from "../Teachers/TeacherStudents";

class TeacherTables extends React.Component {
    state = {
        dropdownOpen: false,
        // for open/close
        dropdownMajor: false,
        dropdownCourse: false,
        departmentName: "",
        majorName: "",
        courseName: "",
        coursesByTeacher: [],
        studentsGrades: [],
        courses: [
            {
                img: {
                    href: "#pablo",
                    alt: "...",
                    src: require("../../../assets/img/theme/bootstrap.jpg")
                },
                name: "English 1",
                subject: "English",
                shortDescription: "First level of English.  Prepares students for English 2.",
                fullDescription: "",
                teachers: [
                    {
                        name: "Zach",
                        href: "#pablo",
                        id: "tooltip742438047",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-1-800x800.jpg")
                        }
                    }
                ],
                registration: {
                    limit: 20,
                    registered: 12
                },
                schedule: "pending",
                price: 350,
            },
            {
                img: {
                    href: "#pablo",
                    alt: "...",
                    src: require("../../../assets/img/theme/angular.jpg")
                },
                name: "Spanish 1",
                subject: "Spanish",
                shortDescription: "First level of Spanish.  Prepares students for Spanish 2",
                fullDescription: "",
                teachers: [
                    {
                        name: "Aaron",
                        href: "#pablo",
                        id: "tooltip804044742",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-3-800x800.jpg")
                        }
                    }
                ],
                registration: {
                    limit: 20,
                    registered: 5
                },
                schedule: "",
                price: 300,
            },
            {
                img: {
                    href: "#pablo",
                    alt: "...",
                    src: require("../../../assets/img/theme/vue.jpg")
                },
                name: "English 3",
                subject: "English",
                shortDescription: "Third level of English.  Prepares student for intermediate level English.",
                fullDescription: "",
                teachers: [
                    {
                        name: "Mary",
                        href: "#pablo",
                        id: "tooltip941738690",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-2-800x800.jpg")
                        }
                    }
                ],
                registration: {
                    limit: 20,
                    registered: 15
                },
                schedule: "",
                price: 500,
            }
        ],
        students: [
            {
                name: "John",
                href: "#pablo",
                id: "tooltip804044742",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-3-800x800.jpg")
                },
                teachers: [
                    {
                        name: "The Jesus",
                        href: "#pablo",
                        id: "tooltip804044742",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-3-800x800.jpg")
                        },
                        courses: ["Bowling", "Throwing Strikes", "Fashion Style"],
                        students: ["The Dude", "Walter", "Donnie"]
                    },
                    {
                        name: "Splinter",
                        href: "#pablo",
                        id: "tooltip742438047",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-2-800x800.jpg")
                        },
                        courses: ["Ninjitsu", "Skateboarding", "Meditation"],
                        students: ["Leonardo", "Donatello", "Michaelangelo", "Raphael"]
                    }
                ],
                courses: [
                    "Spanish 1",
                    "Spanish 2"
                ]
            },
            {
                name: "Chris",
                href: "#pablo",
                id: "tooltip941738690",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-1-800x800.jpg")
                },
                teachers: [
                    {
                        name: "Ali",
                        href: "#pablo",
                        id: "tooltip941738690",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-1-800x800.jpg")
                        },
                        courses: ["One Round Knockouts", "12 Punch combination", "Being The Greatest"],
                        students: ["Tyson", "Mayweather", "Butterbean", "Holyfield"]
                    }
                ],
                courses: [
                    "English 1",
                    "English 2"
                ]
            },
            {
                name: "Sarah",
                href: "#pablo",
                id: "tooltip742438047",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-2-800x800.jpg")
                },
                teachers: [
                    {
                        name: "Splinter",
                        href: "#pablo",
                        id: "tooltip742438047",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-2-800x800.jpg")
                        },
                        courses: ["Ninjitsu", "Skateboarding", "Meditation"],
                        students: ["Leonardo", "Donatello", "Michaelangelo", "Raphael"]
                    },
                    {
                        name: "Ali",
                        href: "#pablo",
                        id: "tooltip941738690",
                        img: {
                            alt: "...",
                            src: require("../../../assets/img/theme/team-1-800x800.jpg")
                        },
                        courses: ["One Round Knockouts", "12 Punch combination", "Being The Greatest"],
                        students: ["Tyson", "Mayweather", "Butterbean", "Holyfield"]
                    }
                ],
                courses: [
                    "Mandarin 3"
                ]
            }
        ],
        teachers: [
            {
                name: "The Jesus",
                href: "#pablo",
                id: "tooltip804044742",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-3-800x800.jpg")
                },
                courses: [
                    {
                        name: "Bowling",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "Throwing Strikes",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "Fashion Style",
                        subject: "Fashion",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ],
                students: ["The Dude", "Walter", "Donnie"]
            },
            {
                name: "Splinter",
                href: "#pablo",
                id: "tooltip742438047",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-2-800x800.jpg")
                },
                courses: [
                    {
                        name: "Ninjitsu",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "Skateboarding",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "Meditation",
                        subject: "Health/Wellbeing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ],
                students: ["Leonardo", "Donatello", "Michaelangelo", "Raphael"]
            },
            {
                name: "Ali",
                href: "#pablo",
                id: "tooltip941738690",
                img: {
                    alt: "...",
                    src: require("../../../assets/img/theme/team-1-800x800.jpg")
                },
                courses: [
                    {
                        name: "One Round Knockouts",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "12 Punch combination",
                        subject: "Sports",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        name: "Being The Greatest",
                        subject: "Health/Wellbeing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ],
                students: ["Tyson", "Mayweather", "Butterbean", "Holyfield"]
            }
        ],
        departments: [],
        majors: [],
        courses: [],
        selectedDepartment: "",
        selectedMajor: "",
        selectedCourse: "",
        teachersForMajor: [],
        coursesTableData: [
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
        ]
    }
    componentDidUpdate = () => {
        console.log('current course name is - ', this.state.courseName);
    }
    componentWillMount() {
        this.fetchCoursesByATeacher();
        this.fetchDepartments()

    }
    renderCardHeader = () => {
        let headerText = this.props.location.pathname.match("[^/]+$")[0]
        headerText = headerText[0].toUpperCase() + headerText.substring(1)
        return headerText
    }
    makeTableHeadProps = () => {
        if (this.props.location.pathname === "/teacher/courses") {
            return ["Course", "Subject", "Registration", "Schedule"]
        } else if (this.props.location.pathname === "/teacher/teachers") {
            return ["Teacher", "Course", "Subject", "Registration", "Schedule"]
        } else if (this.props.location.pathname === "/teacher/students") {
            return ["Student", "Grades", "Comments", "Submit Marks", "Action"]
        }
    }
    renderTableData = () => {
        if (this.props.location.pathname === "/teacher/students") {
            return <TeachersStudentsTable students={this.state.studentsGrades}  {...this.props} />
        }
        else if (this.props.location.pathname === "/teacher/courses") {
            return <TeacherCoursesTable courses={this.state.courses}  {...this.props} />
        }
        else if (this.props.location.pathname === "/teacher/teachers") {
            return <TeachersTeachersTable teachersForMajor={this.state.teachersForMajor}  {...this.props} />
        }
    }


    toggleDropDownforDept = (e) => {
        e.preventDefault()
        if (!this.state.dropdownOpen) {
            this.setState({
                ...this.state,
                dropdownOpen: !this.state.dropdownOpen
            })
        }

    }
    toggleDropDownforMajor = (e) => {
        e.preventDefault()
        if (!this.state.dropdownMajor) {
            this.setState({
                ...this.state,
                dropdownMajor: !this.state.dropdownMajor
            })
        }

    }
    toggleDropDownforCourse = (e) => {
        e.preventDefault()
        console.log('dropdown value - ', this.state.dropdownCourse)

        this.setState({
            ...this.state,
            dropdownCourse: !this.state.dropdownCourse
        })


    }

    selectItem = (e) => {
        console.log(e)
    }


    fetchDepartments = () => {
        client({
            method: 'get',
            url: '/departments'
        }).then(data => {
            this.setState({
                ...this.state,
                departments: data.data,
                departmentName: data.data[0].name,
                selectedDepartment: data.data[0]
            })
            this.fetchMajors(data.data[0].id)
        }).catch(error => {
            alert("Some error occured. Please refresh the page")
        })
    }

    fetchMajors(department_id) {
        client({
            method: 'get',
            url: '/majors/department',
            params: {
                department_id: department_id
            }
        }).then(res => {
            const data = res.data;
            console.log("OG", data)
            this.setState({
                ...this.state,
                majors: data,
                majorName: data[0].major_code,
                selectedMajor: data[0],
            })
            console.log('selectedMajor ', this.state.selectedMajor);
            this.fetchCourses(data[0].id);
            //this.fetchCoursesByATeacher(data[0].id)
            this.fetchTeachersForMajor(data[0].id);
        }).catch(err => {
            console.log("Error", err)
        })
    }

    fetchTeachersForMajor = (major_id) => {
        client({
            method: 'get',
            url: '/coursesByMajor',
            params: {
                major_id: major_id
            }
        }).then(res => {
            const data = res.data;
            console.log("Teachers for major data", data)
            this.setState({
                ...this.state,
                teachersForMajor: data
            })
        }).catch(err => {
            console.log("Error")
        })
    }

    //need to get courses of a logged in teacher...
    fetchCoursesByATeacher = (teacher_id) => {
        client({
            method: 'get',
            url: '/teacher',
            params: {
                teacher_id: '6098bcb9-26e6-479d-8ebb-89edfbe2e395'
            }
        }).then(res => {
            const data = res.data;
            console.log("Teachers for courses data", data)
            this.setState({
                ...this.state,
                coursesByTeacher: data,
                courseName: data[0].name,
            })
            //callling the fetch student course
            console.log('Fetch course students- ', data);
            this.fetchStudentsByACourseWithGrades(data[0].id);
        }).catch(err => {
            console.log("Error")
        })
    }

    fetchStudentsByACourseWithGrades = (course_id) => {

        client({
            method: 'get',
            url: '/grades',
            params: {
                course_id,
            }
        }).then(res => {
            const data = res.data;

            this.setState({
                ...this.state,
                studentsGrades: data
            })
            console.log("Students with grades", this.state.studentsGrades);
        }).catch(err => {
            // console.log('Called this shit not here')
            console.log("Error - fetch students grades ", err)
        })
    }

    fetchCourses = (major_id) => {
        client({
            method: 'get',
            url: '/courses',
            params: {
                major_id: major_id
            }
        }).then(res => {
            const data = res.data;

            this.setState({
                ...this.state,
                courses: data,
                coursesTableData: data,
                //courseName: data[0].name,
                selectedCourse: data[0]
            })
            console.log("courses data for a major", this.state.courses);
        }).catch(err => {
            console.log("Error")
        })
    }

    // fetchTeachersForCourse = (course_id) => {
    //     client({
    //         method: 'get',
    //         url: '/courses',
    //         params: {
    //             course_id: course_id
    //         }
    //     }).then(res => {
    //         const data = res.data;
    //         console.log("og data", data)
    //         this.setState({
    //             ...this.state,
    //             coursesTableData: data
    //         })
    //     }).catch(err => {
    //         console.log("Error")
    //     })
    // }



    selectDropdown = (e, department) => {

        this.setState({
            ...this.state,
            dropdownOpen: false,
            selectedDepartment: department,
            departmentName: department.name
        })

        this.fetchMajors(department.id)
    }

    selectDropdownForMajor = (e, major) => {
        console.log("Selected major", major)
        this.setState({
            ...this.state,
            dropdownMajor: false,
            selectedMajor: major.id,
            major: major.name,
            majorName: major.major_code
        })

        this.fetchCourses(major.id)
        this.fetchTeachersForMajor(major.id);
    }
    selectDropdownForCourse = (e, course) => {
        console.log("Selected course", course)
        this.setState({
            ...this.state,
            dropdownCourse: false,
            selectedCourse: course,
            courseName: course.name,

        })
        this.fetchStudentsByACourseWithGrades(course.id);

    }

    renderDropDown = () => {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={(e) => this.toggleDropDownforDept(e)}>
                <DropdownToggle caret>
                    {this.state.departmentName}
                </DropdownToggle>
                <DropdownMenu right>
                    {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
                    {
                        this.state.departments.map(
                            department => {
                                return (<DropdownItem id={department.name} ><div onClick={(e) => this.selectDropdown(e, department)}> {department.name}</div> </DropdownItem>)
                            }
                        )
                    }

                </DropdownMenu>
            </Dropdown>
        )
    }
    render() {
        return (
            <>{console.log("COURSES", this.props.courses)}
                <Header />

                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <div className="tableHeader" style={{ display: "flex", justifyContent: "space-between" }}>

                                        <h3 className="mb-0">{this.renderCardHeader()}</h3>
                                        {/* {
                                            this.renderAddCourse()
                                        } */}
                                        <div>
                                            {/* {this.renderDropDown()} */}
                                            {this.props.location.pathname !== '/teacher/students' &&
                                                <Dropdown isOpen={this.state.dropdownOpen} toggle={(e) => this.toggleDropDownforDept(e)}>
                                                    {/* <DropdownToggle caret>
													{this.state.majorName}
												</DropdownToggle> */}
                                                    <DropdownToggle caret>
                                                        {this.state.departmentName}
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
                                                        {
                                                            this.state.departments.map(
                                                                department => {
                                                                    return (<DropdownItem id={department.name} onClick={(e) => this.selectDropdown(e, department)}>{department.name}</DropdownItem>)
                                                                }
                                                            )
                                                        }

                                                    </DropdownMenu>
                                                </Dropdown>
                                            }
                                            {/* New Drop Down for majors */}
                                            {this.props.location.pathname !== '/teacher/students' &&
                                                <Dropdown isOpen={this.state.dropdownMajor} toggle={(e) => this.toggleDropDownforMajor(e)}>
                                                    <DropdownToggle caret>
                                                        {this.state.majorName}
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
                                                        {
                                                            this.state.majors.map(
                                                                major => {
                                                                    return (<DropdownItem id={major.major_code} onClick={(e) => this.selectDropdownForMajor(e, major)}>{major.major_code}</DropdownItem>)
                                                                }
                                                            )
                                                        }

                                                    </DropdownMenu>
                                                </Dropdown>
                                            }

                                            {this.props.location.pathname === '/teacher/students' &&

                                                // new Dropdown for courses
                                                <Dropdown isOpen={this.state.dropdownCourse} toggle={(e) => this.toggleDropDownforCourse(e)}>
                                                    <DropdownToggle caret>
                                                        {this.state.courseName}
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
                                                        {
                                                            this.state.coursesByTeacher.map(
                                                                course => {
                                                                    return (<DropdownItem id={course.name} onClick={(e) => this.selectDropdownForCourse(e, course)}>{course.name}</DropdownItem>)
                                                                }
                                                            )
                                                        }

                                                    </DropdownMenu>
                                                </Dropdown>

                                            }
                                        </div>
                                    </div>

                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <TableHead
                                            columns={this.makeTableHeadProps()}
                                        />
                                    </thead>
                                    <tbody>
                                        {
                                            this.renderTableData()
                                        }
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default TeacherTables;
