
    const burger = document.querySelector(" nav .burger")
    const nav_links = document.querySelector(".nav_links");
    const nav_ = document.querySelectorAll(".nav_links li");
    nav_.forEach((e,)=>{
      e.addEventListener("click",()=>{
         nav_links.classList.remove("navActive")
      })
    })
    
    burger.addEventListener("click",()=>{
       nav_links.classList.toggle("navActive")
    })
