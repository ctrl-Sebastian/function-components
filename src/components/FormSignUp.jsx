import { useState } from 'react';
import Button from '@mui/material/Button';
import {FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material/';

function FormSignUp() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [prom, setProm] = useState(true)
  const [nov, setNov] = useState(false)
  
  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
  })

  function ValidarNombre(nombre){
    if(nombre.length >= 3){
      return {
        name: { 
          error: false, 
          message: '',
        },
      }
    }else{
      return {name: {
        error: true, 
        message: 'Deben ser al menos 3 caracteres',
      },
    }
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name: ",  name, "\n",
      "last name: ",lastName, "\n",
      "email: ",email, "\n",
      "promotions: ",prom, "\n",
      "novedades: ",nov
      );
  }

  return(
    <form onSubmit={HandleSubmit}>
      <TextField 
        id="nombre"
        label="Nombre"
        variant="outlined" 
        fullWidth
        margin='normal'
        value={name}
        onChange={(e) => {
          setName(e.target.value)}}
        onBlur={(e) => {
          setErrors(ValidarNombre(e.target.value));
        }}
        error = {errors.name.error}
        helperText={errors.name.error ? errors.name.message : ''}
        />

      <TextField 
        id="apellido"
        label="Apellido"
        variant="outlined" 
        fullWidth
        margin='normal'
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value)}}
        />

      <TextField 
        id="email"
        label="Correo electronico"
        variant="outlined" 
        fullWidth
        margin='normal'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)}}
        />
      <FormGroup>
        <FormControlLabel label="Promociones" control={<Checkbox checked={prom} onChange={(e) => {
          setProm(e.target.checked)}}/>} />
        <FormControlLabel label="Novedades" control={<Checkbox checked={nov} onChange={(e) => {
          setNov(e.target.checked)}}/>} />
      </FormGroup>
      <Button variant="contained" type='submit'>Registrarse</Button>
    </form>
  )
}

export default FormSignUp