
let body = document.querySelector('body');


// Funcion Cambio de 'Tema'

let theme = true;
function changeTheme(){
theme = !theme;
    if(theme){

        // body.style.backgroundColor = '#313638'
    }

    else{

        // body.style.backgroundColor = '#E8E9EB'  
    }   
}

function loadPage() {
  
    // se cambia el color tema Background en LocalStorade al iniciar pagina
    if (localStorage.getItem('body')){

        if (localStorage.getItem('body') === 'dark'){
            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game27.png')";
                
            }  
        }
        else{
            
            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/body-f9.jpg')";
                
            }
        }      
    }   
}