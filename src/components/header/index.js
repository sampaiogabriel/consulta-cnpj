import { Helmet } from "react-helmet";

export function Header() {
    return (
        <Helmet>
            <title>Consulta CNPJ/CPF</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Consulte seu CNPJ" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </Helmet>
    )
}