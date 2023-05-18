import './App.css'
import Container from 'react-bootstrap/Container'

const App = (props) => {
  return (
    <Container>
      <h1>React Bootstrap</h1>
      {props.chldren}
    </Container>
  )
}

export default App
