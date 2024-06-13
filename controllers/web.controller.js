const inicio = async (req, res) => {
    try {
        return res.render('home')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const login = async (req, res) => {
    try {
        return res.render('login')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const register = async (req, res) => {
    try {
        return res.render('register')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const webController = {
    inicio, login, register
}