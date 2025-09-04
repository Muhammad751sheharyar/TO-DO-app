function Add() {
    let detail = document.getElementById("detail").value;
    let li = document.createElement("li");
    li.innerText = detail;
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    let Delete = document.createElement("button");
    Delete.innerText = "Delete";
    let main = document.getElementById("main");
    main.append(li);
    li.append(edit);
    li.append(Delete);



    
    edit.addEventListener('click',function(){
        let EditAgain=prompt("ente the update value");
        li.innerText=EditAgain;
    })

    Delete.addEventListener('click', function () {
        li.remove();
    });

}


