import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Trash2, 
  ChevronRight, 
} from 'lucide-react';
import './Chatbot.css';

export default function Chatbot() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lang, setLang] = useState(i18n.language || 'mr');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Synchronize language with global i18n
  useEffect(() => {
    if (i18n.language) {
      setLang(i18n.language);
    }
  }, [i18n.language]);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'bot',
          text: getWelcomeMessage(lang),
          suggestions: getSuggestions(lang),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [lang]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  function getWelcomeMessage(l) {
    if (l === 'hi') {
      return "नमस्कार किसान भाई! 🌾 मैं कृषि साथी AI एक्सपर्ट हूँ। आप मुझसे टमाटर, कपास, प्याज, सोयाबीन या किसी भी फसल के रोग, कीट, फफूंद, खाद (Fertilizer) और छिड़काव की दवाइयों के बारे में सवाल पूछ सकते हैं!";
    } else if (l === 'mr') {
      return "नमस्कार बळीराजा! 🌾 मी कृषी साथी AI एक्सपर्ट आहे. टोमॅटो, कापूस, कांदा, सोयाबीन, ऊस किंवा कोणत्याही पिकावरील रोग, कीड, औषधांची फवारणी आणि खत व्यवस्थापनाबद्दल काहीही विचारू शकता!";
    } else {
      return "Hello farmer! 🌾 I am Krushi Sathi AI Expert. Ask me anything about crop diseases, pest control, chemical/organic spraying, fertilizer dosage, weather, or farming advice!";
    }
  }

  function getSuggestions(l) {
    if (l === 'hi') {
      return [
        "🍅 टमाटर में करपा व बोकड्या रोग का इलाज?",
        "🌱 कपास में गुलाबी बोंडअळी व सफेद मक्खी?",
        "🧅 प्याज में थ्रिप्स व जांघिया करपा फवारणी?",
        "💡 फसल के लिए सबसे अच्छी खाद (Fertilizers)?",
        "📸 AI डिसीज स्कैनर का उपयोग कैसे करें?"
      ];
    } else if (l === 'mr') {
      return [
        "🍅 टोमॅटोवरील करपा व बोकड्या रोगावर उपाय?",
        "🌱 कापसातील गुलाबी बोंडअळी व पांढरी माशी?",
        "🧅 कांद्यावरील थ्रिप्स व जांभळा करपा फवारणी?",
        "💡 पिकांच्या वाढीसाठी योग्य खते (Fertilizers)?",
        "📸 AI रोग स्कॅनर कसा वापरावा?"
      ];
    } else {
      return [
        "🍅 Remedy for Tomato Blight & Leaf Curl?",
        "🌱 Pink Bollworm control in Cotton?",
        "🧅 Onion Thrips & Purple Blotch spray?",
        "💡 Optimal Fertilizer (NPK) Schedule?",
        "📸 How to use AI Disease Scanner?"
      ];
    }
  }

  // ─── ADVANCED AI AGRICULTURE KNOWLEDGE ENGINE ─────────────────────────────
  const getAIResponse = (query, currentLang) => {
    const q = query.toLowerCase().trim();

    // Language Auto-Detection based on Devanagari script or text
    let detectedLang = currentLang;
    if (/[\u0900-\u097F]/.test(query)) {
      // Devanagari script detected: check Marathi specific words vs Hindi
      if (q.includes('आहे') || q.includes('काही') || q.includes('पिका') || q.includes('सल्ला') || q.includes('उपाय') || q.includes('करावा') || q.includes('कांदा') || q.includes('फवारा')) {
        detectedLang = 'mr';
      } else if (q.includes('क्या') || q.includes('कैसे') || q.includes('दवा') || q.includes('उपचार') || q.includes('करें') || q.includes('किसान')) {
        detectedLang = 'hi';
      }
    }

    // 1. TOMATO / टोमॅटो / टमाटर
    if (q.includes('tomato') || q.includes('टोमॅटो') || q.includes('टमाटर')) {
      if (q.includes('blight') || q.includes('करपा') || q.includes('डाग') || q.includes('मुरडा') || q.includes('curl') || q.includes('बोकड्या') || q.includes('रोग') || q.includes('रोग')) {
        if (detectedLang === 'hi') {
          return {
            text: "🍅 **टमाटर रोग व उपचार (Tomato Advisory):**\n\n1. **अगेती/पिछेती करपा (Blight):** मैंकोजेब (Mancozeb 75% WP) 2.5g/लीटर या कॉपर ऑक्सीक्लोराइड 3g/लीटर का छिड़काव करें।\n2. **लीफ कर्ल (बोकड्या):** रसचूसक कीटों के लिए एसिटामिप्रिड (Acetamiprid 20% SP) 0.5g/लीटर + स्टिकर मिलाएं।\n3. **फलों की सड़न:** कैल्शियम नाइट्रेट + बोरॉन का छिड़काव करें।",
            actions: [{ label: '📸 AI पत्ती स्कैनर से जांचें', href: '#diseases' }]
          };
        } else if (detectedLang === 'mr') {
          return {
            text: "🍅 **टोमॅटो रोग व फवारणी नियोजन:**\n\n1. **करपा रोग (Blight):** मँकोझेब (Mancozeb 75% WP) २.५ ग्रॅम/लीटर किंवा कॉपर ऑक्सिक्लोराईड ३ ग्रॅम/लीटर फवारावे.\n2. **बोकड्या / चुरडा-मुरडा (Leaf Curl):** असिटामिप्रिड (Acetamiprid 20% SP) ०.५ ग्रॅम/लीटर + सिलिकॉन स्टीकर फवारावा.\n3. **फळ सड / क्रॅकिंग:** कॅल्शियम नायट्रेट + बोरॉन ची फवारणी करावी.",
            actions: [{ label: '📸 AI पानांचा फोटो काढून रोगाची तपासणी करा', href: '#diseases' }]
          };
        } else {
          return {
            text: "🍅 **Tomato Crop Protection Advisory:**\n\n1. **Blight Disease:** Spray Mancozeb 75% WP @ 2.5g/L or Copper Oxychloride @ 3g/L.\n2. **Leaf Curl (Whitefly Vector):** Spray Acetamiprid 20% SP @ 0.5g/L with silicon sticker.\n3. **Fruit Rot / Cracking:** Apply Calcium Nitrate + Boron foliar spray.",
            actions: [{ label: '📸 Scan Tomato Leaf with AI', href: '#diseases' }]
          };
        }
      }
    }

    // 2. COTTON / कापूस / कपास
    if (q.includes('cotton') || q.includes('कापूस') || q.includes('कपास') || q.includes('बोंडअळी') || q.includes('माशी')) {
      if (detectedLang === 'hi') {
        return {
          text: "🌱 **कपास कीट व रोग नियंत्रण (Cotton Advisory):**\n\n1. **गुलाबी बोंडअळी (Pink Bollworm):** खेत में 5 फेरोमोन ट्रैप (Pheromone Traps) प्रति एकड़ लगाएं। प्रोफेनोफॉस 50% EC 2ml/लीटर का छिड़काव करें।\n2. **सफेद मक्खी व मावा:** अज़ाडिरैक्टिन (नीम तेल 10000 ppm) 2ml/लीटर या इमिडाक्लोप्रिड 0.5ml/लीटर फव्वारा करें।",
          actions: [{ label: 'कीट गाइड देखें', href: '#diseases' }]
        };
      } else if (detectedLang === 'mr') {
        return {
          text: "🌱 **कापूस पीक संरक्षण सल्ला:**\n\n1. **गुलाबी बोंडअळी नियंत्रण:** प्रति एकरी ५ कामगंध सापळे (Pheromone Traps) लावा. प्रादुर्भाव वाढल्यास प्रोफेनोफॉस ५०% EC २ मिली/लीटर फवारावे.\n2. **पांढरी माशी व मावा:** कडुनिंब अर्क (Neem Oil 10000 ppm) २ मिली/लीटर किंवा असिटामिप्रिड ०.५ ग्रॅम/लीटर फवारा.",
          actions: [{ label: 'कीड व रोग मार्गदर्शिका', href: '#diseases' }]
        };
      } else {
        return {
          text: "🌱 **Cotton Crop Protection Advisory:**\n\n1. **Pink Bollworm:** Install 5 Pheromone Traps per acre. Spray Profenofos 50% EC @ 2ml/L water if infestation exceeds ETL.\n2. **Whitefly & Aphids:** Spray Neem Oil (10,000 ppm) @ 2ml/L or Acetamiprid 20% SP @ 0.5g/L.",
          actions: [{ label: 'View Pest Guide', href: '#diseases' }]
        };
      }
    }

    // 3. ONION / कांदा / प्याज
    if (q.includes('onion') || q.includes('कांदा') || q.includes('प्याज') || q.includes('थ्रिप्स') || q.includes('जांभळा')) {
      if (detectedLang === 'hi') {
        return {
          text: "🧅 **प्याज फसल सुरक्षा (Onion Advisory):**\n\n1. **थ्रिप्स (Thrips / बोकड्या):** फिप्रोनिल (Fipronil 5% SC) 2ml/लीटर पानी में घोलकर छिड़कें।\n2. **बैंगनी धब्बा (Purple Blotch):** टेबुकोनाज़ोल + ट्राइफ्लॉक्सीस्ट्रोबिन (Tebuconazole + Trifloxystrobin) 0.7g/लीटर छिड़कें।",
          actions: [{ label: 'फसल सुरक्षा गाइड', href: '#diseases' }]
        };
      } else if (detectedLang === 'mr') {
        return {
          text: "🧅 **कांदा पीक फवारणी नियोजन:**\n\n1. **थ्रिप्स (Thrips) नियंत्रण:** फायप्रोनिल (Fipronil 5% SC) २ मिली/लीटर पाण्यामध्ये फवारावे.\n2. **जांभळा करपा (Purple Blotch):** टेबुकॅनाझोल + ट्रायफ्लॉक्सिस्ट्रोबिन (Nativo) ०.७ ग्रॅम/लीटर फवारा.",
          actions: [{ label: 'कांदा रोग उपाय', href: '#diseases' }]
        };
      } else {
        return {
          text: "🧅 **Onion Crop Advisory:**\n\n1. **Thrips Control:** Spray Fipronil 5% SC @ 2ml/L with silicon spreader.\n2. **Purple Blotch:** Spray Tebuconazole + Trifloxystrobin @ 0.7g/L.",
          actions: [{ label: 'Explore Disease Remedies', href: '#diseases' }]
        };
      }
    }

    // 4. SOYBEAN / सोयाबीन
    if (q.includes('soybean') || q.includes('सोयाबीन') || q.includes('खोडमाशी') || q.includes('अळी')) {
      if (detectedLang === 'mr') {
        return {
          text: "🫘 **सोयाबीन पीक सल्ला:**\n\n1. **खोडमाशी व चक्रभुंगा:** थियामेथॉक्सम + लॅम्बडा सायहेलोथ्रिन (Ampligo/Solomon) ०.५ मिली/लीटर फवारावे.\n2. **पिवळा मोझॅक (Yellow Mosaic):** पांढऱ्या माशीच्या नियंत्रणासाठी थायामेथॉक्झम २५% WG ०.५ ग्रॅम/लीटर फवारा.",
          actions: [{ label: 'अ‍ॅप डाऊनलोड करा', href: '#download' }]
        };
      } else {
        return {
          text: "🫘 **Soybean Protection Advisory:**\n\n1. **Stem Fly & Girdle Beetle:** Spray Thiamethoxam + Lambda-cyhalothrin @ 0.5ml/L.\n2. **Yellow Mosaic Virus:** Spray Thiamethoxam 25% WG @ 0.5g/L to control vector whiteflies.",
          actions: [{ label: 'Download App for Schedule', href: '#download' }]
        };
      }
    }

    // 5. SUGARCANE / ऊस / गन्ना
    if (q.includes('sugarcane') || q.includes('ऊस') || q.includes('गन्ना') || q.includes('हुमणी')) {
      if (detectedLang === 'mr') {
        return {
          text: "🎋 **ऊस पीक सल्ला:**\n\n1. **खोडकीडा:** क्लोरँट्रानिलीप्रोल (Chlorantraniliprole 0.4% GR) १८ किलो प्रति एकरी उसाच्या मुळाशी टाकावे.\n2. **हुमणी अळी (White Grub):** मेटाऱ्हायझियम ॲनिसोप्ली २ किलो प्रति एकर शेणखतात मिसळून द्यावे.",
          actions: [{ label: 'तज्ज्ञ सल्ला घ्या', href: '#download' }]
        };
      } else {
        return {
          text: "🎋 **Sugarcane Protection Advisory:**\n\n1. **Early Shoot Borer:** Apply Chlorantraniliprole 0.4% GR @ 18 kg/acre near roots with irrigation.\n2. **White Grub:** Soil application of Metarhizium anisopliae bio-fungicide @ 2 kg/acre.",
          actions: [{ label: 'Get Expert Advice', href: '#download' }]
        };
      }
    }

    // 6. FERTILIZER & NUTRITION (खत व्यवस्थापन)
    if (q.includes('fertilizer') || q.includes('खत') || q.includes('उर्वरक') || q.includes('npk') || q.includes('युरिया') || q.includes('dap') || q.includes('19:19:19') || q.includes('12:61:0') || q.includes('0:52:34') || q.includes('0:0:50')) {
      if (detectedLang === 'hi') {
        return {
          text: "💡 **उर्वरक (Fertilizer) अनुसूची गाइड:**\n\n1. **शाकीय वृद्धि (0-30 दिन):** NPK 19:19:19 @ 5g/लीटर पानी में स्प्रे करें।\n2. **फूल आते समय (30-60 दिन):** NPK 12:61:0 या 0:52:34 @ 5g/लीटर दें।\n3. **फल बनते समय:** NPK 0:0:50 + कैल्शियम नाइट्रेट 3g/लीटर स्प्रे करें।",
          actions: [{ label: 'Fertilizer Calculator खोलें', href: '#download' }]
        };
      } else if (detectedLang === 'mr') {
        return {
          text: "💡 **पिकांसाठी योग्य खत व्यवस्थापन पत्रीक:**\n\n1. **शाकीय वाढीची वेळ (०-३० दिवस):** NPK १९:१९:१९ ५ ग्रॅम/लीटर फवारावे किंवा ड्रिपने द्यावे.\n2. **फुलधारणा काळ (३०-६० दिवस):** NPK १२:६१:० किंवा ०:५२:३४ ५ ग्रॅम/लीटर फवारावे.\n3. **फळधारणा व पकवता:** NPK ०:०:५० + कॅल्शियम नायट्रेट ३ ग्रॅम/लीटर फवारावे.",
          actions: [{ label: 'Fertilizer Calculator वापरा', href: '#download' }]
        };
      } else {
        return {
          text: "💡 **Optimal NPK Fertilizer Schedule:**\n\n1. **Vegetative Stage (0-30 days):** NPK 19:19:19 @ 5g/L foliar or drip.\n2. **Flowering Stage (30-60 days):** NPK 12:61:0 or 0:52:34 @ 5g/L.\n3. **Fruiting/Harvesting:** NPK 0:0:50 + Calcium Nitrate @ 3g/L for premium quality.",
          actions: [{ label: 'Open Fertilizer Calculator', href: '#download' }]
        };
      }
    }

    // 7. GENERAL DISEASE QUERY FALLBACK
    if (q.includes('disease') || q.includes('रोग') || q.includes('कीड') || q.includes('स्प्रे') || q.includes('spray') || q.includes('औषध') || q.includes('दवा')) {
      if (detectedLang === 'hi') {
        return {
          text: `🔍 **"${query}" के लिए कृषि साथी समाधान:**\n\n1. **रोग पहचान:** Krushi Sathi AI स्कैनर पत्तियों की फोटो से 98% सटीक बीमारी बताता है।\n2. **सामान्य फफूंदनाशक:** साफ (Saaf - Carbendazim + Mancozeb) 2g/लीटर पानी में घोलकर छिड़कें।\n3. **कीटनाशक:** इमिडाक्लोप्रिड (Imidacloprid 17.8% SL) 0.5ml/लीटर पानी।`,
          actions: [{ label: 'पत्ती का फोटो स्कैन करें', href: '#diseases' }]
        };
      } else if (detectedLang === 'mr') {
        return {
          text: `🔍 **"${query}" संदर्भात अचूक सल्ला:**\n\n1. **अचूक निदान:** Krushi Sathi AI स्कॅनरद्वारे पानांचा फोटो काढून रोगाचे अचूक नाव व औषध शोधा.\n2. **सर्वसाधारण बुरशीनाशक:** साफ (Saaf - Carbendazim + Mancozeb) २ ग्रॅम/लीटर फवारावे.\n3. **सर्वसाधारण कीटकनाशक:** इमिडाक्लोप्रिड (Imidacloprid 17.8% SL) ०.५ मिली/लीटर फवारा.`,
          actions: [{ label: 'पानाचा फोटो स्कॅन करा', href: '#diseases' }]
        };
      } else {
        return {
          text: `🔍 **Farming Solution for "${query}":**\n\n1. **Instant Diagnosis:** Upload leaf photo to Krushi Sathi AI Scanner for 98% accurate diagnosis.\n2. **Broad-spectrum Fungicide:** Saaf (Carbendazim + Mancozeb) @ 2g/L water.\n3. **Broad-spectrum Insecticide:** Imidacloprid 17.8% SL @ 0.5ml/L water.`,
          actions: [{ label: 'Scan Leaf with AI', href: '#diseases' }]
        };
      }
    }

    // 8. PRICING & PLANS
    if (q.includes('price') || q.includes('pricing') || q.includes('plan') || q.includes('दर') || q.includes('किंमत') || q.includes('कीमत') || q.includes('फ्री') || q.includes('free') || q.includes('₹')) {
      if (detectedLang === 'mr') {
        return {
          text: "💰 **Krushi Sathi प्लॅन व दर पत्रक:**\n\n• **बेसिक प्लॅन:** ₹० (मोफत) - मूलभूत हवामान व रोग मार्गदर्शिका.\n• **प्रो प्लॅन:** फक्त ₹१४९/महिना - अमर्याद AI रोग निदाने, वैयक्तिक पीक सल्लागार व 24/7 हेल्पलाइन सपोर्ट.",
          actions: [{ label: 'दरपत्रक पहा (Pricing)', href: '/pricing' }]
        };
      } else {
        return {
          text: "💰 **Krushi Sathi Subscription Plans:**\n\n• **Basic Plan:** ₹0 (Free Forever) - Weather forecasts & basic crop guides.\n• **Pro Plan:** ₹149/month - Unlimited AI leaf scans, personal agri consultant, and 24/7 helpline.",
          actions: [{ label: 'View Pricing Plans', href: '/pricing' }]
        };
      }
    }

    // 9. APP DOWNLOAD
    if (q.includes('download') || q.includes('app') || q.includes('अ‍ॅप') || q.includes('ऐप') || q.includes('install')) {
      return {
        text: detectedLang === 'mr' 
          ? "📱 Krushi Sathi मोबाइल अ‍ॅप Android व iOS वर उपलब्ध आहे. खालील बटणावर क्लिक करून थेट डाऊनलोड करा!"
          : "📱 Download the Krushi Sathi Mobile App on Android & iOS for instant leaf diagnosis & farm management!",
        actions: [{ label: 'अ‍ॅप डाऊनलोड करा', href: '#download' }]
      };
    }

    // 10. GREETINGS
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('नमस्कार') || q.includes('नमस्ते') || q.includes('राम राम')) {
      return {
        text: detectedLang === 'mr'
          ? "राम राम बळीराजा! 🌾 आज तुमच्या शेतात कोणती अडचण आहे? टोमॅटो, कापूस, कांदा किंवा खतांबद्दल प्रश्न विचारा!"
          : (detectedLang === 'hi' ? "नमस्ते किसान भाई! 🌾 आज आपकी फसल में क्या समस्या है? टमाटर, कपास, प्याज या खाद के बारे में पूछें!" : "Hello farmer! 🌾 What crop problem can I solve for you today?"),
        suggestions: getSuggestions(detectedLang)
      };
    }

    // 11. DYNAMIC GENERAL SMART FALLBACK
    if (detectedLang === 'mr') {
      return {
        text: `📌 **"${query}" बद्दल कृषी सल्ला:**\n\nशेतीमध्ये चांगल्या उत्पन्नासाठी योग्य वेळी फवारणी, संतुलित खत नियोजन आणि हवामानाचा अंदाज घेणे महत्त्वाचे आहे. तुम्ही तुमच्या पिकाचा किंवा पानाचा फोटो Krushi Sathi AI स्कॅनरवर अपलोड करून अचूक उपाय मिळवू शकता!`,
        actions: [
          { label: '📸 AI पानाचा फोटो स्कॅन करा', href: '#diseases' },
          { label: '📱 अ‍ॅप डाऊनलोड करा', href: '#download' }
        ]
      };
    } else if (detectedLang === 'hi') {
      return {
        text: `📌 **"${query}" के संबंध में सलाह:**\n\nबेहतर पैदावार के लिए सही समय पर कीटनाशक छिड़काव, संतुलित NPK खाद और मौसम अलर्ट जरूरी हैं। आप Krushi Sathi AI स्कैनर पर पत्ती की फोटो अपलोड करके सटीक समाधान पा सकते हैं!`,
        actions: [
          { label: '📸 AI पत्ती स्कैन करें', href: '#diseases' },
          { label: '📱 ऐप डाउनलोड करें', href: '#download' }
        ]
      };
    } else {
      return {
        text: `📌 **Agri Expert Advisory for "${query}":**\n\nFor optimal crop yields, timely pesticide sprays, balanced NPK fertilizing, and hyper-local weather alerts are key. Upload a leaf photo to Krushi Sathi AI Scanner for immediate 98% accurate diagnosis!`,
        actions: [
          { label: '📸 Scan Leaf with AI', href: '#diseases' },
          { label: '📱 Download Mobile App', href: '#download' }
        ]
      };
    }
  };

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate realistic AI thinking delay
    setTimeout(() => {
      const response = getAIResponse(text, lang);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        actions: response.actions,
        suggestions: response.suggestions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: getWelcomeMessage(lang),
        suggestions: getSuggestions(lang),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleLangChange = (l) => {
    setLang(l);
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'bot',
        text: getWelcomeMessage(l),
        suggestions: getSuggestions(l),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          className="chatbot-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Farming Chatbot"
        >
          <div className="chatbot-trigger__badge">
            <span className="dot"></span> Krushi AI
          </div>
          <div className="chatbot-trigger__icon">
            <Bot size={26} />
            <Sparkles size={14} className="sparkle-icon" />
          </div>
        </button>
      )}

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header__info">
              <div className="chatbot-avatar">
                <Bot size={20} />
                <span className="chatbot-status-dot"></span>
              </div>
              <div>
                <h4 className="chatbot-title">Krushi Sathi AI</h4>
                <p className="chatbot-subtitle">
                  {lang === 'mr' ? '२४/७ कृषी सल्लागार • ऑनलाईन' : (lang === 'hi' ? '24/7 कृषि सलाहकार • ऑनलाईन' : '24/7 AI Farming Assistant')}
                </p>
              </div>
            </div>

            <div className="chatbot-header__actions">
              {/* Language Switcher */}
              <div className="chatbot-lang-select">
                <button 
                  className={lang === 'mr' ? 'active' : ''} 
                  onClick={() => handleLangChange('mr')}
                  title="मराठी"
                >
                  MR
                </button>
                <button 
                  className={lang === 'hi' ? 'active' : ''} 
                  onClick={() => handleLangChange('hi')}
                  title="हिंदी"
                >
                  HI
                </button>
                <button 
                  className={lang === 'en' ? 'active' : ''} 
                  onClick={() => handleLangChange('en')}
                  title="English"
                >
                  EN
                </button>
              </div>

              <button 
                className="chatbot-icon-btn" 
                onClick={handleClearChat} 
                title="Clear Chat"
              >
                <Trash2 size={16} />
              </button>

              <button 
                className="chatbot-icon-btn chatbot-close-btn" 
                onClick={() => setIsOpen(false)}
                title="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`chatbot-msg chatbot-msg--${msg.sender}`}
              >
                {msg.sender === 'bot' && (
                  <div className="chatbot-msg__avatar">
                    <Bot size={14} />
                  </div>
                )}

                <div className="chatbot-msg__body">
                  <div className="chatbot-msg__text" style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                  
                  {/* Embedded Action Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="chatbot-msg__actions">
                      {msg.actions.map((act, idx) => (
                        <button 
                          key={idx} 
                          className="chatbot-action-btn"
                          onClick={() => handleActionClick(act.href)}
                        >
                          {act.label} <ChevronRight size={14} />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Suggestion Chips */}
                  {msg.suggestions && (
                    <div className="chatbot-suggestions">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          className="chatbot-sug-chip"
                          onClick={() => handleSend(sug)}
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="chatbot-msg__time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chatbot-msg chatbot-msg--bot">
                <div className="chatbot-msg__avatar">
                  <Bot size={14} />
                </div>
                <div className="chatbot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form 
            className="chatbot-input-bar" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="chatbot-input"
              placeholder={
                lang === 'mr' 
                  ? "येथे तुमचा शेतीविषयक प्रश्न टाका..." 
                  : (lang === 'hi' ? "यहाँ अपना खेती से जुड़ा सवाल लिखें..." : "Type your farming question here...")
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit" 
              className="chatbot-send-btn" 
              disabled={!input.trim()}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
