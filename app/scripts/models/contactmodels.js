var Backbone = require('backbone');

var ContactItem = Backbone.Model.extend({
  idAttribute: '_id'
});


var ContactCollection = Backbone.Collection.extend({
  model: ContactItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/checkthisout'
});


module.exports = {
  ContactItem: ContactItem,
  ContactCollection: ContactCollection
};
