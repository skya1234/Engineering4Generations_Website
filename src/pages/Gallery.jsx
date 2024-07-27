import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Gallery.css"

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../gallery_images/IMG_*.png');
            const sortedImagePaths = Object.keys(imageModules).sort((a, b) => {
                const numA = parseInt(a.match(/IMG_(\d+)\.png/)[1]);
                const numB = parseInt(b.match(/IMG_(\d+)\.png/)[1]);
                return numA - numB;
            });
            const imagePaths = await Promise.all(
                sortedImagePaths.map(path => imageModules[path]().then(mod => mod.default))
            );
            setImages(imagePaths);
        };

        loadImages();
    }, []);

    return(
        <div className="gallery">
            <Card className="header-card text-center">
                <Card.Title className="poppins-extrabold-italic">Photo Gallery</Card.Title>
            </Card>

            <Container className = "gallery-container">
                <Card className="gallery-card text-left">
                {images.map((imagePath, index) => {
                if (index % 3 === 0) {
                    const images_spliced = images.slice(index, index + 3);
                    return (
                        <Row className="g-0" key={index} xs={3} md={3}>
                            {images_spliced.map((path, idx) => (
                                <Col  key = {idx}>
                                 <img className = "gallery-image"src={path} alt={`Image ${idx}`} key={idx} />
                                </Col>  
                            ))}
                        </Row>
                );
                } else {
                    return null;
                }
})}

                </Card>
            </Container>
        </div>
    );
}
   
export default Gallery;