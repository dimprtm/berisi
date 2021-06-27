import React, {Component} from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container,
    Row, Col, CardFooter,
    InputGroup, Input,
    InputGroupAddon
} from 'reactstrap';
import './CSS/NewsComp.css'

const baseUrl = 'http://localhost:3001';

class ListNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(baseUrl+'/news').then(res => {
            this.setState({
                news: res.data.values
            })
        }).catch(e => {
            console.log(e)
        });
    }

    render() {
        return (
            <div className="position-relative">
                <Container className="text-light position-absolute start-50 translate-middle-x news-comp">
                    <Row className="justify-content-between">
                        <Col className="col-7">
                            <h3 className="mt-4">Portal Berita</h3>
                        </Col>
                        <Col className="mt-4 col-3">
                            <InputGroup>
                                <Input className="bg-transparent text-light"/>
                                <InputGroupAddon addonType="append">
                                    <Button color="btn btn-info">Cari</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <hr className="mb-4"/>
                    <Row>
                    {this.state.news.map(news =>
                        <Col className="col-6">
                            <Card className="mb-5 shadow-lg rounded" id="card">
                                <CardImg height="250px" src={news.urlToImage} alt={news.source}/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        <a href={news.url} target="_blank" rel="" className="text-white card-link">{news.title}</a>
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{news.source} - {news.publishedAt}</CardSubtitle>
                                    <CardText className="desc-text">{news.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href={news.url} target="_blank" rel="" className="text-white card-link">Selengkapnya</a>
                                </CardFooter>
                            </Card>
                        </Col>
                    )}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ListNews;