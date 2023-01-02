import Layout from "../../components/Layout";

export default function AllPost() {
    return(
        <Layout title={"All Post Page"} description={"All post page meta data"}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">All Posts</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Post Name</th>
                                            <th>Category</th>
                                            <th>Post owner</th>
                                            <th>Release date</th>
                                            <th>Date of arrangement</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Post Name</th>
                                            <th>Category</th>
                                            <th>Post owner</th>
                                            <th>Release date</th>
                                            <th>Date of arrangement</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {/* TODO: text data will come from api */}
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td><button type="button" className="btn btn-primary">edit</button> <button type="button" className="btn btn-danger">delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}