// var Backbone = require('backbone'); do not need to require backbone on the index.js
var $ = require('jquery');

// require in the instructions and contact form by using the .Instructions after the norma require statement
var Instructions = require('./views/contactviews.js').Instructions;
var ContactForm = require('./views/contactviews.js').ContactForm;

var ContactListView = require('./views/contactviews.js').ContactListView;
var ContactCollection = require('./models/contactmodels.js').ContactCollection;


$(function(){

var contactCollection = new ContactCollection();

var instructions = new Instructions();// do this again and again to print things to the screen
$('.instructions-container').html(instructions.render().$el);

var contactForm = new ContactForm({collection: contactCollection});
$('.app').append(contactForm.render().$el);

var contactListView = new ContactListView({collection: contactCollection});
$('.your-contacts').append(contactListView.render().$el);

contactCollection.fetch();
});
