import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MiniSearch from 'minisearch'
import styles from './index.module.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Navbar } from '../components/Navbar/Navbar'
import { List } from '../components/List/List'

import { DataType } from '../types/data'
import { data, getId } from '../data/retractions'
import Link from 'next/link'
import { IconButton, Tooltip } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart'

let miniSearch = new MiniSearch({
  fields: ['subject', 'about'], // fields to index for full-text search
  storeFields: ['subject', 'about', 'connection', 'source', 'logo'], // fields to return with search results
  searchOptions: {
    fuzzy: 0.2,
    prefix: true,
  },
})

data.forEach((entry) => (entry.id = getId()))
miniSearch.addAll(data)

const theme = createTheme()

const Retractions: NextPage = () => {
  const [results, setResults] = useState<DataType[]>([])
  const [terms, setTerms] = useState<string[]>([])

  const executeSearch = (value = '') => {
    const queryResults = miniSearch.search(value)
    const foundTerms = queryResults
      .map(({ terms }) => terms)
      .reduce((acc, terms) => [...acc, ...terms], [])

    setResults(queryResults as any)
    setTerms(foundTerms)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Pataisymai</title>
      </Head>

      <div>
        <Navbar
          onSearch={executeSearch}
          title='Pataisymai'
          helpText={
            <>
              Pateikiame subjektus, kurie atsisakė savo ryšių rusijoje ir/arba
              parėmė Ukrainą, arba dėl kurių dėl didelio pranešimų srauto
              suklydome.
              <br />
              <br />
              Слава Україні! Героям слава! 🇺🇦
            </>
          }
          extraIcons={
            <Link href='/' passHref>
              <Tooltip title='Susiję su rusija' placement='bottom-end'>
                <IconButton component='a' className={styles.iconButton}>
                  <ShoppingCart className={styles.icon} />
                  <div className={styles.badge}>🚫</div>
                </IconButton>
              </Tooltip>
            </Link>
          }
        />

        <List data={results.length ? results : data} searchWords={terms} />
      </div>
    </ThemeProvider>
  )
}

export default Retractions
