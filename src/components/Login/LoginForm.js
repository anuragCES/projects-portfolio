import React from 'react';

const LoginForm = ({credentials, login, onChange}) => {
    return (
        <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="username" value={credentials.username} onChange={onChange} className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" placeholder="Password" required />
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" onClick={login}>Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;