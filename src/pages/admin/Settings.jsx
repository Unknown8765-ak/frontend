import CompanyForm from "../../components/admin/settings/CompanyForm";
import ContactForm from "../../components/admin/settings/ContactForm";
import SocialLinksForm from "../../components/admin/settings/SocialLinksForm";
import BrandingForm from "../../components/admin/settings/BrandingForm";
import SEOForm from "../../components/admin/settings/SEOForm";

const Settings = () => {
  return (
    <div className="space-y-8">

      {/* Page Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Company Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your company's branding, contact information,
          social media links and SEO settings.
        </p>
      </div>

      <CompanyForm />

      {/* <ContactForm /> */}

      <SocialLinksForm />

      <BrandingForm />

      <SEOForm />

    </div>
  );
};

export default Settings;