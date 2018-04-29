$(document).ready(function(){
    //trigger the connection event in our server!
    const socket  = io.connect();
    
    //when a new user enters, display arrival announcement to all other users
    socket.on('newUser', function(id){
        console.log(id)
        const announcement = `<p>Socket ID <span>${id}</span> has joined us.</p>`
        $('.notifications').append(announcement);
    })
    //User pushed notify button, report to server
    $("button").click(function(){
        socket.emit("notify");
    })
    //Notify all other users and button was pushed
    socket.on('userNotice', function(notifier){
        const announcement = `<p>Socket ID <span>${notifier}</span> just triggered a notification!</p>`
        $('.notifications').append(announcement);
    })
    //when a new user enters, display arrival announcement to all other users
    socket.on('userDisconnected', function(left){
        const announcement = `<p>Socket ID <span>${left}</span> has left us.</p>`
        $('.notifications').append(announcement);
    })
});