let overlay = document.getElementById('overlay');
let sidebar = document.getElementById('sidebar');
/* Añadir la clase active a los elementos con id sidebar y overlay */
function activarSideBar() 
{
    
    sidebar.classList.add("active");
    overlay.classList.add("active");
    
    
  

}

/* Quitar la clase active a los elementos con id sidebar y overlay */
function desactivarSideBar() 
{
    
   
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}