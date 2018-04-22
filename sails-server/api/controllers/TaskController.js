/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res, next) {
    Task.create(req.params.all(), function taskCreated(err, task) {
      if (err) console.log(err);

      Task.find(task.id).populate('housemate').exec(function taskFound(err, task) {
        if (err) console.log(err);

        res.json(task);
      });
    });
  }
};
