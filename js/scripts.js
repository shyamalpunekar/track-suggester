$(document).ready(function () {
  $("#rubyRails").click(function (event) {
    event.preventDefault();
    $("#rubyRails .term").toggle();
    $("#rubyRails .defbox").toggle();
  });

  $("#phpDrupal").click(function (event) {
    event.preventDefault();
    $("#pDrupal .term").toggle();
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
    var count = 0;
    var address = $(".address").append("400 SW 6th Ave #800, Portland, OR 97204");
    var fullNameInput = $("#fullName").val();
    var answerOne = $("#questionOne").val();
    if (answerOne == 'h6') {
      count = count + 1;
    }
    var answerTwo = $("#questionTwo").val();
    if (answerTwo == '<br/>') {
      count = count + 1;
    }

    var answerThree = $("#questionThree").val();
    if (answerThree == 'client scripting') {
      count = count + 1;
    }
    var answerFour = $("#questionFour").val();
    if (answerFour == 'style') {
      count = count + 1;
    }
    var answerFive = $("#questionFive").val();
    if (answerFive == 'true') {
      count = count + 1;
    }
    if (count >= 3) {
      alert('Form Submitted');
    } else {
      alert("Please, enter other details");
    }
    $(".fullName").text(fullNameInput);
    $(".questionOne").text(answerOne);
    $(".CSSDesign").text(answerTwo);


    $("#suggestedCourse").toggle();
    $("#meetUs").toggle();
    event.preventDefault();

  });

});
