"use client";

interface HeaderDropdownProps {
  subcategories: string[],
  onSelect: (option: string) => void;
}

const HeaderDropDown: React.FC<HeaderDropdownProps> = ({ subcategories, onSelect }) => {
  return (
    <div className="w-48 border-l border-gray-600 py-2">
      {subcategories.map((subcategory) => (
        <div
          key={subcategory + 'Fash'}
          className="cursor-pointer px-4 py-2 text-white hover:bg-[#3A3A3A]"
          onClick={() => {
            onSelect(subcategory)
          }}
        >
          {subcategory}
        </div>
      ))}
    </div>
  )
}

export default HeaderDropDown;