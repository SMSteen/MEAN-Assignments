export function windDirection(windDeg){
    let direction = "";
    if(windDeg>=11.25 && windDeg <33.75){direction ="NNE";}
    else if(windDeg>=33.75 && windDeg <56.25){direction ="NE";}
    else if(windDeg<78.75){direction ="ENE";}
    else if(windDeg<101.25){direction ="E";}
    else if(windDeg<123.75){direction ="ESE";}
    else if(windDeg<146.25){direction ="SE";}
    else if(windDeg<168.75){direction ="SSE";}
    else if(windDeg<191.25){direction ="S";}
    else if(windDeg<213.75){direction ="SSW";}
    else if(windDeg<236.25){direction ="SW";}
    else if(windDeg<258.75){direction ="WSW";}
    else if(windDeg<281.25){direction ="W";}
    else if(windDeg<303.75){direction ="WNW";}
    else if(windDeg<326.25){direction ="NW";}
    else if(windDeg<326.25){direction ="NNW";}
    else{direction ="N";}
    return direction;
}