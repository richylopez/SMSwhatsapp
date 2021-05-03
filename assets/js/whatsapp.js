/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
/*const phone = '59163511638';*/


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        
        let Cedula = document.querySelector('#Cedula').value
        let Celular = document.querySelector('#Celular').value       

        let Servicio1 = document.getElementById('Servicio1').options[document.getElementById('Servicio1').selectedIndex].text

        let Detalle = document.querySelector('#Detalle').value

        let message = 'send?phone=' +Cedula + Celular + '&text=%0A'+ Servicio1 + Detalle


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);
});
    
