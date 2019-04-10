import React, { Component } from 'react'

import { Col, Row, Container, Media } from 'reactstrap';
// import Logo from './logo-white-hki.svg'
import './Footer.scss'

class Footer extends Component {
    render() {
        const cards = {
            "cards": [
                {
                    key: 1,
                    header: 'Ota yhteyttä',
                    paragraph: 'Yhteystiedot',
                    imageURL: '',
                    buttonURL: '#',
                    buttonText: ''

                }

            ]
        }
        // helsinki logo can be added to media left 
        // <img src={Logo} width='120px' alt="logo" />

        return (
            <div style={footerStyle}>
                <footer style={footerLinkSectionStyle}>
                    <Container>
                        <Row >
                            {cards.cards.map((card, i) =>
                                <Col style={rowStyle} xs='12' lg='6' key={i}>
                                    <Media className="footer-thumbnail" key={i} card={card}>
                                        <Media left>
                                        </Media>
                                        <Media body>
                                            <Media className="footer-text" heading>
                                                {card.header}
                                            </Media>
                                            {card.paragraph}
                                        </Media>
                                    </Media>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }
}

const footerStyle = {
    marginTop: '300px',
    bottom: 0,

}

const footerLinkSectionStyle = {
    backgroundColor: '#343434',
    minHeight: 200,
}

const rowStyle = {
    paddingTop: 25,
    marginBottom: 25

}

export default Footer;