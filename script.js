(function (window) {
	
	var beatand='0';
	var counter='0';
	var measure='9';
	var reset=measure -1 ;
	var timerId=null;
	
	window.stopDrums = function(){
	if (timerId)
		{clearInterval(timerId);}
		}
		
window.playDrums = function(tempo){
	window.stopDrums();
	 timerId = setInterval(function () {   
		beatand++;
		//reset logic
		if(beatand==3){
	   		beatand=1;
	   		counter++;
	   		if(counter==measure){
		   		counter=1;
		   	}
		   	
		   	
	   		//open hihat all the time
		   	if(beatand){$("#playohat").prop("currentTime",0);
						$('#playohat').trigger('play');
						}
						
						
			////BASS DRUM
			if( counter==1 || counter==4 ){
				$("#playbass").prop("currentTime",0);
				$('#playbass').trigger('play');
			}
				 
				 
				 
			///SNARE
			if(counter==5){
				$("#playsnare").prop("currentTime",0);
				$('#playsnare').trigger('play');
			}
				$("#playhat").prop("currentTime",0);
				$('#playhat').trigger('play');	
		} 
				
		if(beatand==1){
			$('#counter').html(''+counter+'');
		}
		
		//if(beatand==2){
			//$('#counter').html('<span style="font-size: 20px; padding: 300px; ">AND</span>');
		//} 
		  		    	
	    if(beatand){ 
	    ///send a "bang" every 8th note for random drum triggers
	    
		/*
		//RANDOM OPEN HIHAT
		var w = Math.floor((Math.random() * 100) +1);
		if(w ==2){
			$("#playhat").prop("currentTime",0);
			$('#playhat').trigger('play');
		}//hihat
		*/	
		
		//RANDOM HIHAT
		var x = Math.floor((Math.random() * 2) +1);
		if(x ==2){
			$("#playhat").prop("currentTime",0);
			$('#playhat').trigger('play');
		}
		
		//RANDOM SNARE	
		var y = Math.floor((Math.random() * 25) +1);
		if(y ==2){
			if (y != 1){
			$("#playsnare").prop("currentTime",0);
			$('#playsnare').trigger('play');
		}
		}
			
		//RANDOM BASS
		var z = Math.floor((Math.random() * 15) +1);
		if(z ==2){
				$("#playbass").prop("currentTime",0);
				$('#playbass').trigger('play');
			}
 
    	}
	    	
	    	
	    //$('#beatand').html(''+ beatand+ '');
	    }, tempo);//interval	
	
	}
	
	
	
	
	
	
	
	window.editNow= function(){	
	
		var tempo = $("#tempo").val();
		//var tempo = window.getElementById("tempo").value();
		
		window.playDrums(''+tempo+'');	
		$("#status").html('Tempo :'+tempo+'');
	}
		
		
		
		 
	window.setupDrums = function(){
	
		$("#page").append(''+
		'<div style="float: right; " id="counter"></div>'+
		'<div id="beatand"></div>'+
		'<p>'+
		'Bass Drum:<br>'+
		'<audio ID="playbass" controls> <source src="./bass.mp3" type="audio/mpeg"></audio>'+
		'<div id="randomz"></div>'+
		'</p>'+
		'<p>'+
		'Snare Drum'+
		'<br>'+
		'<audio  ID="playsnare" controls > <source src="./snare.mp3" type="audio/mpeg"></audio>'+
		'<div id="randomy"></div>'+
		'</p>'+
		'<p>'+
		'Hi- hat<br>'+
		'<audio  ID="playhat" controls><source src="./hihat2.mp3" type="audio/mpeg"></audio>'+
		'<div id="randomx"></div>'+
		'</p>'+
			'open Hi- hat<br>'+
		'<audio  ID="playohat" controls><source src="./hat.mp3" type="audio/mpeg"></audio>'+
		'<div id="randomx"></div>'+
		'</p>'+
		'<form  ID="formDrummer">'+
		'tempo:<input ID = "tempo" type="range" data-show-value="true" min="75" max="300" name="tempo" placeholder="Tempo" onchange="editNow();"><br>'+
		//'<input style=" padding: 10px; " ID="saveedit" type="button" name="submit" value="Play" onclick="editNow(); ">'+
		'</form>'); 
								 
	}
	
	
}(this));
  
  
 $(document).ready(function(){
 		
	  window.setupDrums();
	  });

