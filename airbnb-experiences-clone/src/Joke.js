import React from "react"


export default function Joke(props){
    
    return(
        <div className="col-md-4">
            <div className="card m-3">
                <div className="card-body">
                    { props.setup && <h3 className="w-100">
                        <strong>
                            Setup: &nbsp;
                        </strong>
                        {props.setup}
                    </h3>}
                    <hr/>
                    <p className="w-100 text-primary">
                        <strong>
                            Punchline: &nbsp;
                        </strong>
                        {props.punchline}
                    </p>
                </div>
            </div>
        </div>
    )
}