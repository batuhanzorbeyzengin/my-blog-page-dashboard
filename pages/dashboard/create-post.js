// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Layout from "../../components/Layout";
// import { useState } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import dynamic from 'next/dynamic';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

// const Editor = dynamic(
//     () => import('react-draft-wysiwyg').then(mod => mod.Editor),
//     { ssr: false }
// )

export default function CreatePost() {

    // const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState);
    // };

    return (
        <Layout title={"Create Post"} description={"Create post page"}>
            <div className="row">
                <div className="col-sm-12">
                    <div>
                        {/* <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <textarea
                            disabled
                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        /> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}