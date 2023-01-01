import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = { username, password };

        const user = await axios.post("/api/auth/login", credentials);

        if (user.status === 200) {
            router.push("/dashboard/profile");
        }

        console.log(user);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="">
                                <label htmlFor="username"> Username </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="">
                                <label htmlFor="password"> Password </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button> Log in </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}