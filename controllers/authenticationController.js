const Student = require('../models/Student');
const bcrypt = require('bcrypt')

const login = async (req, res, next) => {
    // res.send('Logging in...')
    const { email, password } = req.body

    let student = await Student.findOne({ email })
    if (!student) return res.status(400).send('Invalid Credentials')

    const match = await bcrypt.compare(password, student.password)

    if (!match) return res.status(400).send(`Invalid Credentials`)

    const token = student.createToken()
    res.set('x-authorization-token', token).send('User logged in successfully')
    // res.send(token)
}

module.exports = {
    login
}