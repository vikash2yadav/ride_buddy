import React, { useContext, useEffect } from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { account_deletion_step, term_services } from "../../config/sampleData";
import { CommonContext } from "../../context/CommonContext";

const TermsConditions = () => {
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
      <div className="bg-white shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800 base_font">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl text-left text-gray-800 mb-4 noto_font">
            {currentLangCode === "hn"
              ? "नियम और शर्तें"
              : currentLangCode === "guj"
              ? "નિયમો અને શરતો"
              : "Terms And Conditions"}
          </h1>
          <p className="text-left text-m text-gray-600 mb-1">
            {currentLangCode === "hn"
              ? "(अंतिम अद्यतन दिनांक: 20/11/2024)"
              : currentLangCode === "guj"
              ? "(છેલ્લું અપડેટ: 20/11/2024)"
              : "( Last Updated On : 20/11/2024 )"}
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "hn"
              ? "राइडबडी सॉफ्टवेयर प्राइवेट लिमिटेड और इसकी सहयोगी कंपनियां, सहायक कंपनियां और सहयोगी कंपनियां (इसके बाद व्यक्तिगत और/या सामूहिक रूप से 'राइडबडी' या 'हम' या 'हम' या 'हमारा' के रूप में संदर्भित) राइडबडी.कॉम (राइडबडी का एक उद्यम) में आपका स्वागत करती हैं। आपकी कार की खोज (नई और प्रयुक्त कार दोनों), निरीक्षण, मूल्य की खोज/मूल्यांकन और प्रयुक्त कार की बिक्री और खरीद), आपकी खोज और कुछ वित्तीय उत्पादों तक पहुंच, जिसमें शामिल हैं, लेकिन नहीं तीसरे पक्ष द्वारा पेश किए गए ऋण, बीमा और अन्य वित्तीय उत्पादों, विज्ञापन पोस्ट करने आदि और ऑटोमोबाइल क्षेत्र में अन्य सेवाओं तक ही सीमित है।"
              : currentLangCode === "guj"
              ? "RideBuddy સોફ્ટવેર પ્રાઈવેટ લિમિટેડ અને તેની આનુષંગિકો, પેટાકંપનીઓ અને સહયોગી કંપનીઓ (ત્યારબાદ વ્યક્તિગત રીતે અને/અથવા સામૂહિક રીતે 'RideBuddy' અથવા 'અમે' અથવા 'અમારા' અથવા 'અમારા' તરીકે ઉલ્લેખિત) RideBuddy.com (RideBuddyનું સાહસ) પર તમારું સ્વાગત છે. તમારી કારની શોધ (નવી અને વપરાયેલી કાર બંને), નિરીક્ષણ, કિંમત શોધ/મૂલ્યાંકન કરવા માટે અને વપરાયેલી કારનું વેચાણ અને ખરીદી), તમારી શોધ અને અમુક નાણાકીય ઉત્પાદનોની ઍક્સેસ, જેમાં તૃતીય પક્ષો દ્વારા ઓફર કરવામાં આવતી લોન, વીમો અને અન્ય નાણાકીય ઉત્પાદનો, જાહેરાતો પોસ્ટ કરવી વગેરે અને ઓટોમોબાઈલ સ્પેસમાં અન્ય સેવાઓ સહિત પણ પ્રતિબંધિત નથી"
              : "RideBuddy Software Private Limited and its affiliates, subsidiaries & associate companies (hereinafter referred individually and/ or collectively to as 'RideBuddy' or 'We' or 'Us' or 'Our') welcome you at RideBuddy.com (A venture of RideBuddy) for doing your car search (both new and used car), inspection, price discovery/valuation and sale & purchase of used car), your search and access to certain financial products, including but not restricted to, loans, insurance & other financial products as offered by third parties, posting advertisements, etc and other services in automobile space."}
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            {currentLangCode === "guj"
              ? "આ વેબસાઈટના ઉપયોગની શરતો ('Terms Of Use') એ એક ઈલેક્ટ્રોનિક રેકોર્ડ છે, જે માહિતી ટેક્નોલોજી અધિનિયમ, 2000 હેઠળ એક ઈલેક્ટ્રોનિક કોન્ટ્રાક્ટ તરીકે રચાયેલ છે અને વિવિધ કાયદેસર ધારા મુજબ ઈલેક્ટ્રોનિક દસ્તાવેજો/રેકોર્ડ્સ સંબંધિત સંશોધિત પ્રાવધાનોથી માહિતી ટેક્નોલોજી અધિનિયમ, 2000 દ્વારા સંશોધિત કરવામાં આવે છે. આ ઉપયોગની શરતો માટે શારીરિક, ઈલેક્ટ્રોનિક અથવા ડિજિટલ સહીની જરૂર નથી."
              : currentLangCode === "hn"
              ? "यह वेबसाइट उपयोग की शर्तें ('Terms Of Use') एक इलेक्ट्रॉनिक रिकॉर्ड हैं, जो सूचना प्रौद्योगिकी अधिनियम, 2000 के तहत एक इलेक्ट्रॉनिक अनुबंध के रूप में निर्मित हैं और विभिन्न क़ानूनी धाराओं में संशोधित इलेक्ट्रॉनिक दस्तावेज़ों/रिकॉर्ड्स से संबंधित प्रावधानों के अनुसार सूचना प्रौद्योगिकी अधिनियम, 2000 द्वारा संशोधित हैं। इन उपयोग की शर्तों के लिए किसी भी शारीरिक, इलेक्ट्रॉनिक या डिजिटल हस्ताक्षर की आवश्यकता नहीं है।"
              : "THESE WEBSITE TERMS OF USE ('Terms Of Use') IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER INFORMATION TECHNOLOGY ACT, 2000 AND RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THESE TERMS OF USE DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE."}
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            {currentLangCode === "hn"
              ? "यह उपयोग की शर्तें सूचना प्रौद्योगिकी (मध्यस्थ दिशा-निर्देश) नियमावली, 2011 के नियम 3 (1) के प्रावधानों के अनुसार प्रकाशित की गई हैं, जो वेबसाइट के उपयोग या एक्सेस के लिए नियमों और विनियमों, गोपनीयता नीति और उपयोग की शर्तों को प्रकाशित करने की आवश्यकता है (नीचे परिभाषित)।"
              : currentLangCode === "guj"
              ? "આ ઉપયોગની શરતો માહિતી ટેક્નોલોજી (મધ્યસ્થ માર્ગદર્શિકા) નિયમો, 2011 ના નિયમ 3 (1) ના પ્રાવધાનો અનુસાર પ્રકાશિત કરવામાં આવી છે, જે વેબસાઇટની પ્રવેશ અથવા ઉપયોગ માટેના નિયમો અને નિયમાવલીઓ, ગોપનીયતા નીતિ અને ઉપયોગની શરતો પ્રકાશિત કરવાની આવશ્યકતા રાખે છે (નીચે વ્યાખ્યાયિત)."
              : "This Terms of Use is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of Website (defined below)."}
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            {currentLangCode === "hn"
              ? "डोमेन नाम www.ridebuddy.com राइडबडी सॉफ़्टवेयर प्राइवेट लिमिटेड [GXXXXXXXXXXX] के स्वामित्व में है, जो कंपनीज एक्ट, 1956 के तहत स्थापित एक कंपनी है और इसका पंजीकृत कार्यालय अहमदाबाद, 21, अमराईवाड़ी, एस जी हाईवे रोड, अहमदाबाद - 380026, गुजरात, भारत में स्थित है। यह वेबसाइट की उपयोग की शर्तें www.ridebuddy.com, मोबाइल साइट और मोबाइल एप्लिकेशन (व्यक्तिगत रूप से और सामूहिक रूप से 'वेबसाइ') पर उपलब्ध हैं, और यह राइडबडी और वेबसाइट के गेस्ट उपयोगकर्ताओं या पंजीकृत उपयोगकर्ताओं के बीच हैं (इन्हें आगे 'आप' या 'आपका' या 'आप' या 'उपयोगकर्ता' के रूप में संदर्भित किया जाएगा) जो राइडबडी आपको वेबसाइट का उपयोग करने, सेवाओं का लाभ उठाने और उत्पादों की खरीदारी के लिए प्रदान करता है, जैसा कि इसके साथ जुड़े और सहायक हैं ('सेवाएं', और इसके बाद विशेष रूप से परिभाषित)।"
              : currentLangCode === "guj"
              ? "ડોમેન નામ www.ridebuddy.com એ રાઈડબડી સોફ્ટવેર પ્રાઈવેટ લિમિટેડ [GXXXXXXXXXXX] દ્વારા માલિકી ધરાવે છે, જે કંપનીઝ અધિનિયમ, 1956 હેઠળ સ્થાપિત એક કંપની છે અને તેનું નોંધણીકૃત કાર્યાલય અમદાવાદ, 21, અમરાઈવાડી, એસ જી હાઈવે રોડ, અમદાવાદ - 380026, ગુજરાત, ભારતમાં આવેલું છે. આ વેબસાઈટના ઉપયોગની શરતો www.ridebuddy.com, મોબાઈલ સાઇટ અને મોબાઈલ એપ્લિકેશનો (પ્રતિ individuais અને સામૂહિક રીતે, 'વેબસાઈટ') પર ઉપલબ્ધ છે, અને આ રાઈડબડી અને વેબસાઈટના મહેમાન અથવા નોંધણી કરેલા વપરાશકર્તાઓ (આગળ 'તમે' અથવા 'તમારું' અથવા 'તમને' અથવા 'વપરાશકર્તા' તરીકે સંકેતિત) વચ્ચે છે, જે રીતે રાઈડબડી તમને વેબસાઈટ માટે પ્રવેશ આપે છે અને સેવાઓ મેળવવા અને ઉત્પાદન ખરીદવા માટે, જેમ કે જે તેમાંથી સંલગ્ન અને સહાયક છે ('સેવાઓ', અને બાદમાં વિશિષ્ટ રીતે પરિભાષિત)."
              : "The domain name www.ridebuddy.com is owned by RideBuddy Software Private Limited [GXXXXXXXXXXX], a company incorporated under the Companies Act, 1956 with its registered office at Ahmedabad, 21, Amraiwadi, S G Highway Road, Ahmedabad - 380026, Gujarat, India. These Terms of Use of the website available at www.ridebuddy.com, mobile site, and mobile applications (individually and collectively, 'Website') is between RideBuddy and the guest users or registered users of the Website (hereinafter referred to as 'You' or 'Your' or 'Yourself' or 'User') describe the terms on which RideBuddy offers You access to the Website for availing services and buying products, as are incidental and ancillary thereto ('Services', and more particularly defined hereinafter)."}
          </p>
          <div className="space-y-10">
            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "आपका खाता और लॉगिन विकल्प:"
                  : currentLangCode === "guj"
                  ? "તમારું એકાઉન્ટ અને લોગિન વિકલ્પો:"
                  : "Your Account And Login Options:"}
              </h1>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "उपयोगकर्ता वेबसाइट या वेबसाइट पर उपलब्ध अन्य जानकारी और सामग्री तक अतिथि उपयोगकर्ता के रूप में बिना किसी पंजीकरण की आवश्यकता के पहुँच सकता है। उपयोगकर्ता वेबसाइट पर उपलब्ध उत्पादों की खोज और तुलना अपनी सुविधा के अनुसार कर सकता है। वेबसाइट पर सभी उपयोगकर्ताओं के लिए (जिन्हें 'अतिथि उपयोगकर्ता' कहा जाता है) कुछ सुविधाएँ और जानकारी उपलब्ध हैं जिन्हें पंजीकरण या खाता बनाने की आवश्यकता नहीं होती है। हालांकि, अतिथि उपयोगकर्ताओं को प्रदान की जाने वाली सेवाएं सीमित हैं क्योंकि सभी सुविधाएँ या कार्यक्षमताएँ तब तक उपलब्ध नहीं होतीं जब तक उपयोगकर्ता वेबसाइट पर पंजीकरण नहीं करता या कुछ व्यक्तिगत पहचान योग्य जानकारी प्रदान नहीं करता।"
                  : currentLangCode === "guj"
                  ? "વપરાશકર્તા વેબસાઇટ અથવા વેબસાઇટ પર ઉપલબ્ધ અન્ય માહિતી અને સામગ્રી સુધી મહેમાન વપરાશકર્તા તરીકે પ્રવેશ કરી શકે છે, કોઈપણ પંજિયુકરણની જરૂરિયાત વગર। વપરાશકર્તા વેબસાઇટ પર ઉપલબ્ધ ઉત્પાદનોની શોધ અને તુલના તેમની અનુકૂળતા મુજબ કરી શકે છે। વેબસાઇટ પર બધા વપરાશકર્તાઓ માટે (જેઓ 'મહેમાન વપરાશકર્તા' તરીકે ઓળખાય છે) કેટલીક સુવિધાઓ અને માહિતી ઉપલબ્ધ છે જેમને પંજિયુકરણ અથવા ખાતું બનાવવાની જરૂર નથી। તેમ છતાં, મહેમાન વપરાશકર્તાને આપવામાં આવતી સેવાઓ મર્યાદિત છે, કારણ કે તમામ સુવિધાઓ અથવા કાર્યક્ષમતાઓ ત્યારે સુધી ઉપલબ્ધ નથી જ્યારે સુધી વપરાશકર્તા વેબસાઇટ પર પંજિયુકરણ કરતો નથી અથવા કેટલીક વ્યક્તિગત ઓળખાણ યોગ્ય માહિતી પ્રદાન કરતો નથી।"
                  : "User may access the Website or other information and material as available on the Website, as a guest user, without any requirement of registration. User can do research and compare the products available on the Website as per their convenience. Certain features and information available on Website for all users (called 'guest user') who do not need to register or create any account on Website. However, services to Guest User are limited in the sense that not all the features or functionality are available until the User is registered/creates an account on the Website or provides certain personally identifiable information."}
              </p>
              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "कुछ सुविधाओं का लाभ उठाने के लिए, जो अतिथि उपयोगकर्ता के लिए उपलब्ध नहीं हैं, आपको पंजीकरण करना होगा / एक खाता बनाना होगा और कुछ विवरण प्रदान करने होंगे जैसे कि आपका नाम, संपर्क विवरण, ईमेल आईडी आदि। ('आपकी जानकारी')। एक बार जब आप वेबसाइट पर पंजीकरण करते हैं और अपनी जानकारी प्रदान करते हैं और पंजीकरण प्रक्रिया पूरी करते हैं, तो राइडबडी एक खाता सेट करता है जिसमें लॉगिन आईडी और पासवर्ड प्रदान किया जाता है ('आपका खाता') जो आपके लिए अद्वितीय होता है। खाते के निर्माण दिशानिर्देशों और किसी अन्य लागू कानून, नियम के तहत आपकी अनुपालना के अधीन, राइडबडी आपको एक पंजीकृत उपयोगकर्ता (पंजीकृत उपयोगकर्ता) के रूप में पहचानता है और आप अपने खाते में लॉगिन कर सकते हैं और सेवाओं का लाभ उठा सकते हैं और अन्य सुविधाओं और जानकारी तक पहुंच सकते हैं जो अतिथि उपयोगकर्ताओं के लिए उपलब्ध नहीं हैं।"
                  : currentLangCode === "guj"
                  ? "કેટલાક સુવિધાઓનો લાભ લેવા માટે, જે મહેમાન વપરાશકર્તા માટે ઉપલબ્ધ નથી, તમને પંજિયુકરણ કરવું પડશે / એક ખાતું બનાવવું પડશે અને કેટલીક વિગતો પ્રદાન કરવી પડશે જેમ કે તમારું નામ, સંપર્ક વિગતો, ઈમેઇલ આઈડી વગેરે ('તમારી માહિતી')। એકવાર તમે વેબસાઇટ પર પંજિયુકરણ કરો છો અને તમારી માહિતી પ્રદાન કરો છો અને પંજિયુકરણ પ્રક્રિયા પૂર્ણ કરો છો, પછી રાઇડબડી એક ખाता સ્થાપિત કરે છે જેમાં લોગિન આઈડી અને પાસવર્ડ આપવામાં આવે છે ('તમારું ખાતું') જે તમારા માટે અનોખું છે। ખાતું બનાવવાના માર્ગદર્શિકાઓ અને અન્ય લાગૂ પડતા કાયદા, નિયમો અનુસાર તમારી અનુરૂપતા પર, રાઇડબડી તમને પંજિયુકૃત વપરાશકર્તા (પંજિયુકૃત વપરાશકર્તા) તરીકે માન્ય કરે છે અને તમે તમારા ખાતામાં લોગિન કરી શકો છો અને સેવાઓનો લાભ લઈ શકો છો અને બીજી કેટલીક સુવિધાઓ અને માહિતીનો લાભ મેળવી શકો છો જે મહેમાન વપરાશકર્તાઓ માટે ઉપલબ્ધ નથી।"
                  : "To avail the certain features, not available for Guest User, You need to register / create an account by providing certain details e.g. Your name, contact details, email id etc. ('Your Information'). Once You register with Website and provide Your Information and complete the process of registration, RideBuddy set up an account by providing login id and password ('Your Account') which is unique to You. Subject to Your compliance with account creation guidelines and any other applicable law, rule, RideBuddy recognize You as a registered user (Registered User) and You can login into Your Account and avail the Services and access to other features and information not available to guest users."}
              </p>
              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "यदि आप हमारे वेबसाइट का उपयोग करते हैं या पंजीकृत उपयोगकर्ता के रूप में वेबसाइट के माध्यम से किसी भी सेवा का लाभ उठाते हैं, तो आप यह स्वीकार करते हैं और सहमत होते हैं कि आप अपने खाते की गोपनीयता बनाए रखने के लिए पूरी तरह से जिम्मेदार होंगे और आप अपने खाता विवरण को किसी अन्य व्यक्ति के साथ साझा नहीं करेंगे, और आपके खाते के अंतर्गत जो भी गतिविधि होगी, उसकी जिम्मेदारी भी आपकी होगी।"
                  : currentLangCode === "guj"
                  ? "જો તમે અમારી વેબસાઇટનો ઉપયોગ કરો છો અથવા પંજિયુકૃત વપરાશકર્તા તરીકે વેબસાઇટ પર કોઈપણ સેવા પ્રાપ્ત કરો છો, તો તમે સ્વીકૃતિ આપતા હો અને સંમત છો કે તમે તમારા ખાતાની ગુપ્તતા જાળવવા માટે સંપૂર્ણ રીતે જવાબદાર રહેશે અને તમે તમારા ખાતાના વિગતો કોઈ બીજા વ્યક્તિ સાથે પ્રકટ નહીં કરો અને તમારા ખાતા હેઠળ જે કોઈ પણ પ્રવૃતિ થશે, તેની જવાબદારી પણ તમારી રહેશે।"
                  : "If You use or access Our Website or avail any Services through or at Website as a Registered User, You acknowledge and agree that You shall be solely responsible for maintaining the confidentiality and shall not disclose the details of Your Account to any other person and that any activity occurred under Your Account shall be Your responsibility."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "आप सहमति देते हैं कि जब आपने हमारे साथ पंजीकरण/खाता बनाने के दौरान अपनी जानकारी प्रदान की, तो आप कोई भी झूठी, गलत, असत्य या अप्रचलित जानकारी नहीं देंगे और न ही किसी अन्य व्यक्ति की जानकारी या किसी अन्य उपयोगकर्ता के खाते का उपयोग करेंगे। यदि आपकी जानकारी असत्य, गलत, असंगत, अप्रचलित है या किसी अन्य उपयोगकर्ता के खाते से संबंधित है, तो राइडबडी कभी भी आपके खाते को निलंबित/हटाने या वेबसाइट या सेवाओं तक पहुँच को सीमित/नकारने का अधिकार रखता है।"
                  : currentLangCode === "guj"
                  ? "તમે સ્વીકૃતિ આપતા છો કે જ્યારે તમે અમારી સાથે પંજિયુકરણ/ખાતું બનાવતી વખતે તમારી માહિતી પ્રદાન કરો છો, ત્યારે તમે કોઈ પણ અસત્ય, ખોટી, અસંપૂર્ણ અથવા જૂની માહિતી પ્રદાન નહિ કરો અને અન્ય કોઈ વ્યક્તિની માહિતી અથવા બીજા વપરાશકર્તાના ખાતાની વિગતો નો ઉપયોગ નહિ કરો. જો તમારી માહિતી અસત્ય, ખોટી, અસંગત, જૂની હોય અથવા બીજાં વપરાશકર્તાના ખાતાની માહિતી સાથે સંબંધિત હોય, તો રાઇડબડી તમારી ખાતાને સસ્પેન્ડ/હટાવી શકે છે અથવા વેબસાઇટ અથવા સેવાઓ સુધીની પહોંચને કાયમ માટે મર્યાદિત/નકારવાનો અધિકાર ધરાવે છે।"
                  : "You agree that when You provided Your Information while registering/creating Your Account with Us, You shall not provide any information which is untrue, false, inaccurate or not current and shall not use the details of any other person, or another user’s account. RideBuddy may suspend/delete Your Account or can limit/deny the access to the Website or Services, any time, if Your Information is found to be untrue, false, inaccurate, not current or pertains to another user’s account."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "आप सहमति देते हैं कि जब आपने हमारे साथ पंजीकरण/खाता बनाने के दौरान अपनी जानकारी प्रदान की, तो आप कोई भी झूठी, गलत, असत्य या अप्रचलित जानकारी नहीं देंगे और न ही किसी अन्य व्यक्ति की जानकारी या किसी अन्य उपयोगकर्ता के खाते का उपयोग करेंगे। यदि आपकी जानकारी असत्य, गलत, असंगत, अप्रचलित है या किसी अन्य उपयोगकर्ता के खाते से संबंधित है, तो राइडबडी कभी भी आपके खाते को निलंबित/हटाने या वेबसाइट या सेवाओं तक पहुँच को सीमित/नकारने का अधिकार रखता है।"
                  : currentLangCode === "guj"
                  ? "તમે સ્વીકૃતિ આપતા છો કે જ્યારે તમે અમારી સાથે પંજિયુકરણ/ખાતું બનાવતી વખતે તમારી માહિતી પ્રદાન કરો છો, ત્યારે તમે કોઈ પણ અસત્ય, ખોટી, અસંપૂર્ણ અથવા જૂની માહિતી પ્રદાન નહિ કરો અને અન્ય કોઈ વ્યક્તિની માહિતી અથવા બીજા વપરાશકર્તાના ખાતાની વિગતો નો ઉપયોગ નહિ કરો. જો તમારી માહિતી અસત્ય, ખોટી, અસંગત, જૂની હોય અથવા બીજાં વપરાશકર્તાના ખાતાની માહિતી સાથે સંબંધિત હોય, તો રાઇડબડી તમારી ખાતાને સસ્પેન્ડ/હટાવી શકે છે અથવા વેબસાઇટ અથવા સેવાઓ સુધીની પહોંચને કાયમ માટે મર્યાદિત/નકારવાનો અધિકાર ધરાવે છે।"
                  : "You agree that collection, storage, sharing or disclosure of Your Information that You provide to Us either as a guest user or Registered User or otherwise shall be governed by the Privacy Policy of RideBuddy, incorporated herein by way of reference."}
              </p>

              <p className="text-left text-gray-600 mb-3">
                {currentLangCode === "hn"
                  ? "संग्रहित की गई जानकारी में निम्नलिखित हो सकता है:"
                  : currentLangCode === "guj"
                  ? "સંગ્રહિત માહિતીમાં આમાંથી કોઈપણ હોઈ શકે છે:"
                  : "The information collected may consist of:"}
              </p>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "तीसरे पक्ष की वेबसाइटों और तीसरे पक्ष की सामग्री के लिंक:"
                  : currentLangCode === "guj"
                  ? "ત્રીજી પક્ષની વેબસાઇટો અને ત્રીજા પક્ષની સામગ્રી માટેના લિંક:"
                  : "Links to third party websites and third party content:"}
              </h1>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "हमारी वेबसाइट में, राइडबडी के अलावा अन्य पक्षों द्वारा संचालित वेबसाइटों के लिए हाइपरलिंक हो सकते हैं, या तीसरे पक्ष की जानकारी जैसे उत्पाद, उत्पाद विवरण, कैटलॉग, डीलर के विवरण, समाचार, वीडियो और फ़ोटो और कोई अन्य डेटा जो तीसरे पक्ष द्वारा उपलब्ध कराया गया हो ('तीसरी पार्टी सामग्री')। तीसरी पार्टी सामग्री का प्रावधान केवल सामान्य जानकारी के उद्देश्य से है।"
                  : currentLangCode === "guj"
                  ? "અમારી વેબસાઇટમાં, રાઇડબડી સિવાયના પક્ષો દ્વારા સંચાલિત વેબસાઇટ્સ માટે હાયપરલિંક હોઈ શકે છે, અથવા તૃતીય પક્ષની માહિતી જેમ કે ઉત્પાદનો, ઉત્પાદન વિગતો, કેટલોગ, ડીલર વિગતો, સમાચાર, વિડિયો અને ફોટોગ્રાફ અને અન્ય કોઈપણ ડેટા જે તૃતીય પક્ષ દ્વારા ઉપલબ્ધ કરાવાય છે ('ત્રીજા પક્ષની સામગ્રી')। ત્રીજા પક્ષની સામગ્રીના provisons માત્ર સામાન્ય માહિતીના ઉદ્દેશ્ય માટે છે।"
                  : "Our Website may contain hyperlinks to websites operated by parties other than RideBuddy or third-party information such as product, product description, catalogue, dealer’s details, news, videos, photographs, and any other data made available by the third party (‘Third Party Content’). The provisions of Third Party Content are for general information purposes only."}
              </p>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "राइडबडी यह सुनिश्चित करने के लिए उचित प्रयास करता है कि हमारी वेबसाइट पर दी गई जानकारी सही हो, हालांकि, राइडबडी तीसरी पार्टी सामग्री को नियंत्रित नहीं करता है और इसलिए तीसरी पार्टी सामग्री के उपयोग से उत्पन्न होने वाले किसी भी नुकसान या हानि के लिए जिम्मेदार नहीं होगा।"
                  : currentLangCode === "guj"
                  ? "રાઇડબડી એ ખાતરી આપે છે કે અમારી વેબસાઇટ પર પૂરી પાડેલી વિગતો ચોક્કસ છે, તેમ છતાં, રાઇડબડી તે તૃતીય પક્ષની સામગ્રી પર નિયંત્રણ રાખતું નથી અને તેથી તૃતીય પક્ષની સામગ્રીના ઉપયોગથી થતી કોઇપણ ખોટ અથવા નુકસાન માટે જવાબદાર નથી."
                  : "RideBuddy makes reasonable efforts to ensure that the details provided on our Website are accurate, however, RideBuddy does not control such Third Party Content and therefore shall not be responsible for any loss or damages resulting from the use of Third Party Content."}
              </p>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "हमारी वेबसाइट पर तीसरी पार्टी सामग्री का समावेश यह नहीं दर्शाता कि राइडबडी उन वेबसाइटों का प्रमाणपत्र या समर्थन करता है, न ही इन वेबसाइटों के ऑपरेटरों के साथ कोई संबंध है। राइडबडी या इसके सहयोगी या इसके कर्मचारी तीसरी पार्टी सामग्री की प्रामाणिकता या सहीता के संबंध में कोई निर्णय या गारंटी नहीं प्रदान करते हैं, जैसे कि अन्य सेवाओं या साइटों की सामग्री, जिनके लिंक प्रदान किए गए हैं। किसी अन्य सेवा या वेबसाइट का लिंक यह उत्पादों या सेवाओं का समर्थन नहीं करता है जो उस साइट या वेबसाइट पर हैं। आप तीसरी पार्टी सामग्री या अन्य वेबसाइटों के लिंक के उपयोग से उत्पन्न होने वाले किसी भी परिणाम के लिए पूरी तरह से जिम्मेदार होंगे।"
                  : currentLangCode === "guj"
                  ? "અમારી વેબસાઇટ પર તૃતીય પક્ષની સામગ્રીનો સમાવેશ એનો અર્થ નથી કે રાઇડબડી એ એવી વેબસાઇટ્સનું પ્રમાણપત્ર અથવા સમર્થન કરે છે, અથવા તેમના ઓપરેટરો સાથે કોઈ પણ સંબંધ ધરાવે છે. રાઇડબડી અથવા તેના સંલગ્નો અથવા તેના કર્મચારી તૃતીય પક્ષની સામગ્રીની અસલતા અથવા સચોટતામાં કોઈ ચુકવણી અથવા વોરંટી પ્રદાન નથી કરતા, જેમ કે બીજી સેવાઓ અથવા સાઇટ્સની સામગ્રી, જેમના લિંક્સ પૂરા પાડવામાં આવ્યા છે. બીજી સેવા અથવા વેબસાઇટ પર લિંક એ તે સાઇટ અથવા વેબસાઇટ પર કોઈપણ ઉત્પાદન અથવા સેવાઓનો સમર્થન નથી. તમે તૃતીય પક્ષની સામગ્રી અથવા અન્ય વેબસાઇટ્સના હાઇપરલિન્ક્સના ઉપયોગથી થતા કોઇપણ પરિણામ માટે સંપૂર્ણ રીતે જવાબદાર હશો."
                  : "The inclusion of Third Party Content to Our Website does not imply RideBuddy's certification or endorsement of such websites nor any association with their operators. RideBuddy or its affiliates or associates or its employees do not provide any judgment or warranty in respect of the authenticity or correctness of the Third Party Content of such other services or sites to which links are provided. A link to another service or website is not an endorsement of any products or services on such site or the Website. You shall be solely responsible for any or all the consequences that arise out of your use of such Third Party Content or hyperlinks to other websites."}
              </p>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "सेवाएँ:"
                  : currentLangCode === "guj"
                  ? "સેવાઓ:"
                  : "Services:"}
              </h1>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "राइडबडी वेबसाइट के उपयोगकर्ताओं के लिए एक मंच प्रदान करता है और एक मध्यस्थ के रूप में कार्य करता है। वेबसाइट पर उपलब्ध सभी जानकारी और सामग्री केवल राइडबडी द्वारा प्रदान की जाने वाली सेवाओं में रुचि रखने वाले उपयोगकर्ताओं को सहायक के रूप में प्रदान की जाती है, जो अपने लेन-देन को समाप्त करने से पहले अधिक विकल्पों का पता लगाना चाहते हैं। अन्य सेवाओं और जानकारी के अलावा, राइडबडी उपयोगकर्ताओं को नीचे सूचीबद्ध सेवाओं में से कोई भी या सभी सेवाएं प्रदान कर सकता है:"
                  : currentLangCode === "guj"
                  ? "રાઇડબડી વેબસાઇટના વપરાશકર્તાઓ માટે એક મંચ પ્રદાન કરે છે અને એક મિડિલિયરી તરીકે કાર્ય કરે છે. વેબસાઇટ પર ઉપલબ્ધ તમામ માહિતી અને સામગ્રી ફક્ત રાઇડબડી દ્વારા પ્રદાન કરાયેલી સેવાઓમાં રસ ધરાવતા વપરાશકર્તાઓને મદદરૂપ બનાવવા માટે છે, અને જે પોતાના વ્યવહારોને પૂર્ણ કરતા પહેલા વધુ વિકલ્પો શોધવા માંગે છે. અન્ય સેવાઓ અને માહિતીની અંદર, રાઇડબડી વપરાશકર્તાઓને નીચે આપેલી સેવાઓમાં થી કોઈપણ અથવા બધી સેવાઓ પ્રદાન કરી શકે છે:"
                  : "RideBuddy provides a platform to the Users of the Website and acts as an Intermediary. All information and material available on the Website is only to assist the User of the Website who are interested in the Services provided by RideBuddy and who want to explore more options before concluding their transactions. Among other services and information, RideBuddy may provide any or all the below-listed services to the Users:"}
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                {term_services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "उपरोक्त सूचीबद्ध सभी सेवाएँ राइडबडी की एकल विवेकाधिकार पर प्रदान की जाती हैं, और आप सहमति देते हैं कि राइडबडी उपरोक्त सूचीबद्ध सेवाओं में से कोई भी या सभी सेवाएँ जोड़ सकता है या प्रदान कर सकता है, या किसी भी सेवा/उत्पाद को हटा सकता है / निलंबित कर सकता है / रद्द कर सकता है, बिना किसी पूर्व सूचना या जिम्मेदारी के।"
                  : currentLangCode === "guj"
                  ? "ઉપરોક્ત સૂચિબદ્ધ બધી સેવાઓ રાઇડબડીની એકમાત્ર વિવેકધારામાં પ્રદાન કરવામાં આવે છે, અને તમે સ્વીકારો છો કે રાઇડબડી ઉપરોક્ત સૂચિબદ્ધ સેવાઓમાંથી કોઈપણ અથવા બધી સેવાઓ ઉમરી શકે છે અથવા પ્રદાન કરી શકે છે, અથવા કોઈપણ સેવા/ઉત્પાદને હટાવી શકે છે/નિલંબિત કરી શકે છે/રદ કરી શકે છે, બિનજરૂરી સૂચના અથવા જવાબદારી વગર."
                  : "All the above-listed services are provided at the sole discretion of RideBuddy, and You acknowledge and agree that RideBuddy can add or provide additional services not listed above, or can remove/suspend/cancel any or all services/products, listed above without any notice or liability."}
              </p>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                {currentLangCode === "hn"
                  ? "खाता हटाना"
                  : currentLangCode === "guj"
                  ? "ખાતું કાઢવું"
                  : "Account Deletion"}
              </h1>

              <p className="mb-3 text-gray-800">
                {currentLangCode === "hn"
                  ? "खाता हटाने के कदम:"
                  : currentLangCode === "guj"
                  ? "ખાતું કાઢવાના પગલાં:"
                  : "Steps to delete account :"}
              </p>

              <p className="mb-3 text-gray-600">
                {currentLangCode === "hn"
                  ? "उपयोगकर्ता अपने खाते और डेटा को राइडबडी एंड्रॉइड और iOS ऐप से हटा सकते हैं।"
                  : currentLangCode === "guj"
                  ? "વપરાશકર્તાઓ પોતાના ખાતા અને ડેટાને રાઇડબડી એન્ડ્રોઈડ અને iOS એપ્લિકેશનમાંથી કાઢી શકે છે."
                  : "User can delete their account and data from the RideBuddy android and iOS app."}
              </p>

              <ul className="list pl-6 space-y-2 mb-6 text-gray-600">
                {account_deletion_step.map((item, index) => (
                  <li key={index}>{item}</li>
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

export default TermsConditions;
