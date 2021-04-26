import Layout from "./Layout";

import CreateNote from "./components/home/CreateNote";
import GetNotes from "./components/home/GetNotes";

export default function Home() {
    return (
        <Layout>
            <CreateNote></CreateNote>
            <GetNotes></GetNotes>
        </Layout>
    );
}