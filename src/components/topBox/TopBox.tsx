import "./TopBox.scss"
import {topDealUsers} from "../../data"
const TopBox = () => {
  return (
    <div className="topbox">
        <h1>Top Deals </h1>

        <div className="list">
            {topDealUsers.map(user=>(
                <div className="listItem" key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="" />
                        <div className="userTexts">
                            <div className="username">{user.username}</div>
                            <div className="email">{user.email}</div>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox