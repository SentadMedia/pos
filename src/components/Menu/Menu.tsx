import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Caisse, Statistics, Settings, Stock} from '.' ;
 
export default class Menu extends Component<any> {
  render() {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <Caisse />
                </Col>

                <Col lg={3}>
                    <Statistics />
                </Col>

                <Col lg={3}>
                    <Settings />
                </Col>

                <Col lg={3}>
                    <Stock />
                </Col>
            </Row>
        </Container>
    );
  }
}