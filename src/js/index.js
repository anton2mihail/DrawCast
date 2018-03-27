$(document).ready(function() {
  $("#email-form").hide();
  $("#email").click(function(){
      $("#email-form").show();
      $("#email").toggle();
  });
  $("#email-submit").click(function(){
      $("#email").toggle();
      $("#email-form").toggle();
  });
});

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('./sws/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
