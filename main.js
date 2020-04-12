    window.sr = ScrollReveal();
    sr.reveal('.dark-overlay', {
      duration: 1000,
      delay: 1000,
    });

    sr.reveal('#chat1, #chat3, #chat5, #chat6, #chat8', {
      viewFactor: 0.2,
      delay: 2000,
      duration: 2000,
      origin: 'top',
      distance: '20px',
    }, 3000)

    sr.reveal('#chat2, #chat4, #chat7', {
      viewFactor: 0.2,
      delay: 3000,
      duration: 2000,
      origin: 'bottom',
      distance: '20px',
    }, 3000)



    sr.reveal('h2', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'left',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.container p', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'right',
      distance: '200px',
      reset: true,
    })

    sr.reveal('i', {
      duration: 8000,
      viewFactor: 0.2,
      rotate: {x: 0, y: 900, z: 0}
    });
