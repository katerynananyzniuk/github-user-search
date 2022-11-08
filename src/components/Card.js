import {Link} from 'react-router-dom'

export const Card = ({user}) => (
  <div className="card mt-4">
    <img src={user.avatar_url} alt={user.login} className='card-img-top'/>
    <div className="card-body">
      <h5 className="card-title">{user.login}</h5>
      <div className="d-flex justify-content-end">
        <Link 
          to={'/profile/' + user.login} 
          className="btn btn-success px-5"
        >Open</Link>
      </div>
    </div>
  </div>
)