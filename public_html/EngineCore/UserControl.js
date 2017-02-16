/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function userControl(event) {
    var keycode;
    if (window.event) { //IE
        keycode = event.keyCode;
    } else if (event.which) { //Netscape, firefox, Opera
        keyCode = event.which;
    }
    
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;
    
    if (keycode === 70) { //f
        //Create new rectangle at random position
        context.strokeRect(Math.random() * width * 0.8,
        //x position of centre
        Math.random() * height * 0.8,
        //y position of centre
        Math.random() * 30 + 10, Math.random() * 30 + 10);
        //width and height location
    }
    
    if (keycode === 71) { //g
        //create new circle at random positon
        context.beginPath();
        //draw a circle
        context.arc(Math.random() * width * 0.8,
        //x position of centre
        Math.random() * height * 0.8,
        //y position of centre
        Math.random() * 30 + 10, 0, Math.PI * 2, true);
        //radius 
        context.closePath();
        context.stroke();
    } 
    
}
