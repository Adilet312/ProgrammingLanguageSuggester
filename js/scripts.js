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
   name(userName);
   questionOne(question1);
   questionTwo(question2);
   questionThree(question3);
   questionFour(question4);


     function name(userN)
     {
       if(userN!="")
       {
         $(".boxNamePicture_Accepting").show();
       }
       else
       {
         $(".boxName_Warning").show();
         $(".boxNamePicture_Warning").show();
       }
     }

     function questionOne(q_one)
     {
       if(q_one==='hardware'|| q_one==='software' || q_one==='both')
       {
         $(".box1Picture_Accepting").show();


       }
       else
       {
         $(".box1_Warning").show();
         $(".box1Picture_Warning").show();
       }
     }

     function questionTwo(q_two)
     {
       if(q_two==='big company'|| q_two==='small company' || q_two==='both')
       {
         $(".box2Picture_Accepting").show();


       }
       else
       {
         $(".box2_Warning").show();
         $(".box2Picture_Warning").show();
       }
     }

     function questionThree(q_three)
     {
       if(q_three==='android'|| q_three==='ios' || q_three==='both')
       {
         $(".box3Picture_Accepting").show();


       }
       else
       {
         $(".box3_Warning").show();
         $(".box3Picture_Warning").show();
       }
     }
     function questionFour(q_four)
     {
       if(q_four==='math'||q_four==='english'||q_four==='physics'
       || q_four==='painting' )
       {
         $(".box4Picture_Accepting").show();
       }
       else
       {
         $(".box4_Warning").show();
         $(".box4Picture_Warning").show();
       }
     }



     /* Checking user's data*/

     function checkData(user,q_one,q_two,q_three,q_four,q_five)
     {
       if(user && q_one && q_two && q_three && q_four && q_five)
       {
         if((q_one==='hardware'|| q_one==='software' || q_one==='both')&&
            (q_two==='big company' || q_two==='small company' ||q_two==='both')
            && (q_three==='android'||(q_three==='ios')|| q_three==='both'))
             {
               return true;
             }
         else
         {
           return false;
         }
       }
       else
       {
         return false;
       }


     }
     var dataValidation = checkData(userName,question1,question2,question3,question4,question5);
     if(dataValidation)
     {
       if((question1==='hardware' && question2==="big company") &&
        ((question3==='android'||question3==='ios')&&(question4==='math'||question5==='backend'))

     }

  });

});
