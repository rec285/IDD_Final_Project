/*
server.js

Authors:David Goedicke (da.goedicke@gmail.com) & Nikolas Martelaro (nmartelaro@gmail.com)

This code is heavily based on Nikolas Martelaroes interaction-engine code (hence his authorship).
The  original purpose was:
This is the server that runs the web application and the serial
communication with the micro controller. Messaging to the micro controller is done
using serial. Messaging to the webapp is done using WebSocket.

//-- Additions:
This was extended by adding webcam functionality that takes images remotely.

Usage: node server.js SERIAL_PORT (Ex: node server.js /dev/ttyUSB0)

Notes: You will need to specify what port you would like the webapp to be
served from. You will also need to include the serial port address as a command
line input.
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;
var SerialPort = require('serialport'); // serial library
var Readline = SerialPort.parsers.Readline; // read serial data as lines
//-- Addition:
var NodeWebcam = require( "node-webcam" );// load the webcam module
var Jimp = require('jimp');
//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// check to make sure that the user provides the serial port for the Arduino
// when running the server
if (!process.argv[2]) {
  console.error('Usage: node ' + process.argv[1] + ' SERIAL_PORT');
  process.exit(1);
}

// start the server and say what port it is on

//----------------------------------------------------------------------------//

//--Additions:
//----------------------------WEBCAM SETUP------------------------------------//
//Default options
var opts = { //These Options define how the webcam is operated.
    //Picture related
    width: 1280, //size
    height: 720,
    quality: 30,
    //Delay to take shot
    delay: 0,
    //Save shots in memory
    saveShots: true,
    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "location",
    //Logging
    verbose: false
};
var Webcam = NodeWebcam.create( opts ); //starting up the webcam
//----------------------------------------------------------------------------//

const serial = new SerialPort(process.argv[2], {});
const parser = new Readline({
  delimiter: '\r\n'
});

// Read data that is available on the serial port and send it to the websocket
serial.pipe(parser);
parser.on('data', function(data) {
  console.log('Data:', data);
});

var router = express.Router();
var bodyParser = require('body-parser');
var morgan = require('morgan');
router.post('/requestDrink', function(req,res) {
	console.log(req.body);
	console.log(req.body.drinkRequest.spirt);
	console.log(String.fromCharCode(97 + req.body.drinkRequest.spirt));

	serial.write(String.fromCharCode(97 + req.body.drinkRequest.spirt));
//	serial.write(req.body.drinkRequest.spirt.toString());

        console.log(req.body.drinkRequest.mixer);
        console.log(String.fromCharCode(97 + req.body.drinkRequest.mixer));

        serial.write(String.fromCharCode(97 + req.body.drinkRequest.mixer));
});

//---------------------- WEBAPP SERVER SETUP ---------------------------------//
//parser.on('data', function(data) {//


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory
app.use('/api',router);

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});


//---------------------- SERIAL COMMUNICATION (Arduino) ----------------------//
// start the serial port connection and read on newlines
//const serial = new SerialPort(process.argv[2], {});
//const parser = new Readline({
  //delimiter: '\r\n'//
//});

// Read data that is available on the serial port and send it to the websocket
