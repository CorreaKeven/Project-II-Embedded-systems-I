#include <DHT.h>
#define DHTPIN 7
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
   Serial.begin(19200);
   dht.begin();

}

void loop() {
  delay(1000);
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  
 Serial.println(String(t) + ':' + String(h));
}
