import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Bar extends Component {
  render() {
    return (
      <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Siswa</Navbar.Brand>
          <Container/>
        </Container>
      </Navbar>
      </>
    );
  }
}
export default Bar;