import './index.css'

export default function Layout({ children }) {

    return (
        <div className="container-primary">
            {children}
        </div>
    );
}