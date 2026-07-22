import { socialLinks } from "./footerData";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">
        Follow Us
      </h3>

      <div className="flex gap-4">

        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-yellow-500
                transition
              "
            >
              <Icon size={18} />
            </a>
          );
        })}

      </div>
    </div>
  );
};

export default FooterSocial;