import { Avatar, IconButton } from '@material-ui/core'
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './Header.css'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            </div>
            <div className="header__middle">
                <Search />
                <input type="text" placeholder="Search Mail" />
                <ArrowDropDown className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
