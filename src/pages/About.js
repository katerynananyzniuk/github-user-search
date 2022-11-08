import { Link } from "react-router-dom"

export const About = () => {
  return (
    <div>
      <div className="p-4 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-success">
          <h1 className="display-5 fw-bold">About</h1>
          <p className="text-secondary">This application will help you to find the user, his information and public repositories on Github website. 
          <br/>Just type a username in the search box and you will get a list of all users with that name.</p>
          <div className="d-flex justify-content-center pt-4">
            <Link to="/" className="btn btn-success px-5">Let's try</Link>
          </div>
        </div>
      </div>
    </div>
  )
}