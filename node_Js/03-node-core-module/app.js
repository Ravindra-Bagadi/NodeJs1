const fs = require('fs');
const path = require('path');

 console.log(`DIR NAME :${path.join(__dirname,'data','employees', 'employees.json')}`);

 //read json file from nested folder path
fs.readFile(path.join(__dirname , 'data' , 'employees' , 'employee.json') , 'utf-8' , (err , data) => {
    if(err) throw  err;
    let employees = JSON.parse(data);
    fs.writeFile(path.join(__dirname , 'store' , 'customer', 'customers.json') , JSON.stringify(employees), 'utf-8' , (err) => {
        if(err) throw err;
        console.log('data is written to a file');
    });
});
