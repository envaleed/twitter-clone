import React from 'react'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Button } from '@material-ui/core';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption text="Home" Icon={HomeIcon} active/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth color="primary">Tweet</Button>
        </div>
    )
}

export default Sidebar
