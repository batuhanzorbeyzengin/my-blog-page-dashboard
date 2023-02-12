import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useContext } from 'react';
import AppContext from './AppContext';
import { useRouter } from "next/router";

const validationSchema = Yup.object({
    categoryTitle: Yup.string().required("Required field"),
    categoryUrl: Yup.string().required("Required field").test('contains-turkish-chars', 'The text cannot contain Turkish characters', (value) => /^[A-Za-z0-9-]+$/g.test(value)),
    categoryDescription: Yup.string().required('Required field'),
});

export default function CategoryForm({ formType }) {

    const router = useRouter();
    const context = useContext(AppContext);

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            categoryTitle: '',
            categoryUrl: '',
            categoryDescription: '',
        },
        validationSchema,
        onSubmit: async (values, actions) => {
            const newValues = {
                ...values,
                userId: context.userDetail.id,
                categoryUrl: '/' + values.categoryUrl.toLowerCase().replace(/\s+/g, ' ').replace(/[\s-]+/g, '-').replace(/\b[A-Z]+\b/g, (word) => word.toLowerCase()),
            };
            // Form type control
            if (formType === "CreateCategory") {
                await axios.post("/api/panel/create-category", newValues)
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            router.push("/dashboard/all-categories");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } if (formType === "CategoryUpdate") {
                console.log("Category Update");
            }
        },
    });

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="categoryTitle" className="form-label">Category Title</label>
                <input type="text" name="categoryTitle" className="form-control" id="categoryTitle" onChange={handleChange} values={values.categoryTitle} />
                <span className="text-danger">{errors.categoryTitle ? errors.categoryTitle : null}</span>
            </div>
            <div className="col-md-6">
                <label htmlFor="categoryUrl" className="form-label">Category URL</label>
                <input type="text" name="categoryUrl" className="form-control" id="categoryUrl" onChange={handleChange} values={values.categoryUrl} />
                <span className="text-danger">{errors.categoryUrl ? errors.categoryUrl : null}</span>
            </div>
            <div className="col-12 mt-3">
                <label htmlFor="categoryDescription" className="form-label">Category Description</label>
                <textarea className="form-control" name="categoryDescription" id="categoryDescription" rows="3" onChange={handleChange} values={values.categoryDescription}></textarea>
                <span className="text-danger">{errors.categoryDescription ? errors.categoryDescription : null}</span>
            </div>
            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Publish</button>
            </div>
        </form>
    )
}