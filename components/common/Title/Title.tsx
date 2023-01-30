import React from 'react'

import { Typography } from '@mui/material'

export interface TitleProps {
  title: string
}

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2rem',
    '&::before': {
      content: `""`,
      flex: '1 1',
      borderBottom: '1px solid',
      margin: 'auto',
      marginRight: '10px',
      borderColor: 'grey.500',
    },
    '&::after': {
      content: `""`,
      flex: '1 1',
      borderBottom: '1px solid',
      margin: 'auto',
      marginLeft: '10px',
      borderColor: 'grey.500',
    },
  },
}

const Title = (props: TitleProps) => {
  const { title } = props

  return (
    <Typography variant="h2" sx={styles.title}>
      {title}
    </Typography>
  )
}

export default Title
