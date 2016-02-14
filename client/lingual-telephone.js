Template.hello.helpers({
  translations: function () {
    var col = translations.find().fetch();
    return col.slice(0, col.length - 1);
  },
  currenttranslation: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 2, col.length - 1).translation;
  },
  fromlang: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 2, col.length - 1).language;
  },
  tolang: function() {
    var col = translations.find().fetch();
    return col.slice(col.length - 1, col.length).language;
  }
});

Template.hello.events({
  'click button': function () {
    Session.set('counter', Session.get('counter') + 1);
  }
});