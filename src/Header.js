import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


const Header=()=> {
    //const[state,dispatch]=>destructuring as below
    const [{basket,user}] = useStateValue();
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className='header'>

            <Link to ='/' >
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon_image'/>
            </Link>
          
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon' />
            </div>
  
            <div className='header__nav'>

                <Link to={!user && '/login'} className='header__link' >
                    <div  onClick={login} className='header__option'>
    <span className='header__OptionLineOne'>Hello {user?.email}</span>
    <span className='header__OptionLineTwo'>{user ? 'Sign out': 'Sign In'}</span>
                    </div>   
                </Link>

                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__OptionLineOne'>Returns</span>
                        <span className='header__OptionLineTwo'>& Orders</span>
                    </div>   
                </Link>

                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__OptionLineOne'>Your</span>
                        <span className='header__OptionLineTwo'>Prime</span>
                    </div>   
                </Link>


            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon  className='header__shoppingBasketIcon'/>
    <span className='header__OptionLineTwo header__basketCount'>{basket?.length}</span>
                </div>  
            </Link>

        </div>
        </nav>
    )
}

export default Header
