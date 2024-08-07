import BannerContainer from './container/BannerContainer/page';
import IntroContainer from './container/IntroContainer/page';
import TargetContainer from './container/TargetContainer/page';
import OurClientContainer from './container/OurClientContainer/page';
import CompetiorContainer from './container/CompetiorContainer/page';
import RulesContainer from './container/RulesContainer/page';
import ResultContainer from './container/ResultContainer/page';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <main>
      <BannerContainer />
      <IntroContainer />
      <TargetContainer />
      <OurClientContainer />
      <CompetiorContainer />
      <RulesContainer />
      <ResultContainer />
    </main>
  );
}
