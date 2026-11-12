#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X sensor = Adafruit_VL53L0X();

void setup() {
  Serial.begin(9600);
  sensor.begin();
  pinMode(13,OUTPUT);

  Serial.println("VL53L0X test");
  if (!sensor.begin()) {
    Serial.println(F("Error al iniciar VL53L0X"));
    while(1);
  }
}

void loop() {

  VL53L0X_RangingMeasurementData_t measure;    
  sensor.rangingTest(&measure, false); 

  if(measure.RangeStatus == 4 || measure.RangeMilliMeter > 2000) //Después del rango de los 1200mm/120cm, la señal se vuelve errática, y después de los 500mm/50cm empieza a perder señal.
  {
    Serial.println("---");
    digitalWrite(13,LOW);
    delay(25);
  } else 
  {
    Serial.println(static_cast<int>(measure.RangeMilliMeter/10)); // Muestra en cm enteros.                     y
    //Serial.println(measure.RangeMilliMeter); // Muestra en mm
    digitalWrite(13,HIGH);
    delay(25);
  }

  //digitalWrite(13,HIGH);
  //delay(25);
  //digitalWrite(13,LOW);
  //delay(25);
}
