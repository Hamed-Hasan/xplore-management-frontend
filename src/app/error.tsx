"use client";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white font-extrabold mb-4">
        Oops! An Error Occurred
      </h1>
      <p className="text-xl text-white mb-8">
        It seems there was an error. Please try again later.
      </p>
      <a href="/" className="text-white hover:underline text-lg">
        Go back to the home page
      </a>
    </div>
  );
};

export default Error;
