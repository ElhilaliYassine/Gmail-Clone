import React from 'react'
import './SendMail.css'
import { Close } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase'
import firebase from 'firebase/compat'

function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
    }
    const onClick = () => {
        dispatch(closeSendMessage())
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={onClick}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="To"
                    {...register("to", { required: true })}
                />
                {errors.to &&
                    <p className="sendMail__error">The recepient is required</p>}
                <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                />
                {errors.subject &&
                    <p className="sendMail__error">The subject is required</p>}
                <input
                    type="text"
                    placeholder="Message.."
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message &&
                    <p className="sendMail__error">The message is required</p>}
                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
