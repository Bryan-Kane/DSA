/**
 * Alert Using Same Key-Card Three or More Times in a One Hour Period
 * Difficulty: Medium
 *
 * Given arrays keyName and keyTime where keyName[i] is a person's name and keyTime[i]
 * is when they used their keycard (format "HH:MM"), return names of people who used
 * their keycard 3+ times within any one-hour period. Return names sorted alphabetically.
 *
 * Example 1:
 * Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"],
 *        keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
 * Output: ["daniel"]
 *
 * Example 2:
 * Input: keyName = ["alice","alice","alice","bob","bob","bob","bob"],
 *        keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
 * Output: ["bob"]
 *
 * Example 3:
 * Input: keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]
 * Output: []
 *
 * Constraints:
 * - 1 <= keyName.length, keyTime.length <= 10^5
 * - keyName.length == keyTime.length
 * - keyTime[i] is in the format "HH:MM"
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function alertNames(keyName, keyTime) {
  if(keyName.length !== keyTime.length || keyName.length === 0 || keyTime.length === 0){
    return [];
  }
  let nameMap = new Map();
  let length = keyName.length;
  //form the map
  for(let i =0;i<length;i++){
    let name = keyName[i];
    let minutes = timeToMinutes(keyTime[i]);
    if(nameMap.has(name)){
      nameMap.set(name, [...nameMap.get(name),minutes]);
    } else{
      nameMap.set(name, [minutes]);
    }
  }
  let results = [];
  //sort the map and acquire the workers who were alerted 3 timmes in <= 60 minutes
  nameMap.forEach((value, key) =>{
    value.sort((a,b) => a - b);

    for(let i=0;i<value.length - 2;i++){
      if(value[i+2] - value[i] <= 60){
        results.push(key);
        break;
      }
    }
  });
  return results.sort();


}

// Helper function to convert "HH:MM" to minutes
function timeToMinutes(time) {
  let split = time.split(':');
  let hours = Number(split[0]);
  let minutes = Number(split[1]);
  return (60 * hours) + minutes;
}

// Tests
console.log(JSON.stringify(alertNames(
  ["daniel","daniel","daniel","luis","luis","luis","luis"],
  ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
))); // ["daniel"]

console.log(JSON.stringify(alertNames(
  ["alice","alice","alice","bob","bob","bob","bob"],
  ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
))); // ["bob"]

console.log(JSON.stringify(alertNames(
  ["john","john","john"],
  ["23:58","23:59","00:01"]
))); // []

console.log(JSON.stringify(alertNames(
  ["leslie","leslie","leslie","clare","clare","clare","clare"],
  ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
))); // ["clare","leslie"]

console.log(JSON.stringify(alertNames(
  ["a","a","a","a","a","a","b","b","b","b","b"],
  ["23:27","03:14","12:57","13:35","13:18","21:58","22:39","10:49","19:37","14:14","10:41"]
))); // ["a"]
