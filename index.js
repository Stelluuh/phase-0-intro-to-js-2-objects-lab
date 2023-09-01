// Write your solution in this file!
const employee = {
    name: "Stella",
    streetAddress: "123 my address"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value
        return employee
}