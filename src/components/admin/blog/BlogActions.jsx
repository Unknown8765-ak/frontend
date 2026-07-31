import { Loader2 } from "lucide-react";

const BlogActions = ({ loading }) => {
    return (
        <div className="flex justify-end border-t pt-8">

            <button
                type="submit"
                disabled={loading}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:opacity-50
                "
            >
                {loading ? (
                    <>
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />
                        Publishing...
                    </>
                ) : (
                    "Create Blog"
                )}
            </button>

        </div>
    );
};

export default BlogActions;