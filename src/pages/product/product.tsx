import "./product.scss"
import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
const product = () => {
  return (
    <div className="product"><Single {...singleProduct}/></div>
  )
}

export default product