$(document).ready(function() {
  $("formOne").submit(function(event) {
    const ruby = $("input#gemology").val();
    const cSharp = $("input#music").val();
    const python = $("input#herpetology").val();
    const javaScript = $("input#coffee").val();
    const swift = $("input#run").val();

event.preventDefault();
  });
});