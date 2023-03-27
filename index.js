// Write your solution in this file!
let employee = {
    name : '',
    streetAddress: '', 
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let updated = {...employee}
    updated[key] = value; 
    // console.log(employee)
    // console.log(updated)
    return updated
}
updateEmployeeWithKeyAndValue(employee, "car", "porsche")


const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key ,value)  => {
    obj[key] = value;
    // console.log(obj)
    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "car", "porsche")


const deleteFromEmployeeByKey = (obj, key) => {
    let modified_Obj = {...obj}
    delete modified_Obj[key]
    return modified_Obj;
}
deleteFromEmployeeByKey(employee, "car")


const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key]
    return obj
}






