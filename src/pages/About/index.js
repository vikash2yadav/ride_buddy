import React, { useContext, useEffect } from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { CommonContext } from "../../context/CommonContext";
import { Link } from "react-router-dom";

const About = () => {
  const { currentLangCode } = useContext(CommonContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);
  return (
    <>
      <Header />
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800 base_font">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl text-left text-gray-800 mb-4 noto_font">
            {currentLangCode === "hn"
              ? "राइडबडी के बारे में"
              : currentLangCode === "guj"
              ? "રાઇડબડી વિશે"
              : "About RideBuddy"}
          </h1>
          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "RideBuddy.com भारत का प्रमुख कार और बाइक रेंटल वेंचर है जो उपयोगकर्ताओं को उनकी जरूरत के मुताबिक कार किराए पर लेने में मदद करता है। इसकी वेबसाइट और ऐप पर ऑटोमोटिव सामग्री उपलब्ध है जैसे कि विशेषज्ञ समीक्षाएँ, विस्तृत स्पेसिफिकेशंस और कीमतें, तुलना, और भारत में उपलब्ध सभी कार ब्रांड्स और मॉडलों की वीडियो और तस्वीरें। कंपनी के कई ऑटो निर्माताओं, 4000 से अधिक कार डीलर्स और अनेक वित्तीय संस्थाओं के साथ समझौते हैं, जो वाहनों की खरीदारी को सुगम बनाते हैं।"
              : currentLangCode === "guj"
              ? "RideBuddy.com ભારતનું અગ્રણી કાર અને બાઈક રેન્ટલ વેન્ચર છે જે વપરાશકર્તાઓને તેમની જરૂરિયાતો અનુસાર યોગ્ય કાર ભાડે લેવામાં મદદ કરે છે. તેની વેબસાઇટ અને એપ્લિકેશન પર ઓટોમોટિવ સામગ્રી ઉપલબ્ધ છે જેમ કે નિષ્ણાત સમીક્ષાઓ, વિગતવાર સ્પેસિફિકેશન્સ અને કિંમતો, તુલનાઓ અને ભારતમાં ઉપલબ્ધ તમામ કાર બ્રાન્ડ્સ અને મોડલ્સના વિડિઓઝ અને છબીઓ. કંપનીના ઘણા ઓટો નિર્માતાઓ, 4000થી વધુ કાર ડીલર્સ અને અનેક નાણાંકીય સંસ્થાઓ સાથે કરાર છે, જે વાહનોની ખરીદીને સુગમ બનાવે છે."
              : "RideBuddy.com is India's leading car and bike rental venture that helps users rent cars that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India. The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of vehicles."}
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "RideBuddy.com ने उपयोगकर्ताओं को डीलर शो रूम में जाने से पहले कार मॉडल का एक इमर्सिव अनुभव प्रदान करने के लिए कई अभिनव फीचर्स लॉन्च किए हैं। इनमें Feel The Car टूल शामिल है, जो कार के 360 डिग्री इंटीरियर्स/एक्सटीरियर्स का दृश्य प्रदान करता है, साथ ही कार की आवाजें और फीचर्स के वीडियो के माध्यम से व्याख्याएं भी देता है; ब्रांड, मॉडल, कीमत, और फीचर्स के हिसाब से सर्च और तुलना; और सभी शहरों में लाइव ऑफ़र और प्रमोशन्स। इस प्लेटफॉर्म पर यूज़्ड कार क्लासिफाइड्स भी हैं, जहां उपयोगकर्ता अपनी कारें बिक्री के लिए अपलोड कर सकते हैं, और व्यक्तिगत विक्रेताओं तथा यूज़्ड कार डीलर्स से यूज़्ड कारें खरीद सकते हैं।"
              : currentLangCode === "guj"
              ? "RideBuddy.com એ વપરાશકર્તાઓને ડીલર શોરૂમ પર જવા પહેલા કાર મોડલનો સંપૂર્ણ અનુભવ મેળવવા માટે અનેક નવીનતમ સુવિધાઓ લોન્ચ કરી છે. આમાં Feel The Car ટૂલ શામેલ છે, જે કારના 360 ડિગ્રી આંતરિક/બાહ્ય દૃશ્યો સાથે કારની અવાજો અને તેની વિશેષતાઓના વિડિઓઝ સાથે વ્યાખ્યાઓ આપે છે; બ્રાન્ડ, મોડલ, કિંમત, અને વિશેષતાઓ દ્વારા શોધ અને તુલના; અને તમામ શહેરોમાં જીવંત ઓફર અને પ્રમોશન. આ પ્લેટફોર્મ પર ઉપરવાળી કાર ક્લાસિફાઈડ્સ પણ છે, જેમાં વપરાશકર્તાઓ તેમની કાર વેચાણ માટે અપલોડ કરી શકે છે અને વ્યક્તિગત વેચનારાઓ અને ઉપયોગની કાર ડીલર્સ પાસેથી ઉપયોગની કાર ખરીદી શકે છે."
              : "RideBuddy.com has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom. These include a Feel The Car tool that gives 360-degree interior/exterior views with sounds of the car and explanations of features with videos; search and comparison by make, model, price, features; and live offers and promotions in all cities. The platform also has used car classifieds wherein users can upload their cars for sale, and find used cars for buying from individuals and used car dealers."}
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "इसके अलावा उपर्युक्त उपभोक्ता उत्पाद सुविधाओं के साथ, RideBuddy.com OE निर्माताओं और कार डीलर्स को टेक्नोलॉजी-संचालित टूल्स की एक समृद्ध श्रृंखला प्रदान करता है। इनमें डीलर सेल्स एक्जीक्यूटिव्स के लिए ऐप्स शामिल हैं, जो लीड्स का प्रबंधन करने में मदद करते हैं, बिक्री प्रदर्शन को ट्रैक करने के लिए क्लाउड सेवाएँ, कॉल ट्रैकर समाधान, डिजिटल मार्केटिंग समर्थन, वर्चुअल ऑनलाइन शोरूम और आउटसोर्स किए गए लीड मैनेजमेंट ऑपरेशनल प्रोसेस जो उपभोक्ताओं को पूछताछ से लेकर बिक्री तक ले जाते हैं।"
              : currentLangCode === "guj"
              ? "ઉપરોક્ત ગ્રાહક ઉત્પાદક સુવિધાઓ ઉપરાંત, RideBuddy.com OE ઉત્પાદકો અને કાર ડીલર્સ માટે ટેકનોલોજી-સક્ષમ ટૂલ્સની વિશાળ શ્રેણી પ્રદાન કરે છે. તેમાં ડીલર સેલ્સ એક્ઝિક્યુટિવ્સ માટે એપ્લિકેશન્સ શામેલ છે, જે લીડ્સનું સંચાલન કરવામાં મદદ કરે છે, વેચાણ પ્રદર્શન ટ્રૅક કરવા માટે ક્લાઉડ સેવાઓ, કોલ ટ્રેકર સોલ્યુશન, ડિજિટલ માર્કેટિંગ સમર્થન, વર્ચુઅલ ઑનલાઇન શોરૂમ અને આઉટસોર્સ કરેલા લીડ મૅનેજમેન્ટ ઓપરેશનલ પ્રોસેસ, જે ગ્રાહકોને પૂછપરછથી લઈને વેચાણ સુધી લઈ જાય છે।"
              : "Besides the above consumer product features, RideBuddy.com provides a rich array of tech-enabled tools to OE manufacturers and car dealers. These include apps for dealer sales executives to manage leads, cloud services for tracking sales performance, call tracker solution, digital marketing support, virtual online showroom and outsourced lead management operational process for taking consumers from enquiry to sale."}
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            {currentLangCode === "hn"
              ? "हमारा दृष्टिकोण उपभोक्ताओं, कार निर्माताओं, डीलर्स और संबंधित व्यवसायों के लिए एक पूर्ण पारिस्थितिकी तंत्र बनाने का है, ताकि उपभोक्ताओं को केवल कारों को खरीदने और बेचने तक सीमित न हो, बल्कि वे अपनी सम्पूर्ण स्वामित्व अनुभव को भी आसानी से और पूरी तरह से प्रबंधित कर सकें, चाहे वह सहायक उपकरण, टायर्स, बैटरियां, बीमा या सड़क किनारे सहायता हो।"
              : currentLangCode === "guj"
              ? "અમારું દૃષ્ટિકોણ ગ્રાહકો, કાર ઉત્પાદકો, ડીલર્સ અને સંબંધિત વ્યવસાયો માટે એક સંપૂર્ણ પર્યાવરણીય સિસ્ટમ બનાવવાનો છે, જેથી ગ્રાહકોને માત્ર કાર ખરીદવા અને વેચવાની આસાની ન હોય, પરંતુ તેઓ તેમના સમગ્ર માલિકીની અનુભૂતિ પણ સરળતાથી અને સંપૂર્ણ રીતે સંચાલિત કરી શકે, ભલે તે એસેસરીઝ, ટાયર, બેટરી, બીમો અથવા રોડસાઇડ સહાયતા હોય."
              : "Our vision is to construct a complete ecosystem for consumers and car manufacturers, dealers and related businesses such that consumers have easy and complete access to not only buying and selling cars, but also manage their entire ownership experience, be it accessories, tyres, batteries, insurance or roadside assistance."}
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            {currentLangCode === "hn"
              ? "हमारे उत्पाद प्रस्तावों में विविधता लाने के लिए, हमने कार बीमा व्यवसाय में कदम रखा है।"
              : currentLangCode === "guj"
              ? "અમારા ઉત્પાદન પ્રસ્તાવોમાં વિવિધતા લાવવા માટે, અમે કાર ઇન્શ્યોરન્સ વ્યવસાયમાં પ્રવેશ કર્યો છે।"
              : "To diversify our product offerings we have ventured into car insurance business through"}{" "}
            <span className="font-semibold underline">
              <Link href="#" className="hover:text-[#EA850C]">RideBuddyInsurance.com</Link>
            </span>
          </p>

          <div className="space-y-10">
            <section>
              <h1 className="text-2xl font-semibold text-left text-gray-800 mb-4 noto_font">
                {currentLangCode === "hn"
                  ? "निवेशक और शेयरधारक"
                  : currentLangCode === "guj"
                  ? "રોકાણકારો અને શેરધારકો"
                  : "Investors and shareholders"}
              </h1>
              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "RideBuddy.com, जो 2008 में लाइव हुआ, युवा, उत्साही आईआईटी स्नातकों के एक समूह द्वारा स्थापित किया गया था। इसके निवेशकों में गूगल कैपिटल, टायबोर्न कैपिटल, हिलहाउस कैपिटल, सिकोइया कैपिटल, एचडीएफसी बैंक, रतन टाटा और टाइम्स इंटरनेट शामिल हैं।"
                  : currentLangCode === "guj"
                  ? "RideBuddy.com, જે 2008 માં લાઇવ થયું હતું, તેની સ્થાપના યુવાન, ઉત્સાહી IIT સ્નાતકોના સમૂહ દ્વારા કરવામાં આવી હતી. તેના રોકાણકારોમાં ગૂગલ કેપિટલ, ટાયબોર્ન કેપિટલ, હિલહાઉસ કેપિટલ, સેક્વોઇયા કેપિટલ, એચડીએફસી બેન્ક, રતન ટાટા અને ટાઇમ્સ ઇન્ટરનેટનો સમાવેશ થાય છે."
                  : "RideBuddy.com, which went live in 2008, was set up by a bunch of young, enthusiastic IIT graduates. Its investors include Google Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital, HDFC Bank, Ratan Tata and Times Internet."}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
