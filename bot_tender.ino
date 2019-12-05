char inChar1 = '!';  // character we will use for messages from the RPi
char inChar2 = '!';
int pinOut1 = 8;
int pinOut2 = 7;

int button = 2;
int buttonState;

void setup() {
  Serial.begin(9600);

  pinMode(pinOut1, OUTPUT);
  pinMode(pinOut2, OUTPUT);
}

void loop() {
  digitalWrite(pinOut1, HIGH);
  digitalWrite(pinOut2, HIGH);
  // read the character we recieve on the serial port from the RPi
  if(Serial.available()>1) {
    //String data = Serial.readString();
    
//    inChar1 = (char)Serial.read();
//    inChar2 = (char)Serial.read();

    char buff[2];

    if (Serial.readBytes(buff, 2) == 2) {
      inChar1 = buff[0];
      inChar2 = buff[1];
      Serial.println('a');
      Serial.println(inChar1);
      Serial.println(inChar2);
    }
  }

  // if we get a 'H', turn the LED on, else turn it off
  //Spirit
  if(inChar1 != '!'){
    digitalWrite(pinOut1, LOW);
    delay(int(inChar1 - 'a')*1000);
    digitalWrite(pinOut1, HIGH);
  }

  //Mixer
  if(inChar2 != '!') {

    digitalWrite(pinOut2, LOW);
    delay(int(inChar2 - 'a')*1000);
    digitalWrite(pinOut2, HIGH);
    
  }

  inChar1 = '!';
  inChar2 = '!';

}
