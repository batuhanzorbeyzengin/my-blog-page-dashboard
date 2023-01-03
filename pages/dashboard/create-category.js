import Layout from "../../components/Layout";

export default function CreateCategory() {
    return (
        <Layout title={"Create Category"} description={"Create category page"}>
            <div className="row">
                <div className="col-sm-12">
                    <form className="row">
                        <div className="col-md-6">
                            <label htmlFor="categoryTitle" className="form-label">Category Title</label>
                            <input type="text" className="form-control" id="categoryTitle" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="categoryUrl" className="form-label">Category URL</label>
                            <input type="text" className="form-control" id="categoryUrl" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="inputAddress" className="form-label">Category Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <button type="submit" className="btn btn-primary">Publish</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}