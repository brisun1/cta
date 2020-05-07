import React from "react";
import ReactDOM from "react-dom";

function Example1() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example-one Component</div>

                        <div className="card-body">
                            I'm an exampleoo1111 component!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example1;

if (document.getElementById("example1")) {
    ReactDOM.render(<Example1 />, document.getElementById("example1"));
}
