import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(openSendMessage())
    }
    return (
        <div className="sidebar">
            <Button startIcon={<Add fontSize="large"
            />} className="sidebar__compose"
                onClick={handleClick}
            >Compose</Button>
            <SidebarOption
                Icon={Inbox}
                title={'Inbox'}
                number={10}
                selected={true} />
            <SidebarOption
                Icon={Star}
                title={'Starred'}
                number={5}
                selected={false} />
            <SidebarOption
                Icon={AccessTime}
                title={'Snoozed'}
                number={5}
                selected={false} />
            <SidebarOption
                Icon={LabelImportant}
                title={'Important'}
                number={5}
                selected={false} />
            <SidebarOption
                Icon={NearMe}
                title={'Sent'}
                number={5}
                selected={false} />
            <SidebarOption
                Icon={Note}
                title={'Drafts'}
                number={5}
                selected={false} />
            <SidebarOption
                Icon={ExpandMore}
                title={'More'}
                number={5}
                selected={false} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
