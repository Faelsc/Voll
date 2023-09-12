import { useState } from "react";

export default function usePost() {
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState(false);

    async function cadastrarDados<T>({url, dados} : 
        {url: string, dados: T}) {
            try {
            await fetch(`http://localhost:8000/${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify(dados)
            })
            setSucesso(true);
        } catch (erro) {
        setErro('Não foi possível enviar os dados');
    }
}

return {cadastrarDados, sucesso, erro}
}