import { Link } from '@remix-run/react';

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-primary">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-6 pb-8 pt-16 lg:pt-24 lg:px-8">
        <Link href="/">
          <span className="sr-only">Diem TT</span>
          <span className="text-9xl text-white font-bold">DIEM</span>
        </Link>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Diem, Technical Test. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
