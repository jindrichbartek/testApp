Events = new Mongo.Collection('events');

Events.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
});

Events.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});