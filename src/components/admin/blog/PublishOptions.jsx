const PublishOptions = ({
    status,
    setStatus,
}) => {
    return (

        <div className="space-y-3">

            <h3 className="font-semibold">
                Publish Status
            </h3>

            <label className="flex items-center gap-2">

                <input
                    type="radio"
                    value="draft"
                    checked={status === "draft"}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                />

                Draft

            </label>

            <label className="flex items-center gap-2">

                <input
                    type="radio"
                    value="published"
                    checked={status === "published"}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                />

                Published

            </label>

        </div>

    );
};

export default PublishOptions;