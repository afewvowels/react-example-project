import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.fontLight};
  background: linear-gradient(${props => props.theme.primaryLight}, ${props => props.theme.primary});
  height: 8rem;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  margin-left: 1rem;
`;

const ContainerStyled = styled(Container)`
`;

const LinkStyled = styled(Link)`
  padding: 0 1rem;
  color: ${props => props.theme.fontLight};
  &:hover {
    color: ${props => props.theme.fontLight};
    text-decoration: none;
  }
`;

export default class Header extends Component {
  render() {
    return(
      <HeaderStyled>
        <ContainerStyled fluid={true}>
          <Row className='align-items-center justify-content-center'>
            <Col as='span' xs={9}>
              <Title>Title Goes Here</Title>
            </Col>
            <Col as='nav' xs={3}>
              <LinkStyled to={'/'}>Home</LinkStyled>
              <LinkStyled to={'/about'}>About</LinkStyled>
              <LinkStyled to={'/contact'}>Contact</LinkStyled>
            </Col>
          </Row>
        </ContainerStyled>
      </HeaderStyled>
    );
  }
}