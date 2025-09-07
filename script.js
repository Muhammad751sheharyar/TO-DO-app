function Add() {
    let main = document.getElementById("main");
    let detail = document.getElementById("detail").value;
    let createBox=document.createElement("div");
    createBox.setAttribute('class','box');
    let li = document.createElement("li");
    li.setAttribute('class','li')
    let para =document.createElement("p");
    para.innerText=detail;
    // console.log(para)
    let edit = document.createElement("button");
    let editText = document.createTextNode("Edit");
    edit.setAttribute('class','editBtn')
    let Delete = document.createElement("button");
    let DeleteText = document.createTextNode("Delete");
    Delete.setAttribute('class','deleteBtn')


    
    main.appendChild(createBox);
    createBox.appendChild(li);
    li.append(para);
    li.append(edit);
    edit.appendChild(editText);
    li.append(Delete);
    Delete.appendChild(DeleteText);


    edit.addEventListener('click', function () {

        let EditAgain = prompt("ente the update value");
      para.innerText = EditAgain;

    });

    Delete.addEventListener('click', function () {
        li.remove();
    });

}


