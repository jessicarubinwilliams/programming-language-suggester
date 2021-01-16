$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const flavor = $("input:radio[name=run]:checked").val();

    const ruby = $("input:radio[name=gemology]:checked").val();
    const cSharp = $("input:radio[name=music]:checked").val();
    const python = $("input:radio[name=herpetology]:checked").val();
    const javaScript = $("input:radio[name=coffee]:checked").val();
    const swift = $("input:radio[name=run]:checked").val();

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
    $("#reveal").hide();

    event.preventDefault();
  });
  $("#refresh").click(function(event) {
    location.reload(true);
    
    event.preventDefault();
  })
});