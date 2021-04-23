import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./firebase";
import firebase from "firebase/app";
import "firebase/auth";

export default function Login() {
    
    const history = useHistory();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
            console.log(user);
            history.push("/home");
        }
    });

    function signInWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
        console.log(result);
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        });
    }
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column" 
        style={{minHeight:"100vh"}}>
            <h2 className="mb-4">God's Plan</h2>
            <Button variant="contained" color="primary" style={{ textTransform: "capitalize" }}
            onClick={signInWithGoogle}
            >
                Sign In With Google
            </Button>
        </div>   
    );

}