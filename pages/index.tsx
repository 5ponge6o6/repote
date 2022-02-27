import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MiniSearch from 'minisearch'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Navbar } from '../components/Navbar/Navbar'
import { List } from '../components/List/List'
import { SubmissionModal } from '../components/SubmissionModal/SubmissionModal'

import { DataType } from '../types/data'
import { data } from '../data'

let miniSearch = new MiniSearch({
  fields: ['subject', 'about'], // fields to index for full-text search
  storeFields: ['subject', 'about', 'connection', 'source', 'logo'], // fields to return with search results
  searchOptions: {
    fuzzy: 0.2,
    prefix: true,
  },
})

miniSearch.addAll(data)

const theme = createTheme()

const Home: NextPage = () => {
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false)
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

  const onModalClose = () => {
    setIsSubmissionOpen(false)
  }
  const onSubmission = () => {
    setIsSubmissionOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ar Susiję Su rusija?</title>

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>

      <div>
        <Navbar onSearch={executeSearch} onSubmission={onSubmission} />

        <List data={results.length ? results : data} searchWords={terms} />

        {isSubmissionOpen && <SubmissionModal onClose={onModalClose} />}
      </div>
    </ThemeProvider>
  )
}

export default Home
