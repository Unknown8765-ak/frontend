const SubmitButtons = ({
    loading,
    onReset
}) => {
    return (

        <div className="flex items-center justify-end gap-4 pt-8">

            <button
                type="button"
                onClick={onReset}
                className="
                    rounded-xl
                    border
                    border-gray-300
                    px-6
                    py-3
                    font-medium
                    transition
                    hover:bg-gray-100
                "
            >
                Reset
            </button>

            <button
                type="submit"
                disabled={loading}
                className="
                    rounded-xl
                    bg-blue-600
                    px-8
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                {
                    loading
                        ? "Publishing..."
                        : "Publish Blog"
                }
            </button>

        </div>

    );
};

export default SubmitButtons;