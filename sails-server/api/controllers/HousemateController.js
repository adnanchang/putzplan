/**
 * HousemateController
 *
 * @description :: Server-side logic for managing housemates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {
        Housemate.create(req.params.all(), function mateCreated(err, housemate) {
            if (err) 
              console.log(err);
              
            res.json(housemate);
        })
    }
};

