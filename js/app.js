


//check and set the number of notifications in the spans and popups
$(".notification-number").text($(".notification-menu-under-container .alert-message").length);
$(".notification-number-span").text($(".notification-menu-under-container .alert-message").length);


//if we have unread notification slidedown the popup at start
long=$(".notification-menu-under-container > * ");
if(long.length >= 3){
    $(".unread-message-container").slideDown(150);
}

//script for the notification menu when clicking on the bell svg
var long=$(".notification-menu-under-container > * ");

$(".closing-butt").click( function(){

    long=$(".notification-menu-under-container > * ");

    $(this).parent().slideUp(150).queue(function(){
        $(this).remove();
        $(".notification-number").text($(".notification-menu-under-container .alert-message").length);
        $(".notification-number-span").text($(".notification-menu-under-container .alert-message").length);
    });
    
    //if we havent notifications or they get removed, remove the notification popup and add "no messages"
    if(long.length <= 3){
        $(".no-message").removeClass("no-message");
        $(".unread-message").parent().slideUp(150).queue(function(){
            $(".unread-message").remove();
        });
        $(".notification-number").fadeOut();
    }
});

//toggle the menu popup when clicking on svg
$(".svg-menu-container").click(function(){
    $(".notification-menu").toggleClass("notification-menu-remove");
});








// Set the select width responsive 
var maxLength = ($("HTML").width() / 12) ;
$('#timezone > option').text(function(i, text) {
if (text.length > maxLength) {
    return text.substr(0, maxLength) + '...';  
}
});








// show confirm/error message for submit button
var users=[];
var a=0;
var imax = $(".user-name").length;


for(var i=0; i < imax ; i++){
    users.push($(".user-name:eq("+i+")").text().toLowerCase());
};


$(".send-button").click(function(e){
    e.preventDefault();

    for(var i=0; i < imax; i++){

        //check if input == to one of the users in the users array and increase a counter
        if(users[i] === $(".search-input").val().toLowerCase()){
            a = a+1;
        }
    };

    //check if text inputs fields are filled and go inside other if or display error overlay
    if($(".search-input").val() && $(".textarea").val()){

        //if a counter is > 0 this means that the user input == to one of the users in the array so display the right overlay
        if(a > 0){
            $(".message-sent").addClass("active").delay(1500).queue(function(next){
                $(".message-sent").removeClass("active");
                next();
                $(".search-input").val("");
                $(".textarea").val("");
            });
        } else {

            $(".message-error").addClass("active").delay(1500).queue(function(next){
                $(".message-error").removeClass("active");
                next();
            });
        }

    } else {
        $(".message-error").addClass("active").delay(1500).queue(function(next){
           $(".message-error").removeClass("active");
           next();
       });
    } 

    //reset a counter
    a=0;
  
});




//autocomplete--------------
$(function(){
    $(".search-input").autocomplete({source:users});
});





//localStorage--------------

//set the checked attr to the checkboxes taking it from localstorage
var selected=localStorage.getItem("selected");


//save the selected option in the selected var
$("#timezone").change(function(){
    $("#timezone option:selected").each(function(){
        selected= $(this).val();
    });
});

//for each option if this is == to the one saved in localstorage so add the "selected" attribute
$("#timezone option").each(function(){
    if($(this).val() === localStorage.getItem("selected")){
        $(this).attr("selected", true);
    }
});


//get checboxes attr from localstorage and set it on or off
if(localStorage.getItem("checked-first") === "true"){
    $("#checkbox-first").attr('checked', true);
} else {
    $("#checkbox-first").attr('checked', false);
}
if(localStorage.getItem("checked-second") === "true"){
    $("#checkbox-second").attr('checked', true);
} else {
    $("#checkbox-second").attr('checked', false);
}



//change checkbox status when clicking on it
$("#checkbox-first").on( "click", function(){
    if(!$("#checkbox-first").attr("checked")){
        $("#checkbox-first").attr('checked', true);
    } else {
        $("#checkbox-first").attr('checked', false);
    }
});
$("#checkbox-second").on( "click", function(){
    if(!$("#checkbox-second").attr("checked")){
        $("#checkbox-second").attr('checked', true);
    } else {
        $("#checkbox-second").attr('checked', false);
    }
});


//save in localstorage the checkboxes configuration
$(".save-button").on("click", function(){
    if($("#checkbox-first").prop("checked")){
        localStorage.setItem("checked-first", true);
    } else {
        localStorage.setItem("checked-first", false);
    }

    if($("#checkbox-second").prop("checked")){
        localStorage.setItem("checked-second", true);
    } else {
        localStorage.setItem("checked-second", false);
    }

    localStorage.setItem('selected', selected);
});


//cancel button reset checkboxes to false and selected to default
$(".cancel-button").on("click", function(){
    $("#checkbox-first").prop('checked', false);
    $("#checkbox-second").prop('checked', false);

    $("#timezone option").each(function(){
        $(this).attr("selected", false);
    });
    $("#timezone option:first-child").attr("selected", true);
    selected=$("#timezone option:first-child").val();
});

    




// show save and cancel overlay----
$(".save-button").on("click", function(){
    $(".saved").addClass("active").delay(800).queue(function(next){
        $(".saved").removeClass("active");
        next();
    });
});

$(".cancel-button").on("click", function(){
    $(".cancel").addClass("active").delay(1700).queue(function(next){
        $(".cancel").removeClass("active");
        next();
    });
});




    
  