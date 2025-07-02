import React, { useEffect, useState } from 'react'

type CategoryType = {
  _id: string
  category_name: string
  slug?: string
}

const SidebarCate = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:8888/api/categories")
        const data = await res.json()
        setCategories(data.data.categories)
      } catch (err) {
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  return (
    <div className="bg-gray-200 rounded-md shadow-sm px-[30px] py-[30px] lg:col-span-3">
      <h2 className="font-bold text-[18px]">CATEGORIES</h2>
      <button className="w-1/2 bg-white text-[12px] font-bold py-2 rounded my-5">
        All Categories
      </button>
      <ul className="space-y-2 text-sm text-gray-700">
        {categories.length === 0 && (
          <li className="text-gray-500">No categories</li>
        )}
        {categories.map(category => (
          <li key={category._id} className="font-bold text-[14px] mb-2">
            {category.category_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarCate