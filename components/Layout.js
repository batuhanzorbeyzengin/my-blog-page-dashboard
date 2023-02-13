/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../stores/user";

export default function Layout({ children, title, description }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const { userData } = useSelector(state => state.User);

    const handleLogOut = async () => {
        const user = await axios.get("/api/auth/logout");

        if (user.status === 200) {
            dispatch(deleteUser());
            router.push("/login");
        }
    };
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="noindex" />
            </Head>
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <Link href={"/dashboard/home"} legacyBehavior>
                            <a className="nav-link">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!-- Heading --> */}
                    <div className="sidebar-heading">
                        Articles
                    </div>

                    {/* <!-- Nav Item - Charts --> */}
                    <li className="nav-item">
                        <Link href={"/dashboard/all-post"} legacyBehavior>
                            <a className="nav-link">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>All Posts</span>
                            </a>
                        </Link>
                    </li>

                    {/* <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <Link href={"/dashboard/create-post"} legacyBehavior>
                            <a className="nav-link">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Add New Post</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href={"/dashboard/all-categories"} legacyBehavior>
                            <a className="nav-link">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Post categories</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href={"/dashboard/create-category"} legacyBehavior>
                            <a className="nav-link">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Add category</span>
                            </a>
                        </Link>
                    </li>
                </ul>
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar Search --> */}
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search all articles..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">

                                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1 d-flex align-items-center">
                                    <button type="button" className="btn btn-secondary ml-2" onClick={() => handleLogOut()}> Logout </button>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                {/* <!-- Nav Item - User Information --> */}
                                <li className="nav-item dropdown no-arrow d-flex align-items-center">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userData?.firstName} {userData?.lastName}</span>
                                </li>

                            </ul>

                        </nav>
                        {/* <!-- End of Topbar --> */}

                        <div className="container-fluid">
                            {children}
                        </div>

                    </div>
                    {/* <!-- End of Main Content --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* Logout Modal */}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}