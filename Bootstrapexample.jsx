import React from 'react'
import { Alert } from 'react-bootstrap'

const Bootstrapexample = () => {
  return (
    <div>{[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}</div>
  )
}

export default Bootstrapexample