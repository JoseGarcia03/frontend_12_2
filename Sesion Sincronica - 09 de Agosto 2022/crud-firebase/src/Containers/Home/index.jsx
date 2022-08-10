import { useState } from "react";
import Form from "../../Components/Home/Form";
import Navbar from "../../Components/Home/Navbar";
import Table from "../../Components/Home/Table";


const Home = () => {
    const [edit, setEdit] = useState()

    return (
        <>
            <Navbar />
            <Form edit={ edit } />
            <Table setEdit={ setEdit } />
        </>
    )
}

export default Home;