"use client"

import { useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import ReCAPTCHA from "react-google-recaptcha"

import InputField from "./InputField.tsx"
import TextareaField from "./TextareaField.jsx"

export default function ContactForm() {
    const FORM_SUBMIT_URL: string = "https://frmsp.io/f/DvD0eexHR9D0"
    const HCAPTCHA_SITE_KEY: string = "4a42e16a-60f4-40e4-b02e-529a268cfcbc"

    const [captchaValue, setCaptchaValue] = useState(null)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const contactForm = useRef<HTMLFormElement>(null)

    async function submit(formData: FormData): Promise<void> {
        // if (!captchaValue) return

        try {
            const response = await fetch(FORM_SUBMIT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccess(true)
            }

        } catch (error) {
            console.log('Error submitting form')
            setFail(true)
        }
    }

    function resetForm() {
        contactForm.current?.reset()
        setFail(false)
    }

    return (
        <>
            <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
            <LayoutGroup>
                <AnimatePresence>
                    {!success && !fail && (
                        <motion.form
                            className="relative"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            ref={contactForm}
                            action={submit}
                        >
                            <h2 className="text-4xl font-bold">Contact Me</h2>

                            <fieldset>
                                <input type="text" name="_gotcha" className="hidden aria-hidden" />

                                <InputField name="name" placeholder="Your Name">
                                    Name
                                </InputField>

                                <InputField name="email" placeholder="Your Email">
                                    Email
                                </InputField>

                                <TextareaField name="message">
                                    Your Message
                                </TextareaField>

                                <div className="h-captcha" data-sitekey={HCAPTCHA_SITE_KEY}></div>
                            </fieldset>


                            <button type="submit" className="pill-button green mt-4">
                                <i className="nf nf-md-send"></i>&nbsp;Contact Me!
                            </button>
                        </motion.form>
                    )}

                    {success && (
                        <motion.div
                            className="success relative bg-transparent p-4 text-center flex items-center justify-center"
                            style={{ height: contactForm.current?.scrollHeight }}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                        >
                            <h3 className="text-2xl text-green font-bold">Thanks for contacting me!</h3>
                        </motion.div>
                    )}

                    {fail && (
                        <motion.div
                            style={{ height: contactForm.current?.scrollHeight }}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                        >
                            <div className="bg-red-600 px-4 py-2 text-center w-fit mx-auto rounded-md">
                                There was an error submitting your form. Please try again later.
                            </div>
                            <button className="pill-button red mx-auto mt-4" onClick={resetForm}>Try Again</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </LayoutGroup>
        </>)
}

