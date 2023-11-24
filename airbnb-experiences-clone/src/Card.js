import "./Card.css"

export default function Card(props){
    return (
        <div className="col-md-2">
            <div className="card m-2 text-dark">
                <div className="card-header">
                    <img src={props.image} width="150px" alt="" />
                </div>
                <div className="card-body">
                    <p className="mb-3">
                        <img src={props.star} alt="" width="25px"/>
                        {props.rating}
                        ({props.reviewCount})&nbsp;
                        
                          - {props.country}
                    </p>
                    
                    <p className="w-100">{props.title}</p>
                </div>
                <div className="card-footer fs-8">
                     <p><strong>from ${props.price}</strong> / person</p>
                </div>
            </div>
        </div>
        
    )
}
