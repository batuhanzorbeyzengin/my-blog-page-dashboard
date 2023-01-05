import Layout from "../../components/Layout"
import Tables from "../../components/Tables"
import CategoryData from "../../styles/categories.json"
import { useState } from "react"
import { useRouter } from "next/router"

const headContent = ["Categori Name", "Affiliated articles", "Release date", "Date of arrangement", ""]

export default function PostCategories() {

    const router = useRouter();

    const categoryDelete = (e) => {
        // TODO: category deletion service will be prepared
    }

    return (
        <Layout title={"All Post Category"} description={"All post categories page"}>
            <div className="row">
                <div className="col-sm-12">
                    <Tables headContent={headContent} tableTitle={"All Post Category"}>
                        {CategoryData.map((x) => (
                            <tr key={x.title}>
                                <td>{x.title}</td>
                                <td>{x.affiliatedArticles}</td>
                                <td>{x.releaseDate}</td>
                                <td>{x.dateOfArrangement}</td>
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