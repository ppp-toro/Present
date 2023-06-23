const elements = [
    { selector: '.imghub', url: 'https://github.com/ppp-toro' },
    { selector: '.imglink', url: 'https://www.linkedin.com/feed/' }
  ];

  elements.forEach(function(element) {
    const el = document.querySelector(element.selector);
    el.addEventListener('click', function() {
      openURL(element.url);
    });
  });

  function openURL(url) {
    window.open(url, '_blank');
  }


  document.querySelector('.imggmail').addEventListener("click", function(){
    document.querySelector('#Asunto').value = ""
    document.querySelector('#Contenido').value = ""
    document.documentElement.scrollTop += 500;
    document.body.scrollTop += 1100;
  })
  document.querySelector('.Cancelar').addEventListener("click", function(){
    document.body.scrollTop -= 1100;
  })
  document.querySelector('.Enviar').addEventListener("click", function(){
    remitente = document.querySelector('#Remitente').value
    asunto = document.querySelector('#Asunto').value
    contenido = document.querySelector('#Contenido').value
    enviarCorreo(remitente, asunto, contenido) 
  })

  function enviarCorreo(remitente, asunto, contenido) {
    const datosCorreo = {
      destinatario: 'rebollotoro@gmail.com',
      remitente: remitente,
      asunto: asunto,
      contenido: contenido
    };
  
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_SENDGRID_API_KEY' // Reemplaza YOUR_SENDGRID_API_KEY con tu clave API de SendGrid
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{
            email: datosCorreo.destinatario
          }]
        }],
        from: {
          email: datosCorreo.remitente
        },
        subject: datosCorreo.asunto,
        content: [{
          type: 'text/plain',
          value: datosCorreo.contenido
        }]
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('El correo electrónico se envió correctamente.');
      } else {
        console.error('Error al enviar el correo electrónico.');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud de envío de correo electrónico:', error);
    });
  }
  