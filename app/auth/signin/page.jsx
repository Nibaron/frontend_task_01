'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        
        // Perform login logic here (e.g., API call)
        // Redirect to dashboard or handle login success as needed
        console.log("Login form submitted with:", enteredEmail, enteredPassword);

        // Redirect to dashboard after successful login (example)
        router.push("/");
    }

    return (
        <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Your email
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
                        Your password
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
                    Login
                </button>
            </form>
            <p className="mt-4 text-center">
                Don&apos;t have an account?{" "}
                <a href="/auth/signup" className="text-blue-700 hover:underline">
                    Sign Up
                </a>
                .
            </p>
            </div>
        </main>
    );
};

export default Login;
