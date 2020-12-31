const express = require('express')

const EmployeeCtrl = require('../controllers/employee-ctrl')

const router = express.Router()

router.post('/employees', EmployeeCtrl.createEmployee)
router.get('/employees/:id', EmployeeCtrl.getEmployeeById)
router.get('/employees', EmployeeCtrl.getEmployee)

module.exports = router
