import CategoryForm from "../../../components/CategoryForm";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function CategoriDetail() {
    const router = useRouter();

    return(
        <Layout title={"Categori Detail"} description={"Categori detail page"}>
            <div className="row">
                <div className="col-sm-12">
                    <CategoryForm formType={"CategoryUpdate"} />
                </div>
            </div>
        </Layout>
    )
}