
let body = document.querySelector('body');


// Funcion Cambio de 'Tema'

let theme = false;
function changeTheme(){
theme = !theme;
    if(theme){
       
        body.style.backgroundImage = "url('./img/descarga.png')"
        body.style.transition = '1s'
        localStorage.setItem('body','light')
    }

    else{
        body.style.backgroundImage = "url('./img/Deviate\ Labs\ Logo.gif')";  
        localStorage.setItem('body','dark')
    }   
}

function loadPage() {
  
    // se cambia el color tema Background en LocalStorade al iniciar pagina
    if (localStorage.getItem('body')){

        if (localStorage.getItem('body') === 'light'){
            
            body.style.backgroundImage = "url('./img/descarga.png')";
            body.style.transition = '1s'       
        }
        else{  
            body.style.backgroundImage = "url('./img/Deviate\ Labs\ Logo.gif')";   

        }      
    }   
}