import { GitHub } from '@mui/icons-material'
import { Dialog, Link, List, ListItem } from '@mui/material'

const GithubDialog = ({open, onClose, ghLinks}) => {
    const repoNames = ["Frontend Repo", "Backend Repo"]

  return (
    <Dialog open={open} onClose={onClose}>
        <List>
            {ghLinks.map((link, idx) => (
                <ListItem key={idx}>
                    <GitHub sx={{m:1}}/>
                    <Link href={link} target="blank" underline='hover' color="black">{repoNames[idx]}</Link>
                </ListItem>
            ))}
        </List>
    </Dialog>
  )
}

export default GithubDialog