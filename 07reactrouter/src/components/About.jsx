import coder from '../assets/coder.jpg'

const About = () => {
  return (
    <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={coder} alt="a picture" className='w-75 rounded shadow'/>
                </div>
                <div className="col-md-6 text-center d-flex align-items-center">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta neque laboriosam dolorum, expedita ut eos nesciunt reiciendis explicabo adipisci accusamus corrupti quidem excepturi nisi modi quas praesentium tenetur deserunt qui!</p>
                </div>
            </div>
        </div>
  )
}

export default About