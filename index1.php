<div style="position:absolute; bottom: 0px;">It seems like this works best in Chrome. </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<style>#counter{font-size: 300px;}</style>
<!--<form><input type="text">
</form>-->
<div style="float: right; " id="counter"></div>

<div id="beatand"></div>
<p>
Bass Drum:<br>
<audio ID="playbass" controls> <source src="./bass.mp3" type="audio/mpeg"></audio>
<div id="randomz"></div>
</p>

<p>
Snare Drum
<br>
<audio  ID="playsnare" controls > <source src="./snare.mp3" type="audio/mpeg"></audio>
<div id="randomy"></div>
</p>


<p>
Hi- hat<br>
<audio  ID="playhat" controls><source src="./hihat2.mp3" type="audio/mpeg"></audio>
<div id="randomx"></div>
</p>


<!--<p>
Other Sound...<br>
<audio  ID="playohat" controls><source src="" type="audio/mpeg"></audio>
<div id="randomw"></div>
</p>
-->

<script>
$(document).ready(function(){
	
var counter=1;
var beatand=1;
var tempo=300;
var halftempo= 150;
setInterval(function () {
    	
   beatand++;
   
   
   if(beatand==3){
   		beatand=1;
   		
   		
	counter++;
	if(counter==17){counter=1;}
   		
    
    
    
    
////BASS DRUM
if( counter==1 ||  
    counter==9
   
   ){
	 $("#playbass").prop("currentTime",0);
$('#playbass').trigger('play');
 }
 
 
 
 ///SNARE
if(   
counter==3||
	counter==7||
	counter==11||
	
counter==15
		
	

	){
$("#playsnare").prop("currentTime",0);
$('#playsnare').trigger('play');
 }

}
    
if(beatand==1){$('#counter').html(''+counter+'');}
if(beatand==2){$('#counter').html('<span style="font-size: 20px; padding: 300px; ">AND</span>');}
    	
    	
    	
    	if(beatand){ 
    	///this will pick y/n every half beat
	
		 var w = Math.floor((Math.random() * 10) +1);
    document.getElementById("randomx").innerHTML = w;
			if(w ==2){
$("#playohat").prop("currentTime",0);
$('#playohat').trigger('play');
			}
	
			
	 var x = Math.floor((Math.random() * 2) +1);
    document.getElementById("randomx").innerHTML = x;
			if(x ==2){
$("#playhat").prop("currentTime",0);
$('#playhat').trigger('play');
			}
 
    	
    	
    		
    		 var y = Math.floor((Math.random() * 25) +1);
    document.getElementById("randomy").innerHTML = y;
			if(y ==1000){
$("#playsnare").prop("currentTime",0);
$('#playsnare').trigger('play');
			}
			
 
 
 	
    		 var z = Math.floor((Math.random() * 10) +1);
    document.getElementById("randomz").innerHTML = z;
			if(z ==2){
$("#playbass").prop("currentTime",0);
$('#playbass').trigger('play');
			}
 
    	}//all half beats
    	
    	
    	$('#beatand').html(''+ beatand+ '');
    	}, halftempo);	
    
    
  });	
  
</script>





<?/*
var RhythmSample = {
};

RhythmSample.play = function() {
  function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    if (!source.start)
      source.start = source.noteOn;
    source.start(time);
  }

  var kick = BUFFERS.kick;
  var snare = BUFFERS.snare;
  var hihat = BUFFERS.hihat;

  // We'll start playing the rhythm 100 milliseconds from "now"
  var startTime = context.currentTime + 0.100;
  var tempo = 80; // BPM (beats per minute)
  var eighthNoteTime = (60 / tempo) / 2;

  // Play 2 bars of the following:
  for (var bar = 0; bar < 2; bar++) {
    var time = startTime + bar * 8 * eighthNoteTime;
    // Play the bass (kick) drum on beats 1, 5
    playSound(kick, time);
    playSound(kick, time + 4 * eighthNoteTime);

    // Play the snare drum on beats 3, 7
    playSound(snare, time + 2 * eighthNoteTime);
    playSound(snare, time + 6 * eighthNoteTime);

    // Play the hi-hat every eighthh note.
    for (var i = 0; i < 8; ++i) {
      playSound(hihat, time + i * eighthNoteTime);
    }
  }
};
*/?>