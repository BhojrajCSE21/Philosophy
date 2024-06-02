import React from 'react';
import './Readmore.css';
import image from '/b4dxclss.png'; // Make sure to place the image in the src folder or adjust the path accordingly

function Readmore() {
  return (
    <div className="container">
      <h1>How these two brothers quit their jobs to start organic farming and now earn ₹3 crore per year</h1>
      <p className="article-meta">By GQ Staff | 7 January 2019</p>
      <div className="image">
        <img src={image} alt="Hange Brothers" />
      </div>
      <p>If you’re contemplating quitting your corporate job to pursue your dream one this year, you probably need more than just a New Year’s Resolution to ensure your plan sees the light of day. Meet Satyajit Hange and Ajinkya Hange, two brothers from Pune who quit their high paying jobs nearly four years ago and converted their passion for organic farming into a business with an annual turnover of INR 3 crore. The successful journey of the Hange brothers who are, today, the proud owners of the popular brand Two Brothers Organic Farm, will hopefully give you enough motivation to discover your own passion and pursue it. Read on to find out how they turned their life around and how you can do it too.</p>

      <h2>The Hange Brothers’ Background</h2>
      <p>Satyajit Hange and Ajinkya Hange grew up in Pune, having studied in an Anglo-Indian boarding school in the city. But during the holidays, they would visit their farm at Bhodani village in Indapur taluka, 150 km away (3 hours) from Pune, where iduet father could not pay for their education. After having pursued undergraduate degrees in Computer Science and Economics, the Hange brothers did their Masters in Business Administration (MBA) from Pune University where they got placed at top MNCs - Satyajit at Kotak bank and Ajinkya at HDFC bank. The two brothers worked in the banking sector for nearly a decade before they decided to quit their jobs to pursue organic farming.</p>

      <h2>What drove them to take the leap</h2>
      <p>Recollecting their first brush with farming which eventually lead them to develop a passion for it, Ajinkya says, “When we began our jobs and realised that our parents were getting old, we started visiting the farms more often since we owned parts of land at the village and didn’t want to leave it unused. So we decided to keep the family’s occupation going by helping out on the farm.”</p>

      <p>Gradually, farming became their passion and they decided to quit their jobs to pursue it full time. Desperate neither of them had any agricultural credentials, they decided to keep an open mind. “When we started out, we visited a lot of farmers across Maharashtra, Karnataka and Gujarat and even within the locality to help us gain the knowledge regarding the field (quite literally).” But their decision wasn’t taken very well by their parents and family members. “Since our parents were farmers, they didn’t think it was a profitable profession. Especially for someone who has studied, lived and worked in the city. It was a regress rather than a progress, according to them.”</p>

      <p>But irrespective of their parents’ opinion and advice, the Hange brothers stood firm on their decision. Because while the paycheck was high, their jobs in the city didn’t give them inner peace or satisfaction with what they were doing. Their weekend trips to the village were far more desirable, since they had instilled a passion for farming in them.</p>

      <h2>Why Organic Farming?</h2>
    </div>
  );
}

export default Readmore;
