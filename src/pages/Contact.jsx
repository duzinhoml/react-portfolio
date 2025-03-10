import React, { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    return(
        <div>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" required/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <label for="floatingInput">Email address</label>
                    {emailError && <div className="text-danger">{emailError}</div>}
                </div>

                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>

                <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    );
}