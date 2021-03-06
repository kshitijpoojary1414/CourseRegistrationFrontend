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
  Button,
  Card,
  CardHeader,
  CardBody,
	CardFooter,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
	Col,
	InputGroup,
	InputGroupAddon,
	InputGroupText
} from "reactstrap";
import { Link } from 'react-router-dom'
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";

class TeacherInfo extends React.Component {
	state = {
		editable: false,
		teacher: {
			courses: [],
			address: {},
			students: []
		}
	}
	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/users/${this.props.match.params.id}`)
		client({
			method: 'get' ,
			url: `/users/${this.props.match.params.id}`,
		  })
			.then(res => {
					this.setState({teacher: res.data})
			}).catch(err => {
				console.log("Error")
			})
	}
	renderEditButton = () => {
		let teacherId = this.props.match.params.id
		if (this.props.location.pathname === `/admin/teacher/${teacherId}`) {
			return(
				<Col className="text-right" xs="4">
					<Button
						color="primary"
						href="#pablo"
						onClick={e => {
							e.preventDefault()
							this.setState({
								editable: !this.state.editable
							})
						}}
						size="sm"
					>
						Edit teacher info
					</Button>
				</Col>
			)
		}
	}
	uploadAvatar = (e) => {
		let newAvatar = e.target.files[0]
		this.setState({newAvatar})
  }
	sendInputToState = (e, stateRef, stateObj) => {
		let teacher = this.state.teacher
		if (stateObj) {
			teacher[stateObj][stateRef] = e.target.value
		} else {
			teacher[stateRef] = e.target.value
		}
		this.setState({teacher})
	}
	submitUpdates = (e) => {
		e.preventDefault()
		if (this.state.newAvatar) {
			let formData = new FormData()
			formData.append('avatar', this.state.newAvatar)
			axios.patch(`${process.env.REACT_APP_API_PORT}/user/avatar/${this.props.match.params.id}`, formData)
				.then(res => {
					let teacher = this.state.teacher
					teacher.avatar = res.data.avatar
					this.setState({teacher})
				})
				.catch(err => {
					console.log("Error uploading avatar")
				})
		}
		axios.patch(`${process.env.REACT_APP_API_PORT}/teachers/${this.props.match.params.id}`, this.state.teacher)
			.then(data => {
					this.setState({
						editable: !this.state.editable
					})
			}).catch(err => {
				console.log("Error")
			})
	}
	cancelUpdates = (e) => {
		e.preventDefault()
		axios.get(`${process.env.REACT_APP_API_PORT}/user/${this.props.match.params.id}`)
			.then(res => {
					this.setState({
						teacher: res.data,
						editable: !this.state.editable
					})
			}).catch(err => {
				console.log("Error")
			})
	}
	renderStudents = () => {
		if (this.state.teacher.students) {
			return(
				this.state.teacher.students.map((student, key) => {
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
			)
		} else {
			return null
		}
	}
	renderAddressInfo = (info) => {
		if (this.state.teacher.address) {
			return this.state.teacher.address[info]
		} else {
			return null
		}
	}
	renderCourses = () => {
		if (this.state.teacher.courses) {
			return (
				this.state.teacher.courses.map((course, key) => {
					return(
						<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
							<Link to={`../course/${course.id}`}>
								<p>{course.name}</p>
							</Link>
						</div>
					)
				})
			)
		} else {
			return null
		}
	}
  render() {
    return (
      <>
        <DetailsHeader title={`${this.state.teacher.first_name} ${this.state.teacher.last_name}`} info={this.state.teacher.about} />
        {/* Page content */}
				{
					!this.state.editable ? (
						<Container className="mt--7" fluid>
		          <Row>
		            <Col className="order-xl-1 mb-6" xl="10">
		              <Card className="bg-secondary shadow">
		                <CardHeader className="bg-white border-0">
		                  <Row className="align-items-center">
		                    <Col xs="8">
													<span className="avatar avatar-sm rounded-circle">
														<img
															alt="..."
															src={this.state.teacher.avatar}
														/>
													</span>
		                      <h3 className="mb-0">Teacher</h3>
		                    </Col>
		                    {
													this.renderEditButton()
												}
		                  </Row>
		                </CardHeader>
		                <CardBody>
		                  <Form>
		                    <h6 className="heading-small text-muted mb-4">
		                      Teacher information
		                    </h6>
		                    <div className="pl-lg-4">
													<Row>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">First name</small>
																<h1>{this.state.teacher.first_name}</h1>
			                        </div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Middle name</small>
																<h1>{this.state.teacher.middle_name}</h1>
			                        </div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Last name</small>
																<h1>{this.state.teacher.last_name}</h1>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="12">
															<div>
																<small className="form-control-label">Email address</small>
																<h1>{this.state.teacher.email}</h1>
			                        </div>
		                        </Col>
		                      </Row>
													<Row>
														<Col md="12">
															<div>
																<small className="form-control-label">About</small>
																<h3>{this.state.teacher.about}</h3>
			                        </div>
														</Col>
													</Row>
		                    </div>
												{/* CONTACT INFO ONLY AVAILABLE TO ADMIN */}
		                    <hr className="my-4" />
		                    {/* Address */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Contact information
		                    </h6>
												<div className="pl-lg-4">
												<Row>
		                        <Col md="12">
															<div>
																<small className="form-control-label">Street address</small>
																<h2>{this.renderAddressInfo("streetAddress")}</h2>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="6">
		                          <FormGroup>
																<div>
																	<small className="form-control-label">City</small>
																	<h2>{this.renderAddressInfo("city")}</h2>
				                        </div>
		                          </FormGroup>
		                        </Col>
		                        <Col lg="6">
															<div>
																<small className="form-control-label">State</small>
																<h2>{this.renderAddressInfo("state")}</h2>
															</div>
		                        </Col>
													</Row>
													<Row>
														<Col lg="6">
															<div>
																<small className="form-control-label">Country</small>
																<h2>{this.renderAddressInfo("country")}</h2>
															</div>
		                        </Col>
														<Col lg="6">
															<div>
																<small className="form-control-label">Postal code</small>
																<h2>{this.renderAddressInfo("zipCode")}</h2>
															</div>
		                        </Col>
													</Row>
		                    </div>
												<hr className="my-4" />
		                    {/* Courses */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses taught by this teacher
		                    </h6>
		                    <div className="pl-lg-4">
													{
														this.renderCourses()
													}
		                    </div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Students
		                    </h6>
		                    <div className="pl-lg-4">
													{
														this.renderStudents()
													}
		                    </div>
		                  </Form>
		                </CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												{
													this.renderEditButton()
												}
											</Row>
										</CardFooter>
		              </Card>
		            </Col>
		          </Row>
		        </Container>
					) : (
						<Container className="mt--7" fluid>
		          <Row>
		            <Col className="order-xl-1 mb-6" xl="10">
		              <Card className="bg-secondary shadow">
		                <CardHeader className="bg-white border-0">
		                  <Row className="align-items-center">
		                    <Col xs="8">
													<span className="avatar avatar-sm rounded-circle">
														<img
															alt="..."
															src={this.state.teacher.avatar}
														/>
													</span>
													<FormGroup>
														<InputGroup className="input-group-alternative mb-3">
															<InputGroupAddon addonType="prepend">
																<InputGroupText>
																	<i className="ni ni-single-02" />
																</InputGroupText>
															</InputGroupAddon>
															<small style={{paddingTop: "10px", paddingLeft: "10px"}}>Profile Picture</small>
															<Input type="file" onChange={this.uploadAvatar} />
														</InputGroup>
													</FormGroup>	
		                      <h3 className="mb-0">Teacher</h3>
		                    </Col>
												<Col className="text-right" xs="4">
		                      <Button
		                        color="default"
		                        href="#pablo"
		                        onClick={this.cancelUpdates}
		                        size="sm"
		                      >
		                        Cancel changes
		                      </Button>
		                      <Button
		                        color="primary"
		                        form="course-edit"
		                        type="submit"
		                        size="sm"
														onClick={this.submitUpdates}
		                      >
		                        Save changes
		                      </Button>
		                    </Col>
		                  </Row>
		                </CardHeader>
										<CardBody>
		                  <Form>
		                    <h6 className="heading-small text-muted mb-4">
		                      Teacher information
		                    </h6>
		                    <div className="pl-lg-4">
													<Row>
		                        <Col lg="4">
															<FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-first-name"
		                            >
		                              First name
		                            </label>
		                            <Input
		                              className="form-control-alternative"
		                              defaultValue={this.state.teacher.first_name}
		                              id="input-first-name"
		                              placeholder="First name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "first_name")}
		                            />
		                          </FormGroup>
		                        </Col>
		                        <Col lg="4">
															<FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-middle-name"
		                            >
		                              Middle name
		                            </label>
		                            <Input
		                              className="form-control-alternative"
		                              defaultValue={this.state.teacher.middle_name}
		                              id="input-middle-name"
		                              placeholder="Middle name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "middle_name")}
		                            />
		                          </FormGroup>
		                        </Col>
		                        <Col lg="4">
															<FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-last-name"
		                            >
		                              Last name
		                            </label>
		                            <Input
		                              className="form-control-alternative"
		                              defaultValue={this.state.teacher.last_name}
		                              id="input-last-name"
		                              placeholder="Last name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "last_name")}
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="6">
		                          <FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-email"
		                            >
		                              Email address
		                            </label>
		                            <Input
		                              className="form-control-alternative"
																	defaultValue={this.state.teacher.email}
		                              id="input-email"
		                              placeholder="name@example.com"
		                              type="email"
																	onChange={e => this.sendInputToState(e, "email")}
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
													<Row>
														<Col md="12">
															<FormGroup>
																<label
		                              className="form-control-label"
		                              htmlFor="input-about"
		                            >
																	About
																</label>
				                        <Input
				                          className="form-control-alternative"
				                          placeholder="Tell a little bit about yourself..."
				                          rows="4"
				                          defaultValue={this.state.teacher.about}
				                          type="textarea"
																	onChange={e => this.sendInputToState(e, "about")}
				                        />
				                      </FormGroup>
														</Col>
													</Row>
		                    </div>
		                    <hr className="my-4" />
		                    {/* Address */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Contact information
		                    </h6>
		                    <div className="pl-lg-4">
												<Row>
														<Col md="12">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-address"
																>
																	Street address
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Street address"
																	defaultValue={this.renderAddressInfo("streetAddress")}
																	id="input-address"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'streetAddress', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	City
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="City"
																	defaultValue={this.renderAddressInfo("city")}
																	id="input-city"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'city', 'address')}
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-state"
																>
																	State
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="State"
																	defaultValue={this.renderAddressInfo("state")}
																	id="input-state"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'country', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-country"
																>
																	Country
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Country"
																	defaultValue={this.renderAddressInfo("country")}
																	id="input-country"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'country', 'address')}
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-country"
																>
																	Postal code
																</label>
																<Input
																	className="form-control-alternative"
																	id="input-postal-code"
																	placeholder="Postal code"
																	defaultValue={this.renderAddressInfo("zipCode")}
																	type="number"
																	onChange={e => this.sendInputToState(e, 'zipCode', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
		                    </div>
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses taught by this teacher
		                    </h6>
												<div className="pl-lg-4">
													{
														this.state.teacher.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../course/${course.id}`}>
																		<p>{course.name}</p>
																	</Link>
																</div>
															)
														})
													}
		                    </div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Students
		                    </h6>
												<div className="pl-lg-4">
													{
														this.renderStudents()
													}
		                    </div>
		                  </Form>
		                </CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												<Col className="text-right" xs="4">
		                      <Button
		                        color="default"
		                        href="#pablo"
		                        onClick={this.cancelUpdates}
		                        size="sm"
		                      >
		                        Cancel changes
		                      </Button>
		                      <Button
		                        color="primary"
		                        form="course-edit"
		                        type="submit"
		                        size="sm"
														onClick={this.submitUpdates}
		                      >
		                        Save changes
		                      </Button>
		                    </Col>
											</Row>
										</CardFooter>
		              </Card>
		            </Col>
		          </Row>
		        </Container>
					)
				}
      </>
    );
  }
}
export default TeacherInfo;
