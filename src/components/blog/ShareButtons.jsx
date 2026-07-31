import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link2, Share2 } from "lucide-react";

const ShareButtons = () => {
  const pageUrl = typeof window !== "undefined"
    ? window.location.href
    : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      alert("Link copied successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mt-16 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex flex-wrap items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <Share2 size={22} />

          <h3 className="text-xl font-semibold">
            Share this article
          </h3>
        </div>

        <div className="flex gap-3">

          <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              pageUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
          >
            

            <FaLinkedinIn size={18} />
          </a>

          <button
            onClick={copyLink}
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
            aria-label="Share on Facebook"
          >
            <Link2 size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default ShareButtons;