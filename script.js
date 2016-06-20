(function (window) {
	
	var beatand='1';
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
		   			$('.topseq').css('background', '#eee');
		   	}
		   	
		   	
	   		//open hihat all the time
		   	if(beatand){
			   			$("#playohat").prop("currentTime",0);
						$('#playohat').trigger('play');
						}
						
						
			////BASS DRUM
			//if( counter==1 || counter==4 ){
			//	$("#playbass").prop("currentTime",0);
			//	$('#playbass').trigger('play');
			//}
				 
				 
				 
			///SNARE
			//if(counter==5){
			//	$("#playsnare").prop("currentTime",0);
			//	$('#playsnare').trigger('play');
			//}
			//	$("#playhat").prop("currentTime",0);
			//	$('#playhat').trigger('play');	
		} 
				
		if(beatand==1){
			$('#counter').html(''+counter+'');
			$('.topseq'+counter).css('background', '#5f5');
			
				if(document.getElementById('bassbox'+counter).checked) {
					$("#playbass").prop("currentTime",0);
					$('#playbass').trigger('play');
				}
				
				if(document.getElementById('snarebox'+counter).checked) {
					$("#playsnare").prop("currentTime",0);
					$('#playsnare').trigger('play');
				}
				
				
				if(document.getElementById('hatbox'+counter).checked) {
					$("#playhat").prop("currentTime",0);
					$('#playhat').trigger('play');
				}
				
			}
				
		if(beatand==2){
			
				
		}
		
	//if(beatand==2){
			//$('#counter').html('<span style="font-size: 20px; padding: 300px; ">AND</span>');
		//} 
		  		    	
	 //if(beatand){ 
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
		//var x = Math.floor((Math.random() * 2) +1);
		//if(x ==2){
		//	$("#playhat").prop("currentTime",0);
		//	$('#playhat').trigger('play');
		//}
		
		//RANDOM SNARE	
		//var y = Math.floor((Math.random() * 25) +1);
		//if(y ==2){
		//	if (y != 1){
		//	$("#playsnare").prop("currentTime",0);
		//	$('#playsnare').trigger('play');
		//}
		//}
			
		//RANDOM BASS
		//var z = Math.floor((Math.random() * 15) +1);
		//if(z ==2){
		//		$("#playbass").prop("currentTime",0);
		//		$('#playbass').trigger('play');
		//	}
 
    	//}
	    	
	    	
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
		'<div style="float: right; position: fixed; top: 0px; left: 0px" id="counter"></div>'+
		'<div id="beatand"></div>'+
				
		//'<audio  ID="playohat" controls><source src="./hat.mp3" type="audio/mpeg"></audio>'+
		//'<div id="randomx"></div>'+
		
		'<form  ID="formDrummer">'+
		'tempo:<input ID = "tempo" type="range" data-show-value="true" min="75" max="300" name="tempo"  onchange="editNow(); " placeholder="Tempo"><br>'+
		'<div ID="sequencer"></div>'+
		//'<input style=" padding: 10px; " ID="saveedit" type="button" name="submit" value="Play" onclick="editNow(); ">'+
		'</form>'); 
		
		$("#sequencer").append(''+
		
	
			'<div class="topseq topseq1 last"></div>'+
			'<div class="topseq topseq2 "></div>'+
			'<div class="topseq topseq3 "></div>'+
			'<div class="topseq topseq4 "></div>'+
			'<div class="topseq topseq5 "></div>'+
			'<div class="topseq topseq6 "></div>'+
			'<div class="topseq topseq7 "></div>'+
			'<div class="topseq topseq8 "></div>'+
	
		

		
		'<div class="track">'+ 
		'<div class="track">'+
			'<div class="institle">Bass Drum</div>'+
			'<div class="player">'+
				'<audio ID="playbass" controls> <source src="./bass.mp3" type="audio/mpeg"></audio>'+
			'<div id="randomz"></div>'+
			'</div>'+
		
			'<div class="seq seq1 last"><label for="bassbox1">1</label><input ID = "bassbox1" class="bassbox" type="checkbox"  name="bassbox1" value="1" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq2 "><label for="bassbox2">2</label><input ID = "bassbox2" class="bassbox" type="checkbox"  name="bassbox2"  value="2" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq3 "><label for="bassbox3">3</label><input ID = "bassbox3" class="bassbox" type="checkbox"  name="bassbox3" value="3" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq4 "><label for="bassbox4">4</label><input ID = "bassbox4" class="bassbox" type="checkbox"  name="bassbox4"  value="4" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq5 "><label for="bassbox5">5</label><input ID = "bassbox5" class="bassbox" type="checkbox"  name="bassbox5" value="5" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq6 "><label for="bassbox6">6</label><input ID = "bassbox6" class="bassbox" type="checkbox"  name="bassbox6"  value="6" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq7 "><label for="bassbox7">7</label><input ID = "bassbox7" class="bassbox" type="checkbox"  name="bassbox7" value="7" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq8 "><label for="bassbox8">8</label><input ID = "bassbox8" class="bassbox" type="checkbox"  name="bassbox8"  value="8" onchange="editNow();"><div class="subdiv"></div></div>'+
		'</div>'+
		
		
		
		
		
		'<div class="track">'+
			'<div class="institle">Snare Drum</div>'+
			'<div class="player">'+
				'<audio  ID="playsnare" controls > <source src="./snare.mp3" type="audio/mpeg"></audio>'+
			'<div id="randomy"></div>'+
			'</div>'+
			
			'<div class="seq seq1  last"> <label for="snarebox1">1</label> <input ID = "snarebox1"  class="snarebox" type="checkbox"  name="snarebox1" value="1" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq2 "> <label for="snarebox2">2</label> <input ID = "snarebox2"   class="snarebox" type="checkbox"  name="snarebox2"  value="2" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq3 "> <label for="snarebox3">3</label> <input ID = "snarebox3"   class="snarebox" type="checkbox"  name="snarebox3" value="3" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq4 "> <label for="snarebox4">4</label> <input ID = "snarebox4"   class="snarebox" type="checkbox"  name="snarebox4"  value="4" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq5 "> <label for="snarebox5">5</label> <input ID = "snarebox5"   class="snarebox" type="checkbox"  name="snarebox5" value="5" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq6 "> <label for="snarebox6">6</label> <input ID = "snarebox6"   class="snarebox" type="checkbox"  name="snarebox6"  value="6" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq7 "> <label for="snarebox7">7</label> <input ID = "snarebox7"   class="snarebox" type="checkbox"  name="snarebox7" value="7" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq8 "> <label for="snarebox8">8</label> <input ID = "snarebox8"   class="snarebox" type="checkbox"  name="snarebox8"  value="8" onchange="editNow();"><div class="subdiv"></div></div>'+
			'</div>'+
			
		'<div class="track">'+
			'<div class="institle">HiHat</div>'+
			'<div class="player">'+
				'<audio  ID="playhat" controls><source src="./hihat2.mp3" type="audio/mpeg"></audio>'+
			'<div id="randomx"></div>'+
			'</div>'+
			
			'<div class="seq  seq1  last"> <label for="hatbox1">1</label> <input ID = "hatbox1" class="hatbox"  type="checkbox"  name="snarebox1" value="1" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq2 "> <label for="hatbox2">2</label> <input ID = "hatbox2" class="hatbox"  type="checkbox"  name="snarebox2"  value="2" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq3 "> <label for="hatbox3">3</label> <input ID = "hatbox3" class="hatbox"  type="checkbox"  name="snarebox3" value="3" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq4 "> <label for="hatbox4">4</label> <input ID = "hatbox4" class="hatbox"  type="checkbox"  name="snarebox4"  value="4" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq5 "> <label for="hatbox5">5</label> <input ID = "hatbox5" class="hatbox"  type="checkbox"  name="snarebox5" value="5" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq6 "> <label for="hatbox6">6</label> <input ID = "hatbox6" class="hatbox"  type="checkbox"  name="snarebox6"  value="6" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq7 "> <label for="hatbox7">7</label> <input ID = "hatbox7" class="hatbox"  type="checkbox"  name="snarebox7" value="7" onchange="editNow();"><div class="subdiv"></div></div>'+
			'<div class="seq seq8 "> <label for="hatbox8">8</label> <input ID = "hatbox8" class="hatbox" type="checkbox"  name="snarebox8"  value="8" onchange="editNow();"><div class="subdiv"></div></div>'+
		'</div>'+
		
		'');
		
								 
	}
	
	
}(this));
  
  
 $(document).ready(function(){
 		
	  window.setupDrums();
	  });

