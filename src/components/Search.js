import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('make request with: ', value);
    } else {
      show('Enter user name!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter user name"
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}