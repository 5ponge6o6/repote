import React, { ReactNode, useState } from 'react'
import { Form, Field } from 'react-final-form'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'

import styles from './SubmissionModal.module.css'

interface Props {
  onClose: () => void
  endpoint: string
  beforeForm?: ReactNode
}

const validHttpUrl = (value: string) => {
  const MESSAGE = 'Neteisinga nuoroda'
  let url

  try {
    url = new URL(value)
  } catch (_) {
    return MESSAGE
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return MESSAGE
  }
}
const required = (value: string | undefined) => !value && 'Privalomas laukas'

const validateForm = (values: any) => {
  const errors: any = {}
  const VALIDATION_CONFIG = {
    logo: [validHttpUrl, required],
    subject: [required],
    about: [required],
    connection: [required],
    source: [validHttpUrl, required],
  }

  const fields = Object.entries(VALIDATION_CONFIG).forEach(
    ([field, validationRules]) => {
      const fieldValue = values[field]

      validationRules.forEach((validationFunction) => {
        const validationMessage = validationFunction(fieldValue)

        if (validationMessage) {
          errors[field] = validationMessage
        }
      })
    }
  )

  return errors
}

interface FFTextField {
  name: string
  placeholder: string
  label: string
  multiline?: boolean
  rows?: number
}
const FFTextField = (props: FFTextField) => {
  const { name } = props

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          variant='filled'
          fullWidth
          {...props}
          {...input}
          helperText={!meta.dirtySinceLastSubmit ? meta.submitError : ''}
          error={Boolean(meta.submitError && !meta.dirtySinceLastSubmit)}
        />
      )}
    </Field>
  )
}

const FormContent = ({ onSubmit, beforeForm }: any) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Prid??ti subjekt??
            </Typography>

            {beforeForm}

            <FFTextField
              name='subject'
              placeholder='Pvz. ??mon??s, produkto pavadinimas ar asmens vardas'
              label='Subjektas'
            />

            <FFTextField
              name='logo'
              placeholder='Pvz. https://example.lt/logo.png'
              label='Nuoroda ?? logotip??'
            />

            <FFTextField
              name='about'
              placeholder='Pvz. trumpas apra??ymas'
              label='Apie'
              multiline
              rows={4}
            />

            <FFTextField
              name='connection'
              placeholder='Pvz. trumpas apra??ymas'
              label='S??saja'
              multiline
              rows={4}
            />

            <FFTextField
              name='source'
              placeholder='Pvz. https://wikipedia.lt/apie-subjekt??'
              label='??altinis patvirtinantis s??saj??'
            />

            <Button type='submit' color='success' variant='contained'>
              Prid??ti
            </Button>
          </Stack>
        </form>
      )}
    />
  )
}

export const SubmissionModal = ({ onClose, endpoint, beforeForm }: Props) => {
  const [message, setMessage] = useState('')

  const onSubmit = (values: any) => {
    const errors = validateForm(values)

    if (Object.keys(errors).length) {
      return errors
    }

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value))
    })

    fetch(endpoint, {
      method: 'post',
      body: formData,
      mode: 'no-cors',
    }).then(() => {
      setMessage(
        'D??kui! Per??i??r??sime ir prid??sime ??ra???? greitu metu. Langas pats u??sidarys po 5 sekund??i??'
      )
      setTimeout(onClose, 5000)
    })
  }

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Paper className={styles.container}>
        <IconButton className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>

        {message ? (
          <Alert severity='success'>{message}</Alert>
        ) : (
          <FormContent onSubmit={onSubmit} beforeForm={beforeForm} />
        )}
      </Paper>
    </Modal>
  )
}
