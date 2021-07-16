const fs = require('fs');

/*
//synchronous way
let fileContent = fs.readFileSync('message.txt', 'utf-8');
console.log(fileContent);

let newContent =`this is new content :${fileContent}`;
fs.writeFileSync('hello.txt',newContent,'utf-8');
console.log('data os written to file');*/


/*
//Asynchronous Way
fs.readFile('message.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
    fs.writeFile('data.txt',data,'utf-8',(err,data)=>{
        if (err) throw err;
        console.log('data writtem to file');
    })
});
console.log('core module example');
*/

//JSON files

let employees = [{"id":1,"first_name":"Alice","last_name":"McReynold","email":"amcreynold0@arizona.edu","gender":"Female","ip_address":"251.138.84.165"},
    {"id":2,"first_name":"Jackson","last_name":"Toxell","email":"jtoxell1@oracle.com","gender":"Male","ip_address":"118.232.127.67"},
    {"id":3,"first_name":"Alard","last_name":"Chillistone","email":"achillistone2@about.com","gender":"Male","ip_address":"239.83.157.32"},
    {"id":4,"first_name":"Abram","last_name":"Broddle","email":"abroddle3@mail.ru","gender":"Male","ip_address":"212.122.203.140"},
    {"id":5,"first_name":"Van","last_name":"Bartosek","email":"vbartosek4@liveinternet.ru","gender":"Female","ip_address":"55.192.60.1"},
    {"id":6,"first_name":"Maryann","last_name":"McGarrie","email":"mmcgarrie5@cdbaby.com","gender":"Female","ip_address":"16.167.13.104"},
    {"id":7,"first_name":"Leila","last_name":"Exton","email":"lexton6@sciencedaily.com","gender":"Female","ip_address":"88.135.228.72"},
    {"id":8,"first_name":"Alaine","last_name":"Duplain","email":"aduplain7@nba.com","gender":"Female","ip_address":"63.83.97.179"},
    {"id":9,"first_name":"Britt","last_name":"Siveter","email":"bsiveter8@reddit.com","gender":"Male","ip_address":"225.136.226.116"},
    {"id":10,"first_name":"Candy","last_name":"Saiger","email":"csaiger9@google.de","gender":"Female","ip_address":"12.111.191.25"}];

//creaate a new .json file
fs.writeFile('employee.json',JSON.stringify(employees),'utf-8',(err)=>{
    if (err) throw err;
    console.log('data written to a file');
});

fs.readFile('employee.json','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(JSON.parse(data));
})