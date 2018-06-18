//nombre del jugador
var nombre = prompt("Nombre del jugador");
console.log(nombre);

console.log($("#nombre"))

$("#nombre").text(nombre);


let card =$('.card')
let imagenes = ['/home/pc/Documentos/ponyo.jpg' ,
                '/home/pc/Documentos/ponyo.jpg' ,
                '/home/pc/Documentos/ponyo.jpg' ,
                '/home/pc/Documentos/ponyo.jpg' ,
                '/home/pc/Documentos/totoro.jpg',
                '/home/pc/Documentos/totoro.jpg',
                '/home/pc/Documentos/totoro.jpg',
                '/home/pc/Documentos/totoro.jpg',
                '/home/pc/Documentos/castle.jpg',
                '/home/pc/Documentos/castle.jpg',
                '/home/pc/Documentos/castle.jpg',
                '/home/pc/Documentos/castle.jpg',
]

imagenes = imagenes.sort( function () {
    return Math.random () -  0.5 });
    console.log (imagenes)

// los turnos 
let TurnoJugada =  24
var turno = []
console.log (turno)


// Oportunidades,NO ANDA

TurnoJugada--;
            console.log($('#intentosP'))
             $('#intentosP').text(intentos);
            console.log("Son Distintos")



//arreglar!!  esto anda de casualidad
$('.card').on(' click ' , function(e) {
    let index = $(this).index ()
    let cardhtml = $(this)
    cardhtml.attr('src' , imagenes[index])
    let imagenTocada = imagenes[index]
    turno.push({imagen:imagenTocada,
               posicion: index })
    let Jugada1 = turno[0].posicion
    let Jugada2 = turno[1].posicion
    let vuelta = $('.card').eq(Jugada1)
    let otraVuelta = $('.card').eq(Jugada2)
    let carta1 = turno[0].imagen
    let carta2 = turno[1].imagen
    setTimeout( function () {
    if (carta1 == carta2) {
        vuelta.attr('src' ,'/home/pc/Documentos/320.jpeg')
        otraVuelta.attr('src' ,'/home/pc/Documentos/320.jpeg')
        TurnoJugada--
            if (turno.length == 2) {
                turno = []
            }   
        } else {
        vuelta.attr('src', '/home/pc/ada trabajos/memorama/Assets/hollin.jpg')
        otraVuelta.attr ('src' ,'/home/pc/ada trabajos/memorama/Assets/hollin.jpg')
        TurnoJugada --
            if (turno.length == 2) {
                turno = []
            }
        }  
  }, 400 );

//partida perdida si pasa los 24 turnos

    $('TurnoJugada').html(TurnoJugada)
    if (TurnoJugada == 0 ) {
        console.log('perdio')
        $('.card').hide()
        $('.main-container').append('<div class="Endgame"><h2>PERDISTE</h2></div>')
      
     }   
    
})

// esto tampoco anda
$('TurnoJugada').html(TurnoJugada)
    if (TurnoJugada.length == 12 ) {
        console.log('ganaste')
        $('.card').hide()
        $('.main-container').append('<div class="Endgame"><h2>GANASTE</h2></div>')
      
    

}
