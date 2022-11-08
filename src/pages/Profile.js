import {Link, useParams} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Repos } from '../components/Repos';

export const Profile = () => {
  let { urlName } = useParams();
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  },[])

  if (loading) {
    return (
      <p style={{textAlign: 'center'}}>Loading...</p>
    )
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, 
    public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-secondary mb-4">Come back</Link>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">

            <div className="col-sm-4 text-center">
              <img 
              src={avatar_url} 
              alt={name}
              style={{width: '150px'}}
            />
              <h3>{name}</h3>
              {location && <p>Location: {location}</p>}
            </div>
            
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a 
                href={html_url} 
                target='_blank'
                rel="noreferrer"
                className='btn btn-dark'
              >Open repo</a>

              <ul style={{listStyle: 'none', margin: '10px 0', padding: 0}}>

                {login && <li>
                    <strong>Username: {login}</strong>
                </li>}
                {company && <li>
                    <strong>Company: {company}</strong>
                </li>}
                {blog && <li>
                    <strong>Website: {blog}</strong>
                </li>}

                <li>Followers: <span className='text-success'>{followers}</span></li>
                <li>Followed: <span className='text-success'>{following}</span></li>
                <li>Repositories: <span className='text-success'>{public_repos}</span></li>
                <li>Gists: <span className='text-success'>{public_gists}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            
      <Repos repos={repos}/>
    </>
  )
}