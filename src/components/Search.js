import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { GithubContext } from "../context/github/githubContext"

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user name')
    }
  }

  return (
    <div className="form-group">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
          onKeyPress={onSubmit}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button"
          onClick={
            () => {
              setValue('')
              github.clearUsers()
            }
          }
        >X</button>
      </div>
    </div>
  )
}