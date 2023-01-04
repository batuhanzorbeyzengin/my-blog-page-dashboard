import Layout from "../../components/Layout";
import CategoryForm from "../../components/CategoryForm";

export default function CreateCategory() {
    return (
        <Layout title={"Create Category"} description={"Create category page"}>
            <div className="row">
                <div className="col-sm-12">
                    <CategoryForm formType={"CreateCategory"} />
                </div>
            </div>
        </Layout>
    )
}