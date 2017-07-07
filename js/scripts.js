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
    var fullNameInput = $("#fullName").val();
    var answerOne = $("#questionOne").val();
    if (answerOne == 'h6') {
      count = count + 1;
    }
    var answerTwo = $("#questionTwo").val();
    if (answerTwo == 'h6') {
      count = count + 1;
    }

    var answerThree = $("#questionThree").val();
    if (answerThree == 'h6') {
      count = count + 1;
    }
    var answerFour = $("#questionFour").val();
    if (answerFour == 'h6') {
      count = count + 1;
    }
    var answerFive = $("#questionFive").val();
    if (answerFive == 'h6') {
      count = count + 1;
    }
    if (count >= 3) {
      alert('hi');
    }
    $(".fullName").text(fullNameInput);
    $(".questionOne").text(answerOne);
    $(".CSSDesign").text(answerTwo);


    $("#suggestedCourse").show();
    event.preventDefault();
  });

});
