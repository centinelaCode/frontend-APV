import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>      
      <div>
        <h1 className="text-indigo-600 font-blank text-6xl font-bold">Inicia Sesión y Administra tus <span className="text-black font-bold">Pacientes</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >email</label>
            <input 
              type="email" 
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
            />
          </div>

          <input 
            type="submit" 
            value="Iniciar Sesión"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link 
            to="/registrar"
            className="block text-center my-5 text-gray-500"
          >¿No tienes una cuenta? Registrate</Link>
          <Link 
            to="/olvide-password"
            className="block text-center my-5 text-gray-500"
          >Olvide mi Password</Link>
        </nav>
      </div>
    </>
  )
}

export default Login