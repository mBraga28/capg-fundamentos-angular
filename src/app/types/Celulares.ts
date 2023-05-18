export interface Celular {
    id: number;
    nome: string;
    descricao?: string; ///// tipagem opcional
    esgotado: boolean;
}