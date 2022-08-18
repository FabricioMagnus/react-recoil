import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";

export const listaDeEeventosState = atom<IEvento[]>({
    key: "listaDeEeventosState",
    default: [
        {
            "descricao": "Estudar React",
            "inicio": new Date("2022-08-15T09:00"),
            "fim": new Date("2022-08-15T13:00"),
            "completo": false,
            "id": 1642342747
        },
        {
            "descricao": "Estudar Recoil",
            "inicio": new Date("2022-08-16T09:00"),
            "fim": new Date("2022-08-16T11:00"),
            "completo": false,
            "id": 1642342959
        }
    ],
})

export const usuarioState= atom({
    key: "usuario",
    default:{
        nome: "João",
        email: "teste@softkuka.com.br",
        senha: "123456",
    }
})