function init(){
    max=400;
    loop = 0;
    let media = document.getElementById('media');
    let play = document.getElementById('play');
    let mute = document.getElementById('mute');
    let bar = document.getElementById('bar');
    let progress = document.getElementById('progress');
    let volume = document.getElementById('volume');
    
    //???
    let play2 = document.getElementById('dropbox');

    

    play.addEventListener('click', push);
    media.addEventListener('click', push);
    mute.addEventListener('click', sound);
    bar.addEventListener('click', move);
    volume.addEventListener('change', level);
    
    //???
    play2.addEventListener('click', push);
    
}
 

function push(){
    if (media.paused && !media.ended){
        media.play();
        play.innerHTML ="Пауза";
        document.getElementById('dropbox');
        loop = setInterval(status, 1000);
    } else {
        media.pause();
        play.innerHTML ="Воспр.";
        clearInterval(loop);
    }

}
function status(){
 if(!media.ended){
      let size = Math.round(media.currentTime * max /media.duration);
  progress.style.width=`${size}px`;

  }}
    function move(e){
        let mouseX = e.pageX - bar.offsetleft;
        progress.style.width = `${mouseX}px`;
        let newTime = mouseX * media.duration/max;
        media.currentTime = newTime;
    }

function sound(){
    if(media.muted){
        media.muted=false;
        mute.innerHTML='Звук';
    }else{
        media.muted = true;
        mute.innerHTML='Вкл.';
    }
}

function level(){
    media.volume = volume.value;
    
}

  addEventListener('load', init);

  let drop;
   function initiate(){
  drop = document.getElementById('dropbox');
  drop.addEventListener('dragenter', function(e){e.preventDefault();});
  drop.addEventListener('dragover', function(e){ e.preventDefault();});
  drop.addEventListener('drop', dropped);
 }


   function dropped(e){
   e.preventDefault();
   let files = e.dataTransfer.files;
   let list = '';
   for(let f = 0; f < files.length; f++){
        list += files[f].name + `<br>`;
   }

   drop.innerHTML = list;
}
  
    
    
addEventListener('load', initiate);