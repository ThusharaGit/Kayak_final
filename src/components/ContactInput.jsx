import React, { useRef } from "react";

import contact_pic from "../images/contact_pic.svg";

function ContactInput() {
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            Name: nameRef.current.value,
            Phone: phoneRef.current.value,
            Email: emailRef.current.value,
            Message: messageRef.current.value,
        });
    };

    return (
        <div className="">
            <div className="">
                <h1>Contact us</h1>

                <form onSubmit={handleSubmit} className="">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        name="name"
                        // placeholder="your name"
                        ref={nameRef}
                        required
                    />

                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="text"
                        name="phone"
                        // placeholder="your phone number"
                        ref={phoneRef}
                    />

                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        name="email"
                        // placeholder="your email"
                        ref={emailRef}
                        required
                    />

                    <label htmlFor="message">Message *</label>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="type here ..."
                        ref={messageRef}
                        required
                    />
                    <h6>* required</h6>
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="home-contact-pic">
                <img src={contact_pic} alt="Contact Picture" />
            </div>
{/* AI section */}
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={contact_pic}
                        alt="Kayak on a lake at sunset"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contact Form Section */}
                <div className="w-full md:w-1/2 p-8 bg-white">
                    <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactInput