function changeColor(){

    let borderR = document.getElementById("borderRed").value;
    let borderG = document.getElementById("borderGreen").value;
    let borderB = document.getElementById("borderBlue").value;
    let borderW = document.getElementById("borderWidth").value;

    let bgR = document.getElementById("bgRed").value;
    let bgG = document.getElementById("bgGreen").value;
    let bgB = document.getElementById("bgBlue").value;

    document.getElementById('Par').style.borderStyle = "solid";
    document.getElementById('Par').style.borderWidth = borderW;    
    document.getElementById('Par').style.borderColor = 'rgb(' + [borderR, borderG, borderB].join(',') + ')';
    document.getElementById('Par').style.backgroundColor = 'rgb(' + [bgR, bgG, bgB].join(',') + ')';
}