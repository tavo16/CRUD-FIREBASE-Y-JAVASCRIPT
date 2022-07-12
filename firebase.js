// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9kOpyJVwUtvgYUWREzbIKefukAx-pCdg",
    authDomain: "crud-firebase-3b14f.firebaseapp.com",
    projectId: "crud-firebase-3b14f",
    storageBucket: "crud-firebase-3b14f.appspot.com",
    messagingSenderId: "741265363686",
    appId: "1:741265363686:web:948f7173184e07908ea127"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
    addDoc(collection(db, "tareas"), { title, description });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tareas"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tareas", id));

export const getTask = (id) => getDoc(doc(db, "tareas", id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tareas", id), newFields);

export const getTasks = () => getDocs(collection(db, "tareas"));