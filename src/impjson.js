import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase/config.js'
import * as fs from 'fs';

fs.writeFileSync("./env.json", "")
const querySnapshot = await getDocs(collection(db, "EV"));
const arr=[]
querySnapshot.forEach((doc) => {
  arr.push(doc.data());
  console.log(arr)
});
const data=JSON.stringify(arr);
console.log(data)
fs.writeFileSync("./env.json", data)