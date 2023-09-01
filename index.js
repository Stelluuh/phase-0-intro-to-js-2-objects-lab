// Write your solution in this file!
const employee = {
    name: "Stella",
    streetAddress: "123 my address"
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        ...employeeObj,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
        employeeObj[key] = value //Bracket Notation
        return employeeObj
}

function deleteFromEmployeeByKey(employeeObj, key){
    const copyOfEmployee = {...employeeObj}
    delete copyOfEmployee.key //Dot notation
    return copyOfEmployee
}