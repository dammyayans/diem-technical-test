import { Link } from '@remix-run/react';

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="p-6 lg:px-8 container">
        <Link href="/">
          <span className="sr-only">Diem</span>
          <img
            alt="Diem Scents"
            src="https://www.diemscents.com/cdn/shop/files/DIEM_Logo_Shopify.png"
            className="h-8 w-auto"
          />
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
