import { BasicCard } from "../../../components/BasicCard"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"

const NewRegister = ()=>{
    return(
        <BasicCard maxWidth="min-w-min">
            <h2 className="text-2xl pb-10">Novo abastecimento</h2>
            <form className="flex flex-col justify-center w-96">
                <Input placeholder="Medidor" classCss="mb-5"/>
                <Input placeholder="Leitura Inicial" classCss="mb-5"/>
                <Input placeholder="Leitura Final" classCss="mb-5"/>
                <div className="flex justify-center">
                    <Button classCss="bg-red-400 m-5">Cancelar</Button>
                    <Button classCss="bg-primary m-5">Salvar</Button>
                </div>
            </form>
        </BasicCard>
    )

}

export default NewRegister