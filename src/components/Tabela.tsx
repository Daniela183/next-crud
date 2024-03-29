import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixeira } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-cyan-200' : 'bg-cyan-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idede}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                 flex justify-center items-center text-sky-600 rounded-full
                 p-2 m-1 hover:bg-cyan-50
             `}>
                        {IconeEdicao}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                flex justify-center items-center text-red-600 rounded-full
                 p-2 m-1 hover:bg-cyan-50
                `}>
                        {IconeLixeira}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-gradient-to-r from-sky-200 to-sky-300`}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}