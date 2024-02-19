function calladd(v) {

    document.getElementById("inp").value += v;
}


function clearc() {

    document.getElementById("inp").value = "";
}

function equals() {

    document.getElementById("inp").value = eval(document.getElementById("inp").value);
}