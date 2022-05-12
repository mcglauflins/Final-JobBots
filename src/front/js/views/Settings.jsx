import Sidebar from "../component/sideBar.jsx"
import useStore from "../store/zustand"
import {useState} from "react"
import {LoginModal} from "../component/loginModal.jsx"

const Settings = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
      setShowModal(!showModal);
    };
    const store = useStore()

    return store.loggedIn ? (<div className="d-flex" style={{height: "100vh" }}>
        <Sidebar navKey="4"/>
        <h1>Settings Page Here</h1>
    </div>) : ( <div>
      <h1>UNAUTHORIZED 401</h1>
      <h4>You must <a href="#" className="link-light"onClick={()=>handleShowModal()}>login.</a> </h4>

      <LoginModal show={showModal} onHide={handleShowModal} />
    </div> )
}

export default Settings