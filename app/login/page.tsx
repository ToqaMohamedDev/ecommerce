'use client';
import Scrollable from '@/components/Scrollable';
import { config } from '@/config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault();

    const { email, password } = e.currentTarget;

    // التحقق من صحة البيانات
    if (!email.value || !password.value) {
      setErrMsg('Both fields are required.');
      return;
    }

    try {
      setLoading(true);

      // إرسال البيانات إلى الخادم
      const response = await fetch(`${config?.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid credentials');
      }

      // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول بنجاح
      setErrMsg('');
      router.push('/');
    } catch (error) {
      setErrMsg(error instanceof Error ? error.message : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <Scrollable enableScroll />
      <div className="bg-secondary rounded-lg">
        <form
          onSubmit={handleLogin}
          className="max-w-4xl mx-auto pt-10 px-10 lg:px-0 text-white"
        >
          <div className="border-b border-b-white/10 pb-5">
            <h2 className="text-lg font-semibold uppercase leading-7">Login Form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Please enter your email and password to log in.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
                required
                disabled={loading}
              />
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
                required
                disabled={loading}
              />
            </div>
          </div>
          {errMsg && (
            <p className="bg-white/90 text-red-600 text-center py-1 rounded-md font-semibold">
              {errMsg}
            </p>
          )}
          <button
            disabled={loading}
            type="submit"
            className={`mt-5 w-full py-2 uppercase text-base font-bold text-gray-300 rounded-md ${loading ? 'bg-gray-500' : 'bg-indigo-700 hover:bg-indigo-600'
              } duration-200`}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className="text-sm leading-6 text-gray-400 text-center -mt-2 py-10">
          Don't have an account?{' '}
          <a
            href="/registration"
            className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
          >
            Register
          </a>
        </p>
      </div>
    </section>
  );
}
