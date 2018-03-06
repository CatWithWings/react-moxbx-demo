module.exports = function(app) {
  app.get('/api/home_data', function(req, res){
      res.send({
          username: 'Serati Ma'
      })
  })
}