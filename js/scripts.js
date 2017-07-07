$(document).ready(function() {
  $("#Ruby-Rails").click(function(event) {
    event.preventDefault();
    $("#Ruby-Rails .term").toggle();
    $("#Ruby-Rails .defbox").toggle();
  });

  $("#PHP-Drupal").click(function(event) {
    event.preventDefault();
    $("#PHP-Drupal .term").toggle();
    $("#PHP-Drupal .defbox").toggle();
  });

  $("#Java-Android").click(function(event) {
    event.preventDefault();
    $("#Java-Android .term").toggle();
    $("#Java-Android .defbox").toggle();
  });

  $("#CSS-Design").click(function(event) {
    event.preventDefault();
    $("#CSS-Design .term").toggle();
    $("#CSS-Design .defbox").toggle();
  });

  $("#C#-.NET").click(function(event) {
    event.preventDefault();
    $("#C#-.NET .term").toggle();
    $("#C#-.NET .defbox").toggle();
  });
});
