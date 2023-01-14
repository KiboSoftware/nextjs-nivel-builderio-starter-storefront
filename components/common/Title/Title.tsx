import React from 'react'

import { Typography } from '@mui/material'

export interface TitleProps {
  title: string
}

const Title = (props: TitleProps) => {
  const { title } = props

  return (
    <Typography
      variant="h2"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2rem',
        '&::before': {
          content: `""`,
          flex: '1 1',
          borderBottom: '1px solid',
          margin: 'auto',
          marginRight: '10px',
          height: '0.2rem',
          borderColor: '#ccc',
        },
        '&::after': {
          content: `""`,
          flex: '1 1',
          borderBottom: '1px solid',
          margin: 'auto',
          marginLeft: '10px',
          borderColor: '#ccc',
        },
      }}
    >
      {title}
    </Typography>
  )
}

export default Title
