import React , {useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import decode from 'jwt-decode'
// import authReducer from '../../reducers/auth'
import logo from '../../assets/logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../Avatar/Avatar'
import setCurrentUser from '../../actions/currentUser'
import bars from '../../assets/bars-solid.svg'
import "./Navbar.css"


const Navbar = ({handleSlideIn}) => {
    const dispatch=useDispatch()
    var Users=useSelector((state)=>{
        return state
    })
    const User=Users.currentUserReducer
    console.log(Users)
    console.log(User)
    console.log(User?.result?.name.charAt(0).toUpperCase())
    const navigate = useNavigate()

    const handleLogout = () =>{
        dispatch({ type: 'LOGOUT'})
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    
    //For maintaining the state of the Avatar component after getting into the page for the first time
    useEffect(()=>{
        dispatch(setCurrentUser(null))
    },[dispatch])

    useEffect(()=>{
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }

        }
        // dispatch(setCurrentUser(localStorage.getItem('Profile')))
    })
    return (
        <nav>
            <div className="navbar">
                <button className="slide-in-icon" onClick={()=>handleSlideIn()}>
                    <img src={bars} alt="bars" width="15"/>
                </button>
                <div className="navbar-1">
                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt='logo' />
                    </Link>
                    <Link to='/About' className='nav-item nav-btn'>About</Link>
                    <Link to='/Product' className='nav-item nav-btn'>Product</Link>
                    <Link to='/For Teams' className='nav-item nav-btn'>For Teams</Link>
                    <form>
                        <input type="text" placeholder="Search..."/>
                        <img src={search} alt="search" width='18' className="search-icon"/>
                    </form>
                </div>
                <div className="navbar-2">
                    {User==null? 
                        <>
                            <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
                        </>:
                        (
                            <>
                            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50" color='white' ><Link to={`/Users/${User?.result?._id}`} style={{color: "white", textDecoration: "none"}}>{User?.result?.name.charAt(0).toUpperCase()}</Link></Avatar>
                            <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;