import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {

    if (totalPages <= 1) return null;

    return (
        <section className="py-16">

            <div className="flex items-center justify-center gap-3">

                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="rounded-xl border p-3 transition enabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {

                    const page = index + 1;

                    return (
                        <button
                            type="button"
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`h-11 w-11 rounded-xl font-semibold transition ${
                                currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "border enabled:hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="rounded-xl border p-3 transition enabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronRight size={18} />
                </button>

            </div>

        </section>
    );
};

export default Pagination;