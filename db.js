
	
var config = {  
	server: 'LAPTOP-V14PSSVE',  //update me
	port: 1433,
	authentication: {
		type: 'default',
		options: {
			userName: 'root', //update me
			password: 'mathew'  //update me
		}
	},
	options: {
	   // If you are on Microsoft Azure, you need encryption:
		encrypt: true,
		database: 'sunview'  //update me
	}
};  
	
const sql = require('mssql')

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
	
module.exports = {
  sql, poolPromise
}