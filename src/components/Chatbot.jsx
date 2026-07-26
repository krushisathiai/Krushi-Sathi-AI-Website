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
      return "नमस्कार! 👋 मैं कृषि साथी AI असिस्टेंट हूँ। आप मुझसे फसलों के रोग, मौसम, उर्वरक और Krushi Sathi ऐप के बारे में कुछ भी पूछ सकते हैं!";
    } else if (l === 'mr') {
      return "नमस्कार बळीराजा! 👋 मी कृषी साथी AI असिस्टंट आहे. पिकांवरील रोग, खत व्यवस्थापन, हवामान आणि Krushi Sathi अ‍ॅपबद्दल तुम्ही मला कोणतीही माहिती विचारू शकता!";
    } else {
      return "Hello farmer! 👋 I am Krushi Sathi AI Assistant. Ask me anything about crop disease detection, weather, fertilizers, or Krushi Sathi App!";
    }
  }

  function getSuggestions(l) {
    if (l === 'hi') {
      return [
        "🌾 फसल का रोग कैसे पहचानें?",
        "🌦️ मौसम और सिंचाई सलाह",
        "💡 उर्वरक (Fertilizer) गाइड",
        "💰 सब्सक्रिप्शन और प्राइजिंग",
        "📱 ऐप डाउनलोड कैसे करें?"
      ];
    } else if (l === 'mr') {
      return [
        "🌾 पिकांवरील रोग कसे ओळखावे?",
        "🌦️ हवामान व पाणी व्यवस्थापन",
        "💡 पिकांसाठी योग्य खते (Fertilizers)",
        "💰 प्लॅन व दर (Pricing)",
        "📱 कृषी साथी अ‍ॅप डाऊनलोड"
      ];
    } else {
      return [
        "🌾 How to scan crop disease?",
        "🌦️ Weather & irrigation advice",
        "💡 Fertilizer recommendation",
        "💰 Pricing & subscription plans",
        "📱 How to download app?"
      ];
    }
  }

  // AI Knowledge Engine for Farming queries
  const getAIResponse = (query, currentLang) => {
    const q = query.toLowerCase().trim();

    // 1. Disease Scan & Detection
    if (q.includes('disease') || q.includes('रोग') || q.includes('पिकांवरील') || q.includes('फसल') || q.includes('पाना') || q.includes('कीड') || q.includes('कीड़ा') || q.includes('पत्ती') || q.includes('scan')) {
      if (currentLang === 'hi') {
        return {
          text: "Krushi Sathi AI डिसीज स्कैनर आपकी फसल के पत्तों की फोटो देखकर 98% सटीकता के साथ बीमारी पहचानता है और तुरंत दवाइयों का नाम व सही छिड़काव (Spraying) बताता है।",
          actions: [{ label: 'रोग स्कैनर देखें', href: '#diseases' }]
        };
      } else if (currentLang === 'mr') {
        return {
          text: "Krushi Sathi AI डिजीज स्कॅनरद्वारे तुम्ही पिकाच्या पानांचा फोटो काढून ९८% अचूकतेने रोगाचे नाव, कारणे आणि योग्य औषधांची फवारणी (Spraying guide) त्वरित मिळवू शकता.",
          actions: [{ label: 'रोग स्कॅनर वापरा', href: '#diseases' }]
        };
      } else {
        return {
          text: "Krushi Sathi AI Disease Scanner analyzes leaf photos with 98% accuracy to identify crop diseases instantly and suggest precise treatments and spray timings.",
          actions: [{ label: 'Try Disease Scanner', href: '#diseases' }]
        };
      }
    }

    // 2. Weather & Irrigation
    if (q.includes('weather') || q.includes('हवामान') || q.includes('मौसम') || q.includes('पाऊस') || q.includes('बारिश') || q.includes('पाणी') || q.includes('पानी') || q.includes('rain')) {
      if (currentLang === 'hi') {
        return {
          text: "Krushi Sathi आपको आगामी 7 दिनों का सटीक मौसम पूर्वानुमान, बारिश अलर्ट और मिट्टी की नमी के अनुसार सिंचाई (पानी देने) की सही सलाह प्रदान करता है।",
          actions: [{ label: 'फीचर्स देखें', href: '#features' }]
        };
      } else if (currentLang === 'mr') {
        return {
          text: "Krushi Sathi अ‍ॅपद्वारे तुम्हाला ७ दिवसांचा अचूक हवामान अंदाज, पावसाचा इशारा आणि जमिनीतील ओलाव्यानुसार पाणी देण्याची (सिंचन) अचूक वेळ समजते.",
          actions: [{ label: 'वैशिष्ट्ये पहा', href: '#features' }]
        };
      } else {
        return {
          text: "Krushi Sathi offers 7-day hyper-local weather forecasts, rain alerts, and soil-moisture-based irrigation advisory to optimize water usage.",
          actions: [{ label: 'Explore Features', href: '#features' }]
        };
      }
    }

    // 3. Fertilizer & Soil
    if (q.includes('fertilizer') || q.includes('खत') || q.includes('उर्वरक') || q.includes('npk') || q.includes('माती') || q.includes('मिट्टी') || q.includes('soil')) {
      if (currentLang === 'hi') {
        return {
          text: "ऐप में उपलब्ध Fertilizer Calculator आपकी फसल की उम्र और मिट्टी के आधार पर NPK एवं सूक्ष्म पोषक तत्वों (Micro-nutrients) की सही मात्रा बताता है।",
          actions: [{ label: 'ऐप डाउनलोड करें', href: '#download' }]
        };
      } else if (currentLang === 'mr') {
        return {
          text: "Krushi Sathi मधील Fertilizer Calculator पिकाचे वय व मातीच्या प्रकारानुसार NPK आणि सूक्ष्म अन्नद्रव्यांची अचूक मात्रा कॅल्क्युलेट करून देतो.",
          actions: [{ label: 'अ‍ॅप डाऊनलोड करा', href: '#download' }]
        };
      } else {
        return {
          text: "Our AI Fertilizer Calculator calculates exact NPK dosage and micronutrients based on crop stage and soil conditions.",
          actions: [{ label: 'Download App', href: '#download' }]
        };
      }
    }

    // 4. Pricing / Plans
    if (q.includes('price') || q.includes('pricing') || q.includes('plan') || q.includes('दर') || q.includes('किंमत') || q.includes('कीमत') || q.includes('फ्री') || q.includes('free') || q.includes('₹')) {
      if (currentLang === 'hi') {
        return {
          text: "Krushi Sathi का Basic प्लान बिल्कुल FREE है! Pro प्लान मात्र ₹149/माह है जिसमें अनलिमिटेड डिजीज स्कैनिंग और 24/7 एग्री एक्सपर्ट सपोर्ट मिलता है।",
          actions: [{ label: 'प्राइजिंग प्लान देखें', href: '/pricing' }]
        };
      } else if (currentLang === 'mr') {
        return {
          text: "Krushi Sathi चा बेसिक प्लॅन पूर्णपणे मोफत (FREE) आहे! प्रो प्लॅन फक्त ₹149/महिना आहे ज्यामध्ये अमर्याद रोग स्कॅनिंग आणि कृषी तज्ज्ञ सल्ला मिळतो.",
          actions: [{ label: 'दरपत्रक पहा (Pricing)', href: '/pricing' }]
        };
      } else {
        return {
          text: "Krushi Sathi Basic Plan is completely FREE! The Pro Plan is just ₹149/month offering unlimited AI disease scans and 24/7 expert consultations.",
          actions: [{ label: 'View Pricing Plans', href: '/pricing' }]
        };
      }
    }

    // 5. App Download & Installation
    if (q.includes('download') || q.includes('app') || q.includes('अ‍ॅप') || q.includes('ऐप') || q.includes('प्ले स्टोर') || q.includes('play store') || q.includes('install')) {
      if (currentLang === 'hi') {
        return {
          text: "Krushi Sathi ऐप Android और iOS दोनों के लिए उपलब्ध है। आप Google Play Store से डाउनलोड कर सकते हैं या नीचे दिए लिंक पर क्लिक करें।",
          actions: [{ label: 'अभी ऐप डाउनलोड करें', href: '#download' }]
        };
      } else if (currentLang === 'mr') {
        return {
          text: "Krushi Sathi अ‍ॅप Android आणि iOS वर उपलब्ध आहे. तुम्ही Google Play Store वरून किंवा खालील बटणावर क्लिक करून डाउनलोड करू शकता.",
          actions: [{ label: 'अ‍ॅप डाऊनलोड करा', href: '#download' }]
        };
      } else {
        return {
          text: "Krushi Sathi App is available for Android & iOS. Download directly from Google Play Store or tap the link below.",
          actions: [{ label: 'Download Krushi Sathi', href: '#download' }]
        };
      }
    }

    // 6. Greetings & Thanks
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('नमस्कार') || q.includes('नमस्ते') || q.includes('राम राम')) {
      return {
        text: currentLang === 'mr' 
          ? "राम राम बळीराजा! 🌾 आज मी तुम्हाला पिकांबद्दल काय माहिती देऊ?" 
          : (currentLang === 'hi' ? "नमस्ते किसान भाई! 🌾 आज मैं आपकी खेती में क्या मदद कर सकता हूँ?" : "Hello farmer! 🌾 How can I assist you with your crops today?"),
        suggestions: getSuggestions(currentLang)
      };
    }

    // Smart general farming fallback
    if (currentLang === 'hi') {
      return {
        text: `आपकी जानकारी ("${query}") के लिए सलाह: Krushi Sathi AI आपकी फसल की सुरक्षा, सही खाद और कीट नियंत्रण के लिए 24/7 तैयार है। आप हमारी मुख्य सेवाएं देख सकते हैं या ऐप डाउनलोड कर सकते हैं!`,
        actions: [
          { label: 'डिसीज गाइड', href: '#diseases' },
          { label: 'ऐप डाउनलोड', href: '#download' }
        ]
      };
    } else if (currentLang === 'mr') {
      return {
        text: `तुमच्या प्रश्नासाठी ("${query}") सल्ला: Krushi Sathi AI शेतकरी बांधवांना पिकांची निगा, फवारणी व खतांचे नियोजन करण्यासाठी सदैव तत्पर आहे. तुम्ही खालील पर्याय वापरून अधिक माहिती घेऊ शकता:`,
        actions: [
          { label: 'रोग मार्गदर्शिका', href: '#diseases' },
          { label: 'अ‍ॅप डाऊनलोड', href: '#download' }
        ]
      };
    } else {
      return {
        text: `Regarding "${query}": Krushi Sathi AI helps farmers protect crops, optimize fertilizers, and maximize yield. Explore our core features or download the mobile app for instant assistance!`,
        actions: [
          { label: 'Disease Scanner', href: '#diseases' },
          { label: 'Download Mobile App', href: '#download' }
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

    // Simulate AI response delay
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
    }, 700);
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
                  <div className="chatbot-msg__text">{msg.text}</div>
                  
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
