$(document).ready(function() {
  console.log("Script executing!");
  $("#formOne").submit(function(event) {
    console.log("Submit form successfully reached.");
    
    event.preventDefault();

  });
});