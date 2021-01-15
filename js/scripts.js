$(document).ready(function() {
  $("formOne").submit(function(event) {
    const ruby = $("input#gemology").val();
    const cSharp = $("input#music").val();
    const python = $("input#herpetology").val();
    const javaScript = $("input#coffee").val();
    const swift = $("input#run").val();

      if (ruby === "yes") {
        $(".card").hide();
        $("#aboutRuby").show();
      } else if (cSharp === "yes") {
        $(".card").hide();
        $("#aboutC#").show();
      } else if (python === "yes") {
        $(".card").hide();
        $("#aboutPython").show();
      } else if (javaScript === "yes") {
        $(".card").hide();
        $("#aboutJavaScript").show();
      } else if (swift === "yes") {
        $(".card").hide();
        $("#aboutSwift").show();
      } else {
        $(".card").hide();
        $("#aboutGo").show();
      }

    event.preventDefault();
  });
});