// Inspirado en el codigo de Makerguides y modificado por Reptika
#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X sensor = Adafruit_VL53L0X();

int ENA = 10; // ENA, IN1 y IN2 son las connecciones del driver, y el numero corresponde a los pines del arduino.
int IN1 =  9; // Como son 2 motores, faltan el ENB, IN3 y IN4, los cuales podrian ir en los pines 5, 7 y 6 respectivamente.
int IN2 =  8; 

void setup() {
  Serial.begin(9600);
  sensor.begin();
  pinMode(13,OUTPUT);

  pinMode(ENA,OUTPUT); // Tambien se tendrian que repetir con el ENB, IN3 y IN4.
  pinMode(IN1,OUTPUT);
  pinMode(IN2,OUTPUT);

  Serial.println("VL53L0X test");
  if (!sensor.begin()) {
    Serial.println(F("Error al iniciar VL53L0X"));
    while(1);
  }
}

void loop() {

  VL53L0X_RangingMeasurementData_t measure;    
  sensor.rangingTest(&measure, false); 

  if(measure.RangeStatus == 4 || measure.RangeMilliMeter > 2000) // Después del rango de los 1200mm/120cm, la señal se vuelve errática, y después de los 500mm/50cm empieza a perder señal.
  {
    Serial.println("---");
    digitalWrite(13,LOW);
    desactivo(); // Esto es para probar si el driver funciona correctamente, y es capaz de cambiar de comportamiento segun la señal, haciendo las pruebas parece que le falta energia el cual se llegue a conectar directamente al driver.
    delay(250);
  } else 
  {
    Serial.println(static_cast<int>(measure.RangeMilliMeter/10)); // Muestra en cm enteros.                     y
    //Serial.println(measure.RangeMilliMeter); // Muestra en mm
    digitalWrite(13,HIGH);
    activo(); // Se enciende al detectar valores validos, o al menos eso deberia hacerlo, de todas formas esto deberia ser cambiado a futuro.
    delay(250);
  }

  //digitalWrite(13,HIGH);
  //delay(25);
  //digitalWrite(13,LOW);
  //delay(25);
}

void activo() { // Enciende.
  digitalWrite (IN1,HIGH);
  digitalWrite (IN2, LOW);
  analogWrite  (ENA, 180); // Velocidad
}
void desactivo() {
  digitalWrite (IN1,LOW);
  digitalWrite (IN2,LOW);
  analogWrite  (ENA, 0);
}

// Cualquier cosa, una fuente util que encontre es "eloctavobit.com/proyecto-tutoriales-arduino/funcionamiento-del-modulo-controlador-de-motores-l298n"
