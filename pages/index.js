import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");

    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    if (user.status === 200) {
      router.push("/login");
    }

    console.log(user);
  };
  return (
    <>
      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </>
  )
}
