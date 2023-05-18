import Container from 'react-bootstrap/Container'

import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar expand='lg' className='main-navbar'>
      <Container>
        <Navbar.Brand as='h1' className='navbar-title'>React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation
