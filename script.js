
$(function () {
 
    
$("#myButton").on("click" , function() {
    let text = $("#input").val();
    $("#list").append('<li>' +text+ '</li>');
    $("input").val("");
    return false;
});

$("#list").on("click" , function(){
    $("#list").css("text-decoration" , "line-through");
});

});