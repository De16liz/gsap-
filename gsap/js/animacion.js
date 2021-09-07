window.onload = function()
{
    console.log( "Hola" );
    console.log( Math,random() );
}

/*function animar()
{
    /*gsap.to("#mover1", 0.6, { top: 300, left: 300 });
    gsap.to("#mover1", 0.6, { left: Math.random() * 100, top: Math.random() * 100, rotation: Math.random() * 50, onComplete: al_terminar });
   
}
/**esta función me permite aumentar el tamaño y rebotar(ease) */
/*function aumenta()
{
    gsap.to("#mover2", 2, { rotation: Math.random() * 0, width: Math.random() * 1000, ease: "bounce", onComplete: al_terminar });
}
/**me permite realizar un movimeinto y llamar el siguiente objeto con su respectivo movimiento */
/*gsap.to("#mover1", 4, { left: 100, delay: 3, onComplete: al_terminar });*/

/**funcion que realiza otro movimiento de un objeto diferente */
function al_terminar()
{
    console.log( "Termino." + Math.random() );
    gsap.to("#mover3", 4, { top: 100,  onComplete: sigue });
    
}

function sigue()
{
    gsap.to("#mover4", 4, { top: 100,  onComplete: sigue });
}