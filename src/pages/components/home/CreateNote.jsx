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
    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
        const text = (e.target.result)
        console.log(text)
       // alert(text)
        setState(() => ({
            note: text,
        }));
        };
        reader.readAsText(e.target.files[0])
    }
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
            <div className="container mt-4">
                <form action="#">
                    <Textfield id="note" label="Create a new note..."
                    variant="outlined" color="secondary"rows={4} 
                    className="shadow-sm" 
                    fullWidth
                    multiline
                    onChange={handleChange}
                    value={state.note}
                    />
                    <input type="file" className="btn btn-danger" accept=".txt" onChange={(e) => showFile(e)} />
                    <Button
                        variant="contained"
                        color="secondary"
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