import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "../../firebase";

export default function GetNotes() {

    const [state, useState] = useState({
        isLoaded: false,
        notes: null,
    });
    const notes = [];

    useEffect(() => {
        var db = firebase.firestore();
        db.collection("notes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {});
        });
    }, [input]);
    return <div className="container mt-5"></div>;
}