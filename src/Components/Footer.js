import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerStyled = styled(Container)`
  height: 5rem;
  background: linear-gradient(${props => props.theme.primaryLight}, ${props => props.theme.primary});
`;

const RowStyled = styled(Row)`
  height: 100%;
`;

const ColStyled = styled(Col)`
  color: ${props => props.theme.fontLight};
  text-align: center;
`;

export default class Footer extends Component {
  render() {
    return(
      <ContainerStyled>
        <RowStyled className='justify-content-center align-items-center'>
          <ColStyled>&copy;2019 Keith B. Smith | All Rights Reserved</ColStyled>
        </RowStyled>
      </ContainerStyled>
    );
  }
}