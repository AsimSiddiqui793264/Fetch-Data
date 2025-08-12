import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../ContextApi/Store';
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

function Product() {
    const myContext = useContext(AppContext);
    const { products, updateProducts } = myContext;
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        updateProducts(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    // Card hover styles
    const cardHover = {
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer"
    };

    const cardHoverEffect = (e, scale) => {
        e.currentTarget.style.transform = `scale(${scale})`;
        e.currentTarget.style.boxShadow = scale > 1
            ? "0 8px 20px rgba(0,0,0,0.15)"
            : "0 4px 10px rgba(0,0,0,0.05)";
    };

    return (
        <>
            <div style={{
                minHeight: "100vh",
                paddingTop: "30px",
                paddingBottom: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #e6f0f7 100%)"
            }}>
                <Container>
                    {loading ? (
                        <div className="text-center" style={{ marginTop: "100px" }}>
                            <Spinner animation="border" variant="primary" style={{ width: "3rem", height: "3rem" }} />
                            <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Products are loading...</p>
                        </div>
                    ) : (
                        <Row>
                            {products.map((value, index) => (
                                <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                                    <Card
                                        className="h-100 border-0"
                                        style={{
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            backgroundColor: "#ffffff",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                                            ...cardHover
                                        }}
                                        onMouseOver={(e) => cardHoverEffect(e, 1.03)}
                                        onMouseOut={(e) => cardHoverEffect(e, 1)}
                                    >
                                        <div style={{ background: "#f8f9fa", padding: "20px", textAlign: "center" }}>
                                            <Card.Img
                                                variant="top"
                                                src={value.image}
                                                style={{
                                                    height: "250px",
                                                    objectFit: "contain",
                                                    transition: "transform 0.3s"
                                                }}
                                                onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                                                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                            />
                                        </div>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: "bold", color: "#0d6efd", fontSize: "1.1rem", textAlign: "center" }}>
                                                {value.title}
                                            </Card.Title>
                                            <div className='d-flex justify-content-center'>
                                                <Button
                                                    as={Link}
                                                    to={`/product/${value.id}`}
                                                    variant="primary"
                                                    className="mt-2"
                                                    style={{
                                                        borderRadius: "30px",
                                                        padding: "8px 20px",
                                                        fontWeight: "500",
                                                        transition: "all 0.3s ease"
                                                    }}
                                                    onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(13, 110, 253, 0.4)"}
                                                    onMouseOut={e => e.currentTarget.style.boxShadow = "none"}
                                                >
                                                    View Details
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </div>
            
        </>
    );
}

export default Product;
