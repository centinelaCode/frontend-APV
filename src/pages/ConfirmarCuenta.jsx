import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Alerta from '../components/Alerta';

const ConfirmarCuenta = () => {
  // state para la alerta
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  // leemos los parametros(el token) que viene en la url
  const params = useParams();
  const { id } = params;
  // console.log(id);

  // usaremos un useEffect para enviar el token al backend
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`;
        // console.log(url);

        const { data } = await axios.get(url);        
        // console.log(data);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          error: false
        })


      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

      setCargando(false);
    }

    confirmarCuenta();
  },[])

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-blank text-6xl font-bold">Confirma tu cuenta y comienza a administrar tus<span className="text-black font-bold">Pacientes</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && 
          <Alerta alerta={alerta} 
          />
        }

        {cuentaConfirmada &&  
          <Link 
          to="/"
          className="block text-center my-5 text-gray-500"
          >Iniciar Sesión</Link>
        }
      </div>      
    </>
  )
}

export default ConfirmarCuenta