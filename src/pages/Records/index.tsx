import { useState } from "react"
import { Button } from "../../components/Button"
import List from "./List"
import Modal from "./ModalCreateNewRegister"


const Records = ()=>{
    const [showModal, setShowModal] = useState(false)
    return(
        <div>
            <div className="flex justify-end">
                <Button classCss="bg-primary m-5" onClick={()=> setShowModal(!showModal)}>
                    Novo registro
                </Button>
            </div>
            <List/>
            <Modal showModal={showModal}/>
        </div>
    )
}

export default Records