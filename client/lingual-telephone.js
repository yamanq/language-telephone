Template.hello.helpers({
  translations: function () {
    var col = translations.find().fetch();
    return col.slice(0, col.length - 1);
  },
  currenttranslation: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 2, col.length - 1)[0].translation;
  },
  fromlang: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 2, col.length - 1)[0].language;
  },
  tolang: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 1 , col.length)[0].language;
  }
});

Template.hello.events({
  'click #submitbutton': function () {
	text = document.getElementById("submission").value;
    Meteor.call("add_translation", this, text);	
  }
});

Template.translation.helpers({
	language: function() {
		return this.language;
	},
	translation: function() {
		return this.translation;
	}
});