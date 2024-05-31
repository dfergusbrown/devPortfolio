import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GithubDialog from "./GithubDialog";
import { useState } from "react";

export default function ImgMediaCard({ project, isExpanded, handleToggle }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={project.imgsrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        {isExpanded ? (
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleToggle}>
          {isExpanded ? "Collapse" : "Details"}
        </Button>
        <Button size="small" href={project.url} target="blank">Live</Button>
        <Button size="small" onClick={() => setOpen(true)}>GitHub</Button>
        <GithubDialog open={open} onClose={handleClose} ghLinks={project.github}/>
      </CardActions>
    </Card>
  );
}
