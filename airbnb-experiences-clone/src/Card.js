import "./Card.css"

export default function Card(props){
    return (
        <div className="card m-2 text-dark">
            <div className="card-header h-50">
                <img className="w-100" src={props.image} alt="" />
            </div>
            <div className="card-body">
                <h5>{props.name}</h5>
            </div>
            <div className="card-footer fs-8">
                <p>
                    <i className="fa-solid fa-phone"></i> 
                    &nbsp;{props.phone}
                </p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    <small>{props.email}</small> 
                </p>
            </div>
        </div>
    )
}
