$(document).ready(function(){
    //trigger the connection event in our server!
    const socket  = io.connect();
    
    socket.on('connected', function(lastColor){
        //if a color has been chosen previously, load page with that color
        if (lastColor){
            $('body').css('background-color', lastColor);
        }
    })
    //Color selected, report to server
    $("button").click(function(){
        const colorName = $(this).text();
        const colorValue = $(this).attr('data-color-value');
        socket.emit("colorChosen", {colorName, colorValue});
    })
    //change the color for all
    socket.on('changeColor', function(color){
        $('h2').text(`Someone has painted the wall ${color.name}.`);
        $('body').css('background-color', color.value);
    });
});