employeeCreatorProtype = {
    averageHours: function averageHours() {
        return this.totalHours/this.days;
    },
}


function employeeCreator(id, name, totalHours, days) {
    var newEmp = Object.create(employeeCreatorProtype);
    newEmp.id = id
    newEmp.name = name;
    newEmp.totalHours = totalHours;
    newEmp.days = days;
    return newEmp; 
}

salesCreatorPrototype = {
    targetAcheived: function targetAcheived() {
        return (this.sales > this.target) ? true: false;
    }
}


function SalesEmpCreator(id, name, totalHours, days, target, sales) {
    let newSales = employeeCreator(id, name, totalHours, days);
    Object.setPrototypeOf(newSales, salesCreatorPrototype);
    Object.setPrototypeOf(salesCreatorPrototype, employeeCreatorProtype);
    newSales.target = target;
    newSales.sales = sales;
    return newSales;
}

let newSales = SalesEmpCreator(23, 'ramesh', 23, 34, 25, 100);




function Employee(id, name, totalHours, days) {
    this.id = id;
    this.name = name;
    this.totalHours = totalHours;
    this.days = days;
}

Employee.prototype.averageHours = function averageHours() {
    return this.totalHours/this.days;
};


function SalesEmp(id, name, totalHours, days, target, sales) {
    Employee.call(this, id, name, totalHours, days);
    this.target = target;
    this.sales = sales;
}

SalesEmp.prototype = Object.create(Employee.prototype);

SalesEmp.prototype.targetAcheived = function targetAcheived() {
    return (this.sales > this.target) ? true: false;
};

Object.setPrototypeOf()

let check = new SalesEmp(23, 'ramesh', 23, 34, 25, 100);

