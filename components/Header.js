import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"

export default function Header() {

    const router = useRouter();

    const handleLogOut = async () => {
        const user = await axios.get("/api/auth/logout");

        if (user.status === 200) {
            router.push("/login");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={"/#"} legacyBehavior>
                                <a className={router.asPath == "/#" ? "nav-link active" : "nav-link"} aria-current="page">
                                    Articles
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/#"} legacyBehavior>
                                <a className={router.asPath == "/#" ? "nav-link active" : "nav-link"}>
                                    Add Articles
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/#"} legacyBehavior>
                                <a className={router.asPath == "/#" ? "nav-link active" : "nav-link"} aria-disabled="true">
                                    Category Articles
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for articles" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button type="button" className="btn btn-secondary ml-2" onClick={() => handleLogOut()}> Logout </button>
                </div>
            </div>
        </nav>
    )
}