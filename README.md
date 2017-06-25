DRUM_BRAIN is a drum midi sequencer with absolutes and maybes, a drum machine with a brain that can improvise beats over a constant loop. 

MEANT FOR USE WITH WEBMIDI BROWSER

With this code, you can feed improvised drum patterns into midi drum apps or other devices.
working example can be found here http://www.johnswanson.nyc/drummer/

HOW TO USE

Make DRUM BEATS by marking checkboxes. 

The top row of black checkboxes on each drum step is the “always hit” row and will play every time thru your loop if checked.

The bottom row of grey checkboxes is the “maybe hit” row. The lower row of checkboxes will play some times and skip other times. 

Each time the loop plays, the black checkboxes will play consistantly, and the grey boxes will improvise on those beats. 






Example of midi connection on iOS :
Use the MFmonitor app as the output destination of the drum_brain webpage loaded in the Webmidi Browser,
and then allow the DM1 drum app to receive midi notes in from
MFmonitor app.
<IMG SRC='http://www.johnswanson.nyc/drummer/example.png'>
