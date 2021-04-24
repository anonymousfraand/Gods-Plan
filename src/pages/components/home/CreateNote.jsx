import { useState } from "react";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "firebase/app";
import "../../firebase";

export default function CreateNote() {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const [ open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

        const [state, setState] = useState({
            note: "",
        });
        const handleChange = (e) => {
            const { id, value } = e.target;
            setState((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        };    

    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log(state.note);
        const note =state.note;
        var db = firebase.firestore();
        if(state.note != "") {
            db.collection("notes")
        .add({
            note: note,
            created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setOpen(true);
            setState((prevState) => ({
                ...prevState,
                note: "",
            }));
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        }
    };

    return(
        <>
            <div className="container col-md-8 col-xl-6 mt-4">
                <form action="#">
                    <Textfield id="note" label="Create a new note..."
                    variant="filled" rows={4} 
                    className="shadow-sm" 
                    fullWidth
                    multiline
                    onChange={handleChange}
                    value={state.note}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className="d-flex ml-auto mt-3 text-capitalize font-weight-bold"
                        onClick={handleSubmitClick}
                        >
                            Create
                    </Button>
                </form>
            </div>
            <Snackbar open = {open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Note Created Successfully
                </Alert>
            </Snackbar>
        </>
    );
}