import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { usuariosServices } from "../services/usuarios.services";

const Filtro = forwardRef(({ setRows }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await usuariosServices.getByFilters(data);
    setRows(response);
  };

  const setFields = () => {
    reset();
    setValue("nombre", "");
    setValue("apellido", "");
  };

  useImperativeHandle(ref, () => ({
    setFields,
  }));

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-4 rounded shadow-sm"
        style={{ width: "90%", margin: "auto" }}
      >
        <h1 className="text-center">Filtrar Usuarios</h1>
        <div className="mx-4">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            {...register("nombre", {
              required: {
                value: false,
                maxLength: {
                  value: 7,
                  message: "El nombre no puede tener mÃ¡s de 7 caracteres",
                },
              },
            })}
            className="form-control"
          />
          {errors.nombre && (
            <p className="text-danger">{errors.nombre.message}</p>
          )}
        </div>
        <br />
        <div className="mx-4">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            id="apellido"
            type="text"
            {...register("apellido", {
              required: false,
              minLength: {
                value: 2,
                message: "El apellido debe tener al menos 2 caracteres",
              },
            })}
            className="form-control"
          />
          {errors.apellido && (
            <p className="text-danger">{errors.apellido.message}</p>
          )}
        </div>
        <br />
        <button className="btn btn-primary mx-4" type="submit">
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-4"
          onClick={setFields}
        >
          Resetear
        </button>
      </form>
    </div>
  );
});

export default Filtro;
