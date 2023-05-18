import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

const CSVTable = () => {
  const csvData = async () => {
    try {
      const response = await axios.get('localhost:3000/')
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
