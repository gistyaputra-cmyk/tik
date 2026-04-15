function showSection(id){
    document.getElementById("about").style.display = "none";
    document.getElementById("market").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function goJual(){
    window.location.href = "jual.html";
}

function showProduct(name){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("productName").innerText = name;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
