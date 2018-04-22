$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        goToURL = `/`;
        window.location.pathname = goToURL;
    });
});