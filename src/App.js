import Form from './components/Form';
import Head from './components/Head';
import Layout from './components/Layout';

import 'antd/dist/antd.css';

export default function App() {
    return (
        <Layout>
            <Head />
            <h1>Consulta CNPJ/CPF</h1>
            <Form />
        </Layout>
    );
}
