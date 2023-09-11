// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const logoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logoutButton-con">
      <button type="button" onClick={logoutButton}>
        Logout Button
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
