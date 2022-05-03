import { Input } from "antd";
import { useState } from "react";

import { mascaraCNPJ, mascaraCPF, removerMascara } from './../../helpers/functions';
import dados from './../../__mock/dados.json';

const { Search } = Input;

export default function SearchInput({ handlePesquisarCNPJ, handlePesquisarCPF }) {
    const [value, setValue] = useState('');
    const [type, setType] = useState('CPF');
    const [loading, setLoading] = useState(false);
    const [validation, setValidation] = useState('');
    // error, warning

    function handleSetType(e) {
        e.target.value.length <= 11 ? setType('CPF') : setType('CNPJ')
        setValue(e.target.value);
    }

    function handleSearch() {
        if (handleValidation()) {
            if (type === 'CPF') handlePesquisarCPF(removerMascara(value));
            if (type === 'CNPJ') handlePesquisarCNPJ(removerMascara(value));
            setValidation('');
        }
    }

    function handleValidation() {

        // Verificar tamanho
        if (type === 'CPF' && removerMascara(value).length !== 11) {
            setValidation('warning')
            return false;
        }
        if (type === 'CNPJ' && removerMascara(value).length !== 14) {
            setValidation('warning')
            return false;
        }

        return true;
    }

    function handleMascara(e) {
        if (type === 'CPF' && e.target.value.length === 11) setValue(mascaraCPF(e.target.value));
        if (type === 'CNPJ' && e.target.value.length === 14) setValue(mascaraCNPJ(e.target.value));
    }

    function handleRemoveMascaraCNPJ(e) {
        setValue(removerMascara(e.target.value));
    }

    return (
        <>
            <Search
                value={value}
                addonBefore={type}
                placeholder="Digite o documento"
                allowClear
                style={{ width: 304 }}
                enterButton
                loading={loading}
                // FIXME: Corrigir
                maxLength={14}
                status={validation}
                onChange={e => handleSetType(e)}
                onSearch={handleSearch}
                onBlur={e => handleMascara(e)}
                onFocus={e => handleRemoveMascaraCNPJ(e)}
            />
            <span>Validação</span>
        </>
    );
}

