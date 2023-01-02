import Head from "next/head";
import Link from "next/link";
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const credentials = { username, password };

        await axios.post("/api/auth/login", credentials)
            .then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                    router.push("/dashboard/home");
                }
            })
            .catch((error) => {
                setLoading(false);
                setError(error.response.data.message);
            })
    };

    return (
        <>
            <Head>
                <title>Login Page</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet" />
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={(e) => handleSubmit(e)}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter User Name..." onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                {/* <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div> */}
                                                <button className="btn btn-primary btn-user btn-block" disabled={loading}>
                                                    {loading === true ? "Loading..." : "Login"}
                                                </button>
                                                {error &&
                                                    <div className="alert alert-danger mt-3" role="alert">
                                                        {error}
                                                    </div>
                                                }
                                                <hr />
                                                <button className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link href={"/forgot-password"} legacyBehavior>
                                                    <a className="small">
                                                        Forgot Password?
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="text-center">
                                                <Link href={"/register"} legacyBehavior>
                                                    <a className="small">
                                                        Create an Account!
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}