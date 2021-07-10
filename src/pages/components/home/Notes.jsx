import React from "react";
import Card from "@material-ui/core/Card";

export default function Notes(props) {
    const { notes } = props;
    const ExportNotes = (e) => {
        const element = document.createElement("a");
        const file = new Blob([e.target.value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "godsPlan.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

    }
    if(!notes || notes.length === 0) {
        return <p className="mt-5">You haven't created any notes yet.</p>;
    }
    else {
        return (
            <>
                <h4 className="container">Your Notes</h4>
                <div className="container mt-4">
                    <div className="card-columns">
                        {
                            notes.map((note) => {
                                return (
                                    <Card key={note.id} className="card p-3">
                                        
                                        <h6 className="m-0">{note.note}</h6>
                                        <button className= "btn btn-danger" onClick={(e) => {ExportNotes(e)}}
                                        value={note.note}>
                                            Export
                                        </button>
                                    </Card>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}