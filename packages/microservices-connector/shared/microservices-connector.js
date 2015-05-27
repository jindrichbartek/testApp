
var advisorsApp = DDP.connect("http://localhost:6001");

TrainingVideos =  new Mongo.Collection('trainingvideos', advisorsApp);
console.log('Number of training videos before subscription : '+TrainingVideos.find().count());

OurConnector = {
  subscribeToAdvisors: function (subscriptionName) {
    advisorsApp.subscribe(subscriptionName, function () {
      console.log('Number of training videos AFTER subscription : '+TrainingVideos.find().count());
    });
  }
};

