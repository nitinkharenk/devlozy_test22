// pages/index.tsx
import Head from 'next/head';
import HeartButton from '@/components/Favorites';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Head>
        <title>Heart Button Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeartButton />
    </div>
  );
};

export default Home;
