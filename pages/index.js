import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        {/* כאן מגיע הצ'אט */}
      </div>
    </>
  );
}
