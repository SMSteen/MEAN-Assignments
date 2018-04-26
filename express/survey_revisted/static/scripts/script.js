$(document).ready(function(){
    $('.response').hide();

    //trigger the connection event in our server!
    const socket  = io.connect();

    $('form').submit(function(event){
        event.preventDefault();
        let name = $("input[name='name']").val();
        let location = $("select[name='dojo_location'] :selected").val();
        let language = $("select[name='favorite_language'] :selected").val();
        let comment = $("textarea").val();
        socket.emit('posting_form', {name, location, language, comment})
    })
    //display server response of updated_message
    socket.on('updated_message', function(data){
        $('.response').slideDown();
        $('.response').append(`<p">${data.response}</p>`)
    })
    //display server response of random_number
    socket.on('random_number', function(data){
        $('.response').slideDown();
        $('.response').append(`<h2>${data.response}</h2>`)
    })
});
