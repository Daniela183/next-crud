export default class Cliente {
    #id?: string
    #nome: string
    #idede: number

    constructor(nome: string, idede: number, id?: string) {
        this.#nome = nome
        this.#idede = idede
        this.#id = id
    }

    static vazio(){
        return new Cliente('', 0)
    }

    get id(){
        return this.#id
    }
    
    get nome(){
        return this.#nome
    }
    
    get idede(){
        return this.#idede
    }
}