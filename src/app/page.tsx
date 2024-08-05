import Image from 'next/image';
import BannerContainer from './container/BannerContainer/page';
import IntroContainer from './container/IntroContainer/page';

export default function Home() {
  return (
    <main>
      <BannerContainer />
      <IntroContainer />
    </main>
  );
}
