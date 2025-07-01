import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import SidebarFilter from '../../components/productpage/SidebarFilter';
import ProductBanner from '../../components/productpage/ProductBanner';
import PopularCate from '../../components/productpage/PopularCate';
import Pagination from '../../components/productpage/Pagination';
import ProductItem from './ProductItem ';

const Product = () => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 12;

    // Filters
    const [filters, setFilters] = useState<any>({});

    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
        setCurrentPage(1); // Reset về trang đầu tiên khi thay đổi filter
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await axios.get('http://localhost:8888/api/variant', {
                    params: {
                        category: categoryId,
                        page: currentPage,
                        limit: pageSize,
                        ...filters, 
                    },
                });

                const rawProducts = res.data?.data?.products || res.data?.data?.items || [];
                const total = res.data?.data?.pagination?.totalPages || 1;

                setProducts(rawProducts);
                setTotalPages(total);
            } catch (err) {
                console.error('❌ Lỗi khi tải sản phẩm:', err);
                setProducts([]);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId, currentPage, filters]);

    return (
        <main className="bg-[#e2e4eb] py-4">
            <ProductBanner />
            <PopularCate />

            <section className="bg-white rounded-lg shadow py-[30px]">
                <div className="px-[30px] rounded-md">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Sidebar Filter */}
                        <SidebarFilter onFilterChange={handleFilterChange} />

                        {/* Right Content */}
                        <div className="lg:col-span-9 flex flex-col">
                            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                <div className="text-sm text-gray-700">
                                    {loading ? (
                                        'Loading...'
                                    ) : (
                                        <>
                                            Showing <span className="font-semibold">{products.length}</span> of{' '}
                                            <span className="font-semibold">{products.length}</span> results
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {loading ? (
                                    <p className="col-span-full text-center">Đang tải sản phẩm...</p>
                                ) : products.length === 0 ? (
                                    <p className="col-span-full text-center text-gray-500">Không có sản phẩm nào.</p>
                                ) : (
                                    products.map((product) => (
                                        <ProductItem key={product._id} product={product} />
                                    ))
                                )}
                            </div>

                            {/* Pagination */}
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
