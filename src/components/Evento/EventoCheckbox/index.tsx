import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEeventosState } from '../../../state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento}) => {
  
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEeventosState);

  const alterarStatus = ()=>{
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo;
    setListaDeEventos( listaAntiga => {
      const indice = listaAntiga.findIndex(evt=>evt.id === evento.id)
      return [...listaAntiga.slice(0,indice), eventoAlterado,...listaAntiga.slice(indice + 1)];
    })
  }


  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={() => alterarStatus()}></i>)
}

export default EventoCheckbox