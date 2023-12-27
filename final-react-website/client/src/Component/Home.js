import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>리액트 웹사이트</Card.Title>
                            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                            <Link to="/movie">
                                <Button variant="success">영화 목록</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Title>리액트 웹사이트</Card.Title>
                            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                            <Link to="/todos">
                                <Button variant="danger">할일 목록</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Title>리액트 웹사이트</Card.Title>
                            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                            <Link to="/numberGuessingGame">
                                <Button variant="warning">숫자 게임</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Title>리액트 웹사이트</Card.Title>
                            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                            <Link to="/quiz">
                                <Button variant="warning">퀴즈 게임</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Title>리액트 웹사이트</Card.Title>
                            <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                            <Link to="/blog">
                                <Button variant="secondary">블로그</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}