import { useState } from "react";
import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idede, setIdede] = useState(props.cliente.idede ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-2"
                />
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-2"
            />
            <Entrada
                texto="Idede"
                tipo="number"
                valor={idede} 
                valorMudou={setIdede}
            />
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2"
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idede, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}
                className={`bg-gradient-to-r from-gray-500 to-gray-500`}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}