import {usersModel} from "../models/users.model.js"

const userAgregar = async (req, res) => {
    try {
        let foto;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        foto = req.files.foto;
        uploadPath = '/assets/img/' + foto.name;

        // Use the mv() method to place the file somewhere on your server
        foto.mv(uploadPath, function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!');
        });
        const { email, nombre, password, anos_experiencia, especialidad, estado } = req.body
        const nuevauser = { email, nombre, password, anos_experiencia, especialidad, foto, estado }
        const usersDB = await usersModel.agregar(nuevauser)
        return res.status(201).json(usersDB)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}



export const usersController = {
    userAgregar
}