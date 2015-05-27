
FlowRouter.route('/', {
  middlewares: [usersTracker],

  subscriptions: function(params) {

  },

  action: function(params) {
    FlowLayout.render('inAppDesktopLayout', { main: "home" });
  },

  name: "homePage"
});

function usersTracker (path, next) {
  console.log('user attended home page');
  next();
}
