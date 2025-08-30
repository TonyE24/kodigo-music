import { useForm } from "react-hook-form";
import { useState } from "react";

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '80vh'}}>
      <div className="formulario card shadow p-4 w-100" style={{maxWidth: '600px'}}>
        <div className="form-header d-flex align-items-center justify-content-center gap-2 mb-3">
          <svg className="form-icon" width="32" height="32" viewBox="0 0 24 24" fill="#1db954" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17V5l12-2v12" stroke="#1db954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="h4 mb-0 text-success">Contactanos</h2>
        </div>
        {success && (
          <div className="alert alert-success" role="alert">
            Gracias por registrarte!
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input {...register("nombre", {required: 'Por favor ingresa tu nombre'})} className="form-control" placeholder="Nombre completo" />
            {errors.nombre && <span className="text-danger small">{errors.nombre.message}</span>}
          </div>
          <div className="mb-3">
            <input {...register("email", {required: 'Por favor ingresa tu email', pattern: {value: /^\S+@\S+$/i, message: 'Email incorrecto por favor ingresa un email valido'}})} className="form-control" placeholder="Correo electronico" />
            {errors.email && <span className="text-danger small">{errors.email.message}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
