import Head from "next/head"
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";

const validationSchema = Yup.object({
    firstName: Yup.string().required("Required field"),
    lastName: Yup.string().required("Required field"),
    email: Yup.string().email('Invalid e-mail address').required('Required field'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function Register() {

    const router = useRouter();

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async values => {
            await axios.post("/api/auth/register", values)
                .then((response) => {
                    if(response.status === 200) {
                        router.push("/login");
                    }
                }).catch((error) => {
                    console.log(error);
                })
        },
    });


    return (
        <>
            <Head>
                <title>Create an Account</title>
            </Head>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" name="firstName" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" onChange={handleChange} values={values.firstName} />
                                                <span className="text-danger">{errors.firstName ? errors.firstName : null}</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="lastName" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" onChange={handleChange} values={values.lastName} />
                                                <span className="text-danger">{errors.lastName ? errors.lastName : null}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" onChange={handleChange} values={values.email} />
                                            <span className="text-danger">{errors.email ? errors.email : null}</span>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" name="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" onChange={handleChange} values={values.password} />
                                                <span className="text-danger">{errors.password ? errors.password : null}</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" name="passwordConfirmation" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" onChange={handleChange} values={values.passwordConfirmation} />
                                                <span className="text-danger">{errors.passwordConfirmation ? errors.passwordConfirmation : null}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-user btn-block" type="submit">
                                            Register Account
                                        </button>
                                        <hr />
                                        <button className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Register with Google
                                        </button>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <Link href={"/forgot-password"} legacyBehavior>
                                            <a className="small">
                                                Forgot Password?
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link href={"/login"} legacyBehavior>
                                            <a className="small">
                                                Already have an account? Login!
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}