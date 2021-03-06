import React from 'react'
import axios from 'axios'

import client from "../../apis/client";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col
} from "reactstrap";

class Cart extends React.Component {
	state = {
		user: {},
		cart: [],
		total: ''
	}
	componentDidMount() {
		let token = localStorage.getItem('token')
    axios.post(`${process.env.REACT_APP_API_PORT}/auth`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
			let user = res.data
			let cart = JSON.parse(localStorage.getItem('cart'))
      this.setState({user, cart})
    })
	}
	renderItems = () => {
		if (this.state.cart) {
			return this.state.cart.map((course, key) => {
				return (
					<div className="text-center text-muted mb-4" key={key}>
						Course: {course.name} 
						<span style={{ marginLeft: "1rem" }}> 
							Price: ${course.price}
						</span>
						<span>
							<Button size="sm" color="primary" onClick={e => this.removeItem(e, course.name )} style={{ marginLeft: "1rem" }}>
								Remove Course
							</Button>
						</span>
					</div>
				)
			})
		}
	}
	renderTotal = () => this.state.cart ? this.state.cart.reduce((a, c) => a + c.price, 0) : 0
	removeItem = (e, course) => {
		e.preventDefault()
		let index = this.state.cart.findIndex(el => el.name === course.name)
		let cartArr = this.state.cart
		cartArr.splice(index, 1)
		let cart = this.state.cart
		localStorage.setItem('cart', JSON.stringify(cart))
		this.setState({cart})
	}
	clearCart = () => {
		 localStorage.removeItem('cart');
		 this.setState({cart: []});
	}
	goBackToCourses = () => {
		this.props.history.push({
			pathname: "/student/courses"
		})
  }

  confirmCourseSelection = () => {
	console.log("CART",this.state.cart)
//Make confirm course selection
	client({
		method: 'post',
		url: '/course-registrations',
		data: {
			course_id: this.state.cart.map( course => {return course.id})
		},
	}).then(data => {
		alert('Courses has been added')
		this.props.history.push({
		pathname: "/student/courses"
		})
		localStorage.removeItem("cart")

	}).catch(error => {
		alert('Some courses could not be added. Please refer the courses table')
		this.props.history.push({
			pathname: "/student/courses"
		})
		localStorage.removeItem("cart")

	})
	// this.props.history.push({
	// 	pathname: "/student/courses"
	// })
}
	render () {
		return (
			<>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
								{this.renderItems()}
								<div className="text-center text-heavy mb-4">
									Total:	${this.renderTotal()}
								</div>
								<Button size="sm" color="danger" onClick={this.clearCart}>
									Clear Cart
								</Button>
              </div>
            </CardBody>
			<Button size="sm" color="primary" onClick={this.confirmCourseSelection}>
						Confirm Course Selection
			</Button>						
          </Card>
					<Button className="btn-block my-5" size="sm" color="primary" onClick={this.goBackToCourses}>
						Back to course selection
					</Button>
        </Col>
      </>
		)
	}
}

export default Cart
