import React, { useContext, useEffect } from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import {
  contactUs,
  NotPersonalInfo,
  purposeCollection,
  topicCovered,
} from "../../config/sampleData";
import { CommonContext } from "../../context/CommonContext";

const PrivacyPolicy = () => {
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
      <div className="bg-white base_font shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl text-left text-gray-800 mb-4 noto_font">
            {currentLangCode === "hn"
              ? "गोपनीयता नीति"
              : currentLangCode === "guj"
              ? "ગોપનીયતા નીતિ"
              : "Privacy Policy"}
          </h1>

          <p className="text-left text-m text-gray-600 mb-1">
            {currentLangCode === "hn"
              ? "( अंतिम अपडेट तिथि : 20/11/2024 )"
              : currentLangCode === "guj"
              ? "( છેલ્લી અપડેટ તારીખ : 20/11/2024 )"
              : "( Last Updated On : 20/11/2024 )"}
          </p>

          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "राइडबडी सॉफ़्टवेयर प्राइवेट लिमिटेड और इसके सहायक, सहायक कंपनियां एवं संबंधित कंपनियां, जैसा कि इस गोपनीयता नीति में उल्लेख किया गया है (यहां पर एकल और/या मिलकर 'राइडबडी' के रूप में संदर्भित), उन उपयोगकर्ताओं के डेटा और जानकारी की गोपनीयता को लेकर चिंतित हैं, जो राइडबडी की वेबसाइटों, मोबाइल साइटों या मोबाइल अनुप्रयोगों पर उत्पाद या सेवाएं पेश करने, बेचने या खरीदने के लिए पहुंचते हैं या जो अन्यथा राइडबडी के साथ व्यापार करते हैं। यह गोपनीयता नीति राइडबडी पर लागू होती है, जिसमें इसके सभी सहायक, सहायक कंपनियां और संबंधित कंपनियां शामिल हैं, और यह आपको यह समझने में मदद करती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग, संग्रहित, प्रोसेस, स्थानांतरित, साझा और अन्यथा प्रबंधित करते हैं जब आप हमारे किसी भी प्लेटफ़ॉर्म पर जाएं और हमारे उत्पादों और सेवाओं का उपयोग करें या अन्यथा प्लेटफ़ॉर्म पर जाएं।"
              : currentLangCode === "guj"
              ? "રાઇડબડી સોફ્ટવેર પ્રાઇવેટ લિમિટેડ અને તેના સહયોગીઓ, ઉપખંડ અને જોડાણ કંપનીઓ જેમ કે આ ગોપનીયતા નીતિમાં દર્શાવવામાં આવ્યું છે (અહિ એકલ અને/અથવા એકસાથે 'રાઇડબડી' તરીકે સંદર્ભિત), તે તમામ વપરાશકર્તાઓના ડેટા અને માહિતીની ગોપનીયતા માટે ચિંતિત છે, જેમણે રાઇડબડીની વેબસાઇટ્સ, મોબાઇલ સાઇટ્સ અથવા મોબાઇલ એપ્લિકેશન્સ પર ઉત્પાદનો અથવા સેવાઓ રજૂ કરવા, વેચવા અથવા ખરીદવા માટે પ્રવેશ કર્યો છે અથવા જે અન્યથા રાઇડબડી સાથે વ્યવહાર કરી રહ્યા છે. આ ગોપનીયતા નીતિ રાઇડબડી પર લાગુ પડે છે, જેમાં તેની બધી સહયોગી, ઉપખંડ અને જોડાણ કંપનીઓનો સમાવેશ થાય છે અને તે તમને સમજાવવામાં મદદ કરે છે કે અમે તમારી માહિતી કેવી રીતે એકત્ર, ઉપયોગ, સંગ્રહ, પ્રક્રિયા, ટ્રાન્સફર, શેર અને અન્યથા વ્યવહાર અને સુરક્ષિત કરીએ છીએ જ્યારે તમે અમારા પ્લેટફોર્મ પર જાઓ અને અમારા ઉત્પાદનો અને સેવાઓનો ઉપયોગ કરો અથવા અન્યથા પ્લેટફોર્મ પર જાઓ."
              : "RideBuddy Software Private Limited and its affiliates, subsidiaries & associate companies as mentioned in this Privacy Policy (hereinafter referred individually and/ or collectively as RideBuddy) is/are concerned about the privacy of the data and information of the users accessing, offering, selling or purchasing products or services on any of RideBuddy websites, mobile sites or mobile applications thereof accessible through various internet enabled smart devices (individually and collectively referred to as “Platform”) or otherwise doing business with RideBuddy. This Privacy Policy applies to RideBuddy which includes all its affiliates, subsidiaries & associate companies and help you understand how we collect, use, store, process, transfer, share, and otherwise deal with and protect all your information when you visit any of our Platform and use our products and services or even otherwise visit the Platform."}
          </p>

          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "यह गोपनीयता नीति भारतीय सूचना प्रौद्योगिकी अधिनियम, 2000 और उसके तहत बनाए गए नियमों (जो समय-समय पर संशोधित होते रहते हैं) के तहत एक इलेक्ट्रॉनिक रिकॉर्ड के रूप में इलेक्ट्रॉनिक अनुबंध है और इसके लिए कोई भौतिक हस्ताक्षर या मुहर की आवश्यकता नहीं है।"
              : currentLangCode === "guj"
              ? "આ ગુપ્તતા નીતિ ભારતીય માહિતી ટેકનોલોજી અધિનિયમ, 2000 અને તેની હેઠળ બનાવેલા નિયમો (જે સમયે-સમયે સુધારવામાં આવે છે) મુજબ એક ઇલેક્ટ્રોનિક રેકોર્ડના રૂપમાં ઇલેક્ટ્રોનિક કરાર છે અને આ માટે કોઈ ભૌતિક હસ્તાક્ષર અથવા સીલની જરૂર નથી."
              : "THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF ELECTRONIC CONTRACT IN TERMS OF INDIAN INFORMATION TECHNOLOGY ACT, 2000 AND RULES MADE THEREUNDER (AS AMENDED FROM TIME TO TIME) AND DOES NOT REQUIRE ANY PHYSICAL SIGNATURE OR SEAL."}
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            {currentLangCode === "hn"
              ? "इस दस्तावेज़ में प्रयुक्त शब्द “हम”/ “हमारा” / “हमारे” राइडबडी को संदर्भित करते हैं और “आप” / “आपका” / “आपके” उन उपयोगकर्ताओं को संदर्भित करते हैं, जो प्लेटफ़ॉर्म पर विजिट करते हैं या पहुँचते हैं या उपयोग करते हैं (संयुक्त रूप से ‘उपयोग’)।"
              : currentLangCode === "guj"
              ? "આ દસ્તાવેજમાં ઉપયોગ કરેલા શબ્દ “અમે”/ “અમારું” / “અમારા” રાઇડબડીને સંદર્ભિત કરે છે અને “તમારું” / “તમારા” / “તમારા” એ તે વપરાશકર્તાઓને સંદર્ભિત કરે છે, જે પ્લેટફોર્મ પર મુલાકાત લે છે અથવા પહોચે છે અથવા તેનો ઉપયોગ કરે છે (સામૂહિક રીતે “ઉપયોગ”)।"
              : 'The term “We”/ “Us” / “Our” used in this document refer to RideBuddy and "You" / "Your" /"Yourself" refer to the users, who visit or access or use (collectively “usage”) Platform.'}
          </p>

          <div className="space-y-10">
            <section>
              <h1 className="text-2xl text-left text-gray-800 mb-4 noto_font">
                {currentLangCode === "hn"
                  ? "नियम और शर्तें:"
                  : currentLangCode === "guj"
                  ? "શરતો અને નિયમો:"
                  : "Terms & Conditions:"}
              </h1>

              <p className="text-lg text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "स्वीकृति:"
                  : currentLangCode === "guj"
                  ? "સ્વીકાર:"
                  : "Acknowledgment:"}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "कृपया इस गोपनीयता नीति को ध्यान से पढ़ें। आप यह संकेत देते हैं कि आपने इसे समझ लिया है, सहमति व्यक्त की है और इस गोपनीयता नीति को स्वीकार किया है। अतः हमारे प्लेटफ़ॉर्म पर जाने या हमारे किसी भी सेवा या उत्पाद का उपयोग करने से, आप यहाँ भारतीय सूचना प्रौद्योगिकी अधिनियम, 2000 की धारा 43A और धारा 72A के तहत राइडबडी को आपकी जानकारी संग्रहण, उपयोग, भंडारण, प्रसंस्करण, साझा करने और हस्तांतरण की बिना शर्त सहमति प्रदान करते हैं।"
                  : currentLangCode === "guj"
                  ? "કૃપા કરીને આ ગુપ્તતા નીતિ વાંચી લો. તમે આને સમજ્યા છે, સ્વીકાર્યું છે અને આ ગુપ્તતા નીતિ માટે તમારો સંમતિ આપો છો. આથી અમારા પ્લેટફોર્મ પર મુલાકાત લેવું અથવા અમારા કોઈપણ સેવા અથવા ઉત્પાદનોનો ઉપયોગ કરવાથી, તમે અહીં ભારતીય માહિતી ટેકનોલોજી અધિનિયમ, 2000ની કલમ 43A અને 72A હેઠળ રાઇડબડીને તમારી માહિતી ભેગી કરવા, ઉપયોગ કરવા, સંગ્રહ, પ્રોસેસિંગ, શેરિંગ અને ટ્રાન્સફર કરવાની શરતો સ્વીકારતા છો."
                  : "PLEASE READ THIS PRIVACY POLICY CAREFULLY. YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY POLICY. HENCE BY VISITING OUR PLATFORM OR BY USING / AVAILING ANY OF OUR SERVICE OR PRODUCT, YOU HEREBY GIVE YOUR UNCONDITIONAL CONSENT OR AGREEMENT TO RIDEBUDDY AS PROVIDED UNDER SECTION 43A AND SECTION 72A OF INDIAN INFORMATION TECHNOLOGY ACT, 2000 FOR COLLECTION, USE, STORAGE, PROCESSING, SHARING AND TRANSFER AND DISCLOSURE OF YOUR INFORMATION."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "आप स्वीकार करते हैं कि आपके पास हमें जानकारी साझा करने के लिए सभी कानूनी अधिकार और वैध प्राधिकरण है और आगे स्वीकार करते हैं कि आपकी जानकारी को एकत्रित, साझा, प्रसंस्कृत और हस्तांतरित करने से आपको या किसी अन्य व्यक्ति को कोई नुकसान या गलत लाभ नहीं होगा।"
                  : currentLangCode === "guj"
                  ? "તમે સ્વીકારો છો કે તમારા પાસે અમારી સાથે માહિતી શેર કરવાની તમામ કાનૂની અધિકારો અને અધિકૃતિ છે અને વધુમાં, તમે સ્વીકારો છો કે તમારી માહિતી એકત્રિત, શેર, પ્રોસેસ અને ટ્રાન્સફર કરવાથી તમને અથવા અન્ય કોઈને નુકસાન કે ખોટી લાભ નહીં થાય."
                  : "YOU ACKNOWLEDGE THAT YOU HAVE ALL LEGAL RIGHTS AND LAWFUL AUTHORITY TO SHARE THE INFORMATION WITH US AND FURTHER ACKNOWLEDGE THAT BY COLLECTING, SHARING, PROCESSING AND TRANSFERRING INFORMATION PROVIDED BY YOU, SHALL NOT CAUSE ANY LOSS OR WRONFUL GAIN TO YOU OR ANY OTHER PERSON."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "यदि आप इस गोपनीयता नीति की शर्तों से सहमत नहीं हैं, तो कृपया हमारे प्लेटफ़ॉर्म का उपयोग / पहुँच न करें या हमारे प्लेटफ़ॉर्म पर किसी भी सेवा या उत्पाद का उपयोग न करें।"
                  : currentLangCode === "guj"
                  ? "જો તમે આ ગોપનીયતા નીતિની શરતો સાથે સંમત ન હોવ, તો કૃપા કરી અમારા પ્લેટફોર્મનો ઉપયોગ / પહોંચ કરી શકો છો અથવા અમારા પ્લેટફોર્મ પર કોઈપણ સેવા અથવા ઉત્પાદનોનો ઉપયોગ કરી શકો છો."
                  : "IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS / USE OUR PLATFORM OR AVAIL ANY OF OUR SERVICE OR PRODUCT ON OUR PLATFORM."}
              </p>
            </section>

            <section>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                {currentLangCode === "hn"
                  ? "कवर किए गए विषय:"
                  : currentLangCode === "guj"
                  ? "આવરીને વિષય:"
                  : "Topics Covered:"}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {topicCovered.map((item) => (
                  <li className="">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "हम जो जानकारी एकत्र करते हैं (आपकी जानकारी):"
                  : currentLangCode === "guj"
                  ? "અમે જે માહિતી એકઠી કરીએ છીએ (તમારી માહિતી):"
                  : "Information We Collect (Your Information):"}
              </h1>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "हम आपकी जानकारी एकत्र करते हैं जब आप प्लेटफ़ॉर्म का उपयोग करते हैं या जब आप प्लेटफ़ॉर्म पर उपलब्ध किसी उत्पाद या सेवा का लाभ उठाते हैं, चाहे आप पंजीकृत उपयोगकर्ता हों या अन्यथा, जब आप हमारे अन्य वेबसाइट पृष्ठों या मोबाइल अनुप्रयोगों पर जाएं।"
                  : currentLangCode === "guj"
                  ? "અમે તમારી માહિતી એકત્ર કરીએ છીએ જ્યારે તમે પ્લેટફોર્મનો ઉપયોગ કરો છો અથવા જ્યારે તમે પ્લેટફોર્મ પર ઉપલબ્ધ કોઈપણ ઉત્પાદનો અથવા સેવાઓનો લાભ લો છો, ચાહે તમે નોંધણિ થયેલા વપરાશકર્તા હોવ અથવા અન્યથા જ્યારે તમે અમારી અન્ય વેબસાઇટ પૃષ્ઠો અથવા મોબાઇલ એપ્લિકેશનો પર જાઓ છો।"
                  : "We collect Your information during Your usage of Platform or when You avail any of products or services available on or through Platform, either as a registered user or otherwise when you visit any of our other website pages or mobile applications."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "संग्रह की गई जानकारी में निम्नलिखित हो सकती है:"
                  : currentLangCode === "guj"
                  ? "એકત્રિત કરવામાં આવેલી માહિતીમાં નીચેના સમાવેશ થઈ શકે છે:"
                  : "The information collected may consist of:"}
              </p>
              <p className="text-left text-gray-600 font-semibold mb-3">
                {currentLangCode === "hn"
                  ? "1) आपकी व्यक्तिगत जानकारी:"
                  : currentLangCode === "guj"
                  ? "1) તમારી વ્યક્તિગત માહિતી:"
                  : "1) Your Personal Information:"}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "आपका पूरा नाम, आयु, पता, ईमेल आईडी, फोन नंबर, जन्म तिथि, लिंग, वित्तीय जानकारी, अन्य कोई संवेदनशील व्यक्तिगत डेटा या जानकारी आदि। हम आपकी व्यक्तिगत जानकारी तब एकत्र करते हैं जब आप हमारे प्लेटफॉर्म पर खाता बनाते हैं या कोई फॉर्म भरते हैं या सर्वेक्षण का उत्तर देते हैं।"
                  : currentLangCode === "guj"
                  ? "તમારું પૂરું નામ, ઉંમર, સરનામું, ઈમેલ આઈડી, ફોન નંબર, જન્મ તારીખ, લિંગ, નાણાંકીય માહિતી, અન્ય સંવેદનશીલ વ્યક્તિગત ડેટા અથવા માહિતી વગેરે. અમે તમારી વ્યક્તિગત માહિતી એકત્ર કરીએ છીએ જ્યારે તમે અમારી પ્લેટફોર્મ પર એકાઉન્ટ બનાવો છો અથવા ફોર્મ ભરો છો અથવા સર્વેનો જવાબ આપો છો."
                  : "Your full name, age, address, email id, phone number, date of birth, gender, financial information, any other sensitive personal data or information etc. We collect Your Personal Information when You create an account at Our Platform or fill out a form or respond to a survey."}
              </p>

              <p className="text-left text-gray-600 font-semibold mb-3">
                {currentLangCode === "hn"
                  ? "2) आपकी गैर-व्यक्तिगत जानकारी:"
                  : currentLangCode === "guj"
                  ? "2) તમારી ગેર-વ્યક્તિગત માહિતી:"
                  : "2) Your Non-Personal Information:"}
              </p>

              {NotPersonalInfo.map((item) => (
                <p className="text-left text-gray-600 mb-3">
                  <span className="font-semibold">{item?.title} :</span>
                  {item?.description}
                </p>
              ))}
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "आपकी जानकारी एकत्रित करने, संग्रहण करने, और प्रसंस्करण करने का उद्देश्य:"
                  : currentLangCode === "guj"
                  ? "તમારી માહિતી એકત્રિત, સંગ્રહિત અને પ્રોસેસ કરવાનો હેતુ:"
                  : "Purpose of Collection, Storage, Processing of Your Information:"}
              </h1>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? 'राइडबडी आपकी जानकारी केवल आपको उत्पादों या सेवाएँ प्रदान करने के उद्देश्य से एकत्र करता है जो राइडबडी के कार्यों या गतिविधियों से संबंधित हैं, जिसमें निम्नलिखित शामिल हैं, लेकिन तक तक सीमित नहीं हैं ("उद्देश्य"):'
                  : currentLangCode === "guj"
                  ? 'રાઇડબડી તમારી માહિતી ફક્ત તમને ઉત્પાદનો અથવા સેવાઓ પ્રદાન કરવાનો હેતુ રાખે છે જે રાઇડબડીની કારકિર્દી અથવા પ્રવૃત્તિ સાથે જોડાયેલી છે, જેમાં નીચે આપેલા માટે, પરંતુ મર્યાદિત નહીં ("હેતુ"):'
                  : "RideBuddy collects Your Information solely for the purpose of providing you the products or services that is connected with the function or activity of the RideBuddy which includes but not limited to the following (“Purpose”):"}
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {purposeCollection.map((item) => (
                  <li className="">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-800 mb-4 noto_font">
                {currentLangCode === "hn"
                  ? "हमसे संपर्क करें"
                  : currentLangCode === "guj"
                  ? "અમારો સંપર્ક કરો"
                  : "Contact Us"}
              </h2>

              <p className="text-gray-600 mb-4">
                {currentLangCode === "hn"
                  ? "यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न या चिंताएँ हैं, तो कृपया हमसे संपर्क करें:"
                  : currentLangCode === "guj"
                  ? "જો તમારી પાસે આ ગોપનીયતા નીતિ વિશે કોઈ પ્રશ્નો અથવા ચિંતાઓ હોય, તો કૃપા કરીને અમારો સંપર્ક કરો:"
                  : "If you have any questions or concerns about this Privacy Policy, please contact us at:"}
              </p>

              <ul className="space-y-2 text-gray-600">
                {contactUs.map((item) => (
                  <li>
                    <strong className="font-medium">{item?.title} : </strong>{" "}
                    {item?.Value}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
