let tablinks= document.getElementsByClassName("tab-links");
let tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    

}

let sidemenu =document.getElementById("sidemenu")
function openmenu (){
    sidemenu.style.right="0";
}
function closemenu (){
    sidemenu.style.right="-200px";
}

// -------------------------------------draggable cards ------------------------------------

// --------------------------------Google form------------------------------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxQzJgDVpFPrXKZtlW6BqLkambCKlqCJ7Hg8y32rd6aN_9BOD0mYlN-wI7bwxb27fYMEg/exec'
  const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{ 
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// ---------------------text auto type effect in nav bar------------
let typed = new Typed('.auto-type',{strings:["Hey there !"],
typeSpeed:150,
backSpeed:150,
loop:true
})