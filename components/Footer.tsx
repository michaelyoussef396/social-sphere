import styles from '../styles';

const Footer = () => {
  const socials = [
    {
      name: 'Facebook',
      url: '/facebook-icon.svg',
    },
    {
      name: 'Twitter',
      url: '/twitter-icon.svg',
    },
    {
      name: 'Instagram',
      url: '/instagram-icon.svg',
    },
    {
      name: 'LinkedIn',
      url: '/linkedin-icon.svg',
    },
  ];

  return (
    <footer className={`${styles.xPaddings} py-8 relative`}>
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Let's Create Your Perfect Event
          </h4>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Social Sphere
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © {new Date().getFullYear()} Social Sphere. All rights
              reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
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
