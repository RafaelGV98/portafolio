$(document).ready(function() {
    // Animación de elementos al hacer scroll
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (elementTop < (viewportTop + windowHeight - 100)) {
                $(this).addClass('visible');
            }
        });
    });

    // Validación del formulario y envío a WhatsApp
    $(document).ready(function () {
        $('#contactForm').on('submit', function(event) {
            event.preventDefault();
    
            const form = this;
    
            // Validación del formulario
            if (!form.checkValidity()) {
                event.stopPropagation();
                $(form).addClass('was-validated');
                return;
            }
    
            // Obtener los datos
            const nombre = $('#nombre').val().trim();
            const email = $('#email').val().trim();
            const mensaje = $('#mensaje').val().trim();
    
            // Validar manualmente por si acaso
            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos.');
                return;

                
            }
    
            // Número de WhatsApp
            const numeroWhatsApp = '573136489832';
    
            // Crear mensaje
            const mensajeWhatsApp = `*Nuevo mensaje de contacto*\n\n` +
                                    `*Nombre:* ${nombre}\n` +
                                    `*Email:* ${email}\n` +
                                    `*Mensaje:* ${mensaje}`;
    
            const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

             
            alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp.');
            

            // Abrir WhatsApp
             window.open(urlWhatsApp, '_blank');

              // Limpiar formulario
            form.reset();
            $(form).removeClass('was-validated');
    
           
        });
    });

    // Animación suave del scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 55
            }, 1000);
        }
    });

    // Animación de las barras de progreso
    function animateProgressBars() {
        $('.progress-bar').each(function() {
            var width = $(this).css('width');
            $(this).css('width', '0');
            $(this).animate({
                width: width
            }, 1500);
        });
    }

    // Trigger animación de barras de progreso cuando son visibles
    var observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    });

    $('.skills').each(function() {
        observer.observe(this);
    });

    // Efecto hover en las tarjetas de proyectos
    $('.card').hover(
        function() {
            $(this).find('.card-body').slideDown();
        },
        function() {
            $(this).find('.card-body').slideUp();
        }
    );
}); 