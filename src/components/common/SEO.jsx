import { Helmet } from "react-helmet-async";

const SITE_NAME = "Sun & Shadow Group";
const SITE_URL = "https://sunandshadow.in";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

const SEO = ({
  title,
  description,
  keywords = "",
  image = DEFAULT_IMAGE,
  url = SITE_URL,
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="Sun & Shadow Group"
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
};

export default SEO;