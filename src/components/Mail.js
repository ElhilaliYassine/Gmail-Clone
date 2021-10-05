import { IconButton } from '@material-ui/core'
import { ArrowBack, Delete, Email, Error, ExitToApp, LabelImportant, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectOpenMail } from '../features/mailSlice'
import './Mail.css'

function Mail() {
    const selectedMail = useSelector(selectOpenMail)
    const history = useHistory()
    const handleHistory = () => {
        history.push("/")
    }
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={handleHistory}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                    {selectedMail?.description}
                </div>
            </div>
        </div>
    )
}

export default Mail
