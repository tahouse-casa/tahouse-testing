
// Selectores del DOM
const body = document.querySelector('body');
const h2 = document.getElementsByTagName('h2')
const button = document.getElementsByTagName('button')
const h3 = document.getElementsByTagName('h3')
const tools = document.querySelectorAll('.tools')
const nav = document.querySelector('nav')
const navText = document.querySelectorAll('#navText')

// Funcion Cambio de 'Tema'
let theme = false;
function changeTheme(){
theme = !theme;
if(theme){   
    nav.style.backgroundColor = '#474448'
    nav.style.transition = '1s'
    localStorage.setItem('nav','light')

    for (let i = 0; i < navText.length; i++) {
        navText[i].style.color = 'whitesmoke' 
        navText[i].style.transition = '1s'
        localStorage.setItem('navText','light')
    }
//Cambio de estilo en Body       
    body.style.backgroundImage = "url('./img/Encyclopedia.gif')"
    body.style.transition = '1s'
    body.style.backgroundSize = 'cover'
    localStorage.setItem('body','light')

//Cambio estilo en lista tools
    for (let i = 0; i < tools.length; i++) {
        tools[i].style.color = 'black'
        tools[i].style.transition = '1s'
        localStorage.setItem('tools','light')
    }    

//Cambio de estilo en los Buttons    
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = 'black'
        button[i].style.transition = '1s'
        localStorage.setItem('button','light')
    }
//Cambio de estilos en los h3
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'black'
        h3[i].style.transition = '1s'
        localStorage.setItem('h3','light')
    }    

//Cambio de estilo en H2
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = 'black' 
        h2[i].style.transition = '1s'
        localStorage.setItem('h2','light') 
        }     
    }
    
    else{
        nav.style.backgroundColor = '#3E517A'
        localStorage.setItem('nav','dark')

        for (let i = 0; i < navText.length; i++) {
            navText[i].style.color = 'black'  
            localStorage.setItem('navText','dark')
        }
//Cambio de estilo en Body 
        body.style.backgroundImage = "url('./img/Deviate\ Labs\ Logo.gif')";  
        localStorage.setItem('body','dark')

//Cambio estilo en lista tools
    for (let i = 0; i < tools.length; i++) {
        tools[i].style.color = 'whitesmoke'
        localStorage.setItem('tools','dark')
    }        
//Cambio de estilo en h3  
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'whitesmoke'
        localStorage.setItem('h3','dark')
    }

//Cambio de estilo en buttons
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = 'whitesmoke'
        localStorage.setItem('button','dark')
    }        
//Cambio de estilo en H2
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = 'whitesmoke'
        localStorage.setItem('h2','dark')  
        } 
    }       
}

function loadPage() {
// Estilos en Navbar al iniciar 
if (localStorage.getItem('nav') === 'light') {
    nav.style.backgroundColor = '#474448'
    nav.style.transition = '1s'
}
 
else{
    nav.style.backgroundColor = '#3E517A' 
}

//Estilos en el texto del navbar al inciar
if (localStorage.getItem('navText') === 'light') {
    for (let i = 0; i < navText.length; i++) {
        navText[i].style.color = 'whitesmoke' 
    }
}

else{
    for (let i = 0; i < navText.length; i++) {
        navText[i].style.color = 'black'  
    }
}
// se cambia el color tema Background en LocalStorade al iniciar pagina

if (localStorage.getItem('body') === 'light'){ 
    body.style.backgroundImage = "url('./img/Encyclopedia.gif')"
    body.style.backgroundSize = 'cover'
    body.style.transition = '1s'       
}

else{  
    body.style.backgroundImage = "url('./img/Deviate\ Labs\ Logo.gif')";   
}      
  
if (localStorage.getItem('h2') === 'light'){
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = 'black'               
    }     
}

else{
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = 'whitesmoke'      
    }
}

if (localStorage.getItem('h3') === 'light') {
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color ='black'
    }
}
    
else{
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'whitesmoke'
    }
}

if (localStorage.getItem('button') === 'light'){
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = 'black'
    }
}

else{

    for (let i = 0; i < button.length; i++) {
        button[i].style.color = 'whitesmoke'
        }        
    }

if (localStorage.getItem('tools') === 'light'){
    for (let i = 0; i < tools.length; i++) {
        tools[i].style.color = 'black'
    }
}

else{
    for (let i = 0; i < tools.length; i++) {
        tools[i].style.color = 'whitesmoke';
    }
}

}