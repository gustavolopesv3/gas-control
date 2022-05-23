import { useState } from "react";
import { BasicCard } from "../../../components/BasicCard";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface ModalProps {
    showModal: boolean
}

export default function Modal({showModal}:ModalProps) {
  return (
    <>
      {showModal ? (
        <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

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
      </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}