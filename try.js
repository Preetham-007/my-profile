function dark(){
    if(document.getElementById('dark').innerHTML=='Dark Mode'){
        document.getElementById('contain').style.background='linear-gradient(to left top, #ededed, #acacac, #6f6f6f, #383838, #000000)';
        document.getElementById('dark').innerHTML='Light Mode';
    }
    else if(document.getElementById('dark').innerHTML=='Light Mode'){
        onclick=document.getElementById('contain').style.background='white';
        document.getElementById('dark').innerHTML='Dark Mode'
    }
}
function print(){
window.print();
}

function login(){
window.location.href="profile.html";
}