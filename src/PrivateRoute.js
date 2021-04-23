import React from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import LinearProgress from "@material-ui/core/LinearProgress";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.setState({
                    isLoaded: true,
                    user: user
                });
            } else {
                this.setState({
                    isLoaded: true,
                    user: false
                });
            }
        }.bind(this));
    }

    render() {
        const { isLoaded, user } = this.state;

        if (!isLoaded) {
            return (
                <div className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh", width: "100vw" }}
                >
                    <LinearProgress className="w-25"></LinearProgress>
                </div>

            );
        }
        else {
            if (user) {
                const Component = this.props.component;
                return <Component />
            }
            else {
                return <Redirect to={{ pathname: "/" }} />;
            }
        }
    }
}

export default PrivateRoute;