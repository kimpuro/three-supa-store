import React from 'react'
export default function BackButton() {
  return (
    <>
      <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-5 absolute z-50"
        onClick={() => {
          window.history.back()
        }}
      >
        돌아가기
      </button>
    </>
  )
}
