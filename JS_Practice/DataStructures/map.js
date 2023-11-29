let map = new Map();
map.set("Harsha","Java");
map.set("Vaibu","JavaScript");
map.set("Sirisha","HTML,CSS");
map.set("Sirisha","Java");
//Using set if value is present it updates the value instead of creating new 

//To get all keys
//console.log(map.keys());

//have a method to check key present using has
//console.log(map.has("Harsha"));

//to get the value of the key we can use get method
//console.log(map.get("Harsha"));

//We can print the value of the map using key:value

// for(let [k,v] of map)
// {
//     console.log(`${k} : ${v}`);
// }
//in forEach we need to pass value,index,dataStructure
//map.forEach(value => console.log(value));
//Another method to obtain map values
for (let key of map.keys())
{
    console.log(map.get(key));
}