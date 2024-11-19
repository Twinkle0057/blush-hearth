'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Globe, Menu, ShoppingCart, SlidersHorizontal, ChevronRight } from 'lucide-react'
import HeaderDropDown from './HeaderDropdown'
import { avatarSubcategories, constantSubcategories, fashionSubcategories } from '../constants'

interface HeaderProps {
  onCategoryChange: (parent: string, child: string) => void
}

const Header: React.FC<HeaderProps> = ({onCategoryChange}) => {
  const [subcategory, setSubcategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('Avatars');

  const handleCategoryChange = (sub: string) => {
    setSubcategory(sub);
    setIsDropdownOpen(false);
    onCategoryChange(activeCategory, sub);
  }

  return (
    <header className="bg-[#1A1A1A] px-4 py-3">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-bold">
            <span className="text-red-500">Test</span>
            <span className="text-white"> Logo</span>
          </h1>
        </Link>

        {/* Search Section */}
        <div className="flex flex-1 items-center gap-2 rounded-full bg-[#2A2A2A] p-2 px-4">
          <div className="flex flex-1 flex-col">
            <label className="text-xs text-gray-400">Keyword</label>
            <input
              type="text"
              placeholder="Search Site"
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none"
            />
          </div>

          <div className="relative flex h-full items-center">
            <div
              className="flex flex-col border-l border-gray-600 pl-4"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <label className="text-xs text-gray-400">Category</label>
              <button className="flex items-center bg-transparent text-sm text-white outline-none">
                {subcategory}
              </button>
            </div>

            {/* Custom Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 flex rounded-xl bg-[#2A2A2A] shadow-lg">
                {/* Main Categories */}
                <div className="w-48 py-2">
                  <div
                    className="flex cursor-pointer items-center justify-between px-4 py-2 text-white hover:bg-[#3A3A3A]"
                    onMouseEnter={() => setActiveCategory('Avatars')}
                  >
                    <span>Avatars</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div
                    className="flex cursor-pointer items-center justify-between px-4 py-2 text-white hover:bg-[#3A3A3A]"
                    onMouseEnter={() => setActiveCategory('Fashion')}
                  >
                    <span>Fashion</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div
                    className="flex cursor-pointer items-center justify-between px-4 py-2 text-white hover:bg-[#3A3A3A]"
                    onMouseEnter={() => setActiveCategory('All')}
                  >
                    <span>All</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Subcategories */}
                {activeCategory === 'Avatars' && (
                  <HeaderDropDown subcategories={avatarSubcategories.concat(constantSubcategories)}
                    onSelect={(option: string) => {
                      handleCategoryChange(option);
                    }}
                  />
                )}
                {activeCategory === 'Fashion' && (
                  <HeaderDropDown subcategories={fashionSubcategories.concat(constantSubcategories)}
                    onSelect={(option: string) => {
                      handleCategoryChange(option);
                    }}
                  />
                )}
                {activeCategory === 'All' && (
                  <HeaderDropDown subcategories={avatarSubcategories.concat(fashionSubcategories.concat(constantSubcategories))}
                    onSelect={(option: string) => {
                      handleCategoryChange(option);
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <button className="ml-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600">
            <Search className="h-5 w-5" />
          </button>

          <button className="ml-1 rounded-full bg-[#3A3A3A] p-2 text-white hover:bg-[#4A4A4A]">
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/create"
            className="text-sm text-white hover:text-gray-300"
          >
            List your creation
          </Link>

          <button className="rounded-full p-2 text-white hover:bg-[#2A2A2A]">
            <Globe className="h-5 w-5" />
          </button>

          <button className="flex items-center gap-1 rounded-full border border-gray-600 px-3 py-1.5 text-white hover:bg-[#2A2A2A]">
            <Menu className="h-5 w-5" />
          </button>

          <button className="rounded-full p-2 text-white hover:bg-[#2A2A2A]">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;