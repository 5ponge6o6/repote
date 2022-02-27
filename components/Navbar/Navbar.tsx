import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import AddTaskSharpIcon from '@mui/icons-material/AddTaskSharp'
import QrCodeScanner from '@mui/icons-material/QrCodeScanner'

import styles from './Navbar.module.css'
import Link from 'next/link'

interface Props {
  onSearch: (value: string) => void
  onSubmission: () => void
}

export const Navbar = ({ onSearch, onSubmission }: Props) => {
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Tooltip title='Pridėti daugiau subjektų' placement='right'>
            <IconButton onClick={onSubmission}>
              <AddTaskSharpIcon className={styles.addIcon} />
            </IconButton>
          </Tooltip>

          <Link href='/qr' passHref>
            <Tooltip title='Tikrinti kilmės šalį pagal brukšninį kodą' placement='right'>
              <IconButton component='a'>
                <QrCodeScanner className={styles.addIcon} />
              </IconButton>
            </Tooltip>
          </Link>

          <Typography
            variant='caption'
            noWrap
            component='span'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            className={styles.title}
          >
            Ar Susiję Su rusija?
            {/* Is It Connected To russia? */}
          </Typography>

          <div className={styles.search}>
            <Grid
              container
              direction='row'
              alignItems='center'
              className={styles.search}
            >
              <SearchIcon />

              <InputBase
                placeholder='Ieškoti...'
                className={styles.searchInput}
                onChange={onSearchChange}
              />
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
