export default function Tables({children, headContent, tableTitle}) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{tableTitle}</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                {headContent.map((x) => (
                                    <th key={x}>{x}</th>
                                ))}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                {headContent.map((x) => (
                                    <th key={x}>{x}</th>
                                ))}
                            </tr>
                        </tfoot>
                        <tbody>
                            {/* TODO: text data will come from api */}
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}