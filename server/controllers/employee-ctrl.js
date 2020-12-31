const Employee = require('../models/employee-model')

createEmployee = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a employee',
        })
    }

    const employer = new Employee(body)

    if (!employer) {
        return res.status(400).json({ success: false, error: err })
    }

    employer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: employer.id,
                message: 'Employee created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Employee not created!',
            })
        })
}

getEmployeeById = async (req, res) => {
    await Employee.findOne({ id: req.params.id }, (err, employer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: employer })
    }).catch(err => console.log(err))
}

getEmployee = async (req, res) => {
    await Employee.find({}, (err, employer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!employer.length) {
            return res
                .status(404)
                .json({ success: false, error: `Employee not found` })
        }
        return res.status(200).json({ success: true, data: employer })
    }).catch(err => console.log(err))
}

module.exports = {
    createEmployee,
    getEmployee,
    getEmployeeById
}
