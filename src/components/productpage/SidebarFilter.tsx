import React, { useState, useEffect } from "react";
import axios from "axios";

type FilterProps = {
  onFilterChange: (filters: any) => void;
};

type Color = {
  _id: string;
  color_name: string;
};

type Storage = {
  _id: string;
  storage_name: string;
};

const SidebarFilter = ({ onFilterChange }: FilterProps) => {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedStorages, setSelectedStorages] = useState<string[]>([]);

  const [colors, setColors] = useState<Color[]>([]);
  const [storages, setStorages] = useState<Storage[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [colorRes, storageRes] = await Promise.all([
          axios.get("http://localhost:8888/api/colors"),
          axios.get("http://localhost:8888/api/storages"),
        ]);
        setColors(colorRes.data?.data || []);
        setStorages(storageRes.data?.data || []);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu bộ lọc:", error);
      }
    };
    fetchOptions();
  }, []);

  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setSelectedList: (val: string[]) => void
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((v) => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange({
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      color: selectedColors.join(","),
      storage: selectedStorages.join(","),
    });
  };

  const handleReset = () => {
    setPriceRange({ min: "", max: "" });
    setSelectedColors([]);
    setSelectedStorages([]);
    onFilterChange({});
  };

  return (
    <div className="lg:col-span-3 bg-gray-200 rounded-md shadow-sm px-6 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-[18px]">FILTER</h2>
        <button onClick={handleReset} className="text-[14px] hover:underline">
          Reset All
        </button>
      </div>

      {/* Price */}
      <div className="mb-10">
        <h3 className="font-bold text-[14px] mb-2">By Price</h3>
        <div className="flex items-center gap-2 mt-3">
          <input
            type="text"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            placeholder="$ Min"
            className="w-1/2 border rounded px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="text"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            placeholder="$ Max"
            className="w-1/2 border rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="mb-10">
        <h3 className="font-bold text-[14px] mb-2">By Color</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {colors.map((color) => (
            <li key={color._id}>
              <label>
                <input
                  type="checkbox"
                  className="accent-green-600 mr-2"
                  checked={selectedColors.includes(color._id)}
                  onChange={() =>
                    handleCheckboxChange(color._id, selectedColors, setSelectedColors)
                  }
                />
                {color.color_name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Storages */}
      <div className="mb-10">
        <h3 className="font-bold text-[14px] mb-2">By Memory</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {storages.map((s) => (
            <li key={s._id}>
              <label>
                <input
                  type="checkbox"
                  className="accent-green-600 mr-2"
                  checked={selectedStorages.includes(s._id)}
                  onChange={() =>
                    handleCheckboxChange(s._id, selectedStorages, setSelectedStorages)
                  }
                />
                {s.storage_name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleApplyFilters}
        className="mt-3 bg-green-600 font-bold text-white text-[14px] px-4 py-2 rounded hover:bg-green-700 transition w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SidebarFilter;
