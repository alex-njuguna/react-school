import { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/alex-njuguna')
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData);
        setData(userData);
      });
  }, []);

  return (
    <div className="container mt-5 bg-secondary p-4 rounded">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={data.avatar_url}
            className='rounded-circle shadow-lg'
            width='200px'
            height='200px'
            alt="user avatar"
          />
        </div>

        <div className="col-md-6 mt-5 text-start">
          <h3 className="text-light">{data.name}</h3>
          <div className="text-warning">
            <p className="text-light">{data.bio}</p>
            {data.blog && (
              <a
                href={data.blog}
                target='_blank'
                rel="noopener noreferrer"
                className='btn btn-warning text-danger'
              >
                Visit Blog
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
