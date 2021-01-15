$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const ruby = $("input#gemology").val();
    const cSharp = $("input#music").val();
    const python = $("input#herpetology").val();
    const javaScript = $("input#coffee").val();
    const swift = $("input#run").val();

      let suggestedLanguage;
      if (ruby === "yes") {
        suggestedLanguage = "Ruby";
      } else if (cSharp === "yes") {
        suggestedLanguage = "C#";
      } else if (python === "yes") {
        suggestedLanguage = "Python";
      } else if (javaScript === "yes") {
        suggestedLanguage = "JavaScript";
      } else if (swift === "yes") {
        suggestedLanguage = "Swift";
      } else {
        suggestedLanguage = "Go";
      }

    $(".suggestedLanguage").text(suggestedLanguage) 
    $("#learnTheAnswer").show();

    event.preventDefault();
  });
  $("#refresh").click(function(event) {
    location.reload(true);
    
    event.preventDefault();
  })
});