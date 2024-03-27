const pool = require('./models');


const getLinksById = (request, response) => {
  
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM links WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
  
  }

module.exports = {getLinksById};