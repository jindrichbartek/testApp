

FlowRouter.route('/events', {
  middlewares: [usersTracker],

  subscriptions: function(params) {

  },

  action: function(params) {
    FlowLayout.render('inAppDesktopLayout', { main: "eventList" });
    OurConnector.subscribeToAdvisors('trainingvideos');
  },

  name: "eventList"
});

FlowRouter.route('/events/:id', {
  middlewares: [usersTracker],

  subscriptions: function(params, queryParams) {

  },

  action: function(params, queryParams) {
    FlowLayout.render('inAppDesktopLayout', { main: "singleEvent" });
    console.log("Flow router param:", params);
  },

  name: "singleEvent"
});


function usersTracker (path, next) {
  console.log('user attended page ' + path);
  next();
}