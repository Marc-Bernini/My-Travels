import React from 'react';
import Travel from './Travel';
import './App.css';

const App = () => {
  return (
    <div className="travel">
      <Travel
        destination="Bali"

        country="Indonesia"

        photo="https://img-4.linternaute.com/uzneGwQt_ySLMWQ4EK6yCMRtKJs=/620x465/smart/629b900540754aaa9ab1fc9cc764588e/ccmcms-linternaute/10500670.jpg"

        distance="Loin"
      />

      <Travel
        destination="Les Caraïbes"

        country="Cuba"

        photo="https://www.airtransat.com/getmedia/95c15c8b-d29d-48a9-9b95-d32246661243/cuba-cayo-coco-plage-beach-2050x1200.aspx?width=2050&height=1200&ext=.jpg"

        distance="Moins loin"
      />
    </div>
  );
}

export default App;
