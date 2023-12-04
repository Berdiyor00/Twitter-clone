import { Fragment } from "react"
import '../Navbar/Navbar.css';
import { NavLink } from "react-router-dom"
import Twitter from "@mui/icons-material/Twitter";
import { Home } from "@mui/icons-material";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserImg from '../imgs/img/Ellipse.svg';
import Customize from '../imgs/icons/Customize.svg';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import BarChartIcon from '@mui/icons-material/BarChart';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Settings from '../imgs/icons/settings.svg'



function Navbar() {

    
  return (
   <Fragment>

<div className="container">
            <div className='left_bar'>
             <Twitter className="Home__icon__Twitter"/>
                <ul className="left_bar_menu">
                    <div className="left_bar_menu_lists">
                    <Home/> 
                        <NavLink className="left_bar_menu_lists_list" to="/">Home</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                    <TagIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">Explore</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                    <NotificationsIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">Notifications</NavLink>
                    </div>
                    <div className="left_bar_menu_lists" >
                   <EmailIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">Messages</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                    <BookmarkIcon/> 
                        <NavLink className="left_bar_menu_lists_list" to="/">Bookmarks</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                   <ReceiptLongIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">Lists</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                    <PersonIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">Profile</NavLink>
                    </div>
                    <div className="left_bar_menu_lists">
                    <MoreHorizIcon/>
                        <NavLink className="left_bar_menu_lists_list" to="/">More</NavLink>
                    </div>
                </ul>
                <button className="left_bar_btn">Tweet</button>

<div className="user__icon">
    <img src={UserImg} alt="" />
    <div className="User__titile">
    <h3 className="UserTitile">Bobur</h3>
    <p className="UserName__item">@bobur_mavlonov</p>
    </div>
    <div className="more__bar">
        <MoreHorizIcon/>
    </div>
</div>
            </div>
            <div className='center_bar'>

               <div className="center__bar__navbar">
                <h2 className="center__bar__title">
                    Home
                </h2>
               <img src={Customize} alt="" />
               </div>

               <div className="center__user__blog">

                <div className="userimg">
                    <div className="imgs__user">
                    <img src={UserImg} alt={UserImg} />
                 <div className="userTintles">
                     <div className="userwrappersd">
                       <input type="text"  className="user__titile__name" placeholder="What’s happening">
                       </input>
                       <div className="Users__stores__blog">
                             <ImageIcon/>
                                <GifIcon/>
                              <BarChartIcon className="Transform_icon"/>
                             <SentimentSatisfiedAltIcon/>
                             <EditCalendarIcon/>
                       </div>
                     </div>   
                 </div>
                   </div>
                   <button className="Users__btn">
                   Tweet
                   </button>
                </div>
               </div>
            </div>
            <div className='right_bar'>
                    <input type="Search" name="Search" className="SearchInput" placeholder="Search Twitter"/>
                    <div className="right__bar__wrappers">
                    <div className="Rigtbar__parametr">
                    <h2 className="right__bar___tiler">
                    Trends for you
                    </h2>
               <img src={Settings} alt={Settings}/>
                </div>
                <div className="Right__bar__titile__wrapper">
                    <div className="right__bar__status">
                        <div className="right__bars__items__wrapp">
               <p className="right__bar__text">
               Trending in Germany
               </p>
               <h3 className="rightbar__titile">
               Revolution
               </h3>
                <p className="right__bar__top">
                50.4K Tweets
                </p>
                </div>
                <div className="moremenu">
                    <MoreHorizIcon/>
                </div>
                  </div>
                  <div className="right__bar__status">
                        <div className="right__bars__items__wrapp">
               <p className="right__bar__text">
               Trending in Germany
               </p>
               <h3 className="rightbar__titile">
               Revolution
               </h3>
                <p className="right__bar__top">
                50.4K Tweets
                </p>
                </div>
                <div className="moremenu">
                    <MoreHorizIcon/>
                </div>
                  </div>
                  <div className="right__bar__status">
                        <div className="right__bars__items__wrapp">
               <p className="right__bar__text">
               Trending in Germany
               </p>
               <h3 className="rightbar__titile">
               Revolution
               </h3>
                <p className="right__bar__top">
                50.4K Tweets
                </p>
                </div>
                <div className="moremenu">
                    <MoreHorizIcon/>
                </div>
                  </div>
               </div>
            </div>
            </div> 
            </div>
   </Fragment>
  )
}

export default Navbar;