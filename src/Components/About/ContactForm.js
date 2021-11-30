import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from "axios"

import '../../Styles/ContactForm.css'

export const ContactForm = () => {

    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChangeName = (e) => {
        setFeedback({ ...feedback, name: e.target.value })
    }
    const handleChangeemail = (e) => {
        setFeedback({ ...feedback, email: e.target.value })
    }
    const handleChangemessage = (e) => {
        setFeedback({ ...feedback, message: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const feedbackData = {
            ...feedback
        }

        if (feedback.email !== "" && feedback.name !== "" && feedback.message !== "") {
            axios.post("http://osca-api.herokuapp.com/form/post-user-message/", feedbackData)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            console.log("all fields are required")
        }
    }
    return (
        <>
            <h1>Say Hello!</h1>
            <Form>
                <Form.Group className="mb-3 name" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" value={feedback.name} placeholder="Enter your name" onChange={handleChangeName} />
                </Form.Group>
                <Form.Group className="mb-3 mail" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control required type="email" value={feedback.email} placeholder="Enter your e-mail" onChange={handleChangeemail} />
                </Form.Group>
                <Form.Group className="mb-3 message" controlId="message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control required as="textarea" value={feedback.message} placeholder="Enter your message" rows={3} onChange={handleChangemessage} />
                </Form.Group>
                <Form.Group className="button">
                    <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                        Send
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}
