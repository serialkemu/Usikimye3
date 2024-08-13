import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Education.css';

const articles = [
  {
    title: 'Understanding SGBV',
    description: 'An introduction to Sexual and Gender-Based Violence (SGBV).',
    link: '#',
  },
  {
    title: 'SGBV Prevention Tips',
    description: 'Practical tips and strategies to prevent SGBV.',
    link: '#',
  },
  {
    title: 'Support Resources',
    description: 'Resources and support available for SGBV survivors.',
    link: '#',
  },
];

const videos = [
  {
    title: 'SGBV Awareness Campaign',
    description: 'A video campaign to raise awareness about SGBV.',
    link: '#',
  },
  {
    title: 'Personal Stories',
    description: 'Survivors share their stories and journeys.',
    link: '#',
  },
];

const Edu = () => {
    return (
        <Container className="education-container">
          <h2>Education and Awareness</h2>
    
          <h3>Articles</h3>
          <Row>
            {articles.map((article, index) => (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Card.Link href={article.link}>Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    
          <h3>Videos</h3>
          <Row>
            {videos.map((video, index) => (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>{video.description}</Card.Text>
                    <Card.Link href={video.link}>Watch Now</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    };    

export default Edu