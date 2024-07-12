import { Links, Meta, Outlet, Scripts, LiveReload, useLoaderData } from '@remix-run/react';
import styles from './styles/global.css';
import RootLayout from './components/layout';
import { getProduct } from './utils/api';
import Product from './components/ui/product';
import EmptyState from './components/ui/empty-state';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const loader = async () => {
  const product = await getProduct('1');
  return product;
};

export const meta = ({ data }) => {
  return [
    { title: `Diem | ${data.title}` },
    {
      property: 'og:title',
      content: data.title,
    },
    {
      property: 'og:image',
      content: data.meta.qrCode,
    },
    {
      name: 'description',
      content: data.description,
    },
  ];
};

export default function App() {
  const product = useLoaderData();

  return (
    <html>
      <head>
        {product && <link rel="icon" href={product.thumbnail} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RootLayout>{product ? <Product product={product} /> : <EmptyState />}</RootLayout>

        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
