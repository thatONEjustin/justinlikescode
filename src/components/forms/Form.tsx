"use client"

import React from "react";

import InputField from "./InputField.tsx";
import TextareaField from "./TextareaField.jsx";

export default function FormGridForm() {
    const FORM_SUBMIT_URL = '';

    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);

    const [submitted, setSubmitted] = React.useState(false)

    const submit = async (formData: FormData): Promise<void> => {
        setSubmitted(true)

        try {
            const response = await fetch(FORM_SUBMIT_URL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSuccess(true);
            }

        } catch (error) {
            console.log('Error submitting form');
            setFail(true);
            setSubmitted(false);
        }
    }

    return (
        <>
            {success && submitted && <div className="alert alert-success">Thank you for contacting me! I will get back to you as soon as possible.</div>}

            {!success && !submitted &&
                <form id="contact" action={submit}>
                    <h2 className="text-4xl font-bold">Contact Me</h2>

                    <InputField name="name" placeholder="Your Name">
                        Name
                    </InputField>

                    <InputField name="email" placeholder="Your Email">
                        Email
                    </InputField>

                    <TextareaField name="message">
                        Your Message
                    </TextareaField>

                    <button type="submit" className="pill-button green"><i className="nf nf-md-send"></i>&nbsp;Contact Me!</button>
                </form>
            }
            {fail && <div className="alert alert-danger">There was an error submitting your form. Please try again later.</div>}
        </>
    )
}

