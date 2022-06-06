import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Image } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <Navbar bg='light' expand='lg' className='mb-3'>
      <Container fluid className='m-auto'>
        <Navbar.Brand href='#home'>
          <Image
            src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80'
            roundedCircle
            height='80'
            width='80'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => router.push('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push('/research-interest')}>
              Research Interest
            </Nav.Link>
            <Nav.Link onClick={() => router.push('/facilities')}>
              Facilities
            </Nav.Link>
            <NavDropdown title='Group Leader' id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => router.push('/group-leader/profile')}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  router.push('/group-leader/awards-and-academics')
                }
              >
                Award & Academics
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => router.push('/group-leader/invited-talks')}
              >
                Invited Talks
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Group Members' id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => router.push('/group-members/current-members')}
              >
                Current Members
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => router.push('/group-members/alumni')}
              >
                Alumni
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => router.push('/group-members/collaborators')}
              >
                Collaborators
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => router.push('/group-members/pg-ug-interns')}
              >
                PG/UG Interns
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Publications' id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => router.push('/publications/latest-research')}
              >
                Latest Research
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => router.push('/publications/journals')}
              >
                Journals
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  router.push('/publications/book-and-book-chapters')
                }
              >
                Book & Book Chapters
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => router.push('/publications/group-activities')}
              >
                Group Activities
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => router.push('/vacancy')}>Vacancy</Nav.Link>
            <Nav.Link onClick={() => router.push('/gallery')}>Gallery</Nav.Link>
            <Nav.Link onClick={() => router.push('/contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
