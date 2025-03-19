import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse inventore, tenetur impedit nisi saepe dicta eveniet quod, earum numquam illum ducimus ad quibusdam consequuntur dolores facere modi ipsum. Laborum.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;