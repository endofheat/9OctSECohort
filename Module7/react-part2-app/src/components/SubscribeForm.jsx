import { useState } from 'react'
import { useFormInput } from '../hooks/useFormInput'

export default function SubscribeForm () {
  const [status, setStatus] = useState('')

  // similar state variables mapped to form inputs
  const [firstNameProps, resetFName] = useFormInput('Mary')
  const [lastNameProps, resetLName] = useFormInput('Poppins')
  const [emailProps, resetEmail] = useFormInput('mary@poppins.com')

  /*  // similar handler functions
  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
 */
  function handleSubscribe () {
    resetFName(); resetLName()
    resetEmail()
    setStatus('Thanks for subscribing!')
  }

  return (
    <div className='SubscribeForm componentBox'>
      <label>
        First name: {/* form inputs with similar props */}
        <input {...firstNameProps} />
      </label>
      <label>
        Last name: {/* form inputs with similar props */}
        <input {...lastNameProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  )
}
