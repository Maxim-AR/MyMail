import React, { useState } from 'react'
import { Row, Col, Button, FormControl } from 'react-bootstrap'

export const AddFolder = ({ folder, setFolder }) => {

  const [value, setValue] = useState('')

  var uniqid = Date.now()

  const saveFolder = () => {
    if (!value) {
      return
    }

    const newFolder = [...folder, {
      id: uniqid,
      title: value
    }]
    setFolder(newFolder)
    setValue('')
  }

  return (
    <Row>
      <Col >
        <FormControl placeholder='Введите название папки' value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={saveFolder}>Save</Button>
      </Col>
    </Row>
  )
}
