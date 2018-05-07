$(document).ready(function(){

    $(".nav .nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('[data-toggle="tooltip"]').tooltip();
     
    $('form').submit(function(event){
        //ensure passwords match before submitting form
        if ($('#pwconf').val() === $('#password').val()) { //passwords do match, clean out any prior error messages & submit form
            $('.errors').html("");
            return;
        } else { 
            event.preventDefault();
            $('.errors').append(`<p><strong class="text-danger">The passwords you entered do not match. Please try again.</strong></p>`);
        }
    })
});