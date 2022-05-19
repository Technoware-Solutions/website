function showPassword(){
    var x = document.getElementById("senha");
    var btn = document.getElementById("showPasswordBtn");
    if (x.type === "password") {
        x.type = "text";
        btn.setAttribute("class", "showPassword icon show-on")
    } else {
        x.type = "password";
        btn.setAttribute("class", "showPassword icon show-off")
    }
}