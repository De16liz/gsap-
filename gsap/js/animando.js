/*gsap.to("#mover1", 3, { left: 100,  onComplete: al_terminar, onCompleteParams: [ 1 ] });
gsap.to("#mover3", 4, { top: 100,  onComplete: al_terminar, onCompleteParams: [ 3 ] });

function al_terminar( fulano )
{
    gsap.to( "#mover" + fulano, 2, { opacity: 0.2, onComplete: deshacer, onCompleteParams: [ fulano ] });
    console.log( "Llegó el fulano " + fulano );
}

function deshacer( fulano2 )
{
    gsap.to( "#mover" + fulano2, 2, { opacity: 1});
    console.log( "fin " + fulano2 );
}*/


gsap.delayedCall( 1, suma,  [ 5 , 8 ] );

function suma( num1, num2 )
{
    console.log( "la suma es: " + ( num1 + num2 ));
}