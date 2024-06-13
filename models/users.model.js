import { pool } from "../database/connection.js";

const agregar = async ({ email, nombre, password, anos_experiencia, especialidad, foto, estado}) => {
    const query = {
        text: "INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        values: [email, nombre, password, anos_experiencia, especialidad, foto, estado]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const usersModel = {
   agregar
}

