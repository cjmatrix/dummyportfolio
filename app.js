const invalidEmail=document.querySelector(".invalid.emails");
const invalidNames=document.querySelector(".invalid.names");


const valid=document.querySelector(".validsent");

let submit=document.getElementById("submit");
console.log(submit)

let form= document.getElementById("form")


function validFormEmail(type,message,regex){
    if(regex.test(type))
    {
        console.log(message);
        return 1;
    }  

    invalidEmail.style.display="block"

    setTimeout(()=>{
        invalidEmail.style.display="none"
    },2000)

}

function validFormName(type,message,regex){
    if(regex.test(type))
    {
        console.log(message);
        return 1;
    }  
    
   
    invalidNames.style.display="block"
    setTimeout(()=>{
        invalidNames.style.display="none"
    },2000)
}

form.addEventListener("submit",(e)=>{
    
    let email=document.getElementById("email").value;
    let name=document.getElementById("name").value;
    let message=document.getElementById("comment").value;
   
    validEmail=validFormEmail(email,"valid mail",/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    validName=validFormName(name,"valid name",/^[a-zA-Z\s]{2,15}$/)

   let validMessage=1;

   if(message.trim()===''){
    validMessage=0;
    let messageColor=document.getElementById("comment");
    messageColor.classList.add("active")
    
    console.log("Message empty");

   }
      
        if(validEmail && validName && validMessage)
        {
                valid.style.display="block";
                setTimeout(()=>{
                    valid.style.display="none"
                },2000)
        }
        else
        e.preventDefault();
    
})

