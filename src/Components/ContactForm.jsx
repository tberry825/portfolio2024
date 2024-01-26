import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xleqgpkn',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <main >
            <div className="formContainer">
                <h1>Thank you for choosing T.A.P. Services</h1>
                <h2>Please fill out the information below: </h2>
                <hr />
                <form onSubmit={handleOnSubmit}>
                    <div className="inputWrapper">
                        <label className="textLabel" htmlFor="text">First Name</label>
                        <input className="inputField"
                            id="firstName"
                            type="name"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label className="textLabel" htmlFor="text">Last Name</label>
                        <input className="inputField"
                            id="lastName"
                            type="name"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}

                        />
                    </div>
                    <div className="inputWrapper">
                        <label className="textLabel" htmlFor="email">Email</label>
                        <input className="inputField"
                            id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label className="textLabel">Have I worked for you in the past? (yes or no): </label><br />
                        <select className="inputField">
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div className="checkBoxWrapper">
                        <label className="textLabel">Please choose the service(s) you need: </label><br />
                        <input type="checkbox" id="service1" name="vehicle1" value="Admin" />
                        <label className="checkLabel" for="vehicle1">Administrative Professional Services</label><br />
                        <input type="checkbox" id="service2" name="vehicle2" value="Graphic" />
                        <label className="checkLabel" for="vehicle2">Graphic Design Services</label><br />
                        <input type="checkbox" id="service3" name="vehicle3" value="Software" />
                        <label className="checkLabel" for="vehicle3">Software Developer Services</label><br />
                    </div>
                    <div className="inputWrapper">
                        <label className="textLabel" htmlFor="message">Please describe the service(s) you need:</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                        />
                    </div>
                    <div className="buttonSubmit">
                        <button className="buttonSubmit" type="submit" disabled={status.submitting}>
                            {!status.submitting
                                ? !status.submitted
                                    ? 'Submit'
                                    : 'Submitted'
                                : 'Submitting...'}
                        </button>
                    </div>
                </form>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </div>
        </main>
    );
};