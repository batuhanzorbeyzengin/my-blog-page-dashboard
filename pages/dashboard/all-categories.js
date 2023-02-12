import Layout from "../../components/Layout"
import Tables from "../../components/Tables"
// import CategoryData from "../../styles/categories.json"
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import AppContext from "../../components/AppContext"

const headContent = ["Categori Name", "Affiliated articles", "Release date", "Date of arrangement", ""]

export default function PostCategories() {

    const context = useContext(AppContext);

    const [CategoryData, setCategoryData] = useState([]);

    useEffect(() => {
        axios.post("/api/panel/all-category", {userId: context.userDetail.id})
            .then((response) => {
                setCategoryData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const categoryDelete = (e) => {
        // TODO: category deletion service will be prepared
    }

    return (
        <Layout title={"All Category"} description={"All categories page"}>
            <div className="row">
                <div className="col-sm-12">
                    <Tables headContent={headContent} tableTitle={"All Category"}>
                        {CategoryData.map((x) => (
                            <tr key={x.title}>
                                <td>{x.title}</td>
                                <td>{x.postCount}</td>
                                <td>{x.createdAt}</td>
                                <td>{x.updatedAt}</td>
                                <td>
                                    <a href={`/dashboard/category-detail/${x.id}`}><button type="button" className="btn btn-primary">edit</button></a>
                                    {/* TODO: Delete service will be written and connected */}
                                    <button type="button" className="btn btn-danger ml-2" onClick={() => categoryDelete(x.id)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </Tables>
                </div>
            </div>
        </Layout>
    )
}