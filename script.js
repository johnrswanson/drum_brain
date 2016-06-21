(function (window) {
	
	var beatand='1';
	var counter='0';
	var measure='17';
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
		//	$('#counter').html(''+counter+'');
			$('.topseq'+counter).css('background', '#5f5');
			
				if(document.getElementById('bassbox'+counter).checked) {
					$("#playbass").prop("currentTime",0);
					$('#playbass').trigger('play');
					$('#bass'+counter+'>.indicator').slideDown(10);
					$('#bass'+counter+'>.indicator').slideUp(200);
				}
				
				if(document.getElementById('snarebox'+counter).checked) {
					$("#playsnare").prop("currentTime",0);
					$('#playsnare').trigger('play');
					$('#snare'+counter+'>.indicator').slideDown(10);
					$('#snare'+counter+'>.indicator').slideUp(200);
					
				}
				
				
				if(document.getElementById('hatbox'+counter).checked) {
					$("#playhat").prop("currentTime",0);
					$('#playhat').trigger('play');
					$('#hat'+counter+'>.indicator').slideDown(10);
					$('#hat'+counter+'>.indicator').slideUp(200);
				}
				
				
				if(document.getElementById('percbox'+counter).checked) {
					$("#playperc").prop("currentTime",0);
					$('#playperc').trigger('play');
					$('#perc'+counter+'>.indicator').slideDown(10);
					$('#perc'+counter+'>.indicator').slideUp(200);
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
		var topcounter=1;
	
		$("#page").append(''+
		'<div style="float: right; position: fixed; top: 0px; left: 0px" id="counter"></div>'+
		'<div id="beatand"></div>'+
				
		//'<audio  ID="playohat" controls><source src="./hat.mp3" type="audio/mpeg"></audio>'+
		//'<div id="randomx"></div>'+
		
		'<form  ID="formDrummer">'+
		'tempo:<input ID = "tempo" type="range" data-show-value="true" min="30" max="350" name="tempo"  onchange="editNow(); " placeholder="Tempo"><br>'+
		'<div ID="sequencer"></div>'+
		'</form>'); 
		
		$("#sequencer").append(''+
		'<div class="topsequencer"><div style="float: left; width: 8%;  border: solid 1px #fff; margin-right: 1px;"></div></div>'+
		'');
		
		
		
		$("#sequencer").append(''+
		'<div class="track track1">'+
			'<div class="player">'+
				'<audio  ID="playhat" controls><source src="./hihat2.mp3" type="audio/mpeg"></audio>'+
			'</div>'+
			'<div class="institle seq last" style="float: left; width: 8%;  border: solid 1px #fff;"><img src="hihat.png" width="50px">HiHat</div>'+
			'</div>'+
			'');

		$("#sequencer").append(''+
		'<div class="track track2">'+
			'<div class="player">'+
				'<audio  ID="playsnare" controls > <source src="./snare.mp3" type="audio/mpeg"></audio>'+
			'</div>'+
			'<div class="institle seq last" style="float: left; width: 8%; border: solid 1px #fff;"><img src="snare.png" width="50px"> Snare Drum</div>'+
			'</div>'+
			'');
			
		$("#sequencer").append(''+
		'<div class="track track3">'+
			'<div class="player">'+
				'<audio ID="playbass" controls> <source src="./bass.mp3" type="audio/mpeg"></audio>'+
			'</div>'+
			'<div class="institle seq last" style="float: left; width: 8%;  border: solid 1px #fff;"><img src="bass.png" width="45px"> Bass Drum</div>'+
			'');
			
			
			$("#sequencer").append(''+
		'<div class="track track4">'+
			'<div class="player">'+
				'<audio ID="playperc" controls> <source src="./hat.mp3" type="audio/mpeg"></audio>'+
			'</div>'+
			'<div class="institle seq last" style="float: left; width: 8%;  border: solid 1px #fff;"><img src="perc.png" width="50px"> Percussion</div>'+
			'');
			
			
			

		
		while(topcounter < measure){
		$(".topsequencer").append(''+
		'<div class="topseq topseq'+topcounter+'"></div>'+
		'');
			
			
			
		$(".track1").append(''+
		'<div  ID="hat'+topcounter+'" class="seq  seq'+topcounter+'"> <label for="hatbox'+topcounter+'"></label> <input ID = "hatbox'+topcounter+'" class="hatbox"  type="checkbox"  name="hatbox'+topcounter+'" value="'+topcounter+'" onchange="editNow();"><div class="indicator"></div><div class="subdiv"></div></div>'+
		'');	


		$(".track2").append(''+
		'<div  ID="snare'+topcounter+'" class="seq seq'+topcounter+' "> <label for="snarebox'+topcounter+'"></label> <input ID = "snarebox'+topcounter+'"  class="snarebox" type="checkbox"  name="snarebox'+topcounter+'" value="'+topcounter+'" onchange="editNow();"><div class="indicator"></div><div class="subdiv"></div></div>'+
		'');
		
		$(".track3").append(''+	
		'<div ID="bass'+topcounter+'" class="seq seq'+topcounter+' "><label for="bassbox'+topcounter+'"></label><input ID = "bassbox'+topcounter+'" class="bassbox" type="checkbox"  name="bassbox'+topcounter+'" value="'+topcounter+'" onchange="editNow();"><div class="indicator"></div><div class="subdiv"></div></div>'+
		'');

$(".track4").append(''+	
		'<div ID="perc'+topcounter+'" class="seq seq'+topcounter+' "><label for="percbox'+topcounter+'"></label><input ID = "percbox'+topcounter+'" class="bassbox" type="checkbox"  name="percbox'+topcounter+'" value="'+topcounter+'" onchange="editNow();"><div class="indicator"></div><div class="subdiv"></div></div>'+
		'');
		
		
		
		if (topcounter=='8'){
			$(".topsequencer").append(''+	
			'<div class="bigspacer" style=""></div>'+
			'');
			$(".track1").append(''+	
			'<div class="bigspacer"></div>'+

			'');
			
			$(".track2").append(''+	
			'<div class="bigspacer"></div>'+

			'');
			
			$(".track3").append(''+	
			'<div class="bigspacer"></div>'+

			'');
			
			$(".track4").append(''+	
			'<div class="bigspacer"></div>'+

			'');

		}
		

		

		if ((topcounter=='4')||(topcounter=='12')){
			$(".topsequencer").append(''+	
			'<div class="defaultspacer"></div>'+
			'');
			$(".track1").append(''+	
			'<div class="defaultspacer"></div>'+

			'');
			
			$(".track2").append(''+	
			'<div class="defaultspacer"></div>'+

			'');
			
			$(".track3").append(''+	
			'<div class="defaultspacer"></div>'+

			'');
			
			$(".track4").append(''+	
			'<div class="defaultspacer"></div>'+

			'');
		}
		
		
		
		if ((topcounter=='2')||(topcounter=='6')||(topcounter=='10')||(topcounter=='14')){
			$(".topsequencer").append(''+	
			'<div class="midspacer"></div>'+
			'');
			$(".track1").append(''+	
			'<div class="midspacer"></div>'+

			'');
			
			$(".track2").append(''+	
			'<div class="midspacer"></div>'+

			'');
			
			$(".track3").append(''+	
			'<div class="midspacer"></div>'+

			'');
			
			$(".track4").append(''+	
			'<div class="midspacer"></div>'+

			'');
		}
		
		if ((topcounter=='1')||(topcounter=='3')||(topcounter=='5')||(topcounter=='7')||(topcounter=='9')||(topcounter=='11')||(topcounter=='13')||(topcounter=='15')){
			$(".topsequencer").append(''+	
			'<div class="smallspacer"></div>'+
			'');
			$(".track1").append(''+	
			'<div class="smallspacer"></div>'+

			'');
			
			$(".track2").append(''+	
			'<div class="smallspacer"></div>'+

			'');
			
			$(".track3").append(''+	
			'<div class="smallspacer"></div>'+

			'');
			
			$(".track4").append(''+	
			'<div class="smallspacer"></div>'+

			'');
		}


		
		topcounter++;
		}
									 
	}
	
	
}(this));
  
  
 $(document).ready(function(){
 		
	  window.setupDrums();
	  });

