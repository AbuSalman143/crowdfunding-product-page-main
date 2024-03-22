document.addEventListener("DOMContentLoaded", function(){
// for bookmark toggel
let bookmark= document.querySelector(".bookmark");
let bookmark_text=document.querySelector(".bookmark p")
let bookmark_i=document.querySelector(".bookmark i")

function bookmarktoggel(){
    if(bookmark_text.innerText==="Bookmark"){
        bookmark_text.innerText="Bookmarked"
        bookmark_text.style.color="hsl(176, 72%, 28%)"
        bookmark_text.style.fontWeight="600"
        bookmark.style.background="hsla(176, 60%, 81%, 0.763)"
        bookmark_i.style.background="hsl(176, 72%, 28%)"
        bookmark_i.style.color="white"
    }else{
        bookmark_text.innerText="Bookmark"
        bookmark_text.style.color=""
        bookmark_text.style.fontWeight=""
        bookmark.style.background=""
        bookmark_i.style.background=""
        bookmark_i.style.color=""
    }
}
bookmark.addEventListener("click",bookmarktoggel)



// for back_this_project toggel


let back_this_project=document.querySelector("#back_this_project");

let back_this_project_btn=document.querySelector(".bookmark-container button");
let close_back_this_project=document.querySelector(".close");

function back_this_project_toggel(){
    if(back_this_project.style.display==="flex"){
        back_this_project.style.display="none"
    }else{
        back_this_project.style.display="flex"
    }
}
back_this_project_btn.addEventListener("click",()=>{
   
    back_this_project_toggel()
})
close_back_this_project.addEventListener("click",back_this_project_toggel)



// for slectreward button toggel"

let slectrewardbtn=document.querySelectorAll(".slectreward")
// console.log(slectrewardbtn);

for(let i=0;i<slectrewardbtn.length;i++){
    slectrewardbtn[i].addEventListener("click",back_this_project_toggel)
}


// continue-button-container 
let continue_button_container=document.querySelectorAll(".continue-button-container")
let inputs=document.querySelectorAll("input");
let reword_card=document.querySelectorAll(".reword-card")
inputs.forEach((input,index)=>{
    input.addEventListener("click",()=>{

        continue_button_container.forEach((container,containerIndex)=>{
            if(index===containerIndex){
                container.style.display="flex"
                reword_card[containerIndex].style.border="2px solid hsl(176, 72%, 28%)"
            }else{
                container.style.display="none"
                reword_card[containerIndex].style.border=""
            }
        })
    })
   
})


// thank you container container 

let thank_you_container=document.querySelector("#thankyou");


function thank_you_container_toggel(){
    if(thank_you_container.style.display==="flex"){
        thank_you_container.style.display="none"
    }else{
        thank_you_container.style.display="flex"
    }
}
let continue_btns=document.querySelectorAll(".continue");
continue_btns.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        back_this_project_toggel()
        thank_you_container_toggel()
        inputs[index].checked=false
    })
})
let gotit_btn=document.querySelector(".gotit");
gotit_btn.addEventListener("click",()=>{
    thank_you_container_toggel();
    inputs.forEach((item,index)=>{
        if(item.checked){
            return
        }else{
            continue_button_container[index].style.display="none"
                reword_card[index].style.border=""
        }
    })
})
})


// hambuger toggel 


let hambuger=document.querySelector(".hamburger")
let close_menu=document.querySelector(".close_menu")
let nav=document.querySelector("nav")

hambuger.addEventListener("click",()=>{
    hambuger.style.display="none";
    close_menu.style.display="block";
    nav.classList.toggle("nav_active");
})
close_menu.addEventListener("click",()=>{
    hambuger.style.display="block";
    close_menu.style.display="none";
    nav.classList.toggle("nav_active");
})




