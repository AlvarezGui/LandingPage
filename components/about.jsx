import Estilo from '../styles/about.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function About(){
    return(
        <>
            <div className={Estilo.container_bg}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image className='img-fluid' src={'/assets/image-about.png'} width={500} height={500}></Image>
                        </Col>
                        <Col xs={12} md={6} className={Estilo.details}>
                            <div>
                                <h2>Best Offer Town</h2>
                                <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti.</b>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quia, reiciendis ullam deserunt eos blanditiis tempora animi labore, sed non fugiat quae, voluptatum odit.</p>
                                <button className={'btn' + Estilo.botao}> Explore Moere</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}