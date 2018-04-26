$(document).ready(function(){
    //trigger the connection event in our server!
    const socket  = io.connect();
    //tell the server to increase the count
    $('#count').click(function(){
        socket.emit('update_count', {message: "update that count"})
    });
    //when the count has been updated, display it
    socket.on('count_updated', function(data){
        $('span').text(data.response);
    });
    //tell the server to reset the count
    $('#reset').click(function(){
        socket.emit('reset_count', {message: "reset that count"})
    });
    //when the count has been reset, display it and a message that count was reset
    socket.on('count_reset', function(data){
        $('span').text(data.response);
        $('h5').html(`<h4 class='text-danger'>Someone reset the count! It got up to ${data.prior}. Can you beat that??</h4>`)
    });
});