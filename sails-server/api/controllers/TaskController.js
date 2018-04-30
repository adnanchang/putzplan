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

      Task.find(task.id)
        .populate("housemate")
        .exec(function taskFound(err, task) {
          if (err) console.log(err);

          res.json(task);
        });
    });
  },

  update: function(req, res, next) {
    console.log(req.params.all());
    Task.update({id: req.param('id')}, {
      taskName: req.param('taskName'),
      housemate: req.param('housemate')
    }).exec(function(err) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }

      res.redirect("/task/returnTask/" + req.param("id"));
    });
  },

  returnTask: function(req, res, next) {
    Task.findOne(req.param("id"))
      .populate("housemate")
      .exec(function taskFound(err, task) {
        if (err) console.log(err);

        console.log(task);
        res.json(task);
      });
  },

  delete: function(req, res, next) {
    Task.destroy({id: req.param('id')}).exec(function(err) {
      if (err) console.log(err);

      res.ok();
    })
  }
};
