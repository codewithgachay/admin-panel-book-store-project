import {
  ref,
  set,
  onValue,
  get,
  push,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "./firebase.js";

//Variables
const admin_key = push(ref(db, "/admins")).key;
let firebaseRef = ref(db, "/admins" + admin_key);
//FUNCTIONS
//1.Sets Admin username and password into database
export const setAdmin = () => {
  set(ref(db, "/"), "admins");
  let adminInfo = {
    username: "adminadmin",
    password: 12345,
  };
  set(firebaseRef, adminInfo);
};

//2. Gets admin username and password from database
export const getAdminInfo = () => {
  console.log(onValue(db,"admins", snapshot=>snapshot.val()));
  
}
