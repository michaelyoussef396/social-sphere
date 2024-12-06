import styles from '../styles';

const Footer = () => {
  const socials = [
    {
      name: 'Instagram',
      url: '/instagram-icon.png',
    },
  ];

  return (
    <footer className={`${styles.xPaddings} py-8 relative bg-background1`}>
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        {/* Header Section */}
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-cormorant font-bold md:text-[64px] text-[44px] text-text">
            Let's Create Your Perfect Event
          </h4>
        </div>

        {/* Divider and Footer Content */}
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-text opacity-20" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-cormorant font-extrabold text-[24px] text-text">
              Social Sphere
            </h4>
            <p className="font-cormorant font-normal text-[14px] text-text opacity-70">
              Copyright © {new Date().getFullYear()} Social Sphere. All rights
              reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
