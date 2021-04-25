import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Layout(props) {
    const history = useHistory();
    function logout() {
        firebase
        .auth()
        .signOut()
        .then(() => {
        // Sign-out successful.
        history.push("/");
        })
        .catch((error) => {
        // An error happened.
        });
    }
    return (
        <>
            <AppBar position="static" color="secondary">
                <Toolbar className="d-flex justify-content-between">
                    <Typography variant="h6" className="font-weight-bold">
                        God's Plan
                    </Typography>
                    <Button variant="contained" className="font-weight-bold text-capitalize"
                    onClick={logout}
                    >
                        Logout</Button>
                </Toolbar>
            </AppBar>
            {props.children}
        </>
    );
}