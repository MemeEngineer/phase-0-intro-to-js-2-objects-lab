// Write your solution in this file!

const employee = {
name: "Bob",
streetAddress: "Canal street",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
const newemploy= {...employee};
newemploy[key] = value;
return newemploy;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newobj = {...employee}
    delete newobj[key]
    return newobj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete employee[key]
    return employee;
}