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
import { Container, Row, Col } from "reactstrap";

class DetailsHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-info"
          style={{
            minHeight: "600px",
            // backgroundImage:
            //   "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "contain",
            // backgroundPosition: "center top",
            // backgroundColor: "#4C1F5E",
            // backgroundImage: "linear-gradient(147deg, #923cb5 0%, #000000 74%)"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">{this.props.title}</h1>
                <h2 className="display-4 text-white">{this.props.subtitle}</h2>
                <p className="text-white mt-0 mb-5">
                  {this.props.info}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default DetailsHeader;
