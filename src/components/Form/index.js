import { useState } from 'react';
import Modal from '../Modal';

import SearchInput from '../SearchInput';

import apiDados from './../../__mock/dados.json';

export default function Form() {
    const [documento, setDocumento] = useState('');
    const [dados, setDados] = useState(apiDados);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleModalVisible(status) {
        setIsModalVisible(status)
    };

    function handlePesquisarCNPJ(documento) {
        setIsModalVisible(true);
    }

    function handlePesquisarCPF(documento) {
        // TODO: Verificar se existe API para CPF.
        console.log(documento);
    }

    return (
        <>
            <SearchInput handlePesquisarCNPJ={handlePesquisarCNPJ} handlePesquisarCPF={handlePesquisarCPF} />
            <Modal
                dados={dados}
                visibleModal={isModalVisible}
                handleModalVisible={handleModalVisible}
            />
        </>
    );
}