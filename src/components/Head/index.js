import Helmet from 'react-helmet';



export default function Head() {


    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Consulta CNPJ/CPF</title>

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </Helmet>
    );
}