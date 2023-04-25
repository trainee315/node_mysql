import * as mysql from 'mysql';
console.log(mysql);
// let connection = mysql.createConnection({
//   host: '124.222.147.181',
//   user: 'root',
//   password: '123456',
//   database: 'database_mysql'
// });

// connection.connect();

//查
// var sql = 'SELECT * FROM websites';
// connection.query(sql, function (err, result) {
//   if (err) {
//     console.log('[SELECT ERROR] - ', err.message);
//     return;
//   }

//   console.log('--------------------------SELECT----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');
// });

//增
// let addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// let addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

//改
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

//删
// var delSql = 'DELETE FROM websites where id=6';
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// connection.end();