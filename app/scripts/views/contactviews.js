var Backbone = require('backbone');
var $ = require('jquery');


var contactForm = require('../../templates/contactForm.hbs');
var contactItemTemplate = require ('../../templates/contactItem.hbs');

var Instructions = Backbone.View.extend({
  tagName: 'div',
  id: 'instructions',
  className: 'contact-instructions well col-md-12',
  render: function(){
    this.$el.text('Fill in the Form, Please');

    // always return this from render
    return this;
  }
});

var ContactForm = Backbone.View.extend({
  tagName: 'form',
  id: 'contact-form',
  className: 'well',

  events: {
    'click. clickme': 'addContact' //bind element using one click to addContact
  },

  addContact: function(event){
    event.preventDefault();

    var contact= {
      email: $('#form-email-address').val(),
      name: $('#form-name').val(),
      phone: $('#form-phone-number').val(),
      twitter: $('#form-twitter').val(),
      linkedin: $('#form-linkedin').val(),
    }
      this.collection.create(contact);
  },

    render: function(){
      this.$el.html(contactForm());
      return this;
    }
});

  var ContactListView = Backbone.View.extend({
    tagName: 'ul',
    id: 'contact-list',
    className: 'list-group',

    initialize: function(){
      this.listenTo(this.collection, 'add', this.renderContact);
    },

    render: function(){
      return this;
    },

    renderContact: function(contact){
      var contact = new ContactItemView({model:contact});
      this.$el.append(contact.render().$el)
    }

  });

  var ContactItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: contactItemTemplate,
    events: {
      'click .destroy': 'markComplete'
    },
    initialize: function(){
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function(){
      var context = this.model.toJSON();
      this.$el.html(this.template(context));
      return this;
    },

    markComplete: function(event){
      event.preventDefault();
      this.model.destroy();
    }
});

module.exports = {
  Instructions: Instructions,
  ContactForm: ContactForm,
  ContactListView: ContactListView,
  ContactItemView: ContactItemView
};
