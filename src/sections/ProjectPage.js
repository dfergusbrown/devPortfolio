import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from "../components/ProjectCards";

const ProjectPage = () => {

    return(
        <Container fluid className='projectBackground' id="Projects">
            <Row className="projectHeader">
                <h2>Projects</h2>
            </Row>
            <Row md={3} className='projectCards'>
            <Col>
                <ProjectCard />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
            </Row>
        </Container>
    )
}

export default ProjectPage;