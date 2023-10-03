import Card from "react-bootstrap/Card"


const ProjectCard = () => {
    return (
        <Card 
        border="secondary" 
        style={{ width: "16rem"}}
        >
            <Card.Img variant="top" src="oldmagesite.png" width="100%"/>
            <Card.Body>
                <Card.Text>Elminster, the old mage, helps DND beginners find their calling</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;