import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", about: "About", features: "Features", howItWorks: "How It Works", diseases: "Diseases", testimonials: "Testimonials", download: "Download App" },
      hero: { tag: "✨ The Future of Farming", title1: "Smart AI for", title2: "Modern Farmers", desc: "Instantly detect crop diseases, get expert treatments, and manage your farm smartly with the Krushi Sathi AI App. Designed for the Indian farmer.", downloadBtn: "Download App", learnBtn: "Learn More", stats: { farmers: "Farmers", accuracy: "Accuracy", crops: "Crops" } },
      features: { tag: "Powerful Features", title: "Everything you need to grow better", desc: "Krushi Sathi is packed with intelligent tools designed specifically to help farmers increase yield and reduce losses.", items: { scanTitle: "AI Crop Scanning", scanDesc: "Take a photo of a sick leaf and instantly get the disease name, severity, and accurate treatment recommendations.", expertTitle: "Expert Q&A", expertDesc: "Connect directly with agricultural experts. Ask questions, share photos, and get personalized farming advice.", weatherTitle: "Smart Weather Forecast", weatherDesc: "Hyper-local weather forecasts tailored for your farm to help you plan sowing, irrigation, and harvesting.", fertTitle: "Fertilizer Guide", fertDesc: "Calculate the exact amount of NPK and micronutrients required for your specific crop and soil type.", alertTitle: "Timely Alerts", alertDesc: "Receive push notifications for weather warnings, disease outbreaks in your area, and spray reminders.", secTitle: "Secure & Private", secDesc: "Your farm data is encrypted and secure. We respect your privacy and only use data to improve your yields." } },

      appFeatures: {
        tag: "Deep Dive into Features",
        title: "Every Feature, Explained",
        subtitle: "Krushi Sathi is not just an app — it is your complete digital farming partner. Here is exactly what each feature does for you.",

        scan: {
          tag: "AI Scan",
          title: "Instant AI Crop Disease Detection",
          desc: "The most powerful feature of Krushi Sathi. Simply open the app, point your camera at any sick leaf or crop, and our AI model trained on millions of images will instantly identify the disease — no internet required for basic scan.",
          points: [
            "📸 Take photo from camera or upload from gallery",
            "🧠 AI analyzes the image in under 3 seconds",
            "🦠 Identifies disease name with confidence score",
            "⚠️ Severity level — Low / Medium / High",
            "💊 Recommended medicine & organic treatment",
            "🛒 Shows products to buy directly from the app",
            "📋 Scan saved automatically to your history"
          ],
          stat1: { value: "3s", label: "Scan Time" },
          stat2: { value: "98%", label: "Accuracy" },
          stat3: { value: "100+", label: "Diseases" }
        },

        diseaseGuide: {
          tag: "Disease Library",
          title: "Complete Crop Disease Guide",
          desc: "A searchable library of 100+ crop diseases built for Indian farmers. Browse by crop, search by symptom, and get a complete picture — causes, symptoms, prevention, and treatment — all in one place.",
          points: [
            "🌾 Filter diseases by crop type (Tomato, Wheat, Rice, etc.)",
            "🔍 Search by disease name, symptom or treatment",
            "📖 Detailed symptoms, causes & prevention tips",
            "💉 Both organic and chemical treatment options",
            "🖼️ Reference images for easy identification",
            "🌐 Available in English, Hindi & Marathi"
          ],
          stat1: { value: "100+", label: "Diseases" },
          stat2: { value: "30+", label: "Crops" },
          stat3: { value: "3", label: "Languages" }
        },

        fertilizer: {
          tag: "Fertilizer Guide",
          title: "Smart Fertilizer Calculator",
          desc: "Stop guessing fertilizer quantities. Enter your crop name, soil type, and crop age — our AI instantly calculates the exact NPK, micronutrient, and organic fertilizer doses needed. Also browse a full fertilizer catalog crop-wise.",
          points: [
            "🌱 Enter crop name & growth stage",
            "🪨 Select soil type (Black, Alluvial, Red, Sandy, Clay)",
            "🧮 AI calculates exact NPK dosage in kg/acre",
            "🌿 Suggests organic alternatives too",
            "📚 Fertilizer catalog — browse by crop",
            "💡 Application timing & method advice",
            "📊 Supports 11 major crops (Tomato, Wheat, Rice, Cotton...)"
          ],
          stat1: { value: "11+", label: "Crops" },
          stat2: { value: "5", label: "Soil Types" },
          stat3: { value: "100%", label: "Precise Dose" }
        },

        expert: {
          tag: "Expert Advice",
          title: "Ask Farming Questions by Voice or Text",
          desc: "Got a farming problem? Just ask. Type your question or use your voice — our AI-powered expert system gives you practical, localized answers instantly. Ask anything about diseases, fertilizers, weather, or crop management.",
          points: [
            "🎤 Voice-to-text — speak your question in Hindi/Marathi/English",
            "💬 Text-based Q&A with instant AI answers",
            "📜 Past answers saved in your history",
            "🌾 Covers all farming topics — disease, soil, irrigation, harvest",
            "🗣️ Answers in your preferred language",
            "⚡ Response in seconds, not hours"
          ],
          stat1: { value: "3", label: "Languages" },
          stat2: { value: "∞", label: "Questions" },
          stat3: { value: "< 5s", label: "Response" }
        },

        weather: {
          tag: "Weather",
          title: "Real-Time Farm Weather & Advisory",
          desc: "Know exactly what's happening at your farm's location — live temperature, humidity, wind speed, rain forecast, and UV index. Plus get AI-generated farming advisories that tell you the best time to sow, spray, or irrigate.",
          points: [
            "📍 Auto-detects your farm location",
            "🌡️ Real-time temperature & feels like",
            "💧 Humidity & rain probability",
            "💨 Wind speed & direction",
            "☀️ UV index & sunrise / sunset",
            "📅 5-day forecast for planning",
            "🌾 Farming advisory — when to sow, spray, irrigate"
          ],
          stat1: { value: "Live", label: "Updates" },
          stat2: { value: "5-Day", label: "Forecast" },
          stat3: { value: "GPS", label: "Location" }
        },

        alerts: {
          tag: "Smart Alerts",
          title: "Never Miss a Critical Farm Reminder",
          desc: "The Alerts system keeps your farm on schedule. Get push notifications for spray reminders, fertilizer application times, weather warnings, and disease outbreak alerts in your region — organized in 4 clear tabs.",
          points: [
            "🔔 All alerts in one dashboard",
            "💧 Spray reminders — exact time & product to use",
            "🧪 Fertilizer reminders — when and how much to apply",
            "🌩️ Weather alerts — rain, heatwave, frost warnings",
            "🦠 Disease outbreak alerts — nearby area warnings",
            "📋 4 tabs: All / Spray / Fertilizer / Weather-Disease",
            "✅ Mark alerts as done to track completion"
          ],
          stat1: { value: "4", label: "Alert Types" },
          stat2: { value: "Real-time", label: "Notifications" },
          stat3: { value: "Zero", label: "Missed Tasks" }
        },

        shop: {
          tag: "Agri Marketplace",
          title: "Buy Agri Products Directly from the App",
          desc: "Krushi Sathi includes a built-in agricultural marketplace. Browse pesticides, fertilizers, seeds, and tools from verified local shops — and send inquiries directly to shop owners without leaving the app.",
          points: [
            "🛒 Browse 100s of agri products",
            "🔍 Search & filter by category",
            "🏪 Verified local agricultural shops",
            "📩 Send inquiry to shop owner directly",
            "🖼️ Product images, price & description",
            "📦 Categories: Pesticides, Fertilizers, Seeds, Tools",
            "💬 Direct contact with seller"
          ],
          stat1: { value: "100+", label: "Products" },
          stat2: { value: "Local", label: "Verified Shops" },
          stat3: { value: "1-tap", label: "Inquiry" }
        }
      },

      showcase: {
        tag: "Download Now",
        title: "Your Complete Farming Partner",
        desc: "Join 50,000+ Indian farmers who have transformed their farming with Krushi Sathi AI. Available free on Android.",
        android: "Get it on Android",
        feature1: "Free to download",
        feature2: "Works offline (AI scan)",
        feature3: "3 language support",
        feature4: "No farming degree needed"
      },

      hiw: {
        tag: "Simple Process", title: "How Krushi Sathi Works", desc: "From download to saving your first crop — here is the complete step-by-step journey with Krushi Sathi.",
        s1t: "Download the App", s1d: "Get Krushi Sathi free on Android. Create your account in 30 seconds with your phone number — no email required.",
        s2t: "Set Up Your Farm", s2d: "Enter your location and preferred language (English, Hindi or Marathi). The app auto-detects your weather and nearby alerts.",
        s3t: "Open the AI Scanner", s3d: "Tap the green Scan button on your dashboard. Choose to take a live photo or upload from your gallery.",
        s4t: "Photograph the Sick Leaf", s4d: "Point your camera clearly at the infected crop leaf. Make sure it is in focus and well-lit for best accuracy.",
        s5t: "Get Instant AI Result", s5d: "In under 3 seconds, see the disease name, confidence score, severity level, and complete treatment plan.",
        s6t: "Apply Treatment & Shop", s6d: "Follow the recommended treatment and buy the exact medicine or fertilizer from our built-in Agri Marketplace."
      },

      diseases: { tag: "Crop Library", title: "Common Diseases We Detect", desc: "Our AI model is trained on millions of images to identify over 100+ diseases across 30+ crops accurately.", btn: "View Full Library", learn: "Learn Treatment" },
      testimonials: { tag: "Trusted by Thousands", title: "What Farmers Say", desc: "Join over 50,000 farmers who trust Krushi Sathi to protect their crops and boost their income.", reviews: [{name: "Ramesh Patil", loc: "Maharashtra", text: "Krushi Sathi app saved my tomato crop this year. I took a photo of the sick leaf and it instantly told me it was Early Blight and gave me the exact medicine name. Highly recommended!"},{name: "Suresh Kumar", loc: "Punjab", text: "The fertilizer guide is amazing. Instead of guessing, I now know exactly how much Urea and DAP to use for my wheat farm. My yield has increased by 20%!"},{name: "Anil Deshmukh", loc: "Gujarat", text: "Asking questions to experts directly from the app is the best feature. The doctors reply quickly with practical solutions that actually work in the field."}] },
      cta: { title: "Ready to transform your farming?", desc: "Download the Krushi Sathi app today and join the community of modern farmers leveraging AI to increase their crop yield.", btn1: "Download App Now", btn2: "Contact Expert" },
      footer: { desc: "Empowering the modern Indian farmer with Artificial Intelligence. Smart disease detection, weather updates, and expert farming advice right in your pocket.", prod: "Product", comp: "Company", legal: "Legal", f1: "Features", f2: "How it Works", f3: "Crop Library", f4: "Pricing", c1: "About Us", c2: "Careers", c3: "Contact", c4: "Partners", l1: "Privacy Policy", l2: "Terms of Service", l3: "Cookie Policy", copy: "Krushi Sathi AI. All rights reserved." },
      about: { tag: "Our Mission", title: "Empowering the Modern Farmer", desc: "Krushi Sathi was built with a single goal: to bring world-class agricultural AI technology to the fingertips of every farmer in India. We believe that technology should be accessible, affordable, and practical.", cards: [{title: "Sustainable Farming", desc: "Promoting organic solutions and optimal fertilizer usage."}, {title: "Data Security", desc: "Your farm data is encrypted and completely private."}, {title: "Expert Community", desc: "Connecting you with certified agricultural scientists."}] },
      pricing: { tag: "Pricing", title: "Simple, Transparent Pricing", desc: "Start for free and upgrade when you need more advanced AI tools and expert consultations.", basic: { name: "Basic Plan", desc: "Perfect for small-scale farmers.", f1: "5 AI Crop Scans / month", f2: "Basic Weather Alerts", f3: "Community Access Only", btn: "Get Started Free" }, pro: { name: "Pro Farmer", desc: "For commercial farming and max yield.", f1: "Unlimited AI Scans", f2: "Premium Weather & Pest Alerts", f3: "Direct Expert Consultation (Voice/Video)", f4: "Fertilizer Calculator", btn: "Upgrade to Pro", rec: "RECOMMENDED" } },
      contact: { title: "Contact Us", name: "Name", email: "Email", msg: "Message", btn: "Send Message" },
      privacy: { title: "Privacy Policy", d1: "1. Data Collection", p1: "We collect images of crops that you submit for AI analysis. These images are securely processed and used strictly for identifying crop diseases. We may also collect your phone number and location if you opt-in to weather alerts.", d2: "2. Data Usage", p2: "Your data is never sold to third parties. We use crop data anonymously to improve our AI models and provide accurate agricultural insights.", d3: "3. Security", p3: "We employ industry-standard security measures to ensure your personal information remains safe on our servers." },
      terms: { title: "Terms of Service", t1: "1. Acceptance of Terms", p1: "By using the Krushi Sathi application, you agree to these Terms of Service. If you do not agree, please do not use our services.", t2: "2. Use of Service", p2: "Our AI models provide recommendations based on image analysis. While highly accurate, they are not a substitute for professional in-person agricultural assessment. We are not liable for crop loss resulting from AI misdiagnosis.", t3: "3. User Conduct", p3: "You agree not to misuse the service by submitting irrelevant images, spamming expert consultations, or attempting to breach our security." }
    }
  },
  mr: {
    translation: {
      nav: { home: "मुख्यपृष्ठ", about: "आमच्याबद्दल", features: "वैशिष्ट्ये", howItWorks: "हे कसे काम करते", diseases: "रोग", testimonials: "अभिप्राय", download: "अॅप डाउनलोड करा" },
      hero: { tag: "✨ शेतीचे भविष्य", title1: "आधुनिक शेतकऱ्यांसाठी", title2: "स्मार्ट AI", desc: "कृषी सार्थी AI अॅपद्वारे पिकांच्या रोगांची त्वरित नोंद घ्या, तज्ञांचे उपचार मिळवा आणि आपली शेती स्मार्टपणे व्यवस्थापित करा. भारतीय शेतकऱ्यांसाठी डिझाइन केलेले.", downloadBtn: "अॅप डाउनलोड करा", learnBtn: "अधिक जाणून घ्या", stats: { farmers: "शेतकरी", accuracy: "अचूकता", crops: "पिके" } },
      features: { tag: "प्रबळ वैशिष्ट्ये", title: "चांगली वाढ करण्यासाठी आवश्यक सर्व काही", desc: "कृषी सार्थी मध्ये शेतकऱ्यांचे उत्पन्न वाढवण्यासाठी आणि नुकसान कमी करण्यासाठी खास डिझाइन केलेली स्मार्ट साधने आहेत.", items: { scanTitle: "AI पीक स्कॅनिंग", scanDesc: "आजारी पानाचा फोटो काढा आणि लगेच रोगाचे नाव, तीव्रता आणि अचूक उपचारांच्या शिफारसी मिळवा.", expertTitle: "तज्ञ प्रश्नोत्तरे", expertDesc: "कृषी तज्ञांशी थेट संपर्क साधा. प्रश्न विचारा, फोटो शेअर करा आणि वैयक्तिकृत शेती सल्ला मिळवा.", weatherTitle: "स्मार्ट हवामान अंदाज", weatherDesc: "पेरणी, सिंचन आणि कापणीची योजना आखण्यासाठी आपल्या शेतासाठी अति-स्थानिक हवामान अंदाज.", fertTitle: "खत मार्गदर्शक", fertDesc: "तुमच्या विशिष्ट पिकासाठी आणि मातीच्या प्रकारासाठी आवश्यक NPK आणि सूक्ष्म अन्नद्रव्यांची अचूक मात्रा मोजा.", alertTitle: "वेळेवर सूचना", alertDesc: "तुमच्या भागातील हवामानाच्या इशाऱ्यांसाठी, रोगाच्या प्रादुर्भावासाठी आणि फवारणीच्या स्मरणपत्रांसाठी सूचना मिळवा.", secTitle: "सुरक्षित आणि खाजगी", secDesc: "तुमचा शेतीचा डेटा कूटबद्ध आणि सुरक्षित आहे. आम्ही तुमच्या गोपनीयतेचा आदर करतो आणि डेटा केवळ तुमचे उत्पन्न सुधारण्यासाठी वापरतो." } },

      appFeatures: {
        tag: "वैशिष्ट्यांचा सखोल आढावा",
        title: "प्रत्येक वैशिष्ट्य, सविस्तर",
        subtitle: "कृषी सार्थी हे केवळ एक अॅप नाही — हे तुमचे संपूर्ण डिजिटल शेती भागीदार आहे.",
        scan: { tag: "AI स्कॅन", title: "AI द्वारे पीक रोग त्वरित शोधा", desc: "कॅमेरा उघडा, आजारी पानावर ठेवा — AI 3 सेकंदात रोग ओळखेल.", points: ["📸 कॅमेरा किंवा गॅलरीतून फोटो", "🧠 3 सेकंदात AI विश्लेषण", "🦠 रोगाचे नाव व तीव्रता", "💊 औषध व सेंद्रिय उपचार", "🛒 थेट उत्पादन खरेदी", "📋 स्कॅन इतिहासात जतन"], stat1: { value: "3s", label: "स्कॅन वेळ" }, stat2: { value: "98%", label: "अचूकता" }, stat3: { value: "100+", label: "रोग" } },
        diseaseGuide: { tag: "रोग लायब्ररी", title: "संपूर्ण पीक रोग मार्गदर्शिका", desc: "100+ रोगांची शोधयोग्य लायब्ररी — पिकानुसार फिल्टर करा, लक्षणांनुसार शोधा.", points: ["🌾 पिकानुसार फिल्टर", "🔍 नाव/लक्षण/उपचारानुसार शोध", "📖 लक्षणे, कारणे व प्रतिबंध", "💉 सेंद्रिय व रासायनिक उपचार", "🌐 मराठी, हिंदी व इंग्रजी"], stat1: { value: "100+", label: "रोग" }, stat2: { value: "30+", label: "पिके" }, stat3: { value: "3", label: "भाषा" } },
        fertilizer: { tag: "खत मार्गदर्शक", title: "स्मार्ट खत कॅल्क्युलेटर", desc: "पीक, मातीचा प्रकार आणि वाढीचा टप्पा टाका — AI अचूक NPK मात्रा सांगेल.", points: ["🌱 पीक व वाढीचा टप्पा निवडा", "🪨 मातीचा प्रकार निवडा", "🧮 AI NPK मात्रा kg/एकर मध्ये", "🌿 सेंद्रिय पर्यायही सुचवतो", "📚 पीकनिहाय खत कॅटलॉग"], stat1: { value: "11+", label: "पिके" }, stat2: { value: "5", label: "मातींचे प्रकार" }, stat3: { value: "100%", label: "अचूक मात्रा" } },
        expert: { tag: "तज्ञ सल्ला", title: "आवाज किंवा टेक्स्टने प्रश्न विचारा", desc: "मराठी, हिंदी किंवा इंग्रजीत बोला — AI तुमच्या शेतीच्या प्रश्नांची उत्तरे देईल.", points: ["🎤 व्हॉइस-टू-टेक्स्ट प्रश्न", "💬 टेक्स्ट-आधारित प्रश्नोत्तरे", "📜 मागील उत्तरे जतन", "🌾 रोग, माती, सिंचन, कापणी", "⚡ 5 सेकंदात उत्तर"], stat1: { value: "3", label: "भाषा" }, stat2: { value: "∞", label: "प्रश्न" }, stat3: { value: "< 5s", label: "प्रतिसाद" } },
        weather: { tag: "हवामान", title: "शेतासाठी थेट हवामान माहिती", desc: "तुमच्या शेताच्या ठिकाणाचे थेट तापमान, आर्द्रता, पाऊस अंदाज आणि शेती सल्ला.", points: ["📍 GPS स्थान आपोआप", "🌡️ तापमान व आर्द्रता", "💧 पावसाची शक्यता", "☀️ UV इंडेक्स", "📅 5 दिवसांचा अंदाज", "🌾 पेरणी/फवारणी/सिंचन सल्ला"], stat1: { value: "थेट", label: "अपडेट" }, stat2: { value: "5 दिवस", label: "अंदाज" }, stat3: { value: "GPS", label: "स्थान" } },
        alerts: { tag: "स्मार्ट सूचना", title: "महत्त्वाची शेती स्मरणपत्रे चुकवू नका", desc: "फवारणी, खत, हवामान आणि रोग — सर्व सूचना एकाच ठिकाणी 4 टॅबमध्ये.", points: ["🔔 सर्व सूचना एकाच ठिकाणी", "💧 फवारणी स्मरणपत्रे", "🧪 खत स्मरणपत्रे", "🌩️ हवामान इशारे", "🦠 रोग प्रादुर्भाव सूचना", "✅ पूर्ण झालेल्या सूचना टिक करा"], stat1: { value: "4", label: "प्रकार" }, stat2: { value: "रिअल-टाइम", label: "सूचना" }, stat3: { value: "शून्य", label: "चुकलेली कामे" } },
        shop: { tag: "कृषी बाजार", title: "अॅपमधूनच कृषी उत्पादने खरेदी करा", desc: "कीटकनाशके, खते, बियाणे आणि साधने — स्थानिक दुकानांकडून थेट खरेदी.", points: ["🛒 100+ कृषी उत्पादने", "🔍 श्रेणीनुसार शोध", "🏪 स्थानिक प्रमाणित दुकाने", "📩 दुकान मालकाला थेट चौकशी", "📦 कीटकनाशके, खते, बियाणे, साधने"], stat1: { value: "100+", label: "उत्पादने" }, stat2: { value: "स्थानिक", label: "दुकाने" }, stat3: { value: "1-टॅप", label: "चौकशी" } }
      },

      showcase: { tag: "आता डाउनलोड करा", title: "तुमचे संपूर्ण शेती भागीदार", desc: "५०,००० पेक्षा जास्त भारतीय शेतकऱ्यांसोबत सामील व्हा. Android वर मोफत उपलब्ध.", android: "Android वर मिळवा", feature1: "मोफत डाउनलोड", feature2: "ऑफलाइन AI स्कॅन", feature3: "3 भाषा समर्थन", feature4: "कृषी पदवी आवश्यक नाही" },

      hiw: { tag: "सोपी प्रक्रिया", title: "कृषी सार्थी कसे काम करते", desc: "डाउनलोडपासून ते पहिले पीक वाचवण्यापर्यंत — संपूर्ण टप्प्याटप्प्याने प्रवास.", s1t: "अॅप डाउनलोड करा", s1d: "Android वर मोफत कृषी सार्थी मिळवा. फक्त मोबाइल नंबरने 30 सेकंदात खाते तयार करा.", s2t: "शेत सेट करा", s2d: "तुमचे स्थान आणि पसंतीची भाषा (मराठी, हिंदी किंवा इंग्रजी) निवडा.", s3t: "AI स्कॅनर उघडा", s3d: "डॅशबोर्डवरील हिरव्या स्कॅन बटणावर टॅप करा.", s4t: "आजारी पानाचा फोटो काढा", s4d: "संक्रमित पानावर कॅमेरा स्पष्टपणे रोखा. चांगला प्रकाश असल्याची खात्री करा.", s5t: "AI निकाल मिळवा", s5d: "3 सेकंदात रोगाचे नाव, तीव्रता आणि संपूर्ण उपचार योजना पहा.", s6t: "उपचार करा आणि खरेदी करा", s6d: "शिफारस केलेले उपचार करा आणि अॅपच्या बाजारातून थेट औषध खरेदी करा." },

      diseases: { tag: "पीक लायब्ररी", title: "आम्ही शोधत असलेले सामान्य रोग", desc: "आमच्या AI मॉडेलला ३०+ पिकांवरील १००+ हून अधिक रोग अचूकपणे ओळखण्यासाठी लाखो प्रतिमांवर प्रशिक्षित केले आहे.", btn: "पूर्ण लायब्ररी पहा", learn: "उपचार शिका" },
      testimonials: { tag: "हजारो शेतकऱ्यांचा विश्वास", title: "शेतकरी काय म्हणतात", desc: "५०,००० पेक्षा जास्त शेतकऱ्यांमध्ये सामील व्हा.", reviews: [{name: "रमेश पाटील", loc: "महाराष्ट्र", text: "कृषी सार्थी अॅपने यावर्षी माझे टोमॅटोचे पीक वाचवले. मी आजारी पानाचा फोटो काढला आणि त्याने मला लगेच सांगितले की हे अर्ली ब्लाइट आहे आणि मला अचूक औषधाचे नाव दिले. नक्की वापरा!"},{name: "सुरेश कुमार", loc: "पंजाब", text: "खत मार्गदर्शक अद्भुत आहे. आता मला गव्हाच्या शेतासाठी किती युरिया आणि डीएपी वापरायचे हे अचूक माहीत आहे. माझे उत्पन्न २०% वाढले आहे!"},{name: "अनिल देशमुख", loc: "गुजरात", text: "अॅपवरून तज्ञांना थेट प्रश्न विचारणे हे सर्वोत्तम वैशिष्ट्य आहे. डॉक्टर लवकरच व्यावहारिक उपाय देतात जे प्रत्यक्षात शेतात काम करतात."}] },
      cta: { title: "तुमची शेती बदलण्यासाठी तयार आहात?", desc: "आजच कृषी सार्थी अॅप डाउनलोड करा.", btn1: "आता अॅप डाउनलोड करा", btn2: "तज्ञांशी संपर्क साधा" },
      footer: { desc: "आर्टिफिशियल इंटेलिजन्ससह आधुनिक भारतीय शेतकऱ्याचे सक्षमीकरण.", prod: "उत्पादन", comp: "कंपनी", legal: "कायदेशीर", f1: "वैशिष्ट्ये", f2: "हे कसे काम करते", f3: "पीक लायब्ररी", f4: "किंमत", c1: "आमच्याबद्दल", c2: "करिअर", c3: "संपर्क", c4: "भागीदार", l1: "गोपनीयता धोरण", l2: "सेवा अटी", l3: "कुकी धोरण", copy: "कृषी सार्थी AI. सर्व हक्क राखीव." },
      about: { tag: "आमचे ध्येय", title: "आधुनिक शेतकऱ्याचे सक्षमीकरण", desc: "कृषी सार्थी एकाच ध्येयाने तयार केले गेले आहे: भारतातील प्रत्येक शेतकऱ्याच्या बोटांच्या टोकावर जागतिक दर्जाचे कृषी AI तंत्रज्ञान आणणे.", cards: [{title: "शाश्वत शेती", desc: "सेंद्रिय द्रावणे आणि इष्टतम खत वापरास प्रोत्साहन देणे."}, {title: "डेटा सुरक्षा", desc: "तुमचा शेतीचा डेटा कूटबद्ध आणि पूर्णपणे खाजगी आहे."}, {title: "तज्ञ समुदाय", desc: "तुम्हाला प्रमाणित कृषी शास्त्रज्ञांशी जोडत आहे."}] },
      pricing: { tag: "किंमत", title: "सोपी, पारदर्शक किंमत", desc: "विनामूल्य सुरू करा आणि जेव्हा तुम्हाला अधिक प्रगत AI साधने आणि तज्ञांच्या सल्ल्याची आवश्यकता असेल तेव्हा अपग्रेड करा.", basic: { name: "मूळ योजना", desc: "लहान प्रमाणावरील शेतकऱ्यांसाठी योग्य.", f1: "दरमहा ५ AI पीक स्कॅन", f2: "मूलभूत हवामान सूचना", f3: "फक्त समुदाय प्रवेश", btn: "विनामूल्य सुरू करा" }, pro: { name: "प्रो शेतकरी", desc: "व्यावसायिक शेती आणि जास्तीत जास्त उत्पादनासाठी.", f1: "अमर्यादित AI स्कॅन", f2: "प्रीमियम हवामान आणि कीटक सूचना", f3: "थेट तज्ञ सल्लामसलत (व्हॉइस/व्हिडिओ)", f4: "खत कॅल्क्युलेटर", btn: "प्रो वर अपग्रेड करा", rec: "शिफारस केलेले" } },
      contact: { title: "आमच्याशी संपर्क साधा", name: "नाव", email: "ईमेल", msg: "संदेश", btn: "संदेश पाठवा" },
      privacy: { title: "गोपनीयता धोरण", d1: "1. डेटा संकलन", p1: "AI विश्लेषणासाठी तुम्ही सबमिट केलेल्या पिकांच्या प्रतिमा आम्ही संकलित करतो.", d2: "2. डेटा वापर", p2: "तुमचा डेटा कधीही तृतीय पक्षांना विकला जात नाही.", d3: "3. सुरक्षा", p3: "तुमची वैयक्तिक माहिती आमच्या सर्व्हरवर सुरक्षित राहील याची खात्री करण्यासाठी आम्ही उद्योग-मानक सुरक्षा उपाय वापरतो." },
      terms: { title: "सेवा अटी", t1: "1. अटींची स्वीकृती", p1: "कृषी सार्थी अनुप्रयोग वापरून, तुम्ही या सेवा अटींना सहमती देता.", t2: "2. सेवेचा वापर", p2: "आमचे AI मॉडेल प्रतिमा विश्लेषणावर आधारित शिफारसी देतात.", t3: "3. वापरकर्ता आचरण", p3: "असंबंधित प्रतिमा सबमिट करून किंवा सेवेचा गैरवापर न करण्यास तुम्ही सहमत आहात." }
    }
  },
  hi: {
    translation: {
      nav: { home: "होम", about: "हमारे बारे में", features: "विशेषताएं", howItWorks: "यह कैसे काम करता है", diseases: "बीमारियां", testimonials: "प्रशंसापत्र", download: "ऐप डाउनलोड करें" },
      hero: { tag: "✨ खेती का भविष्य", title1: "आधुनिक किसानों के लिए", title2: "स्मार्ट AI", desc: "कृषि सार्थी AI ऐप के साथ तुरंत फसल की बीमारियों का पता लगाएं, विशेषज्ञ उपचार प्राप्त करें, और अपने खेत को स्मार्ट तरीके से प्रबंधित करें।", downloadBtn: "ऐप डाउनलोड करें", learnBtn: "और जानें", stats: { farmers: "किसान", accuracy: "सटीकता", crops: "फसलें" } },
      features: { tag: "शक्तिशाली विशेषताएं", title: "बेहतर विकास के लिए आपको जो कुछ भी चाहिए", desc: "कृषि सार्थी विशेष रूप से किसानों को उपज बढ़ाने और नुकसान कम करने में मदद करने के लिए बुद्धिमान उपकरणों से भरा हुआ है।", items: { scanTitle: "AI फसल स्कैनिंग", scanDesc: "बीमार पत्ते की एक तस्वीर लें और तुरंत बीमारी का नाम, गंभीरता और सटीक उपचार सिफारिशें प्राप्त करें।", expertTitle: "विशेषज्ञ प्रश्नोत्तर", expertDesc: "सीधे कृषि विशेषज्ञों से जुड़ें। प्रश्न पूछें, तस्वीरें साझा करें।", weatherTitle: "स्मार्ट मौसम पूर्वानुमान", weatherDesc: "बुवाई, सिंचाई और कटाई की योजना बनाने में आपकी मदद करने के लिए अति-स्थानीय मौसम पूर्वानुमान।", fertTitle: "उर्वरक गाइड", fertDesc: "अपनी विशिष्ट फसल और मिट्टी के प्रकार के लिए आवश्यक NPK की सटीक मात्रा की गणना करें।", alertTitle: "समय पर अलर्ट", alertDesc: "मौसम की चेतावनियों और छिड़काव अनुस्मारकों के लिए सूचनाएँ प्राप्त करें।", secTitle: "सुरक्षित और निजी", secDesc: "आपका कृषि डेटा एन्क्रिप्टेड और सुरक्षित है।" } },

      appFeatures: {
        tag: "विशेषताओं का गहन विवरण",
        title: "हर विशेषता, विस्तार से",
        subtitle: "कृषि सार्थी सिर्फ एक ऐप नहीं — यह आपका पूरा डिजिटल खेती साथी है।",
        scan: { tag: "AI स्कैन", title: "AI से फसल रोग तुरंत पहचानें", desc: "कैमरा खोलें, बीमार पत्ते पर रखें — AI 3 सेकंड में रोग पहचान लेगा।", points: ["📸 कैमरा या गैलरी से फोटो", "🧠 3 सेकंड में AI विश्लेषण", "🦠 रोग का नाम और गंभीरता", "💊 दवा और जैविक उपचार", "🛒 सीधे उत्पाद खरीदें", "📋 स्कैन इतिहास में सहेजें"], stat1: { value: "3s", label: "स्कैन समय" }, stat2: { value: "98%", label: "सटीकता" }, stat3: { value: "100+", label: "बीमारियां" } },
        diseaseGuide: { tag: "रोग लाइब्रेरी", title: "पूरी फसल रोग गाइड", desc: "100+ रोगों की खोज योग्य लाइब्रेरी — फसल के हिसाब से फ़िल्टर करें।", points: ["🌾 फसल के अनुसार फ़िल्टर", "🔍 नाम/लक्षण/उपचार से खोज", "📖 लक्षण, कारण और रोकथाम", "💉 जैविक और रासायनिक उपचार", "🌐 हिंदी, मराठी और अंग्रेजी"], stat1: { value: "100+", label: "बीमारियां" }, stat2: { value: "30+", label: "फसलें" }, stat3: { value: "3", label: "भाषाएं" } },
        fertilizer: { tag: "उर्वरक गाइड", title: "स्मार्ट उर्वरक कैलकुलेटर", desc: "फसल, मिट्टी का प्रकार और उम्र डालें — AI सटीक NPK मात्रा बताएगा।", points: ["🌱 फसल और विकास चरण चुनें", "🪨 मिट्टी का प्रकार चुनें", "🧮 AI NPK मात्रा kg/एकड़ में", "🌿 जैविक विकल्प भी सुझाता है", "📚 फसल-वार उर्वरक कैटलॉग"], stat1: { value: "11+", label: "फसलें" }, stat2: { value: "5", label: "मिट्टी के प्रकार" }, stat3: { value: "100%", label: "सटीक मात्रा" } },
        expert: { tag: "विशेषज्ञ सलाह", title: "आवाज या टेक्स्ट से सवाल पूछें", desc: "हिंदी, मराठी या अंग्रेजी में बोलें — AI आपके खेती के सवालों का जवाब देगा।", points: ["🎤 वॉयस-टू-टेक्स्ट प्रश्न", "💬 टेक्स्ट-आधारित Q&A", "📜 पिछले उत्तर सहेजे गए", "🌾 रोग, मिट्टी, सिंचाई, कटाई", "⚡ 5 सेकंड में जवाब"], stat1: { value: "3", label: "भाषाएं" }, stat2: { value: "∞", label: "प्रश्न" }, stat3: { value: "< 5s", label: "प्रतिक्रिया" } },
        weather: { tag: "मौसम", title: "खेत के लिए लाइव मौसम जानकारी", desc: "आपके खेत की लोकेशन का लाइव तापमान, नमी, बारिश का अनुमान और खेती सलाह।", points: ["📍 GPS लोकेशन अपने आप", "🌡️ तापमान और नमी", "💧 बारिश की संभावना", "☀️ UV इंडेक्स", "📅 5 दिन का अनुमान", "🌾 बुवाई/छिड़काव/सिंचाई सलाह"], stat1: { value: "लाइव", label: "अपडेट" }, stat2: { value: "5-दिन", label: "अनुमान" }, stat3: { value: "GPS", label: "लोकेशन" } },
        alerts: { tag: "स्मार्ट अलर्ट", title: "जरूरी खेती रिमाइंडर कभी न चूकें", desc: "छिड़काव, उर्वरक, मौसम और रोग — सभी अलर्ट एक जगह 4 टैब में।", points: ["🔔 सभी अलर्ट एक जगह", "💧 छिड़काव रिमाइंडर", "🧪 उर्वरक रिमाइंडर", "🌩️ मौसम चेतावनी", "🦠 रोग प्रकोप अलर्ट", "✅ पूरे हुए अलर्ट टिक करें"], stat1: { value: "4", label: "प्रकार" }, stat2: { value: "रियल-टाइम", label: "सूचनाएं" }, stat3: { value: "शून्य", label: "छूटे काम" } },
        shop: { tag: "कृषि बाजार", title: "ऐप से ही कृषि उत्पाद खरीदें", desc: "कीटनाशक, उर्वरक, बीज और उपकरण — स्थानीय दुकानों से सीधे खरीदें।", points: ["🛒 100+ कृषि उत्पाद", "🔍 श्रेणी के अनुसार खोज", "🏪 स्थानीय सत्यापित दुकानें", "📩 दुकान मालक को सीधी पूछताछ", "📦 कीटनाशक, उर्वरक, बीज, उपकरण"], stat1: { value: "100+", label: "उत्पाद" }, stat2: { value: "स्थानीय", label: "दुकानें" }, stat3: { value: "1-टैप", label: "पूछताछ" } }
      },

      showcase: { tag: "अभी डाउनलोड करें", title: "आपका पूरा खेती साथी", desc: "50,000+ भारतीय किसानों के साथ जुड़ें। Android पर मुफ्त उपलब्ध।", android: "Android पर पाएं", feature1: "मुफ्त डाउनलोड", feature2: "ऑफलाइन AI स्कैन", feature3: "3 भाषा समर्थन", feature4: "कृषि डिग्री की जरूरत नहीं" },

      hiw: { tag: "सरल प्रक्रिया", title: "कृषि सार्थी कैसे काम करता है", desc: "डाउनलोड से लेकर पहली फसल बचाने तक — पूरा चरण-दर-चरण सफर।", s1t: "ऐप डाउनलोड करें", s1d: "Android पर मुफ्त कृषि सार्थी पाएं। सिर्फ मोबाइल नंबर से 30 सेकंड में अकाउंट बनाएं।", s2t: "खेत सेट करें", s2d: "अपनी लोकेशन और पसंदीदा भाषा (हिंदी, मराठी या अंग्रेजी) चुनें।", s3t: "AI स्कैनर खोलें", s3d: "डैशबोर्ड पर हरे Scan बटन पर टैप करें।", s4t: "बीमार पत्ते की फोटो लें", s4d: "संक्रमित पत्ते पर कैमरा साफ तरह से रखें। अच्छी रोशनी सुनिश्चित करें।", s5t: "AI परिणाम पाएं", s5d: "3 सेकंड में रोग का नाम, गंभीरता और पूरी उपचार योजना देखें।", s6t: "उपचार करें और खरीदें", s6d: "सुझाया गया उपचार करें और ऐप के बाजार से सीधे दवा खरीदें।" },

      diseases: { tag: "फसल लाइब्रेरी", title: "सामान्य बीमारियां जिनका हम पता लगाते हैं", desc: "हमारे AI मॉडल को 30+ फसलों में 100+ से अधिक बीमारियों की सटीक पहचान के लिए प्रशिक्षित किया गया है।", btn: "पूरी लाइब्रेरी देखें", learn: "उपचार सीखें" },
      testimonials: { tag: "हजारों किसानों का भरोसा", title: "किसान क्या कहते हैं", desc: "50,000 से अधिक किसानों से जुड़ें।", reviews: [{name: "रमेश पाटिल", loc: "महाराष्ट्र", text: "कृषि सार्थी ऐप ने इस साल मेरी टमाटर की फसल बचा ली। मैंने बीमार पत्ते की तस्वीर ली और इसने तुरंत मुझे बताया कि यह अर्ली ब्लाइट था। अत्यधिक अनुशंसित!"},{name: "सुरेश कुमार", loc: "पंजाब", text: "उर्वरक गाइड अद्भुत है। अब मुझे ठीक से पता है कि अपने गेहूं के खेत के लिए कितना यूरिया और डीएपी का उपयोग करना है। मेरी उपज में 20% की वृद्धि हुई है!"},{name: "अनिल देशमुख", loc: "गुजरात", text: "ऐप से सीधे विशेषज्ञों से प्रश्न पूछना सबसे अच्छी विशेषता है। डॉक्टर जल्दी से व्यावहारिक समाधान देते हैं।"}] },
      cta: { title: "अपनी खेती को बदलने के लिए तैयार हैं?", desc: "आज ही कृषि सार्थी ऐप डाउनलोड करें।", btn1: "अभी ऐप डाउनलोड करें", btn2: "विशेषज्ञ से संपर्क करें" },
      footer: { desc: "आर्टिफिशियल इंटेलिजेंस के साथ आधुनिक भारतीय किसान को सशक्त बनाना।", prod: "उत्पाद", comp: "कंपनी", legal: "कानूनी", f1: "विशेषताएं", f2: "यह कैसे काम करता है", f3: "फसल लाइब्रेरी", f4: "मूल्य निर्धारण", c1: "हमारे बारे में", c2: "करियर", c3: "संपर्क करें", c4: "साझेदार", l1: "गोपनीयता नीति", l2: "सेवा की शर्तें", l3: "कुकी नीति", copy: "कृषि सार्थी AI. सर्वाधिकार सुरक्षित।" },
      about: { tag: "हमारा लक्ष्य", title: "आधुनिक किसान को सशक्त बनाना", desc: "कृषि सार्थी एक ही लक्ष्य के साथ बनाया गया था: भारत के हर किसान की उंगलियों पर विश्व स्तरीय कृषि AI तकनीक लाना।", cards: [{title: "सतत खेती", desc: "जैविक समाधान और इष्टतम उर्वरक उपयोग को बढ़ावा देना।"}, {title: "डेटा सुरक्षा", desc: "आपका कृषि डेटा एन्क्रिप्टेड और पूरी तरह से निजी है।"}, {title: "विशेषज्ञ समुदाय", desc: "आपको प्रमाणित कृषि वैज्ञानिकों से जोड़ना।"}] },
      pricing: { tag: "मूल्य निर्धारण", title: "सरल, पारदर्शी मूल्य निर्धारण", desc: "मुफ्त में शुरू करें और जब आपको अधिक उन्नत AI टूल की आवश्यकता हो तो अपग्रेड करें।", basic: { name: "मूल योजना", desc: "छोटे पैमाने के किसानों के लिए बिल्कुल सही।", f1: "प्रति माह 5 AI फसल स्कैन", f2: "बुनियादी मौसम अलर्ट", f3: "केवल समुदाय पहुंच", btn: "मुफ्त में शुरू करें" }, pro: { name: "प्रो किसान", desc: "व्यावसायिक खेती और अधिकतम उपज के लिए।", f1: "असीमित AI स्कैन", f2: "प्रीमियम मौसम और कीट अलर्ट", f3: "सीधा विशेषज्ञ परामर्श (वॉयस/वीडियो)", f4: "उर्वरक कैलकुलेटर", btn: "प्रो में अपग्रेड करें", rec: "अनुशंसित" } },
      contact: { title: "संपर्क करें", name: "नाम", email: "ईमेल", msg: "संदेश", btn: "संदेश भेजें" },
      privacy: { title: "गोपनीयता नीति", d1: "1. डेटा संग्रह", p1: "हम AI विश्लेषण के लिए आपके द्वारा सबमिट की गई फसलों की छवियां एकत्र करते हैं।", d2: "2. डेटा उपयोग", p2: "आपका डेटा कभी भी तीसरे पक्ष को बेचा नहीं जाता है।", d3: "3. सुरक्षा", p3: "हम यह सुनिश्चित करने के लिए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं कि आपकी व्यक्तिगत जानकारी सुरक्षित रहे।" },
      terms: { title: "सेवा की शर्तें", t1: "1. शर्तों की स्वीकृति", p1: "कृषि सार्थी एप्लिकेशन का उपयोग करके, आप इन सेवा की शर्तों से सहमत होते हैं।", t2: "2. सेवा का उपयोग", p2: "हमारे AI मॉडल छवि विश्लेषण के आधार पर सिफारिशें प्रदान करते हैं।", t3: "3. उपयोगकर्ता आचरण", p3: "आप अप्रासंगिक चित्र सबमिट करके सेवा का दुरुपयोग नहीं करने के लिए सहमत हैं।" }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
