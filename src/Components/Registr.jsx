import React, { useState } from 'react'

const Registr = () => {
  const [show, setShow] = useState('none')
  const [name,setName] = useState('')
  const [lastname , setLastname] = useState('')
  const toggleMes = () => {
    setShow('block')
  }
  return (
    <form  onSubmit={(e)=>{
      e.preventDefault()
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      e.target[3].value = ''
      console.log(e)
      toggleMes()
    }} className='register-work'>
      <div className={show}>Success!</div>
      <br />
      <br />
      <input type="text" className='name' />
      <br />
      <br />
      <input type="text" className='surname' />
      <br />
      <br />
      <input type="text" className='email' />
      <br />
      <br />
      <button className='btn-register'>Зарегистрироваться</button>
    </form>
  )
}

export default Registr


