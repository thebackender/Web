function add(text){
    var task = document.createElement("div");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    task.appendChild(checkbox);

    var t = document.createElement("p");
    t.innerHTML = text;
    task.appendChild(t);
    var img = document.createElement("img");
    img.src = "trash.png";
    task.appendChild(img);

    task.className = 'task';
    document.getElementsByClassName('tasks')[0].appendChild(task);
}

document.getElementById('plus').onclick = function(){
    add(document.getElementsByTagName('input')[0].value);
}
/*
setInterval(function(){
    var checks = document.getElementsByClassName('task');
    for(var i = 0; i < checks.length; i++){
        checks[i].getElementsByTagName('input')[0].onclick = function(){
            if(checks[i].getElementsByTagName('p')[0].className == 'completed'){
                checks[i].getElementsByTagName('p')[0].classList.add = 'completed';
            }else{
                checks[i].getElementsByTagName('p')[0].classList.remove = 'completed';
            }
        }
    }
}, 100);*/