/*
Pseudocode Weight algorithm:
1. Measure Weight from the Load Cell
2. Check if there was a weight measurement
  if not, return
3. Check if the weight exceeded a threshold
  if not, return
4. Check if the weight is stable
  if not, return
5. Check if the weight is below a limit
  if not, return
6. Record the weight


Background for this
This is supposed to measure the weight of a capuchin monkey
The algorithm needs to only measure a valid weight. So it shouldn't measure a value when it's just a leaf or a rock
Also shouldn't measure a value if, say, a human is on the load cell
This should be written as a cpp code so that I can call the function in the loop part of the arduino code
*/
float previousWeight = 0;
unsigned long lastStableTime = 0;
const float MIN_VALID_WEIGHT = 1000.0; // [g] Adjust as needed
const float MAX_VALID_WEIGHT = 5000.0; // [g] Adjust as needed
const float STABILITY_THRESHOLD = 10.0; // [g] Adjust as needed
const unsigned long STABILITY_TIME = 2000; // [ms]

float getLoadCellWeight() {
  // TODO: Implement the function to read weight from the load cell
}

bool isWeightStable(float current, float previous){
  return abs(current - previous) < STABILITY_THRESHOLD;
}

bool maybeRecordWeight(float& finalWeight){
  float currentWeight = getLoadCellWeight();

  // 1. Check if a measurement was taken
  if (isnan(currentWeight) || currentWeight <= 0) return false;

  // 2. Check if weight is above minimal threshold
  if (currentWeight < MIN_VALID_WEIGHT) return false;

  // 3. Check if weight is below maximal threshold
  if (currentWeight > MAX_VALID_WEIGHT) return false;

  // 4. Check for stability
  if (!isWeightStable(currentWeight, previousWeight)){
    previousWeight = currentWeight;
    lastStableTime = millis();
    return false;
  }

  // 5. Ensure stability time has passed
  if (millis() - lastStableTime < STABILITY_TIME) return false;

  // Passed all checks - record the weight
  finalWeight = currentWeight;
  return true;
}