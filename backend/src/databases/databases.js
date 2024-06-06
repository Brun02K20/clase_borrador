import { Sequelize } from "sequelize";
import { UsuariosModel } from "../models/Usuarios.js";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

sequelize.define("Usuarios", UsuariosModel.usuariosAttributes, UsuariosModel.usuariosMethods)

export default sequelize