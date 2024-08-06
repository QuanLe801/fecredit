import Image from 'next/image';
import BannerContainer from './container/BannerContainer/page';
import IntroContainer from './container/IntroContainer/page';
import TargetContainer from './container/TargetContainer/page';
import OurClientContainer from './container/OurClientContainer/page';
import CompetiorContainer from './container/CompetiorContainer/page';

export default function Home() {
  return (
    <main>
      <BannerContainer />
      <IntroContainer />
      <TargetContainer />
      <OurClientContainer />
      <CompetiorContainer />
    </main>
  );
}
