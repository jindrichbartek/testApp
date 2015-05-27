
if (Events.find().count() === 0) {

  var eventsArray = [];


  _.each(_.range(10), function (i) {

    var event = {
    title: 'Hub Brno is loaded',
    place: 'Brno',
    coordinates: '65.1231, 122.4563',
    startDate: new Date(),
    attending: 120,
    watchingBy: 65,
    // people waiting for join to other people
    waitingForJoin: 12,
    fullDescription: 'bla bla...',
    mainImagePath: '/images/012345.png'
    };

    eventsArray.push(event);
  });


  _.each(eventsArray, function (event) {
    Events.insert(event);
  });


}
