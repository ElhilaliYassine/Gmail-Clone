import { IconButton } from '@material-ui/core'
import { CheckBox, LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectMail } from '../features/mailSlice'
import './EmailRow.css'

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        }))
        history.push("/mail")
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <CheckBox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                <h4>
                    {subject}{"  "}
                    <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow
