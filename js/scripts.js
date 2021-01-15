$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const ruby = $("input#gemology").val();
    const cSharp = $("input#music").val();
    const python = $("input#herpetology").val();
    const javaScript = $("input#coffee").val();
    const swift = $("input#run").val();

    if (ruby === "yes") {
      $(".card").hide();
      $("#aboutRuby").show();
      $("#takeQuizAgain").show();
    } else if (cSharp === "yes") {
      $(".card").hide();
      $("#aboutC").show();
      $("#takeQuizAgain").show();
    } else if (python === "yes") {
      $(".card").hide();
      $("#aboutPython").show();
      $("#takeQuizAgain").show();
    } else if (javaScript === "yes") {
      $(".card").hide();
      $("#aboutJavaScript").show();
      $("#takeQuizAgain").show();
    } else if (swift === "yes") {
      $(".card").hide();
      $("#aboutSwift").show();
      $("#takeQuizAgain").show();
    } else {
      $(".card").hide();
      $("#aboutGo").show();
      $("#takeQuizAgain").show();
    }
    event.preventDefault();

  });
});