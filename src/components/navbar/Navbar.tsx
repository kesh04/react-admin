import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
      <img src="logo.svg" alt=""  />
      <span>KPRODUCT</span>
    </div>
    <div className="icons">
      <img src="/search.svg" alt=""  className="icon"/>
      <img src="/app.svg" alt=""  className="icon"/>
      <img src="/expand.svg" alt=""  className="icon"/>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://lh3.googleusercontent.com/a/AAcHTtdRrTnpWm0JAezd6ZpK5x6-nFkBxBXmweiyWkH5l69ELhI=s360-c-no" alt="" />
        <span>kesh</span>
      </div>
      <img src="/setting.svg" alt=""  className="icon"/>

    </div>
    </div>
  )
}

export default Navbar
