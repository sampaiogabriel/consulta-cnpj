import { Modal as ModalAntd } from 'antd';

export default function Modal({ dados, visibleModal, handleModalVisible }) {

    const handleOk = () => {
        handleModalVisible(false);
    };

    const handleCancel = () => {
        handleModalVisible(false);
    };

    return (
        <ModalAntd title={dados.nome} visible={visibleModal} onOk={handleOk} onCancel={handleCancel}>
            <p>Data da Situação: {dados.data_situacao}</p>
            <p>Tipo: {dados.tipo}</p>
            <p>Telefone: {dados.telefone}</p>
            <p>Email: {dados.email}</p>
            <p>Logradouro: {dados.logradouro}</p>
            <p>Complemento: {dados.complemento}</p>
            <p>Número: {dados.numero}</p>
            <p>Cidade: {dados.municipio}</p>
            <p>UF: {dados.uf}</p>
            <p>CNPJ: {dados.cnpj}</p>
        </ModalAntd>
    );
}