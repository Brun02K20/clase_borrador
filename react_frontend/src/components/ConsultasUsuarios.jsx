import React, { useEffect, useRef, useState } from "react";
import { usuariosServices } from "../services/usuarios.services";
import Filtro from "./Filtro";
import Tabla from "./Tabla";

export default function ConsultasUsuarios() {
  const [rows, setRows] = useState([]);
  const filtroRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setRows(await usuariosServices.getAll());
  }

  const handleDeleteUser = async (id) => {
    await usuariosServices.deleteUser(id);
    await fetchData(); // Obtener los datos actualizados después de eliminar el usuario
  };

  const resetFilters = async () => {
    await fetchData();
    if (filtroRef.current) {
      filtroRef.current.setFields(); // Llama a la función setFields del componente Filtro
    }
  };

  return (
    <>
      <div className="row">
        <Filtro setRows={setRows} ref={filtroRef} />
      </div>
      <div className="row">
        <Tabla
          rows={rows}
          handleDeleteUser={handleDeleteUser}
          resetFilters={resetFilters}
        />
      </div>
    </>
  );
}
