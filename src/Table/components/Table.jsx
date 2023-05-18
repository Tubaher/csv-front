import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'

const CSVTable = () => {
  const [csvData, setCsvData] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    fetchCsvData()
  }, [])
  const fetchCsvData = async () => {
    const apiUrl = 'http://localhost:5000/files/data'
    setError('')
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('Sorry something went wrong')
      }
      const data = await response.json()
      setCsvData(data)
    } catch (error) {
      setError(error.message)
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
          {error && <p>{error}</p>}
          {csvData.length > 0 && (
            csvData.map((csvFile, index) => {
              const { file, lines } = csvFile
              return lines.map((line, index) => {
                const { text, number, hex } = line
                return (
                  <tr key={index}>
                    <td>{file}</td>
                    <td>{text}</td>
                    <td>{number}</td>
                    <td>{hex}</td>
                  </tr>
                )
              })
            })
          )}
        </tbody>
      </Table>
    </Container>
  )
}

export default CSVTable
