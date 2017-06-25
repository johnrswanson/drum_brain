// Enable WebMidi.js
 WebMidi.enable(function(){
 	output=WebMidi.outputs[1];
	 $("#outputmeter").append(""+output.name);
//	 var i = 0;
	 var outputnum=WebMidi.outputs.length;
	 
	 $("#log").append(outputnum+' outputs');
	 
	 for (var i = 0; i < WebMidi.outputs.length; i++) {
   
	 $("#outputs").append('<option value="'+i+'">'+WebMidi.outputs[i].name+'</option>');
	 
    }
 
	 

	 
});


		

(function (window) {
	
		var beat=1;
			 endloop = $("#endloop").val();
	endpart1=(((endloop-1)*4)+1);
	
	endpart2=(((endpart1-1)*2)+1);
		
	 //var endloop=17;
//	 var endpart1=17;
	 //var endpart2=33;
	var bpm=500;
	var qbpm=125;
var ms = 60000;

var measure=1;
var mypart=1;
	var x=1;
	var c=0;
	var timerId=null;
	
	window.changeOut=function(){
		var a=$("#outputs").val();
		 	output=WebMidi.outputs[a];
	 $("#outputmeter").html(""+output.name);
		
	}

window.stopDrums=function(){
		$("#log").append("Stopped<br>");
	if (timerId){clearInterval(timerId);}
	
}

window.playDrums=function(tempo){
	window.stopDrums();
timerId = setInterval(function () {   

if(beat==endloop){beat='1'; 
measure++;

 if(measure==endpart1){
 		//$(".part1").hide();
  	 //$(".part2").show();
mypart=2;
}
 if(measure==endpart2){
 	mypart=1;
 	 		//$(".part1").show();
  	 //$(".part2").hide();
 measure=1;
		}
	}

		 $("#log").html("");


	 $("#log").append("<br>"+mypart+","+measure+","+beat+" : <br>");
	 	beat++;
	if (beat!=''){
		
		
//BASS
	if(document.getElementById("playbass"+beat+""+mypart+"").checked) {
 output.playNote("C1", 10,{duration: 150, velocity:127});
 }
 	if(document.getElementById("randombass"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("C1", 10,{duration: 150, velocity:127});
 }
 }
 
 
 //SNARE
	if(document.getElementById("playsnare"+beat+""+mypart+"").checked) {
 output.playNote("D1", 10,{duration: 150, velocity:127});
 }
  	if(document.getElementById("randomsnare"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("D1", 10,{duration: 150, velocity:127});

 }
 }
 
 
 //HIHAT
 	if(document.getElementById("playhihat"+beat+""+mypart+"").checked) {
//		 $("#log").append(" hihat");
// $("#log").append(" sent to "+output.name);
 output.playNote("F#1", 10,{duration: 150, velocity:127});
 }
   	if(document.getElementById("randomhihat"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("F#1", 10,{duration: 150, velocity:127});
 }
 }
 
 
 //OPENHAT
 if(document.getElementById("playopenhat"+beat+""+mypart+"").checked) {
 output.playNote("A#1", 10,{duration: 150, velocity:127});
 }
    	if(document.getElementById("randomopenhat"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("A#1", 10,{duration: 150, velocity:127});
 }
 }
 
 
 
  //LOTOM
 
 	if(document.getElementById("playlotom"+beat+""+mypart+"").checked) {
 output.playNote("G1", 10,{duration: 150, velocity:127});
 }
    	if(document.getElementById("randomlotom"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("G1", 10,{duration: 150, velocity:127});

 }
 }
 
 
   //Ride cymbal
 if(document.getElementById("playride"+beat+""+mypart+"").checked) {
		 //$("#log").append(" ride");
// $("#log").append(" sent to "+output.name);
 output.playNote("C#2", 10,{duration: 150, velocity:127});
 }
    if(document.getElementById("randomride"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("C#2", 10,{duration: 150, velocity:127});
 }
 }
 
 
 // hitom
 if(document.getElementById("playhitom"+beat+""+mypart+"").checked) {
 output.playNote("D#1", 10,{duration: 150, velocity:127});
 }
 if(document.getElementById("randomhitom"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("D#1", 10,{duration: 150, velocity:127});
 }
 }
 
 
 // Crash
 if(document.getElementById("playcrash"+beat+""+mypart+"").checked) {
 output.playNote("D#1", 10,{duration: 150, velocity:127});
 }
 if(document.getElementById("randomcrash"+beat+""+mypart+"").checked) {
 		var w=Math.floor((Math.random()* 10)+ 1);
	if (w=='1'){
 output.playNote("D#1", 10,{duration: 150, velocity:127});
 }
 }
 
 
	}
	}, tempo);//interval	
	}
	
	
window.resetLoop=function(){
	

		$("#sequencer").html('');
window.setupDrums('bass');
	    window.setupDrums('snare');
	    window.setupDrums('hihat');
	   	   window.setupDrums('openhat');
	   	   window.setupDrums('lotom');
window.setupDrums('hitom');
window.setupDrums('ride');
window.setupDrums('crash');

	 endloop = $("#endloop").val();
	endpart1=(((endloop-1)*4)+1);
	
	endpart2=(((endpart1-1)*2)+1);
	var loopsteps=(endloop -1);
		$("#loopmeter").html(loopsteps);
	

	}	
	
window.playNow=function(){
	
		var tempo = $("#tempo").val();
		//var tempo = window.getElementById("tempo").value();
		
	window.playDrums(''+tempo+'');	
	var bpm= ((60000/tempo)/ 4);
	

		$("#tempometer").html(''+tempo+'(ms) / '+bpm+' bpm');
	
}


		
	window.setupDrums=function(instrument){
		

		var endloop = $("#endloop").val();

		$("#sequencer").append(''+
'<div class="row" id="my'+instrument+'">'+instrument+'<br></div>');

var b=1;
var subtractor=endloop-1;
var stepwidth=94/subtractor;

while(b<endloop){b++;
$("#my"+instrument).append(''+
'<div style="width:'+stepwidth+'%" class="step part1" id="'+instrument+''+b+'1">'+
'<input type="checkbox" style=" background:#333; color:#333" ID="play'+instrument+''+b+'1"><br>'+
'<input class=“rand” type="checkbox" style=" background:#aaa; color:#aaa"  ID="random'+instrument+''+b+'1">'+
//'<input type="range"  min="1" max="100" value="50" step="1" ID="prob'+instrument+''+b+'">'+
'</div>'+
'');

$("#my"+instrument).append(''+
'<div style="width:'+stepwidth+'%"class="step part2" id="'+instrument+''+b+'2">'+
'<input type="checkbox" style=" background:#333; color:#333" ID="play'+instrument+''+b+'2"><br>'+
'<input class=“rand” type="checkbox" style=" background:#aaa; color:#aaa"  ID="random'+instrument+''+b+'2">'+
//'<input type="range"  min="1" max="100" value="50" step="1" ID="prob'+instrument+''+b+'">'+
'</div>'+
'');
}


}



	
}(this));

  
 $(document).ready(function(){
 	$("#controller").append(''+
'<input  class="transport" type="button" onclick="playNow(); return false" value="PLAY &raquo;">'+

'<input  class="transport" type="button" onclick="stopDrums();" value="STOP[]">'+
'<input class="transport" id="partswitch" type="button" value="verse/chorus"><div ID="log"></div>'+
'<div style="float: right; width: 100px;"><select onchange="changeOut();" name="outputs" id="outputs"></select></div>'+
'<div id="outputmeter"></div>'+

				'<div class="panel2"> Beats<div id="loopmeter"></div><input ID = "endloop" type="range" data-show-value="true" min="5" max="17" step="4" name="endloop" value="9"  onchange="resetLoop(); " style="width:100%" placeholder="beats"></div>'+
				
		'<div class="panel"><div id="tempometer"><br></div>'+
		'<input ID = "tempo" type="range" data-show-value="true" min="50" max="300" name="tempo" value="120"  onchange="playNow(); "  style="width:100%" placeholder="Tempo"></div>'+
		
				

'</div>	');



  $("#partswitch").click(function(){
  	$(".part1").toggle();
  	 $(".part2").toggle();
  	 
  	});
  

window.resetLoop();

});

