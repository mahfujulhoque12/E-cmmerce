'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="Breadcumb" className="py-4">
      <ul className="flex items-center space-x-2 text-sm text-gray-600 font-semibold">
        <li>
          <Link href="/" className="hover:text-blue-600  font-semibold">
        Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-400  font-semibold">/</span>
              {isLast ? (
                <span className="text-blue-600 font-semibold capitalize">
                  {segment.replace('-', ' ')}
                </span>
              ) : (
                <Link href={href} className="hover:text-blue-600 capitalize  font-semibold">
            {segment.replace('-', ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcumb;
