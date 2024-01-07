import { Link } from 'react-router-dom';
import Remote2 from '../assets/Remote2.png'

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={Remote2} alt="a picture" className='w-75'/>
                </div>
                <div className="col-md-6 text-end align-items-center">
                    <h1>Download Now</h1>
                    <h4>Lorem Ipsum</h4>
                    <button className='btn btn-danger'>
                        <span>
                            <i className="fa-brands fa-google-play"></i>
                        </span> &nbsp;
                        <span>
                            Download now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
