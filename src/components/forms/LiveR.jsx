import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LiveR = () => {

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      } = useReactMediaRecorder({ video: true, audio: true });
    
  return (
    <div>
         <h2>Live Form</h2>
      <p>Status: {status}</p>
      <Button onClick={startRecording} variant="danger">Start Recording</Button>
      <Button onClick={stopRecording} variant="secondary">Stop Recording</Button>
      <div>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
      <Form className="mt-3">
        <Form.Group controlId="liveDescription">
          <Form.Label>Description of Event</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Submit</Button>
      </Form>
    </div>
  )
}

export default LiveR