import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to="/">Accueil</Link>
                {/*<Link to="/profilage">Profilage</Link>*/}
                {/*<Link to="/instructions">Instructions</Link>*/}
                {/*<Link to="/produits">Produits</Link>*/}
            </nav>

            <Outlet />
        </>
    );
}
