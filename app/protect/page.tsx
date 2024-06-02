import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>이 페이지에는 로그인한 사용자만 접속할 수 있습니다. 당신의 이메일은 {data.user.email}</p>
}