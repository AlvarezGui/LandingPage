import estilo from "../styles/service.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Service(){
    return(
        <>  
            <div className={estilo.container_bg}>
                <Container className={estilo.container}>
                    <Row>
                        <Col xs={12} md={4} className={estilo.centro}>
                            <Image className="img fluid" src={'/assets/image-one.png'} width={200} height={200}></Image>
                            <h2>Best Offer in Town</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ullam omnis aperiam et obcaecati, temporibus cupiditate eos? Quaerat, vel accusantium!</p>
                        </Col>

                        <Col xs={12} md={4} className={estilo.centro}>
                            <Image className="img fluid" src={'/assets/image-two.png'} width={200} height={200}></Image>
                            <h2>Fast Delivery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus ut sequi atque rerum nulla, corrupti dolorem perferendis vel est.</p>
                        </Col>

                        <Col xs={12} md={4} className={estilo.centro}>
                            <Image className="img fluid" src={'/assets/image-three.png'} width={200} height={200}></Image>
                            <h2>Quallity Food</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus ut sequi atque rerum nulla, corrupti dolorem perferendis vel est.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}