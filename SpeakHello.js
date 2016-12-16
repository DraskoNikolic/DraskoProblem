(function(window){
  var helloSpeaker = {} ;
  var speakWord = "Hello";
  helloSpeaker.speak = function(name) {
speakWord + " " + name;
  }
  window.helloSpeaker= helloSpeaker;
})(window);
