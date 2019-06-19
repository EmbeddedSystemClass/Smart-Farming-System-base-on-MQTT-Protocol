Implement MQTT protocol to sync data from esp8266, webserver, database and android app
############################################################
###########     IoT Smart Farming Project     ##############
############################################################

#   Notes: This project is designed to work in LAN, 
#   you have to purchase a Web hosting, setup DNS and modify MQTT Server address to use it in the Internet

#   Follow these steps to make this project work

Step 1: Flash code for NodeMCU by using "esp.c" file (you have to include libraries in Arduino libraries folder)

Step 2: Install these stuffs on a computer used as Server

    a)  Install Mosquitto and configure it to make sure the websocket is worked by following this link:
            https://obrienlabs.net/how-to-setup-your-own-mqtt-broker/

            (I ignored the user-password setup process)

    b)  Install "paho-mqtt-client" python library and python 2.7 (if not available)

    c)  Install MySQL, PHP, Apache2 and put the files and folders in "Web" folder to your Apache/www/Public HTML folder

Step 3: Run "create_db.py" and "create_tables.py" to create database and add tables
        Run "listen_mqtt.py" to get MQTT messages and insert to database.