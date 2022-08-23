import { connect } from 'react-redux'
import Home from '../Components/Home'
import { addToCard } from '../Services/Actions/action'

const mapStateToProps = state => ({
    cardData:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCard(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home