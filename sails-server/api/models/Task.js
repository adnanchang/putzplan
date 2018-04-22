/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    taskName: {
      type: 'string'
    },

    startDate: {
      type: 'datetime',
      defaultsTo: Date.now()
    },

    endDate: {
      type: 'datetime'
    },

    //Connection to Housemate
    housemate: {
      model: 'housemate'
    }
  }
};

