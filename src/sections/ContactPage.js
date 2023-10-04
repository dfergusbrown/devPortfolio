import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { TiSocialLinkedin } from 'react-icons/ti'
// import { AiFillGithub } from 'react-icons/ai'
// import { GrDocument } from 'react-icons/gr'
import { SocialIcon } from 'react-social-icons';

const ContactPage = () => {

    return(
        <Container fluid className="contactPage justify-content-center" id="contactMe">
            <Row>
                <header>
                    <h2>Contact Me</h2>
                </header>
            </Row>
            <Row className='social-media-icons'>
                <Col>
                    <SocialIcon url="https://linkedin.com/in/dfergusbrown" />
                    <SocialIcon url="https://https://github.com/dfergusbrown" />
                    <SocialIcon url=" https://discordapp.com/channels/@me/dfergusbrown/" network="discord"/>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage;

// Insert links for Resume, Github, LinkedIn
