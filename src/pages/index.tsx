//import 'tailwindcss/tailwind.css'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import useClientes from '@/hooks/useClientes'


export default function Home() {

  const {
    cliente, 
    clientes,
    tabelaVisivel, 
    selecionarCliente, 
    excluirCliente, 
    NovoCliente, 
    salvarCliente,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4'
                onClick={NovoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />)}

      </Layout>
    </div >
  )
}
