
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import React from 'react'

export default async function LoginOut() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
  return (<>
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <Link
        href="/login"
        className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign up
      </Link>
    </div>
      </>
  )
}
else {
  return (<div className="flex flex-1 items-center justify-end gap-x-6">
    <Link
      href="/protect"
      className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
    >
      Mypage
    </Link>
    <Link
      href="/logout"
      className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Logout
    </Link>
  </div>)
  }
}