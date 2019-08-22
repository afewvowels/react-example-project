import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


export default class Contact extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col as='h1'>Contact</Col>
        </Row>
      </Container>
    );
  }
}