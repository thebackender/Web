var tasks = [];

function add(text){
    var task = document.createElement("div");

    /* Checkbox */
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        var cur = this.parentNode.getElementsByTagName('p')[0];
        if(cur.classList.contains('completed')) cur.classList.remove('completed');
        else cur.classList.add('completed');
    }
    task.appendChild(checkbox);

    /*Text */
    var t = document.createElement("p");
    t.innerHTML = text;
    task.appendChild(t);

    /*Deletion*/
    var img = document.createElement("img");
    img.src = "trash.png";
    img.onclick = function(){
        var del = this.parentNode;
        del.parentNode.removeChild(del);
    }
    task.appendChild(img);

    task.className = 'task';
    document.getElementsByClassName('tasks')[0].appendChild(task);

    tasks[tasks.length] = text;
    console.log(tasks);
}

document.getElementById('plus').onclick = function(){
    var val = document.getElementsByTagName('input')[0].value;
    if(val) add(val);
    else alert("Fill input");
}

