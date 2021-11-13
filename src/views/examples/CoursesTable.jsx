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
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  // Media,
  Progress,
  // UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// core components

class CoursesTable extends React.Component {
	state = {
			department_id: this.props.department_id,
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
			]
	}
	orderList = () => {
		let orderedList = this.state.data.sort((a,b) => {
			var nameA = a.name.toUpperCase()
			var nameB = b.name.toUpperCase()
			return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
		})
		return orderedList
	}
	// componentDidUpdate() {
	// 	console.log("Here",this.props.department_id)
	// 	client({
	// 		method: 'get',
	// 		url: '/courses',
	// 		params: {
	// 			department_id : this.props.department_id
	// 		}
	// 	  }).then(res => {
	// 					const data = res.data;
	// 					console.log("og data",data)
	// 					this.setState({data: data})
	// 			}).catch(err => {
	// 				console.log("Error")
	// 			})
	// }
	fetchCourses = (department_id) => {
		client({
			method: 'get',
			url: '/courses',
			params: {
				department_id : department_id
			}
		  }).then(res => {
						const data = res.data;
						console.log("og data",data)
						this.setState({data: data})
				}).catch(err => {
					console.log("Error")
				})
	}
	componentWillMount() {
	// axios.get(`${process.env.REACT_APP_API_PORT}/courses`)
	console.log("Here",this.props.department_id)
	client({
		method: 'get',
		url: '/courses',
		params: {
			department_id : this.props.department_id
		}
	  }).then(res => {
					const data = res.data;
					console.log("og data",data)
					this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
	}
	addToCart = (courseId, courseName, price) => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
		let data = {id: courseId, name: courseName, price: price}
		let courseIds = cart.map(course => course.id)
		if (courseIds.includes(data.id)) {
			alert('course already selected')
		} else {
			cart.push(data)
			alert('Course added successfully')
		}
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	dropCourse = (registrationId) => {
		console.log(registrationId)
		client({
			method: 'delete',
			url: `/course-registrations/${registrationId}`
		}).then(data => {
			window.location.reload()
		}).catch( error => {
			console.log(error)
			alert("Some error occured. Please refresh the page")
		})
	}
	addToCartAndCheckout = (courseId, courseName, price) => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
		let data = {id: courseId, name: courseName, price: price}
		let courseIds = cart.map(course => course.id)
		if (!courseIds.includes(data.id)) {cart.push(data)}
		localStorage.setItem('cart', JSON.stringify(cart))
		this.props.history.push({
			pathname: "/auth/cart",
		})
	}
	renderRegistration = (course) => {
		if (this.props.location.pathname === "/admin/courses") {
			return (
				<td>
					<Link to={`course/${course.id}`}>
						<div className="d-flex align-items-center">
							<span className="mr-2">{`${Math.round(course.students.length / course.registration.limit * 100)}%`}</span>
							<div>
								<Progress
									max={course.registration.limit}
									value={course.students.length}
									barClassName="bg-danger"
								/>
							</div>
						</div>
					</Link>
				</td>
			)
		}
	}
	renderDropdown = (course) => {
		if (this.props.location.pathname === "/student/courses") {
			return(
				
				<td  key= {this.props.department_id}className="text-left">
						{	!course.hasRegistered && 

					<UncontrolledDropdown>			
						<DropdownToggle
							className="btn-icon-only text-light"
							href="#pablo"
							role="button"
							size="sm"
							color=""
							onClick={e => e.preventDefault()}
						>
							<i className="fas fa-ellipsis-v" />
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-arrow" right>
							<DropdownItem
								onClick={() => this.addToCart(course.id, course.name, course.price)}
							>
								Add to cart
							</DropdownItem>

							<DropdownItem
								onClick={() => this.addToCartAndCheckout(course.id, course.name, course.price)}
							>
								Add to cart and register
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>}
					{	course.hasRegistered && 
											<UncontrolledDropdown>			
											<DropdownToggle
												className="btn-icon-only text-light"
												href="#pablo"
												role="button"
												size="sm"
												color=""
												onClick={e => e.preventDefault()}
											>
												<i className="fas fa-ellipsis-v" />
											</DropdownToggle>
											<DropdownMenu className="dropdown-menu-arrow" right>
												<DropdownItem
													onClick={() => this.dropCourse(course.registrationDetails)}
												>
													Drop
												</DropdownItem>
					
						
											</DropdownMenu>
										</UncontrolledDropdown>
					}
				</td>
			)
		}
	}
  render() {
		console.log(this.orderList())
		console.log(this.props.department_id,this.props.courses)
    return (
			<> <div key={this.props.department_id}></div>
				{
					this.props.courses.map((course, key) => {
						return(
							<tr key={key+this.props.department_id}>
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
									<td>
										{
											course.teachers.map((teacher, key) => {
												return(
													<div className="avatar-group" key={key}>
														<Link to={`teacher/${teacher.id}`}>
															<span className="avatar avatar-sm" >
																<img
																	alt="..."
																	className="rounded-circle"
																	src={require("../../assets/img/theme/team-4-800x800.jpg")}
																/>
															</span>
															<span>{teacher.first_name} {teacher.last_name}</span>
														</Link>
													</div>
												)
											})
										}
									</td>

									{
										this.renderRegistration(course)
									}

									<td>
										<Link to={`course/${course.id}`}>
											<Badge color="" className="badge-dot mr-4">
												{/* <i className="bg-warning" /> */}
												{
													course.schedule.days.map((day, i) => {
														return (
															<span style={{display: "block"}} className="pb-2 text-left">
																{day}s: {course.schedule.startTime} - {course.schedule.endTime}
															</span>
														)
													})
												}
											</Badge>
										</Link>
									</td>

									<td>
										<Link to={`course/${course.id}`}>
											${course.price}
										</Link>
									</td>
	
									<td>
									<Link to={`course/${course.id}`}>
										{course?.department?.name ? course.department.name : "     -"}

										</Link>
									</td>
									<td>
									{
										this.renderDropdown(course)
									}
									</td>

							</tr>
						)
					})
				}
			</>
    );
  }
}

export default CoursesTable;
