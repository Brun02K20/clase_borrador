import express from "express";
import { userServices } from "../services/users.service.js";
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const response = await userServices.getAll()
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error imprevisto" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const response = await userServices.getById(req.params.id)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error imprevisto" })
    }
})

router.post("/", async (req, res) => {
    try {
        const usuario = await userServices.insertUser(req.body)
        res.json(usuario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put("/modificar", async (req, res) => {
    const { id } = req.query
    try {
        const response = await userServices.updateUser(id, req.body)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.delete("/usuarioABorrar", async (req, res) => {
    const { id } = req.query // extraigo el query param
    try {
        const response = await userServices.deleteUser(id) // invoco al servicio
        return res.json(response)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

// TAREA: HACER UN GET BY FILTER DE USUARIOS (EL FILTRO LO DECIDEN UDS) (SOLO BACKEND)
router.get("/getUsers/byFilters", async (req, res) => {
    try {
        const response = await userServices.getByFilters(req.query.nombre, req.query.apellido)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


const usersRouter = { router }
export { usersRouter }