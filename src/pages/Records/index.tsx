import List from "./List"

const Records = ()=>{
    return(
        <div>
            <div className="flex justify-end">
                <button className="bg-primary text-white p-2 rounded ">Novo registro</button>
            </div>
            <List/>
        </div>
    )
}

export default Records