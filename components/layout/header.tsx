import { branding } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const nav_links: {
    label: string;
    url: string;
  }[] = [
      // {
      //   label: 'Roadmap',
      //   url: '/roadmap',
      // },
      // {
      //   label: 'Essays',
      //   url: '/essays',
      // },
    ];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={branding}
            alt="bi16z"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-8">
          {nav_links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-sm font-semibold text-white hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
