/**
 * HousemateController
 *
 * @description :: Server-side logic for managing housemates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res, next) {
    Housemate.create(req.params.all(), function mateCreated(err, housemate) {
      if (err) console.log(err);

      res.json(housemate);
    });
  },

  update: function(req, res, next) {
    console.log(req.params.all());
    Housemate.update({ id: req.param("id") }, {name: req.param('name')}).exec(function (err) {
        if (err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/housemate/returnUser/' + req.param('id'));
    });
  },

  returnUser: function(req, res, next) {
    Housemate.findOne({
        id: req.param('id')
    }).exec(function(err, mate) {
        if (err){
            res.send(500, {error: 'Housemate not found'});
        }

        console.log(mate);
        res.json(mate);
    });
  },

  delete: function(req, res, next) {
    Housemate.destroy({id: req.params.id}).exec(function(err){
      if (err){
          res.send(500, {error: 'Database Error'});
      }
      res.send(200);
  })
  }
};
