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
import axios from 'axios'
import client from "../../apis/client";

// import jsonwebtoken from 'jsonwebtoken'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Register extends React.Component {

	state = {
		first_name: '',
		middle_name: '',
    last_name: '',
    avatar: {},
		email: '',
		password: '',
    departments: [{}],
    departmentName: "",
    majorName: "",
    majors: [{}],
    majorsDropdown: false,
    departmentsDropdown: false,
    selectedMajor: {},
    selectedDepartment: {}
	}

	sendDataToState = (event, input) => {
		 let state = this.state
		 state[input] = event.target.value
		 this.setState({state})
		}

  uploadAvatar = (e) => {
    let avatar = e.target.files[0]
		this.setState({avatar})
  }
  
  componentWillMount () {
    this.fetchDepartments()
  }
	submitForm = (e) => {
    e.preventDefault();
    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password) {
      let formData = new FormData()
      formData.append('avatar', this.state.avatar)
      formData.append('first_name', this.state.first_name)
      formData.append('middle_name', this.state.middle_name)
      formData.append('last_name', this.state.last_name)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)


      formData = {
        'avatar': this.state.avatar,
        'first_name': this.state.first_name,
        'middle_name': this.state.middle_name,
        'last_name': this.state.last_name,
        'email': this.state.email,
        'password': this.state.password,
        "department_id": this.state.selectedDepartment.id,
        "major_id": this.state.selectedMajor.id
      }
      console.log(formData)
      client({
        method: 'post',
        url: '/users/register',
        data: formData,
      }).then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token )
          this.props.history.push('/student/courses')
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error signing up please try again');
      });

      // axios.post(`${process.env.REACT_APP_API_PORT}/users/register`, formData)
      // .then(res => {
      //   if (res.status === 200) {
      //     localStorage.setItem('token', res.data.token )
      //     this.props.history.push('/student/courses')
      //   } else {
      //     const error = new Error(res.error);
      //     throw error;
      //   }
      // })
      // .catch(err => {
      //   console.error(err);
      //   alert('Error signing up please try again');
      // });
    } else {
      alert('please complete all information to sign up')
    }
	}

  fetchDepartments = () => {
    client({
      method: 'get',
      url: '/departments'
    }).then(data => {
      this.setState({
        ...this.state,
        departments : data.data,
        departmentName: data.data[0].name,
        selectedDepartment: data.data[0]
      })
      this.fetchMajors(data.data[0].id)
    }).catch( error => {
      alert("Some error occured. Please refresh the page")
    })
  }
  
  fetchMajors = (department_id) => {
    client({
      method: 'get',
      url: '/majors/department',
      params: {
        department_id : department_id 
      }
    }).then(data => {
      this.setState({
        ...this.state,
        majors : data.data,
        majorName : data.data[0].major_name,
        selectedMajor: data.data[0]
      })
    }).catch( error => {
      alert("Some error occured. Please refresh the page")
    })
  }

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
            this.setState({
              ...this.state,
              coursesTableData: data
            })
        }).catch(err => {
          console.log("Error")
        })
  }
  
  selectDropdown = (e, department) => {
    // client({
    //   method: 'get',
    //   url: '/courses',
    //   params: {
    //     department_id : department.id
    //   }
    //   }).then(res => {
    //         const data = res.data;
    //         console.log("og data",data)
    //         this.setState({
    //           ...this.state,
    //           departmentName: department.name,
    //           departmentsDropdown: false,
    //           selectedDepartment: department,
    //           coursesTableData: data
    //         })
    //     }).catch(err => {
    //       console.log("Error")
    //     })
    // this.setState({
    // 	...this.state,
    // 	departmentName: e.currentTarget.textContent,
    // 	dropdownOpen: false,
    // 	selectedDepartment: department,
    // 	// coursesTableData : this.fetchCourses(department.id)
      
    // })
               this.setState({
              ...this.state,
              departmentName: department.name,
              departmentsDropdown: false,
              selectedDepartment: department,
            })

            this.fetchMajors(department.id)
  }

  selectMajorDropdown = (e, major) => {
    this.setState({
      majorName: major.name,
      majorsDropdown: false,
      selectedMajor: major,      
    })
  }


  departmentToggle = (e) => {
		e.preventDefault()
		if (!this.state.departmentsDropdown) {
			this.setState({
				...this.state,
				departmentsDropdown: !this.state.departmentsDropdown
			})
		}

	}

  majorsToggle = (e) => {
		e.preventDefault()
		if (!this.state.majorsDropdown) {
			this.setState({
				...this.state,
				majorsDropdown: !this.state.majorsDropdown
			})
		}

	}
  renderDropDown = () => {
    return (
    
      <div style ={{display: "flex", justifyContent : "space-between"}}>
        <div style={{display: "flex" , "flex-direction": "column"}}>
          <span>Department Name </span> 
          <Dropdown isOpen={this.state.departmentsDropdown} toggle={(e) => this.departmentToggle(e)}>
        <DropdownToggle caret>
          {this.state.departmentName}
        </DropdownToggle>
        <DropdownMenu right>
          {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
          {
            this.state.departments.map(
              department => {
                return (<DropdownItem id ={department.name} ><div onClick={(e) => this.selectDropdown(e,department)}> {department.name}</div> </DropdownItem>)	
              }
            )
          }
      
        </DropdownMenu>
      </Dropdown>
          
          </div>

      <div style={{display: "flex" , "flex-direction": "column"}}>
        <span>
          Major Name 
          </span>
          
          <Dropdown isOpen={this.state.majorsDropdown} toggle={(e) => this.majorsToggle(e)}>
        <DropdownToggle caret>
          {this.state.majorName}
        </DropdownToggle>
        <DropdownMenu right>
          {/* <DropdownItem header onClick={ event => this.selectItem(event)} >Header</DropdownItem> */}
          {
            this.state.majors.map(
              major => {
                return (<DropdownItem id ={major.name} ><div onClick={(e) => this.selectMajorDropdown(e,major)}> {major.name}</div> </DropdownItem>)	
              }
            )
          }
      
        </DropdownMenu>
      </Dropdown>
          </div>


      </div>

    )
  }

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Student Registration</small>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Student Information</small>
              </div>
              <Form onSubmit={this.submitForm} role="form">
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name" type="text" onChange={(e) => this.sendDataToState(e, 'first_name')}/>
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Middle Name" type="text" onChange={(e) => this.sendDataToState(e, 'middle_name')} />
                  </InputGroup>
                </FormGroup>
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" onChange={(e) => this.sendDataToState(e, 'last_name')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>

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

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={(e) => this.sendDataToState(e, 'email')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" onChange={(e) => this.sendDataToState(e, 'password')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                {this.renderDropDown()}
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6"></Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href=""
                onClick={e => {
									e.preventDefault()
									this.props.history.push('/auth/login')
									}}
	              >
                <span>Go to login</span>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Register;