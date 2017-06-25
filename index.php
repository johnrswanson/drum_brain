

<html>	
<head>
<title>
DRUM_BRAIN
</title>
</head>


<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="jquery.js">
</script>

<script src="webmidi.js">
</script>

<script src="drum_brain.js">
</script>
<script src="range.js">
</script>


 
	<div id="menu">DRUM_BRAIN<br></div>
	

  
<style>

body{font-size:14px;margin:0px; margin-top: 30px; padding:0px;}

#menu{background:#fff; color:#ffe;  width: 100% ;}

.panel{ width:80%; background: #cfcfcf; padding: 10%;     margin: auto; background: #bfcfbf; padding-top: 3px; padding-bottom: 3px;margin-bottom: 3px; clear:both;  }

.panel2{width:80%; padding:10%; background: #bfcfbf; padding-top: 3px; padding-bottom: 3px;margin-bottom: 3px;}

#log{position:fixed; background:none;  color : #000; font-size: 10px; width: 100% ; height: auto; top:1px; right:10px; text-align:right;}
#tempometer{ width: 100%; }

#loopmeter{float:left;}
#outputmeter{float:right;  }
.row{  height:80px; clear:both;width: 100%; background: #ddd; text-align: center; font-family:courier; text-transform:uppercase;  }
.step{ margin-right:1px; height: 50px; width: 5.9%; background : #eee; border: none; float:left; text-align:center;  padding :0px; font-size: 20px; text-align:center;}
.indicator{background:#333; display:none;height: 20px;width: 20px; margin-top:-50px;}
.randicator{background:#ccc;  display:none; height: 40px; width: 20px; margin-top:-50px;}
.part2{display:none; background: #bbb;}
#sequencer{padding-bottom: 100%;}
#controller{ padding-top:10px; min-height:100px; width:100%; clear: both;
}
.transport{font-size: 25px; background: #000; color: #fff; }


</style>
<body>  
<div id="controller"></div>
<div ID="sequencer"></div>
  </body>
</html>