import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container,
    Row, Col, CardFooter,
    InputGroup, Input,
    InputGroupAddon
} from 'reactstrap';

const baseUrl = 'http://localhost:3001';
const HooksUseEffects = () => {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        axios.get(baseUrl+'/news').then(res => {
            setNews(res.data.values)
        }).catch(e => {
            console.log(e)
        })
    },[])

    return (
        <div className="position-relative">
                <Container className="text-light position-absolute start-50 translate-middle-x news-comp">
                    <Row className="justify-content-between">
                        <Col className="">
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
                    {news.map(news =>
                        <Col className="col-6">
                            <Card className="mb-5 shadow-lg rounded" id="card">
                                <CardImg height="250px" src={news.urlToImage} alt={news.source}/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        <a href={news.url} target="_blank" className="text-white card-link">{news.title}</a>
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{news.source} - {news.publishedAt}</CardSubtitle>
                                    <CardText className="desc-text">{news.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <Row>
                                        <Col className="col-8">
                                            <a href={news.url} target="_blank" className="text-white card-link">Selengkapnya</a>
                                        </Col>
                                        <Col className="col-2">
                                            <Button className="btn btn-success">Update</Button>
                                        </Col>
                                        <Col className="col-2">
                                            <Button className="btn btn-danger">Hapus</Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    )}
                    </Row>
                </Container>
            </div>
    )
}

export default HooksUseEffects;