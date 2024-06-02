import Link from 'next/link'

export default function Page() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-cyan-500">Error</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">에러 페이지 입니다.</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">죄송합니다. 아마 DB가 꺼져있는 것 같습니다. 저에게 말씀 해주세요.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a href="mailto:puro@protonmail.ch?subject=포트폴리오 웹사이트에 에러가 생겼습니다." className="text-sm font-semibold text-gray-900">
              메일 보내기 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
