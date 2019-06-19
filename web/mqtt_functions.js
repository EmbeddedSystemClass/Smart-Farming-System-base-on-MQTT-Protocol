var mqtt;
var reconnectTimeout = 2000;
var host="192.168.1.121"; 
var port=9001;      // websocket port: make sure mosquitto is configured with websocket

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Connected ");
    //mqtt.subscribe("sensor1");
    //message = new Paho.MQTT.Message("Hello World");
    //message.destinationName = "sensor1";
    //mqtt.send(message);
}

function MQTTconnect() {
    console.log("connecting to "+ host +" "+ port);
    mqtt = new Paho.MQTT.Client(host,port,"clientjs");
    //document.write("connecting to "+ host);
    var options = {
        timeout: 3,
        onSuccess: onConnect,  
    };
    mqtt.connect(options); //connect
}

function lighton() {
    message = new Paho.MQTT.Message("{\"Light\":\"ON\",\"Pump\":\"UNCHANGED\"}");
    message.destinationName = "Relays";     //topic
    mqtt.send(message);
    console.log("Light ON");
}

function lightoff() {
    message = new Paho.MQTT.Message("{\"Light\":\"OFF\",\"Pump\":\"UNCHANGED\"}");
    message.destinationName = "Relays";     //topic
    mqtt.send(message);
    console.log("Light OFF");
}

function pumpon() {
    message = new Paho.MQTT.Message("{\"Light\":\"UNCHANGED\",\"Pump\":\"ON\"}");
    message.destinationName = "Relays";     //topic
    mqtt.send(message);
    console.log("Pump ON");
}

function pumpoff() {
    message = new Paho.MQTT.Message("{\"Light\":\"UNCHANGED\",\"Pump\":\"OFF\"}");
    message.destinationName = "Relays";     //topic
    mqtt.send(message);
    console.log("Pump OFF");
}