import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const LinkAvatars = () => {
  return (
    <div>
      <IconButton children={<GitHubIcon fontSize='large'/>} href='https://github.com/dfergusbrown' target='blank'/>
      <IconButton children={<LinkedInIcon fontSize='large'/>} href='https://www.linkedin.com/in/dfergusbrown/' target='blank'/>
    </div>
  )
}

export default LinkAvatars