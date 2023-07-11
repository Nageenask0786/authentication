import Cookie from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/')
  }
  return (
    <>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </>
  )
}

export default LogoutButton
