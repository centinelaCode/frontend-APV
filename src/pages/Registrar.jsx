import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registrar = () => {
  // states
  const [nombre, setnombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  // funciones
  const handleSubmit = e => {
    e.preventDefault();

    // validamos que no existan campos vacios
    if([nombre, email, password, repetirPassword].includes('')) {
      console.log('Hay campos vacios');
      return;
    } 
    
    // validamos que los password sean iguales
    if(password !== repetirPassword){
      console.log('Los password no son iguales');
      return
    }

    if(password.length < 6) {
      console.log(password.length,'El password debe ser de al menos 6 caracteres');
      console.log(repetirPassword.length)
      return
    }

    console.log('despues if')
  }

  return (    
    <>
      <div>
        <h1 className="text-indigo-600 font-blank text-6xl font-bold">Crea tu cuenta y Administra tus <span className="text-black font-bold">Pacientes</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >Nombre</label>
            <input 
              type="text" 
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={ e => setnombre(e.target.value) }
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >email</label>
            <input 
              type="email" 
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >Password</label>
            <input 
              type="password" 
              placeholder="Tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={ e => setPassword(e.target.value) }
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >Repetir Password</label>
            <input 
              type="password" 
              placeholder="Repite tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={repetirPassword}
              onChange={ e => setRepetirPassword(e.target.value) }
            />
          </div>

          <input 
            type="submit" 
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>  

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link 
            to="/"
            className="block text-center my-5 text-gray-500"
          >¿Ya tienes una cuenta? Iniciar Sesión</Link>
          <Link 
            to="/olvide-password"
            className="block text-center my-5 text-gray-500"
          >Olvide mi Password</Link>
        </nav>
      </div>
    </>
  )
}

export default Registrar