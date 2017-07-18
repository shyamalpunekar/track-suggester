$(document).ready(function () {
  $("#rubyRails").click(function (event) {
    event.preventDefault();
    $("#rubyRails .term").toggle();
    $("#rubyRails .defbox").toggle();
  });

  $("#phpDrupal").click(function (event) {
    event.preventDefault();
    $("#phpDrupal .term").toggle();
    $("#phpDrupal .defbox").toggle();
  });

  $("#javaAndroid").click(function (event) {
    event.preventDefault();
    $("#javaAndroid .term").toggle();
    $("#javaAndroid .defbox").toggle();
  });

  $("#CSSDesign").click(function (event) {
    event.preventDefault();
    $("#CSSDesign .term").toggle();
    $("#CSSDesign .defbox").toggle();
  });

  $("#CsharpNET").click(function (event) {
    event.preventDefault();
    $("#CsharpNET .term").toggle();
    $("#CsharpNET .defbox").toggle();
  });

  $("#button").on("click", function (event) {

    var fullNameInput = $("#fullName").val();

    var headingInput = $("input:radio[name=heading]:checked").val();

    var breakElementInput = $("input:radio[name=breakElement]:checked").val();
    var languageInput = $("input:radio[name=language]:checked").val();
    var attributeInput = $("input:radio[name=attribute]:checked").val();
    var selectElementInput = $("input:radio[name=selectElement]:checked").val();

    // --- Business Logic ---
    var count = 0;

    if (headingInput == 'h1') {
      count = count + 1;
    }

    if (breakElementInput == 'br') {
      count = count + 1;
    }

    if (languageInput == 'client scripting') {
      count = count + 1;
    }

    if (attributeInput == 'style') {
      count = count + 1;
    }

    if (selectElement == 'true') {
      count = count + 1;
    }
    if (count >= 3) {
      alert('Form Submitted, Thank You!');
      $("#suggestedCourse").show();
    } else if (count >= 2) {
      $("#meetUs").show();
    } else {
      $("#try").show();
    }
    $(".fullName").text(fullNameInput);
    $(".questionOne").text(headingInput);
    $(".CSSDesign").text(breakElementInput);

    event.preventDefault();

  });

});
