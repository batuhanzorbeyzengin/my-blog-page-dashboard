import Layout from "../../components/Layout";
import Tables from "../../components/Tables";
import BlogData from "../../styles/posts.json";
import Link from "next/link";
import { useState } from "react";

const headContent = ["Post Name", "Category", "Post owner", "Release date", "Date of arrangement", ""]

export default function AllPost() {

    const [productId, setProductId] = useState();

    const productDelete = (e) => {
        setProductId(e);
    }

    return (
        <Layout title={"All Post Page"} description={"All post page meta data"}>
            <div className="row">
                <div className="col-sm-12">
                    {/* TODO: The id of the content will be sent */}
                    <Tables headContent={headContent}>
                        {BlogData.map((x) => (
                            <tr key={x.title}>
                                <td>{x.title}</td>
                                <td>{x.category}</td>
                                <td>{x.postOwner}</td>
                                <td>{x.releaseDate}</td>
                                <td>{x.dateOfArrangement}</td>
                                <td>
                                    <Link href={`/dashboard/blog-detail/${x.id}`} legacyBehavior>
                                        <a>
                                            <button type="button" className="btn btn-primary">edit</button>
                                        </a>
                                    </Link>
                                    {/* TODO: Delete service will be written and connected */}
                                    <button type="button" className="btn btn-danger ml-2" onClick={() => productDelete(x.id)}>delete</button>
                                </td>
                            </tr>
                        ))}

                    </Tables>
                </div>
            </div>
        </Layout>
    )
}