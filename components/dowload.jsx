import Estilo from'../styles/dowload.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Dowload(){
    return(
        <>
            <div className={Estilo.container_bg}>
                <Container className={Estilo.container}>
                    <h3>Get Food with Foodo</h3>
                    <h3>Dowload the App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem ipsam dicta molestias amet architecto et unde dolorum hic maiores, dolores quae possimus cupiditate corrupti!</p>
                </Container>
                <Container className={Estilo.imagens}>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image src={'/assets/app-aple-btn.svg'} className='img-fluid' width={244} height={76}></Image>
                        </Col>
                        <Col xs={12} md={6}>
                            <Image src={'/assets/app-play-btn.svg'} className='img-fluid' width={244} height={76}></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}