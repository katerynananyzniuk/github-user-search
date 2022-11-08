import { useContext } from "react"
import { Card } from "../components/Card"
import { Search } from "../components/Search"
import { GithubContext } from "../context/github/githubContext"

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search /> 

      <div className="row">

        {loading
          ? <p className="d-flex justify-content-center mt-5">Loading...</p>
          : users.map(user => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user}/>
              </div>
            ))
        }

      </div>
    </>
  )
}