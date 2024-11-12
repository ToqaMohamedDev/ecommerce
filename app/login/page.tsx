'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const { email, password }: any = Object.fromEntries(formData);

      // تحقق من صحة البيانات (يمكنك استبدال هذه الجزئية بإرسال البيانات إلى الخادم)
      if (!email || !password) {
        setErrMsg("Both fields are required.");
        return;
      }

      // إرسال البيانات إلى الخادم (على سبيل المثال: Firebase، Node.js API، إلخ)
      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // في حال نجاح التوثيق
      router.push('/dashboard'); // مثال على التوجيه إلى صفحة أخرى بعد الدخول
    } catch (error: any) {
      console.error("Error", error);
      setErrMsg(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center'>
      <div className='container mx-auto py-10'>
        <div className="bg-secondary rounded-lg">
          <form
            onSubmit={handleLogin}
            className="max-w-4xl mx-auto pt-10 px-10 lg:px-0 text-white"
          >
            <div className="border-b border-b-white/10 pb-5">
              <h2 className="text-lg font-semibold uppercase leading-7">
                Login Form
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Please enter your email and password to log in.
              </p>
            </div>
            <div className="border-b border-b-white/10 pb-5">
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                    required
                  />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                    required
                  />
                </div>
              </div>
            </div>
            {errMsg && (
              <p className="bg-white/90 text-red-600 text-center py-1 rounded-md tracking-wide font-semibold">
                {errMsg}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 bg-indigo-700 w-full py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white hover:bg-indigo-600 duration-200"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="text-sm leading-6 text-gray-400 text-center -mt-2 py-10">
            Does not have an Account{" "}
            <a href="/registration"
              className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
