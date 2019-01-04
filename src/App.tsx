import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar color="dark" dark className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <NavbarBrand href="/">Kid's Timer</NavbarBrand>
                </Navbar>
                <Container fluid>
                    <Row>
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar"></nav>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                    Edit <code>src/App.tsx</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                            </header>
                        </main>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
