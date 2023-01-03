import Layout from "../../components/Layout";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
	categoryTitle: Yup.string().required("Zorunlu alan"),
	categoryUrl: Yup.string().required("Zorunlu alan"),
	categoryDescription: Yup.string().required('Zorunlu alan'),
});

export default function CreateCategory() {


    const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			categoryTitle: '',
			categoryUrl: '',
			categoryDescription: '',
		},
		validationSchema,
		onSubmit: values => {
			console.log(values);
		},
	});

    return (
        <Layout title={"Create Category"} description={"Create category page"}>
            <div className="row">
                <div className="col-sm-12">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="categoryTitle" className="form-label">Category Title</label>
                            <input type="text" name="categoryTitle" className="form-control" id="categoryTitle" onChange={handleChange} values={values.categoryTitle} />
                            <span className="text-danger">{errors.categoryTitle ? errors.categoryTitle : null}</span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="categoryUrl" className="form-label">Category URL</label>
                            <input type="text" name="categoryUrl" className="form-control" id="categoryUrl" onChange={handleChange} values={values.categoryUrl}/>
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
                </div>
            </div>
        </Layout>
    )
}