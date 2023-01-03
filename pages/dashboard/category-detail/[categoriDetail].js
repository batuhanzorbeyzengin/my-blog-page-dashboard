import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function CategoriDetail() {
    const router = useRouter();

    const categoryId = router.query.categoriDetail

    console.log(categoryId);

    return(
        <Layout title={"Categori Detail"} description={"Categori detail page"}>
            <div className="row">
                <div className="col-sm-12">
                    Category detail
                </div>
            </div>
        </Layout>
    )
}