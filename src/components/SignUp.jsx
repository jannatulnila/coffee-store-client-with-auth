import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    console.log(createUser)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        //   const email =form.email.value;
        //   const password =form.password.value;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries())


        // const email = formData.get('email');
        // const password = formData.get('password');
        console.log(email, password, userProfile);

        // create user in firebase
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after profile save', data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your account is created.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        createUser(email, password)
            .then(result => {
                console.log(result.user);


            }
            )
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
                <form onSubmit={handleSignUp}>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Enter your address" />
                    <label className="label">photoURL</label>
                    <input type="text" name='photo' className="input" placeholder="Enter your photoURL" />
                    <label className="label">Phone</label>
                    <input type="text" name='Phone' className="input" placeholder="Email" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Enter your Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="enter your Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">SignUp</button>
                </form>
            </div>
        </div>


    );
};

export default SignUp;