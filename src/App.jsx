import './App.css'
import Container from 'react-bootstrap/Container'
import TablePage from './Table/pages/TablePage'
import Navigation from './shared/components/Navigation'

const App = () => {
  return (
    <Container>
      <Navigation />
      <TablePage />
    </Container>
  )
}

export default App
