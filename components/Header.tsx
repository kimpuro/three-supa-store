import React from 'react'
import Link from 'next/link'
import LoginOut from '@/components/LoginOut'

const navigation = [
  { name: 'List', href: '/list' },
  { name: 'Detail', href: '/detail' },
  { name: 'Preview', href: '/preview' },
]

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KimPuro</span>
            <img
              className="h-8 w-auto"
              src="/icon/mr-egg-sushi-trans.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <LoginOut />
        {/*<div className="flex lg:hidden">*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
        {/*    onClick={() => setMobileMenuOpen(true)}*/}
        {/*  >*/}
        {/*    <span className="sr-only">Open main menu</span>*/}
        {/*    <Bars3Icon className="h-6 w-6" aria-hidden="true" />*/}
        {/*  </button>*/}
        {/*</div>*/}
      </nav>

    </header>
  )
}
