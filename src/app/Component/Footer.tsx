import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/Group.png"
              alt="Whitespace Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-2xl font-bold">whitepace</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-200 transition">Overview</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-200 transition">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Guides & tutorials</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Help center</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-200 transition">About us</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Media kit</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 text-center text-gray-300 pt-6">
        <p>©2024 Whitespace LLC By Abdul Rehman Ansari.</p>
      </div>
    </footer>
  );
};

export default Footer;
