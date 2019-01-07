// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
    // Enable swipe panel
  panel: {
    swipe: 'left',
  },
   popup: {
    closeByBackdropClick: true,
  },
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//DOM Events for Popup page
$$('.popup-periodtracker').on('popup:open', function
  (e, popup){
    console.log('Period Tracker popup open');
  });
$$('.popup-periodtracker').on('popup:opened', function
  (e, popup){
    console.log('Period Tracker popup opened');
  });
