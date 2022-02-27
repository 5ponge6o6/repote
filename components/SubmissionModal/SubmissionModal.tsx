import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'

import styles from './SubmissionModal.module.css'

interface Props {
  onClose: () => void
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

const FormContent = ({ onSubmit }: any) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Pridėti subjektą
            </Typography>

            <FFTextField
              name='subject'
              placeholder='Pvz. įmonės, produkto pavadinimas ar asmens vardas'
              label='Subjektas'
            />

            <FFTextField
              name='logo'
              placeholder='Pvz. https://example.lt/logo.png'
              label='Nuoroda į logotipą'
            />

            <FFTextField
              name='about'
              placeholder='Pvz. trumpas aprašymas'
              label='Apie'
              multiline
              rows={4}
            />

            <FFTextField
              name='connection'
              placeholder='Pvz. trumpas aprašymas'
              label='Sąsaja'
              multiline
              rows={4}
            />

            <FFTextField
              name='source'
              placeholder='Pvz. https://wikipedia.lt/apie-subjektą'
              label='Šaltinis patvirtinantis sąsają'
            />

            <Button type='submit' color='success' variant='contained'>
              Pridėti
            </Button>
          </Stack>
        </form>
      )}
    />
  )
}

const InfoContent = ({ onClose, message }: any) => {
  const onClick = () => {
    window.open(
      `mailto:${message.email}?subject=${message.subject}&body=${message.body}`
    )

    onClose()
  }

  return (
    <Alert variant='filled' severity='info'>
      <Stack spacing={2}>
        <span>
          Po šio žingsnio bus suformuotas elektroninis laiškas pagal jūsų
          pateiktus duomenis. Išsiųskite laišką ir mes pridėsime įrašą greitu
          metu.
        </span>
        <Button
          onClick={onClick}
          variant='contained'
          color='success'
          fullWidth
          size='small'
        >
          Gerai
        </Button>
      </Stack>
    </Alert>
  )
}

export const SubmissionModal = ({ onClose }: Props) => {
  const [step, setStep] = useState('initial')
  const [message, setMessage] = useState({})

  const onSubmit = (values: any) => {
    const errors = validateForm(values)

    if (Object.keys(errors).length) {
      return errors
    }

    const mappedValues = Object.entries(values)
      .map(([key, value]) => {
        return `[${key}]::[${value}]`
      })
      .join('%0d%0a') // mail new line

    setMessage({
      email: 'stoprus@protonmail.com',
      subject: 'Pridėti subjektą',
      body: mappedValues,
    })

    setStep('info')
  }

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Paper className={styles.container}>
        {step === 'initial' && <FormContent onSubmit={onSubmit} />}
        {step === 'info' && <InfoContent onClose={onClose} message={message} />}
      </Paper>
    </Modal>
  )
}
