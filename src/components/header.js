'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Search = dynamic(() => import('./search'), {
  ssr: false,
});

const navItems = [
  { label: 'Supplements', href: '/categories/vitamins-supplements' },
  { label: 'Healthcare', href: '/categories/healthcare' },
  { label: 'Lifestyle', href: '/categories/lifestyle' },
  { label: 'Software', href: '/categories/software' },
  { label: 'Technology', href: '/categories/technology' },
  { label: 'Categories', href: '/categories' },
];

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const getLinkClassName = (href) => {
    const isActive = pathname === href;

    return [
      'block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide no-underline transition-colors lg:py-2',
      'hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2',
      isActive ? 'bg-emerald-50 text-emerald-700' : 'text-black',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav
        id="top"
        className="mx-auto flex max-w-screen-2xl flex-wrap items-center gap-3 px-4 py-3 sm:px-5 lg:flex-nowrap lg:gap-5"
      >
        <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
          <Link
            prefetch={false}
            className="shrink-0 text-3xl font-black tracking-wide text-black no-underline transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 sm:text-4xl lg:text-3xl"
            href="/"
          >
            Scoop<span className="text-emerald-700">Review</span>
          </Link>

          <button
            className="inline-flex bg-transparent border-0 h-8 w-8 items-center justify-center rounded-md  text-slate-800 transition-colors  outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 lg:hidden"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <form
          id='searchform'
          role="search"
          aria-label="Site search"
          className="order-3 h-11 w-full lg:order-2 lg:max-w-md lg:flex-1 [&_.ui.icon.input>i.icon]:static [&_.ui.icon.input>i.icon]:m-0 [&_.ui.icon.input>i.icon]:flex [&_.ui.icon.input>i.icon]:h-11 [&_.ui.icon.input>i.icon]:w-14 [&_.ui.icon.input>i.icon]:shrink-0 [&_.ui.icon.input>i.icon]:items-center [&_.ui.icon.input>i.icon]:justify-center [&_.ui.icon.input>i.icon]:rounded-l-none [&_.ui.icon.input>i.icon]:rounded-r-md [&_.ui.icon.input>i.icon]:bg-zinc-950 [&_.ui.icon.input>i.icon]:text-white [&_.ui.icon.input>i.icon]:opacity-100 [&_.ui.input]:flex [&_.ui.input]:w-full [&_.ui.input]:items-stretch [&_.ui.input>input]:h-11 [&_.ui.input>input]:min-w-0 [&_.ui.input>input]:flex-1 [&_.ui.input>input]:rounded-l-md [&_.ui.input>input]:rounded-r-none [&_.ui.input>input]:border [&_.ui.input>input]:border-r-0 [&_.ui.input>input]:border-slate-200 [&_.ui.input>input]:px-3 [&_.ui.input>input]:text-sm [&_.ui.input>input]:font-normal [&_.ui.input>input]:text-slate-900 [&_.ui.input>input]:outline-none [&_.ui.input>input]:transition-colors [&_.ui.input>input:focus]:border-emerald-600 [&_.ui.input>input:focus]:ring-2 [&_.ui.input>input:focus]:ring-emerald-100 [&_.ui.search]:w-full"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search />
        </form>

        {isMenuOpen && (
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-32 z-40 bg-slate-950/40 lg:hidden"
            aria-label="Close navigation"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div
          id="site-navigation"
          className={`${isMenuOpen ? 'flex' : 'hidden'} fixed inset-x-0 top-32 z-50 max-h-[calc(100dvh-8rem)] flex-col gap-1 overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:static lg:order-3 lg:flex lg:max-h-none lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:overflow-visible lg:border-t-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              prefetch={false}
              className={getLinkClassName(item.href)}
              href={item.href}
              shallow={item.href !== '/categories' ? true : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
