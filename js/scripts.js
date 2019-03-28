$(function() {
  var age = parseInt(prompt("Enter your age"));
    if(age > 0 && age < 10){
      $("#easy").removeClass();
      $("#easy").addClass("highlight");
    }else if (age >= 10 && age <= 15){
            $("#easy, #medium").removeClass();
            $("#easy, #medium").addClass("highlight");
          }else if (age >= 16 && age <= 99){
                  $("#easy, #medium, #hard").removeClass();
                  $("#easy, #medium, #hard").addClass("highlight");
                }else alert("Youre too old, go away");
});



    //shows only available
    //$(function() {
    //var age = parseInt(prompt("Enter your age"));
    //if(age > 0 && age < 10){
    // if(age > 0 && age < 10){
    //   $("#easy").show();
    // }else if (age >= 10 && age <= 15){
    //   $("#easy, #medium").show();
    // }else if (age >= 16 && age <= 99){
    //   $("#easy, #medium, #hard").show();
    // }else alert("Youre too old, go away");
