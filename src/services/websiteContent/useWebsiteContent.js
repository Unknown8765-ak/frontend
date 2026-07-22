import { useEffect, useState } from "react";
import { getWebsiteContent } from "./websiteContentService";

const useWebsiteContent = (page) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getWebsiteContent(page);
        // console.log(data.data)
        // console.log(data)
        setContent(data.data);
      } catch (err) {
        setError(err);
        console.error(err);
      }finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [page]);

  return { content, loading };
};

export default useWebsiteContent;
