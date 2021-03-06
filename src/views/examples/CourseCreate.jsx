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

// reactstrap components
import {
	Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
	Progress,
	CardFooter,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom"
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"
import Schedule from "./Schedule.jsx";
import client from "../../apis/client";


class CourseCreate extends React.Component {
	state = {
		editable: false,
		dropdownOpen: false,
		dropdownOpenForDept: false,
		// for open/close
		dropdownMajor: false,
		departmentName: "",
		majorName: "",
		departments: [],
		majors: [],
		selectedDepartment: "",
		selectedMajor: "",
		allTeachers: [{}],
		days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		data: {
			name: "Course name",
			subject: "subject name",
			description: "Course description",
			price: 0,
			schedule: {
				startDate: "2020-01-13",
				endDate: "2020-05-22",
				startTime: "9:00am",
				endTime: "10:00am",
				days: []
			},
			students: [],
			teachers: [],
			registration: {
				limit: 0,
				registered: 0
			}
		}
	}
	// componentDidMount() {
	// 	axios.get(`${process.env.REACT_APP_API_PORT}/courses/${this.props.match.params.id}`)
	// 		.then(res => {
	// 			const data = res.data
	// 			this.setState({data: data})
	// 		}).catch(err => {
	// 			console.log("Error")
	// 		})
	// }

// 	addToCart = () => {
// 	let cart = localStorage.getItem('cart')
// 		? JSON.parse(localStorage.getItem('cart')) : []
// 	let data = {name: this.state.data.name, price: this.state.data.price}
// 	cart.push(data)
// 	localStorage.setItem('cart', JSON.stringify(cart))
// 	alert("Course added succesfully")

// }

	// renderEditButton = () => {
	// 	let courseId = this.state.data.id
	// 	// MAKE THIS IF STATEMENT CHECK THAT USER IS ADMIN (NOT TEACHER OR STUDENT)
	// 	if (this.props.location.pathname === `/admin/course/${courseId}`) {
	// 		return(
	// 			<Col className="text-right" xs="4">
	// 				<Button
	// 					color="primary"
	// 					href="#pablo"
	// 					onClick={e => {
	// 						e.preventDefault()
	// 						this.setState({
	// 							editable: !this.state.editable
	// 						})
	// 					}}
	// 					size="sm"
	// 				>
	// 					Edit course info
	// 				</Button>
	// 			</Col>
	// 		)
	// 	} else {
	// 			return (
	// 				<Col className="text-right" xs="4">
	// 					<Button
	// 						color="primary"
	// 						data-toggle="modal"
	// 						data-target="#exampleModal"
	// 						size="sm"
	// 						onClick={this.addToCart}>Add to cart
	// 					</Button>
	// 				</Col>

	// 			)
	// 	}
	// }
	componentWillMount() {
		this.fetchDepartments()
	}
	sendInputToState = (e, stateRef, stateObj) => {
		let data = this.state.data
		if (stateObj) {
			if(stateRef == 'limit') {
				data[stateObj][stateRef] = Math.abs(e.target.value)
			} else {
				data[stateObj][stateRef] = e.target.value
			}
		} else {
			if(stateRef == 'price') {
				data[stateRef] = Math.abs(e.target.value)
			} else {
				data[stateRef] = e.target.value
			}
		}
		this.setState({data})
	}
	updateDays = (e, i, day) => {
		if (e.target.checked) {
			let state = this.state
			state.data.schedule.days.push(day)
			const sortDays = (a, b) => {
			  a = this.state.days.indexOf(a);
			  b = this.state.days.indexOf(b);
			  return a < b ? 0 : 1;
			}
			state.data.schedule.days.sort(sortDays)
			this.setState({state})
		} else if (!e.target.checked) {
			let index = this.state.data.schedule.days.indexOf(day)
			let state = this.state
			state.data.schedule.days.splice(index, 1)
			this.setState({state})
		}
	}
	submitUpdates = (e) => {
		e.preventDefault()
		// axios.post(`${process.env.REACT_APP_API_PORT}/admin/postCourse`, this.state.data)
		console.log("courses",this.state.data)
		client({
			method: 'post' ,
			url: `/courses`,
			data: {
				...this.state.data,
				department_id : this.state.selectedDepartment.id,
				major_id: this.state.selectedMajor.id
			}
		  })
			.then(data => {
					console.log(data.data.data)
					this.props.history.push({
						pathname: `/admin/course/${data.data.data.id}`
					})
			}).catch(err => {
				console.log("Error")
			})
	}

	cancelUpdates = (e) => {
		e.preventDefault()
		this.props.history.push({
			pathname: "/admin/courses"
		})
	}
	removeTeacher = (e, teacherId) => {
		e.preventDefault()
		let index = this.state.data.teachers.findIndex(el => el.id === teacherId)
		let teachersArr = this.state.data.teachers
		teachersArr.splice(index, 1)
		let data = this.state.data
		data.teachers = teachersArr
		this.setState({data})
	}
	toggleTeacherDropdown = (e) => {
		e.preventDefault()
		client({
			method: 'get' ,
			url: `/users/roles/teacher`,
		  })
			.then(res => {
				const allTeachers = res.data.users
				this.setState({
					dropdownOpen: !this.state.dropdownOpen,
					allTeachers: allTeachers
				})
			}).catch(err => {
				console.log("Error")
			})
	}

	toggleDepartmentsDropdown = (e) => {
		e.preventDefault()
		client({
			method: 'get' ,
			url: `/departments`,
		  })
			.then(res => {
				const departments = res.data
				console.log("Dep",departments)
				this.setState({
					departmentDropdown: !this.state.departmentDropdown,
					departments: departments
				})
			}).catch(err => {
				console.log("Error")
			})
	}
	selectTeacher = (e, teacher) => {
		e.preventDefault()
		console.log('teacher info', teacher)
		let data = this.state.data
		data.teachers.push(teacher)
		this.setState(data)
		console.log('teacher id', teacher.id)
	}

	selectDepartment = (e, department) => {
		e.preventDefault()
	
		this.setState({
			...this.state,
			department: department
		})
	}

	removeMajor = (e) => {
		e.preventDefault()
	
		this.setState({
			...this.state,
			selectedMajor: {}
		})
	}


	toggleDropDownforDept = (e) => {
		e.preventDefault()
		if (!this.state.dropdownOpenForDept) {
			this.setState({
				...this.state,
				dropdownOpenForDept: !this.state.dropdownOpenForDept
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
			})
			this.fetchCourses(data[0].id)
		}).catch(err => {
			console.log("Error", err)
		})
	}
	selectDropdown = (e, department) => {

		this.setState({
			...this.state,
			dropdownOpenForDept: false,
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
		console.log(this.state)
		return (
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>
				<span style ={{paddingLeft: "12px"}}> Department</span>
				<div style ={{paddingLeft: "12px"}}>

				{<Dropdown isOpen={this.state.dropdownOpenForDept} toggle={(e) => this.toggleDropDownforDept(e)}>
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

  render() {
		console.log(this.state)
		console.log(this.props)
    return (
      <>
        <DetailsHeader title={this.state.data.name} subtitle={this.state.data.subject} info={this.state.data.description} />
				{/* Page content */}
				<Container className="mt--7" fluid>
					<Row>
						<Col className="order-xl-1 mb-6" xl="8">
							<Card className="bg-secondary shadow">
								<CardHeader className="bg-white border-0">
									<Row className="align-items-center">
										<Col xs="8">
											<h3 className="mb-0">COURSE INFORMATION</h3>
										</Col>
										<Col className="text-right" xs="4">
											<Button
												color="default"
												href="#pablo"
												onClick={this.cancelUpdates}
												size="sm"
											>
												Cancel create
											</Button>
											<Button
												color="primary"
												form="course-edit"
												type="submit"
												size="sm"
												onClick={this.submitUpdates}
											>
												Create course
											</Button>
										</Col>
									</Row>
								</CardHeader>
								<CardBody>
									<Form id="course-edit" onSubmit={this.submitForm}>
										<h6 className="heading-small text-muted mb-4">
											General information
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-course-name"
														>
															Course name
														</label>
														<Input
															className="form-control-alternative"
															id="input-course-name"
															placeholder={this.state.data.name}
															type="text"
															onChange={e => this.sendInputToState(e, 'name')}
														/>
													</FormGroup>
												</Col>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-subject"
														>
															Subject
														</label>
														<Input
															className="form-control-alternative"
															id="input-subject"
															placeholder={this.state.data.subject}
															type="text"
															onChange={(e) => this.sendInputToState(e, 'subject')}
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col>
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-description"
														>
															Description
														</label>
														<Input
															className="form-control-alternative"
															placeholder={this.state.data.description}
															id="input-description"
															rows="4"
															type="textarea"
															onChange={(e) => this.sendInputToState(e, 'description')}
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>

										<Schedule data={this.state.data} sendInputToState={this.sendInputToState} updateDays={this.updateDays} days={this.state.days} />

										<hr className="my-4" />
										<h6 className="heading-small text-muted mb-4">
											Registration
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="4">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-reg-limit"
														>
															Registration limit
														</label>
														<Input
															className="form-control-alternative"
															defaultValue={this.state.data.registration.limit}
															id="input-reg-limit"
															placeholder="# of students"
															type="number"
															onChange={(e) => this.sendInputToState(e, 'limit', 'registration')}
														/>
													</FormGroup>
												</Col>
												<Col lg="4">
													<div className="pl-lg-4">
														<small className="form-control-label">Currently registered</small>
														<h2>{this.state.data.students.length}</h2>
													</div>
												</Col>
												<Col lg="4">
													<div className="pl-lg-4">
														<small className="form-control-label">Availability</small>
														<h2>{Math.round(100 - (this.state.data.students.length / this.state.data.registration.limit * 100))}%</h2>
														<Progress
															max={this.state.data.registration.limit}
															value={this.state.data.students.length}
															barClassName="bg-danger"
														/>
													</div>
												</Col>
											</Row>
										</div>

										<hr className="my-4" />
										<h6 className="heading-small text-muted mb-4">
											Price
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="4">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-price"
														>
															price
														</label>
														<Input
															className="form-control-alternative"
															defaultValue={this.state.data.price}
															id="input-price"
															placeholder={this.state.data.price}
															type="number"
															onChange={(e, stateRef) => this.sendInputToState(e, 'price')}
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>

										<hr className="my-4" />
										{/* Teachers */}
										<h6 className="heading-small text-muted mb-4">
											Teachers
										</h6>



										<Dropdown isOpen={this.state.dropdownOpen} toggle={e => this.toggleTeacherDropdown(e)}>
											<DropdownToggle caret>
												Add teacher
											</DropdownToggle>
											<DropdownMenu>
												{
													this.state.allTeachers.map(teacher => {
														return(
															<DropdownItem
																onClick={(e) => this.selectTeacher(e, teacher)}
																key={teacher.id}
															>
																{teacher.first_name} {teacher.last_name}
															</DropdownItem>
														)
													})
												}
											</DropdownMenu>
										</Dropdown>



										<div className="pl-lg-4">
											{
												this.state.data.teachers.map(teacher => {
													return(
														<div className="avatar-group" key={teacher.id} style={{display: "inline-block", padding: '40px'}}>
														<Button
															color="danger"
															href="#pablo"
															onClick={e => this.removeTeacher(e, teacher.id)}
															size="sm"
														>
															remove
														</Button>
															<Link to={`../teacher/${teacher.id}`}>
																<span className="avatar avatar-sm" >
																	<img
																		alt="..."
																		className="rounded-circle"
																		src={teacher.avatar}
																	/>
																</span>
																<span>{teacher.first_name}</span>
															</Link>
														</div>
													)
												})
											}
										</div>
										<hr className="my-4" />
										{/* Teachers */}
										<h6 className="heading-small text-muted mb-4">
											Departments
										</h6>

			

	{this.renderDropDown()}


										<div className="pl-lg-4">
											{
												<div className="avatar-group" key={this.state.selectedMajor.id} style={{display: "inline-block", padding: '40px'}}>
												{
													this.state.selectedMajor.major_name && <div>
													<Button
								color="danger"
								href="#pablo"
								onClick={e => this.removeMajor(e)}
								size="sm"
							>
								remove
							</Button>
								<Link to={`../majors/${this.state.selectedMajor.id}`}>
									{/* <span className="avatar avatar-sm" >
										<img
											alt="..."
											className="rounded-circle"
											src={this.state.department.avatar}
										/>
									</span> */}
									<span>{this.state.selectedMajor.major_name}</span>
								</Link>
							</div>
												}
							
												</div>
											}
										</div>
										<hr className="my-4" />
										{/* Students */}
										<h6 className="heading-small text-muted mb-4">
											Students
										</h6>
										<div className="pl-lg-4">
										{
												this.state.data.students.map((student, key) => {
													return(
														<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
															<Link to={`../student/${student.id}`}>
																<span className="avatar avatar-sm" >
																	<img
																		alt="..."
																		className="rounded-circle"
																		src={student.avatar}
																	/>
																</span>
																<span>{student.first_name} {student.last_name}</span>
															</Link>
														</div>
													)
												})
											}
										</div>
									</Form>
								</CardBody>
								<CardFooter>
									<Row className="align-items-center">
										<Col xs="8">
											<h3 className="mb-0">COURSE INFORMATION</h3>
										</Col>
										<Col className="text-right" xs="4">
											<Button
												color="default"
												href="#pablo"
												onClick={this.cancelUpdates}
												size="sm"
											>
												Cancel create
											</Button>
											<Button
												color="primary"
												form="course-edit"
												type="submit"
												size="sm"
												onClick={this.submitUpdates}
											>
												Create course
											</Button>
										</Col>
									</Row>
								</CardFooter>
							</Card>
						</Col>
						<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
							{
								this.state.data.teachers.map((teacher, key) => {
									return <TeacherCard teacher={teacher} key={key} />
								})
							}
						</Col>
					</Row>
				</Container>
      </>
    );
  }
}

export default CourseCreate;
