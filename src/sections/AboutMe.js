import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const AboutMe = () => {

    return (
        <Container fluid className="aboutMe" id="aboutMe">
            <header>
                <h2>About Me</h2>
            </header>
            <Row md={2} xs={1}>
                <Col  className='portraitPic'>
                    <Image src="profilepic.jpg" thumbnail alt="portrait picture of site creator, Fergus Brown" />
                </Col>
                <Col>
                    <p>This is me, Fergus Brown, a web developer and recent veteran of the US Army. As I transition from my job as a linguist, I'm seeking the opportunity to build and create whilst cultivating my growing skillset.</p>
                    <p>I am actively seeking opportunities to contribute my diverse skill set and passion for web development to innovative projects. If you're looking for a dedicated and adaptable team member with a strong foundation in  technology, language-learning, and discipline gained from military service, let's connect. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;


/* Needs: 
-Better handwriting font
-adjusted proportions for image and font-size
*/
