import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="row justify-content-center">
                <aside className="col-lg-6 col-md-8 col-sm-10 overflow-hidden text-black rounded-lg mt-5">
                    <div className="px-4 pb-5 pt-3">
                        <div className="max-w-xl mx-auto mt-5 text-center text-sm-right">
                            <h2 className="display-4 font-weight-bold mb-4">
                                Download Now
                                <span className="d-none d-sm-block h4">Lorem Ipsum</span>
                            </h2>

                            <Link
                                className="btn btn-primary d-inline-flex align-items-center px-4 py-2 font-weight-bold rounded-lg"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download now
                            </Link>
                        </div>
                    </div>

                    <div className="position-absolute inset-0 w-100 mt-5 pt-1">
                        <img className="w-100" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                    </div>
                </aside>
            </div>

            <div className="row justify-content-center mt-5">
                <img className="col-lg-6 col-md-8 col-sm-10" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-xl sm:text-5xl py-4 font-weight-bold">Lorem Ipsum Yojo</h1>
        </div>
    );
}
