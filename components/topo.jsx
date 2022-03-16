import { Col, Row, Container } from "react-bootstrap";
import estilos from "../styles/topo.module.css";
import Image from "next/image";

export default function Topo(){
    return(
        <>
           <div className={estilos.background}></div>
           
           <div className={estilos.texture}>
                <Container className={estilos.container}>
                    <Row className={estilos.row}>
                        <Col xs={12} md={6}>
                                <Image src="/assets/mobile.png" alt="mobile" className="img-fluid" width={500} height={500} ></Image>
                        </Col>

                        <Col xs={12} md={6} className={estilos.direita}>
                                <h6>FOODO</h6>
                                <h2>Get Your Food In</h2>  
                                <h1>FOODO</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste amet iure itaque distinctio! Adipisci, eius?</p>
                                <button className={estilos.botao}> Download App </button>              
                        </Col>
                    </Row>
                </Container>
           </div>
        </>
    );
}