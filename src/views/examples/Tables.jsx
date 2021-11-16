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
import client from "../../apis/client";


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
import Header from "../../components/Headers/Header.jsx";
import TableHead from "./TableHead.jsx"
import CoursesTable from "./CoursesTable.jsx"
import SubjectsTable from "./SubjectsTable.jsx"
import TeachersTable from "./TeachersTable.jsx"
import StudentsTable from "./StudentsTable.jsx"

class Tables extends React.Component {
	state = {
		dropdownOpen: false,
		// for open/close
		dropdownMajor: false,
		departmentName: "",
		majorName: "",
		departments: [],
		majors: [],
		selectedDepartment: "",
		selectedMajor: "",
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
	componentWillMount() {
		this.fetchDepartments()
	}
	renderCardHeader = () => {
		let headerText = this.props.location.pathname.match("[^/]+$")[0]
		headerText = headerText[0].toUpperCase() + headerText.substring(1)
		return headerText
	}
	makeTableHeadProps = () => {
		if (this.props.location.pathname === "/admin/courses") {
			return ["Course", "Subject", "Teachers", "Registration", "Schedule", "Price", "Department"]
		} else if (this.props.location.pathname === "/admin/majors") {
			return ["Major", "Code", "Advisor", "No of units"]
		} else if (this.props.location.pathname === "/admin/teachers") {
			return ["Teacher", "Courses", "Subject", "Students", "Schedule"]
		} else if (this.props.location.pathname === "/admin/students") {
			return ["Student", "Courses", "Teachers", "Schedule"]
		} else if (this.props.location.pathname === "/student/courses") {
			return ["Course", "Subject", "Teachers", "Schedule", "Price", "Major", "Register"]
		} else if (this.props.location.pathname === "/student/majors") {
			return ["Major", "Code", "Advisor", "No of units"]
		} else if (this.props.location.pathname === "/student/majors") {
			return ["Major", "Number of Units", "Grad advisor", "Department"]
		} else if (this.props.location.pathname === "/student/teachers") {
			return ["Teacher", "Course", "Subject", "Schedule"]
		}
	}
	renderTableData = () => {
		if (this.props.location.pathname === "/admin/courses" || this.props.location.pathname === "/student/courses") {
			return <CoursesTable courses={this.state.coursesTableData} department_id={this.state.selectedDepartment.id} {...this.props} />
		} else if (this.props.location.pathname === "/admin/majors" || this.props.location.pathname === "/student/majors") {
			return <SubjectsTable courses={this.state.majors} {...this.props} />
		} else if (this.props.location.pathname === "/admin/teachers" || this.props.location.pathname === "/student/teachers") {
			return <TeachersTable teachers={this.state.teachers} {...this.props} />
		} else if (this.props.location.pathname === "/admin/students") {
			return <StudentsTable students={this.state.students}  {...this.props} />
		}
	}
	renderAddCourse = () => {
		if (this.props.location.pathname === "/admin/courses") {
			return (
				<Col className="text-right">
					<Button
						color="primary"
						onClick={e => {
							e.preventDefault()
							this.props.history.push({
								pathname: "/admin/course-create"
							})
							this.setState({
								editable: true
							})
						}}
						size="sm"
					>
						Add new course
					</Button>
				</Col>
			)
		}
	}

	toggleDropDownforDept = (e) => {
		e.preventDefault()
		if (!this.state.dropdownOpen) {
			this.setState({
				...this.state,
				dropdownOpen: !this.state.dropdownOpen
			})
		} else {
			this.setState({
				...this.state,
				dropdownOpen: false
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
		} else {
			this.setState({
				...this.state,
				dropdownMajor: false
			})
		}

	}
	selectItem = (e) => {
		console.log(e)
	}

	// fetchMajor = () => {
	// 	client({
	// 		method: 'get',
	// 		url: '/majors'
	// 	}).then(data => {
	// 		this.setState({
	// 			...this.state,
	// 			majors : data.data,
	// 			majorName: data.data[0].name,
	// 			selectedMajor: data.data[0]
	// 		})
	// 		this.fetchCourses(data.data[0].id)
	// 	}).catch( error => {
	// 		alert("Some error occured. Please refresh the page")
	// 	})
	// }
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

	fetchCourses = (major_id) => {
		client({
			method: 'get',
			url: '/courses',
			params: {
				major_id: major_id
			}
		}).then(res => {
			const data = res.data;
			console.log("og data", data)
			this.setState({
				...this.state,
				coursesTableData: data
			})
		}).catch(err => {
			console.log("Error")
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
			this.fetchCourses(data[0].id)
		}).catch(err => {
			console.log("Error", err)
		})
	}
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
			selectedMajor: major,
			major: major.name,
			majorName: major.major_code
		})

		this.fetchCourses(major.id)
	}
	renderDropDown = () => {
		return (
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>
				<span style ={{paddingLeft: "12px"}}> Department</span>
				<div style ={{paddingLeft: "12px"}}>

				{<Dropdown isOpen={this.state.dropdownOpen} toggle={(e) => this.toggleDropDownforDept(e)}>
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
				</div>

				</div>

				{/* New Drop Down for majors */}
				<div>
					<span style ={{paddingLeft: "12px"}}>Majors</span>
					<div style ={{paddingLeft: "12px"}} >
					{
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
					</div>

				</div>

			</div>
		)
	}

	renderDepartmentDropdown = () => {
		return (
			<div>
				{<Dropdown isOpen={this.state.dropdownOpen} toggle={(e) => this.toggleDropDownforDept(e)}>
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

			</div>
		)
	}
	render() {
		console.log("window", window.location)
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
										{
											this.renderAddCourse()
										}
										<div>
											{!window.location.pathname.includes('majors') ? this.renderDropDown() : this.renderDepartmentDropdown()}
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

export default Tables;
