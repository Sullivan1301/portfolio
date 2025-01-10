'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0ab9] text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Joro Sullivan Rakotoniaina. All rights reserved.
        </p>
        <p className="text-sm">
          Version 3.0.0
        </p>
        <p className="text-sm">
          Built with ❤️ using Next and Tailwind CSS
        </p>
      </div>
    </footer>
  );
} 