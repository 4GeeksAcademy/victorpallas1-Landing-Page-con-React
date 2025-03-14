import React from "react";

const Card = () => {
    return (
        <div className="card" style={{widht:"18rem"}}>
            <img src="..." className="card-image-top" alt="..." />
        <div className="card-body">
            <h1>Hola</h1>
            <h5 className="card-title">Victor</h5>
            <p className="card-text">
                Probas con CARD de React
            </p>
            <a href="#" className="btn btn-primary">
                Pulsa aqui!
            </a>
        </div>
    </div>

    );

};

export default Card;