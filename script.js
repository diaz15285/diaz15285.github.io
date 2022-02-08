function accionPlay()
{
  if(!medio.paused && !medio.ended) 
  {
	medio.pause();
	play.value='\u25BA'; //\u25BA
	document.body.style.backgroundColor = '#fff';
  }
  else
  {
	medio.play();
	play.value='||';
	document.body.style.backgroundColor = 'grey';
  }
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  medio.pause();
  medio.currentTime = 0;
  medio.load();
}
function accionRetrasar()
{
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if(medio.currentTime > 10){ //comprobar si el tiempo actual es mayor a 10, solo en ese caso retrasar
	medio.currentTime -=10;
  } 
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration	
  medio.currentTime += 10;
  if(media.duration >= medio.currentTime){ //si alcanzamos el máximo del video no sumar nada
	  medio.currentTime += 0;
  }
}
function accionSilenciar()
{
  //Utilizar medio.muted = true; o medio.muted = false;
  if (medio.muted == true) { //si ya está silenciado hacer que suene
	  medio.muted = false;
  }
  else{ //si no está silenciado hacer que se silencie
	  medio.muted = true;
  }
}
function accionMasVolumen()
{
  //Contemplar que el valor máximo de volumen es 1
  if (medio.volume <= 1) { //si ya no hemos alcanzado el tope de sonido
	medio.volume += 0.1;
  }
  else{ //subir volumen si está por debajo de 1
	medio.volume += 0;
  }
  
}
function accionMenosVolumen()
{
  //Contemplar que el valor mínimo de volumen es 0
  if (medio.volume > 0) { //solo bajar el volumen hasta 0, no más
	medio.volume -= 0.1;
  }
}

function iniciar() 
{
  
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  reiniciar=document.getElementById('reiniciar');
  retrasar=document.getElementById('retrasar');
  adelantar=document.getElementById('adelantar');
  silenciar=document.getElementById('silenciar');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}
window.addEventListener('load', iniciar, false);