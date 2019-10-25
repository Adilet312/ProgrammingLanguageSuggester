$(document).ready(function()
{
  $("form.formID").submit(function(event)
  {
    event.preventDefault();
    /* To get data from user and initialize values for variables.*/
    var userName  =  $("#nameID").val();
    var question1 =  $("#question_oneID").val();
    var question2 =  $("#question_twoID").val();
    var question3 =  $("#question_threeID").val();
    var question4 =  $("#question_fourID").val();
    var question5 =  $("input:radio[name=field]:checked").val();
    var output =userName+","+question1+","+
    question2+","+question3+","+question4+","+
    question5;
     console.log(output);
  });

});
