import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-[#043873] min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Get More Done with <br /> <span className="text-white">whitepace</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Project management software that enables your teams to
              collaborate, plan, analyze, and manage everyday tasks.
            </p>
            <button className="bg-[#2563eb] hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300">
              Try Whitespace free →
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-[#cfe4ff] rounded-lg h-60 sm:h-72 md:h-80 lg:h-96"></div>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-[#212529] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Project <br /> <span className="text-[#212529]">management</span>
            </h1>
            <p className="text-[#212529] text-base sm:text-lg mb-6">
              Images, Videos, PDFs, and audio files are supported. Create Math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="bg-[#2563eb] hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300">
              Get Started →
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-[#cfe4ff] rounded-lg h-60 sm:h-72 md:h-80 lg:h-96"></div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen gap-10 md:gap-20 py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Image src="/sec3.png" alt="sec 3 img" width={470} height={350} className="max-w-full" />
        <div>
          <h1 className="text-[#212529] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Work Together
          </h1>
          <p className="text-[#212529] text-base sm:text-lg mb-6">
            With whitepace, share your notes with your colleagues and
            collaborate on them.
            <br />
            You can also publish a note to the internet and share the URL with
            others.
          </p>
          <button className="bg-[#2563eb] hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300">
            Try Whitespace free →
          </button>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="h-auto py-16 bg-[#043873] text-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Your work, everywhere you are
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg font-thin px-4 sm:px-10 lg:px-32">
          Access your notes from your computer, phone, or tablet by synchronizing
          with various services, including whitepace, Dropbox, and OneDrive. The
          app is available on Windows, macOS, Linux, Android, and iOS. A terminal
          app is also available!
        </p>
        <div className="mt-8">
          <button className="bg-[#2563eb] hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300">
            Try Taskey →
          </button>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="text-center py-16">
        <h1 className="text-[#212529] text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Our sponsors
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 px-4 sm:px-10">
          <Image src="/Apple.png" alt="Apple logo" width={55} height={68} className="max-w-full" />
          <Image src="/Microsoft.png" alt="Microsoft logo" width={287} height={62} className="max-w-full" />
          <Image src="/Slack.png" alt="Slack logo" width={280} height={71} className="max-w-full" />
          <Image src="/Google.png" alt="Google logo" width={211} height={69} className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
