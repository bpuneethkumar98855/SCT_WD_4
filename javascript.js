let listcontainer=document.querySelector("#listcontainer");
let inputbox=document.querySelector("#inputbox");
let addbtn=document.querySelector("#addbtn");

addbtn.addEventListener("click",function(){
    if(inputbox.value=== ''){
        alert("Please add your tasks !")
    }
    else{
        let li = document.createElement("li");
        li.textContent=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.textContent="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
})
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
 

//for storing the data locally in your browser
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

//for storing the data locally in your browser and even you close the data will show same as you store before
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();