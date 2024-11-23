import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className='mt-2 p-3'>
      <div className='p-3 ml-3'>
        <h1 className='font-bold text-3xl'>MoviesVerse</h1>
      </div>

      <div className='mt-1'>
        <Navbar expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#" className='text-2xl'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '800px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Bollywood Movies</Nav.Link>
                <Nav.Link href="#action2">South Hindi Dubbed</Nav.Link>

                <NavDropdown title="Web Series" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Genre" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="By Year" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="By Qualities" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      <div className='mt-1 h-[200px'>

        <div className="gap-4 flex justify-center mt-3">
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary">Primary</Button>
        </div>


        <div className='flex justify-center mt-3 flex-wrap gap-3'>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">480P</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">720P</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">1080P</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">1080P [60FPS]</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">2160P 4K</button>

          {/* Genres */}
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">ANIME</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">ENGLISH</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">TRENDING</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">NETFLIX</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">MXPLAYER</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">AMAZON PRIME</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">DISNEY+</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">APPLE TV+</button>

          {/* Collections */}
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">K-DRAMA SERIES</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">MARVEL CINEMATIC</button>
          <button className="bg-red-700 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition">MOVIES COLLECTION</button>
        </div>
      </div>

    </div>
  );
};

export default Header;
