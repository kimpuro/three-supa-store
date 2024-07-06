'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error?.status === 400) {
    console.error(error)
    redirect('/error/error400')
  } else if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error?.status === 429) {
    console.error(error)
    redirect('/error/error429')
  } else if (error?.status === 422) {
    console.error(error)
    redirect('/error/error422')
  } else if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/welcome', 'layout')
  redirect('/welcome')
}

export async function logout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/logout', 'layout')
  redirect('/logout')
}
