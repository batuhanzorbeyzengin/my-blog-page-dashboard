import Head from "next/head";
import Header from "./Header";

export default function Layout({children, title, description}) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    )
}