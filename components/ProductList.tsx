import Link from 'next/link'
import React from 'react'

const products = [
  {
    id: 1,
    name: '멋진 신발',
    href: '/detail',
    price: '$100',
    imageSrc: '/product.PNG',
    imageAlt: '신발 사진',
  },
  {
    id: 2,
    name: '가벼운 신발',
    href: '/detail',
    price: '$100',
    imageSrc: '/product.PNG',
    imageAlt: '신발 사진',
  },
  {
    id: 3,
    name: '좋은 신발',
    href: '/detail',
    price: '$100',
    imageSrc: '/product.PNG',
    imageAlt: '신발 사진',
  },
  {
    id: 4,
    name: '적당한 신발',
    href: '/detail',
    price: '$100',
    imageSrc: '/product.PNG',
    imageAlt: '신발 사진',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
