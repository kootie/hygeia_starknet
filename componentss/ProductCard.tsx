// components/ProductCard.tsx
'use client'

import React from 'react'
import Image from 'next/image'

type ProductProps = {
  image: string
  title: string
    description: string
  price: number
//   rating: number
}

export default function ProductCard({ image, title, description, price }: ProductProps) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white dark:bg-gray-800 max-w-sm">
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover"/>
      </div>
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <h2 className="text-lg font-bold mb-1">KES {price}</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  )
}
