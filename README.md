# IDD Final Project: ~~Pancake Printer~~ BotTender (Robo Drink Mixer)
### Ryan Curtis (rec284) & Alex Popeil (amp453)

<p align="center">
  <img src="75588240_2739929749405147_4103449142288711680_n.png">
</p>

## Original Idea: Pancake Printer
The pancake printer will have motors that control two axes suspended over the cook surface and controlled by the Pi. The batter flow will be controled by a servo motor and a camera to take pictures for the input, and a button to trigger the camera input. People will interact with the printer by posing in front of the camera, pressing the button to take a picture and start the printing. After the batter is done being printed, the user will have to flip the pancake and allow it to finish cooking before eating their face in pancake form.

### Paper Prototype:
<p align="center">
  <img src="fullsizeoutput_ba8.jpeg" width="350" height="350">
</p>

## New Idea: Robo Drink Mixer: BOTtender
Because of the complexity of building the motor mechanism to time the batter dispersal and cost of purchasing all the necessary parts, we decided to pivot our efforts to building a robotic drink mixer, BOTtender. The user would interact through a mobile app to select the proportion of each drink/mixer and then click a button to send a request to the system. It will then pour the appropriate amounts for each liquid and the drink will be ready. To build this, we need a simple mobile app to take the user input that connects to a web socket provided by the Pi. The pi then sends this data to the arduino that controls the timing of each solonoid valve connected to a bottle containing each liquid and dispenses all the liquids in a single cup.

### New Paper Prototype
<p align="center">
  <img src="WauOqqThS2uH8Vjt0ixx7Q.jpg" width="350" height="350">
</p>

### State Diagram

### Parts Used



<p align="center">
  <img src="2NuVBfliRa2pzbuoYYW1BQ.jpg" width="350" height="350">
</p>

[Video of Solenoid Valves Working](https://youtu.be/vz8qwGRgB_o)
