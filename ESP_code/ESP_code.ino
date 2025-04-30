#include <WiFi.h>
#include <ESPSupabase.h>

// Variable definitions
// Using my personal hotspot here, but we can always try to set up a connection with the university WiFi
// I think in IoT we were using the Guest WiFi, but that was for connecting the Pi to WiFi, not an ESP32
const char* ssid = "Florian's iPhone";
const char* password = "password"; 

const char* supabase_url = "https://nxwsgcsebqaugagobrij.supabase.co";
const char* supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54d3NnY3NlYnFhdWdhZ29icmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMTQ4MTgsImV4cCI6MjA1OTY5MDgxOH0.nR78pTJz5M15hGh0v_r6uW9VtPL5hAKFUnEU9riR-98";

// Initialise Supbase object 
Supabase supabase;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED){
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  // Initialise Supabase
  supabase.begin(supabase_url, supabase_key);

  // Define table name
  String table_name = "readings";

  // JSON data (TODO: replace with real data)
  String jsonData = "{\"temperature\": 22.5, \"co2\": 450.0, \"humidity\": 55.2, \"uv\": 0.8, \"weight\": 10.5, \"energy_usage\": 120.0}"

  // Insert data into Supabase
  int response = supabase.insert(tableName, jsonData, false); // false = single insert

  if (response == 200){
    Serial.println("Data iserted successfully");
  } else {
    Serial.print("Failed to insert data. HTTP response: ");
    Serial.println(response);
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
