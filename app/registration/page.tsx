'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdPhotoLibrary } from 'react-icons/md';

export default function Registration() {
   const router =useRouter(); 
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [avatar, setAvatar] = useState<{ file: File | null; url: string }>({
    file: null,
    url: '',
  });
  
  // Function to handle the avatar (image) selection
  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // Registration form submission handler
  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form values
    const { firstName, lastName, email, password, passwordConfirm } = e.currentTarget;
    
    // Check if password and confirm password match
    if (password.value !== passwordConfirm.value) {
      setErrMsg('Passwords do not match');
      return;
    }
    
    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append('firstname', firstName.value);
    formData.append('lastname', lastName.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('passwordConfirm', passwordConfirm.value);
    
    if (avatar.file) {
      formData.append('profileImg', avatar.file);
    }

    try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });
      
        if (!response.ok) {
          const errorData = await response.json();
          setErrMsg(errorData.message || 'Registration failed');
        } else {
          setErrMsg('');
          router.push('/');
        }
      } catch {
        setErrMsg('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
  };

  return (
    <section className="container mx-auto py-10">
      <div className="bg-secondary rounded-lg">
        <form onSubmit={handleRegistration} 
        className="max-w-4xl mx-auto pt-10 px-10 lg:px-0 text-white">
          <div className="border-b border-b-white/10 pb-5">
            <h2 className="text-lg font-semibold uppercase leading-7">Registration Form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              You need to provide required information to get registered with us.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName"
               className="block text-sm font-medium text-gray-400">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
              />
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
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
              />
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirm"
                className="block w-full rounded-md bg-white/5 py-1.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm mt-2"
              />
            </div>
            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
                <div className="flex-1">
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 border border-gray-600 rounded-full p-1">
                        {avatar.url ? (
                          <Image src={avatar.url} alt="userImage" className="w-full h-full rounded-full object-cover" />
                        ) : (
                          <MdPhotoLibrary className="mx-auto h-full w-full text-gray-500" />
                        )}
                      </div>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <label htmlFor="file-upload" className="cursor-pointer px-2 py-1 bg-gray-900 font-semibold text-gray-200 hover:bg-gray-800">
                          Upload a file
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          className="sr-only"
                          onChange={handleAvatar}
                        />
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {errMsg && <p className="bg-white/90 text-red-600 text-center py-1 rounded-md font-semibold">{errMsg}</p>}
          <button
            disabled={loading}
            type="submit"
            className={`mt-5 w-full py-2 uppercase text-base font-bold text-gray-300 rounded-md ${loading ? 'bg-gray-500' : 'bg-indigo-700 hover:bg-indigo-600'} duration-200`}
          >
            {loading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
    </section>
  );
}
