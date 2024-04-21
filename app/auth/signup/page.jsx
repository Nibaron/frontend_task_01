'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
    const nameRef = useRef();
    const organizationRef = useRef();
    const contactRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    async function handleRegisterSubmit(event) {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredOrganization = organizationRef.current.value;
        const enteredContact = contactRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        // Perform registration logic here (e.g., API call)
        // Redirect to dashboard or handle registration success as needed
        console.log("Registration form submitted with:", enteredName, enteredEmail);

        // Redirect to login page after successful registration (example)
        router.push("/login");
    }

    return (
        <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleRegisterSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={nameRef}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="organization" className="block text-sm font-medium leading-6 text-gray-900">
                            Organization
                        </label>
                        <input
                            type="text"
                            id="organization"
                            ref={organizationRef}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Company Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                            Contact
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            ref={contactRef}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="user@example.com"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <a href="/auth/signin" className="text-blue-700 hover:underline">
                        Login
                    </a>
                    .
                </p>
            </div>
        </main>
    );
};

export default Register;
