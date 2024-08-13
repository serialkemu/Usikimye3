import React from 'react'

const Corp = () => {
  return (
    <div>
        <h2>Corporate Report</h2>
    <Form>
      <Form.Group controlId="institutionName">
        <Form.Label>Institution Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the institution name" />
      </Form.Group>
      <Form.Group controlId="workerName">
        <Form.Label>Worker Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the worker's name" />
      </Form.Group>
      <Form.Group controlId="requestDescription">
        <Form.Label>Description of Request</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
    </div>
  )
}

export default Corp