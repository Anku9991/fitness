"use client";

import React, { useState, useEffect, useRef } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Activity = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const ArrowRight = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckCircle = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Volume2 = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

const Pause = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const ChevronLeft = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Sparkles = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const Loader2 = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
);

const MessageSquare = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const SettingsIcon = ({ className = "", size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const Heart = ({ className = "", size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

// --- HARDCODED CLINICAL EXERCISE SEQUENCE ---
const allExercises = [
  { id: 1, title: "Wall Slides", title_hi: "वॉल स्लाइड्स", instruction_en: "Stand with your back against a wall and feet shoulder-width apart. Slide down into a crouch with knees bent to about 90 degrees. Count to five and slide back up the wall. Repeat 5 times.", instruction_hi: "दीवार के सहारे अपनी पीठ टिकाकर खड़े हो जाएं और पैरों के बीच कंधों जितनी दूरी रखें। घुटनों को लगभग 90 डिग्री तक मोड़कर नीचे की ओर स्लाइड करें। पांच तक गिनें और वापस ऊपर आ जाएं। इसे 5 बार दोहराएं।" },
  { id: 2, title: "Back Leg Swing", title_hi: "बैक लेग स्विंग", instruction_en: "Stand behind a chair with your hands on the top of the chair. Lift one leg back and up while keeping the knee straight. Return slowly. Raise other leg and return. Repeat five times with each leg.", instruction_hi: "कुर्सी के पीछे खड़े हो जाएं और अपने हाथ कुर्सी के ऊपर रखें। घुटने को सीधा रखते हुए एक पैर को पीछे और ऊपर उठाएं। धीरे-धीरे वापस आएं। दूसरे पैर को उठाएं और वापस आएं। प्रत्येक पैर के साथ पांच बार दोहराएं।" },
  { id: 3, title: "Knee to Chest", title_hi: "नी टू चेस्ट", instruction_en: "Lie on your back on a firm surface. Clasp your hands behind the thigh and pull it towards your chest. Keep the opposite leg flat on the surface of the floor. Maintain the position for 3 seconds. Switch legs and repeat five times.", instruction_hi: "एक मजबूत सतह पर अपनी पीठ के बल लेट जाएं। अपनी जांघ के पीछे हाथों को फंसाएं और इसे अपनी छाती की ओर खींचें। दूसरे पैर को फर्श पर सीधा रखें। 3 सेकंड तक इसी स्थिति में रहें। पैर बदलें और पांच बार दोहराएं।" },
  { id: 4, title: "Lower Abdominal Exercises", title_hi: "लोअर एब्डॉमिनल", instruction_en: "Lie on your back with your knees bent and feet flat on your bed. Place both hands under your knees and gently pull your knees as close to your chest as possible. Do not raise your head. Repeat five times.", instruction_hi: "अपने घुटनों को मोड़कर और पैरों को बिस्तर पर सीधा रखकर पीठ के बल लेट जाएं। दोनों हाथों को घुटनों के नीचे रखें और धीरे से घुटनों को छाती के जितना करीब हो सके लाएं। अपना सिर न उठाएं। पांच बार दोहराएं।" },
  { id: 5, title: "Knees to Chest Exercise", title_hi: "नीज़ टू चेस्ट (अल्टरनेट)", instruction_en: "Keep your knees bent and lie flat on the floor. Flatten your back to the floor by pulling your abdominal muscles up and in. Raise your leg keeping your knee straight. Hold for three seconds. Repeat five times with each leg.", instruction_hi: "अपने घुटनों को मोड़कर रखें और फर्श पर सीधे लेट जाएं। पेट की मांसपेशियों को ऊपर और अंदर की ओर खींचकर अपनी पीठ को फर्श पर सीधा करें। घुटना सीधा रखते हुए पैर उठाएं। तीन सेकंड रुकें। प्रत्येक पैर से पांच बार दोहराएं।" },
  { id: 6, title: "Pelvic Tilt", title_hi: "पेल्विक टिल्ट", instruction_en: "Push the lower part of your back into the floor by pulling the lower abdominal muscles up and in. Hold your back flat while breathing easily in and out. Hold for three seconds. Repeat five times.", instruction_hi: "निचले पेट की मांसपेशियों को ऊपर और अंदर खींचकर अपनी पीठ को फर्श में धकेलें। आराम से सांस लेते और छोड़ते हुए अपनी पीठ को सीधा रखें। तीन सेकंड तक रुकें। पांच बार दोहराएं।" },
  { id: 7, title: "Hip Rolling", title_hi: "हिप रोलिंग", instruction_en: "Keep both knees bent, feet flat on the floor. Cross your arms over your chest. Turn your head to the right as you turn both knees to the left. Allow knees to relax. Bring knees back up, reverse directions. Repeat five times.", instruction_hi: "दोनों घुटनों को मोड़कर रखें, पैर फर्श पर सीधे हों। अपनी बाहों को अपनी छाती पर क्रॉस करें। जैसे ही आप दोनों घुटनों को बाईं ओर घुमाते हैं, अपने सिर को दाईं ओर घुमाएं। घुटनों को आराम दें। दिशा बदलें। पांच बार दोहराएं।" },
  { id: 8, title: "Pelvic Lift", title_hi: "पेल्विक लिफ्ट", instruction_en: "Keep your legs together. Cross your arms over your chest. Tilt your pelvis and push your low back to the floor. Slowly lift your pelvis off the floor. Maintain for three seconds. Lower pelvis. Repeat five times.", instruction_hi: "अपने पैरों को एक साथ रखें। बाहों को छाती पर क्रॉस करें। श्रोणि को झुकाएं और पीठ के निचले हिस्से को फर्श पर धकेलें। धीरे-धीरे श्रोणि को फर्श से उठाएं। तीन सेकंड तक बनाए रखें। श्रोणि नीचे करें। पांच बार दोहराएं।" },
  { id: 9, title: "Leg Raises", title_hi: "लेग रेजेज़", instruction_en: "Lie on your stomach. Tighten the muscles in one leg and raise it from the floor. Hold your leg up for a count of 5 and return it to the floor. Do the same with the other leg. Repeat five times with each leg.", instruction_hi: "पेट के बल लेट जाएं। एक पैर की मांसपेशियों को कस लें और इसे फर्श से उठाएं। अपने पैर को 5 की गिनती तक ऊपर रखें और फर्श पर वापस लाएं। दूसरे पैर से भी ऐसा ही करें। पांच बार दोहराएं।" },
  { id: 10, title: "Hip Extension", title_hi: "हिप एक्सटेंशन", instruction_en: "Bend your knee to a 90 degree angle so the sole of your foot faces the ceiling. Lift one thigh off the floor approximately 6 inches. Slowly lower your thigh back to the starting position. Repeat five times with each leg.", instruction_hi: "अपने घुटने को 90 डिग्री के कोण पर मोड़ें ताकि आपके पैर का तलवा छत की ओर हो। एक जांघ को फर्श से लगभग 6 इंच ऊपर उठाएं। धीरे-धीरे जांघ को प्रारंभिक स्थिति में वापस लाएं। पांच बार दोहराएं।" },
  { id: 11, title: "Hip Extension (All-Fours)", title_hi: "हिप एक्सटेंशन (चारों हाथ-पैर)", instruction_en: "Assume the 'all-fours' position. Extend the head up and the leg out to a flat position parallel to the floor. Return to the starting position. Repeat five times, alternating legs.", instruction_hi: "चारों हाथ-पैर की स्थिति (ऑल-फोर्स) में आएं। सिर को ऊपर उठाएं और पैर को फर्श के समानांतर सीधी स्थिति में बाहर फैलाएं। शुरुआती स्थिति में लौट आएं। पैरों को बदलते हुए पांच बार दोहराएं।" },
  { id: 12, title: "Hand-Knee Rocking", title_hi: "हैंड-नी रॉकिंग", instruction_en: "Kneel on a mat with your knees and ankles. Allow your buttocks to rest on your heels. Relax in this position and then slowly move forward with your elbows straight into a press-up position. Repeat five times.", instruction_hi: "चटाई पर घुटने और टखनों के बल बैठें। अपने कूल्हों को अपनी एड़ियों पर टिकने दें। इस स्थिति में आराम करें और फिर अपनी कोहनियों को सीधा रखते हुए धीरे-धीरे आगे की ओर प्रेस-अप स्थिति में बढ़ें। पांच बार दोहराएं।" },
  { id: 13, title: "Press Up", title_hi: "प्रेस अप", instruction_en: "Straighten your arms, raising your upper trunk off the floor. Keep your pelvis against the mat, allowing your lower back to arch. Hold for three seconds. Return to starting position. Repeat five times.", instruction_hi: "अपनी बाहों को सीधा करें, अपने शरीर के ऊपरी हिस्से को फर्श से ऊपर उठाएं। अपने श्रोणि (पेल्विस) को चटाई के खिलाफ रखें, जिससे आपकी पीठ के निचले हिस्से में मेहराब (आर्च) बन सके। तीन सेकंड रुकें। वापस लौटें। पांच बार दोहराएं।" }
];

// --- SECURE LOCAL ENDPOINT Gemini API HELPER ---
const fetchGeminiAPI = async (systemInstruction: string, promptText: string, responseSchema: any) => {
  // Fetch custom override API key if available in localStorage
  let clientKey = "";
  if (typeof window !== "undefined") {
    clientKey = localStorage.getItem("flexiback_user_gemini_key") || "";
  }

  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(clientKey ? { "x-gemini-key": clientKey } : {})
    },
    body: JSON.stringify({
      systemInstruction,
      promptText,
      responseSchema
    })
  });

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.message || result.error || "Failed to call Gemini proxy API.");
  }

  return result;
};

// --- REALISTIC HUMAN EXERCISE VISUALIZER ---
// Exercise animation configs
const EXERCISE_ANIMATIONS: Record<number, string> = {
  1: "wallSlide",
  2: "legSwing",
  3: "kneeToChest",
  4: "doubleKneeChest",
  5: "legRaiseLying",
  6: "pelvicTilt",
  7: "hipRoll",
  8: "gluteBridge",
  9: "proneLegLift",
  10: "hipExtProne",
  11: "birdDog",
  12: "childRock",
  13: "pressUp",
};

const EXERCISE_LABELS: Record<number, { pose: string; label: string }> = {
  1: { pose: "Standing", label: "Wall Squat" },
  2: { pose: "Standing", label: "Leg Swing" },
  3: { pose: "Lying", label: "Knee Pull" },
  4: { pose: "Lying", label: "Double Knee" },
  5: { pose: "Lying", label: "Leg Raise" },
  6: { pose: "Lying", label: "Pelvic Tilt" },
  7: { pose: "Lying", label: "Hip Roll" },
  8: { pose: "Lying", label: "Bridge" },
  9: { pose: "Prone", label: "Leg Lift" },
  10: { pose: "Prone", label: "Hip Ext." },
  11: { pose: "All-Fours", label: "Bird Dog" },
  12: { pose: "All-Fours", label: "Child Rock" },
  13: { pose: "Prone", label: "Press-Up" },
};

const HumanExerciseVisualizer = ({ exerciseId }: { exerciseId: number }) => {
  const animName = EXERCISE_ANIMATIONS[exerciseId] || "wallSlide";
  const meta = EXERCISE_LABELS[exerciseId] || { pose: "Active", label: "Exercise" };

  // Skin / clothing color tokens
  const skin = "#c8956c";
  const skinDark = "#a0714a";
  const shirt = "#2563eb";
  const shirtDark = "#1d4ed8";
  const pants = "#1e293b";
  const pantsDark = "#0f172a";
  const hair = "#1c1003";
  const mat = "#14b8a6";
  const wall = "#334155";
  const chair = "#475569";
  const shadow = "rgba(0,0,0,0.18)";

  // Unique filter/gradient IDs per exerciseId to avoid conflicts
  const uid = `ex${exerciseId}`;

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-inner mb-6" style={{ minHeight: 280 }}>

      <style>{`
        @keyframes wallSlide {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(22px); }
        }
        @keyframes wallSlideKnee {
          0%,100% { transform: none; }
          50% { transform: translateX(12px) translateY(8px); }
        }
        @keyframes legSwingBack {
          0%,100% { transform-origin: 50% 0%; transform: rotate(0deg); }
          50% { transform-origin: 50% 0%; transform: rotate(-30deg); }
        }
        @keyframes kneeToChestAnim {
          0%,100% { transform-origin: 100% 50%; transform: rotate(0deg); }
          50% { transform-origin: 100% 50%; transform: rotate(-70deg); }
        }
        @keyframes doubleKneeAnim {
          0%,100% { transform-origin: 0% 50%; transform: rotate(0deg); }
          50% { transform-origin: 0% 50%; transform: rotate(70deg); }
        }
        @keyframes legRaiseLying {
          0%,100% { transform-origin: 0% 50%; transform: rotate(0deg); }
          50% { transform-origin: 0% 50%; transform: rotate(-55deg); }
        }
        @keyframes pelvicTiltAnim {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes hipRollAnim {
          0% { transform-origin: 0% 50%; transform: rotate(0deg); }
          25% { transform-origin: 0% 50%; transform: rotate(28deg); }
          75% { transform-origin: 0% 50%; transform: rotate(-28deg); }
          100% { transform-origin: 0% 50%; transform: rotate(0deg); }
        }
        @keyframes gluteBridgeAnim {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-28px); }
        }
        @keyframes gluteBridgeKnee {
          0%,100% { transform: none; }
          50% { transform: translateX(-6px) translateY(-10px); }
        }
        @keyframes proneLegLiftAnim {
          0%,100% { transform-origin: 0% 50%; transform: rotate(0deg); }
          50% { transform-origin: 0% 50%; transform: rotate(-18deg); }
        }
        @keyframes hipExtProneAnim {
          0%,100% { transform-origin: 0% 50%; transform: rotate(0deg) translateY(0); }
          50% { transform-origin: 0% 50%; transform: rotate(-14deg) translateY(-2px); }
        }
        @keyframes birdDogLeg {
          0%,100% { transform-origin: 0% 50%; transform: rotate(0deg); }
          50% { transform-origin: 0% 50%; transform: rotate(-35deg); }
        }
        @keyframes birdDogArm {
          0%,100% { transform-origin: 100% 50%; transform: rotate(0deg); }
          50% { transform-origin: 100% 50%; transform: rotate(30deg); }
        }
        @keyframes childRockAnim {
          0%,100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(22px) translateY(12px); }
        }
        @keyframes pressUpAnim {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-6deg); }
        }
        @keyframes pressUpArm {
          0%,100% { transform-origin: 50% 100%; transform: rotate(0deg); }
          50% { transform-origin: 50% 100%; transform: rotate(-30deg); }
        }
        @keyframes breathe {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(1.04); }
        }
        @keyframes subtleBob {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-1.5px); }
        }
      `}</style>

      <svg
        width="100%"
        height="280"
        viewBox="0 0 320 280"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id={`${uid}skinGrad`} cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor={skin} />
            <stop offset="100%" stopColor={skinDark} />
          </radialGradient>
          <radialGradient id={`${uid}shirtGrad`} cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor={shirt} />
            <stop offset="100%" stopColor={shirtDark} />
          </radialGradient>
          <linearGradient id={`${uid}pantsGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={pants} />
            <stop offset="100%" stopColor={pantsDark} />
          </linearGradient>
          <filter id={`${uid}shadow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <filter id={`${uid}glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id={`${uid}floorGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(20,184,166,0.18)" />
            <stop offset="100%" stopColor="rgba(20,184,166,0)" />
          </radialGradient>
        </defs>

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 1: WALL SLIDES - Standing squat against wall */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 1 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              {/* Wall */}
              <rect x="96" y="30" width="18" height="200" rx="3" fill={wall} opacity="0.7" />
              <rect x="96" y="30" width="5" height="200" rx="2" fill="rgba(255,255,255,0.06)" />
              {/* Floor */}
              <rect x="60" y="228" width="200" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
              <ellipse cx="180" cy="234" rx="70" ry="5" fill={`url(#${uid}floorGlow)`} />
              {/* Body group slides down */}
              <g style={{ animation: "wallSlide 2.6s ease-in-out infinite" }}>
                {/* Shadow on floor */}
                <ellipse cx="182" cy="234" rx="30" ry="5" fill={shadow} />
                {/* === LEFT LEG (slides with body, knee group animated separately) === */}
                <g style={{ animation: "wallSlideKnee 2.6s ease-in-out infinite" }}>
                  {/* Left thigh */}
                  <rect x="162" y="168" width="18" height="52" rx="9" fill={`url(#${uid}pantsGrad)`} />
                  {/* Left shin */}
                  <rect x="164" y="210" width="15" height="48" rx="7" fill={`url(#${uid}pantsGrad)`} />
                  {/* Left foot */}
                  <ellipse cx="171" cy="256" rx="14" ry="6" fill={skinDark} />
                </g>
                {/* === RIGHT LEG === */}
                <g style={{ animation: "wallSlideKnee 2.6s ease-in-out infinite" }}>
                  <rect x="184" y="168" width="18" height="52" rx="9" fill={pantsDark} />
                  <rect x="186" y="210" width="15" height="48" rx="7" fill={pantsDark} />
                  <ellipse cx="193" cy="256" rx="14" ry="6" fill={skinDark} />
                </g>
                {/* === TORSO === */}
                <rect x="154" y="118" width="50" height="58" rx="14" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.6s ease-in-out infinite" }} />
                {/* Shirt collar detail */}
                <rect x="170" y="118" width="18" height="8" rx="4" fill={shirtDark} />
                {/* === LEFT ARM === */}
                <rect x="138" y="122" width="18" height="38" rx="9" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="147" cy="162" rx="8" ry="6" fill={skin} />
                {/* === RIGHT ARM === */}
                <rect x="202" y="122" width="18" height="38" rx="9" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="211" cy="162" rx="8" ry="6" fill={skin} />
                {/* === NECK === */}
                <rect x="172" y="105" width="14" height="18" rx="6" fill={`url(#${uid}skinGrad)`} />
                {/* === HEAD === */}
                <ellipse cx="179" cy="92" rx="20" ry="22" fill={`url(#${uid}skinGrad)`} />
                {/* Hair */}
                <ellipse cx="179" cy="74" rx="20" ry="10" fill={hair} />
                <rect x="159" y="73" width="40" height="12" rx="6" fill={hair} />
                {/* Eyes */}
                <ellipse cx="172" cy="90" rx="3.5" ry="3" fill="#fff" />
                <ellipse cx="186" cy="90" rx="3.5" ry="3" fill="#fff" />
                <circle cx="173" cy="91" r="1.8" fill="#333" />
                <circle cx="187" cy="91" r="1.8" fill="#333" />
                {/* Mouth */}
                <path d="M 174 98 Q 179 102 184 98" stroke="#a06050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Nose */}
                <ellipse cx="179" cy="95" rx="2.5" ry="1.5" fill={skinDark} opacity="0.5" />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 2: BACK LEG SWING - Standing behind chair */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 2 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              {/* Floor */}
              <rect x="60" y="228" width="200" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
              <ellipse cx="180" cy="234" rx="70" ry="5" fill={`url(#${uid}floorGlow)`} />
              {/* Chair */}
              <rect x="220" y="155" width="8" height="72" rx="3" fill={chair} />
              <rect x="246" y="155" width="8" height="72" rx="3" fill={chair} />
              <rect x="216" y="155" width="42" height="10" rx="5" fill={chair} />
              <rect x="218" y="192" width="40" height="8" rx="4" fill={chair} />
              <rect x="215" y="155" width="44" height="5" rx="3" fill="rgba(255,255,255,0.08)" />
              {/* Body */}
              <g>
                <ellipse cx="180" cy="234" rx="28" ry="5" fill={shadow} />
                {/* Static right leg */}
                <rect x="178" y="168" width="18" height="65" rx="9" fill={pantsDark} />
                <ellipse cx="187" cy="232" rx="13" ry="6" fill={skinDark} />
                {/* Left leg (swings back) */}
                <g style={{ transformOrigin: "180px 170px", animation: "legSwingBack 2.2s ease-in-out infinite" }}>
                  <rect x="158" y="168" width="18" height="65" rx="9" fill={`url(#${uid}pantsGrad)`} />
                  <ellipse cx="167" cy="232" rx="13" ry="6" fill={skinDark} />
                </g>
                {/* Torso */}
                <rect x="152" y="118" width="52" height="58" rx="14" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.2s ease-in-out infinite" }} />
                <rect x="168" y="118" width="20" height="8" rx="4" fill={shirtDark} />
                {/* Right arm (reaching to chair) */}
                <line x1="202" y1="134" x2="224" y2="162" stroke={skin} strokeWidth="14" strokeLinecap="round" />
                <ellipse cx="224" cy="163" rx="8" ry="6" fill={skin} />
                {/* Left arm */}
                <rect x="136" y="122" width="18" height="40" rx="9" fill={`url(#${uid}skinGrad)`} />
                {/* Neck */}
                <rect x="172" y="105" width="14" height="18" rx="6" fill={`url(#${uid}skinGrad)`} />
                {/* Head */}
                <ellipse cx="179" cy="92" rx="20" ry="22" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="179" cy="74" rx="20" ry="10" fill={hair} />
                <rect x="159" y="73" width="40" height="12" rx="6" fill={hair} />
                <ellipse cx="172" cy="90" rx="3.5" ry="3" fill="#fff" />
                <ellipse cx="186" cy="90" rx="3.5" ry="3" fill="#fff" />
                <circle cx="173" cy="91" r="1.8" fill="#333" />
                <circle cx="187" cy="91" r="1.8" fill="#333" />
                <path d="M 174 98 Q 179 102 184 98" stroke="#a06050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 3: KNEE TO CHEST - Supine Single */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 3 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              {/* Mat */}
              <rect x="30" y="188" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="188" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Body lying down */}
              {/* Head (left side) */}
              <ellipse cx="60" cy="178" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="60" cy="162" rx="18" ry="8" fill={hair} />
              <rect x="42" y="161" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="66" cy="175" rx="3" ry="2.5" fill="#fff" />
              <circle cx="67" cy="176" r="1.5" fill="#333" />
              <path d="M 62 183 Q 67 187 72 183" stroke="#a06050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Neck */}
              <rect x="76" y="174" width="18" height="12" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Torso */}
              <rect x="82" y="168" width="80" height="32" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              {/* Right arm (reaches to grab knee) */}
              <g style={{ animation: "kneeToChestAnim 2.5s ease-in-out infinite" }}>
                <line x1="88" y1="176" x2="120" y2="162" stroke={skin} strokeWidth="13" strokeLinecap="round" />
                <ellipse cx="120" cy="162" rx="7" ry="5" fill={skin} />
              </g>
              {/* Left arm (relaxed) */}
              <rect x="84" y="196" width="70" height="13" rx="6" fill={`url(#${uid}skinGrad)`} />
              {/* Hip area */}
              <rect x="154" y="172" width="28" height="26" rx="10" fill={`url(#${uid}pantsGrad)`} />
              {/* Right leg on floor (static) */}
              <rect x="178" y="180" width="90" height="20" rx="10" fill={pantsDark} />
              <ellipse cx="268" cy="190" rx="10" ry="8" fill={skinDark} />
              {/* Left leg pulling up to chest */}
              <g style={{ transformOrigin: "165px 182px", animation: "kneeToChestAnim 2.5s ease-in-out infinite" }}>
                <rect x="166" y="148" width="20" height="52" rx="10" fill={`url(#${uid}pantsGrad)`} />
                <ellipse cx="176" cy="148" rx="10" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 4: DOUBLE KNEE TO CHEST */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 4 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="188" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="188" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head */}
              <ellipse cx="60" cy="178" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="60" cy="162" rx="18" ry="8" fill={hair} />
              <rect x="42" y="161" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="66" cy="175" rx="3" ry="2.5" fill="#fff" />
              <circle cx="67" cy="176" r="1.5" fill="#333" />
              <path d="M 62 183 Q 67 187 72 183" stroke="#a06050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Neck */}
              <rect x="76" y="174" width="18" height="12" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Torso */}
              <rect x="82" y="168" width="80" height="32" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              {/* Both arms reaching for knees */}
              <g style={{ animation: "doubleKneeAnim 2.5s ease-in-out infinite" }}>
                <line x1="88" y1="176" x2="152" y2="162" stroke={skin} strokeWidth="12" strokeLinecap="round" />
                <ellipse cx="152" cy="162" rx="7" ry="5" fill={skin} />
              </g>
              <g style={{ animation: "doubleKneeAnim 2.5s ease-in-out infinite" }}>
                <line x1="88" y1="190" x2="152" y2="176" stroke={skin} strokeWidth="12" strokeLinecap="round" />
              </g>
              {/* Hip area */}
              <rect x="152" y="170" width="30" height="28" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Both legs pulled up */}
              <g style={{ transformOrigin: "162px 180px", animation: "doubleKneeAnim 2.5s ease-in-out infinite" }}>
                <rect x="155" y="140" width="20" height="54" rx="10" fill={`url(#${uid}pantsGrad)`} />
                <ellipse cx="165" cy="140" rx="10" ry="8" fill={skinDark} />
                <rect x="174" y="148" width="18" height="48" rx="9" fill={pantsDark} />
                <ellipse cx="183" cy="148" rx="9" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 5: STRAIGHT LEG RAISE lying */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 5 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="188" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="188" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head */}
              <ellipse cx="60" cy="178" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="60" cy="162" rx="18" ry="8" fill={hair} />
              <rect x="42" y="161" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="66" cy="175" rx="3" ry="2.5" fill="#fff" />
              <circle cx="67" cy="176" r="1.5" fill="#333" />
              {/* Torso */}
              <rect x="82" y="168" width="80" height="32" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              <rect x="78" y="174" width="18" height="12" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Arms relaxed at sides */}
              <rect x="84" y="196" width="70" height="12" rx="6" fill={`url(#${uid}skinGrad)`} />
              {/* Hip */}
              <rect x="152" y="170" width="30" height="28" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Right leg flat on floor */}
              <rect x="178" y="180" width="90" height="18" rx="9" fill={pantsDark} />
              <ellipse cx="268" cy="189" rx="10" ry="8" fill={skinDark} />
              {/* Left leg raises straight */}
              <g style={{ transformOrigin: "165px 183px", animation: "legRaiseLying 2.5s ease-in-out infinite" }}>
                <rect x="158" y="135" width="18" height="55" rx="9" fill={`url(#${uid}pantsGrad)`} />
                <ellipse cx="167" cy="135" rx="9" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 6: PELVIC TILT */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 6 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="200" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="200" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head */}
              <ellipse cx="58" cy="178" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="58" cy="162" rx="18" ry="8" fill={hair} />
              <rect x="40" y="161" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="64" cy="175" rx="3" ry="2.5" fill="#fff" />
              <circle cx="65" cy="176" r="1.5" fill="#333" />
              {/* Torso */}
              <rect x="80" y="168" width="82" height="32" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              <rect x="78" y="174" width="14" height="10" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Arms flat */}
              <rect x="82" y="198" width="70" height="12" rx="6" fill={`url(#${uid}skinGrad)`} />
              {/* Pelvic region (tilts up) */}
              <g style={{ animation: "pelvicTiltAnim 2.5s ease-in-out infinite" }}>
                <rect x="150" y="168" width="36" height="30" rx="12" fill={`url(#${uid}pantsGrad)`} />
                {/* Bent knees */}
                <line x1="160" y1="196" x2="192" y2="168" stroke={pants} strokeWidth="18" strokeLinecap="round" />
                <line x1="174" y1="196" x2="206" y2="168" stroke={pantsDark} strokeWidth="16" strokeLinecap="round" />
                {/* Feet on mat */}
                <ellipse cx="196" cy="200" rx="16" ry="7" fill={skinDark} />
                <ellipse cx="210" cy="200" rx="14" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 7: HIP ROLLING */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 7 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="200" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="200" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head */}
              <ellipse cx="58" cy="178" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="58" cy="162" rx="18" ry="8" fill={hair} />
              <rect x="40" y="161" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="64" cy="175" rx="3" ry="2.5" fill="#fff" />
              <circle cx="65" cy="176" r="1.5" fill="#333" />
              {/* Torso */}
              <rect x="80" y="168" width="82" height="32" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              <rect x="78" y="174" width="14" height="10" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Arms crossed on chest */}
              <rect x="82" y="178" width="68" height="10" rx="5" fill={`url(#${uid}skinGrad)`} />
              <rect x="82" y="188" width="60" height="10" rx="5" fill={`url(#${uid}skinGrad)`} opacity="0.7" />
              {/* Hip area */}
              <rect x="150" y="170" width="36" height="28" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Knees rolling side to side */}
              <g style={{ transformOrigin: "160px 196px", animation: "hipRollAnim 2.8s ease-in-out infinite" }}>
                <line x1="160" y1="196" x2="188" y2="160" stroke={pants} strokeWidth="18" strokeLinecap="round" />
                <line x1="173" y1="196" x2="200" y2="160" stroke={pantsDark} strokeWidth="16" strokeLinecap="round" />
                {/* Feet */}
                <ellipse cx="192" cy="201" rx="14" ry="6" fill={skinDark} />
                <ellipse cx="204" cy="201" rx="12" ry="6" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 8: GLUTE BRIDGE / PELVIC LIFT */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 8 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="210" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="210" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head flat */}
              <ellipse cx="58" cy="198" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="58" cy="182" rx="18" ry="8" fill={hair} />
              <rect x="40" y="181" width="36" height="10" rx="5" fill={hair} />
              <ellipse cx="64" cy="195" rx="3" ry="2.5" fill="#fff" />
              <circle cx="65" cy="196" r="1.5" fill="#333" />
              {/* Torso flat */}
              <rect x="80" y="190" width="82" height="26" rx="12" fill={`url(#${uid}shirtGrad)`} />
              <rect x="78" y="194" width="14" height="10" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Arms flat pressing floor */}
              <rect x="82" y="212" width="70" height="11" rx="5" fill={`url(#${uid}skinGrad)`} />
              {/* Hips lift up */}
              <g style={{ animation: "gluteBridgeAnim 2.5s ease-in-out infinite" }}>
                <rect x="148" y="172" width="40" height="28" rx="12" fill={`url(#${uid}pantsGrad)`} />
              </g>
              {/* Knees (also lift) */}
              <g style={{ animation: "gluteBridgeKnee 2.5s ease-in-out infinite" }}>
                <line x1="158" y1="212" x2="196" y2="176" stroke={pants} strokeWidth="17" strokeLinecap="round" />
                <line x1="172" y1="212" x2="210" y2="176" stroke={pantsDark} strokeWidth="15" strokeLinecap="round" />
              </g>
              {/* Feet flat on mat */}
              <ellipse cx="198" cy="213" rx="16" ry="7" fill={skinDark} />
              <ellipse cx="212" cy="213" rx="14" ry="7" fill={skinDark} />
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 9: PRONE LEG LIFT */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 9 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="196" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="196" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head turned (prone) */}
              <ellipse cx="54" cy="186" rx="18" ry="17" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="54" cy="172" rx="17" ry="7" fill={hair} />
              <rect x="37" y="171" width="34" height="10" rx="5" fill={hair} />
              <ellipse cx="61" cy="184" rx="3" ry="2.5" fill="#fff" />
              <circle cx="62" cy="185" r="1.5" fill="#333" />
              {/* Arms forward/under */}
              <rect x="46" y="190" width="52" height="12" rx="6" fill={`url(#${uid}skinGrad)`} />
              <rect x="56" y="200" width="40" height="10" rx="5" fill={`url(#${uid}skinGrad)`} opacity="0.7" />
              {/* Torso face-down */}
              <rect x="82" y="182" width="80" height="26" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              {/* Hip area */}
              <rect x="152" y="183" width="36" height="24" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Right leg flat on mat */}
              <rect x="186" y="188" width="90" height="16" rx="8" fill={pantsDark} />
              <ellipse cx="276" cy="196" rx="11" ry="7" fill={skinDark} />
              {/* Left leg lifts up */}
              <g style={{ transformOrigin: "162px 192px", animation: "proneLegLiftAnim 2.5s ease-in-out infinite" }}>
                <rect x="163" y="152" width="17" height="50" rx="8" fill={`url(#${uid}pantsGrad)`} />
                <ellipse cx="171" cy="152" rx="9" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 10: HIP EXTENSION PRONE (BENT KNEE LIFT) */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 10 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="196" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="196" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              {/* Head */}
              <ellipse cx="54" cy="186" rx="18" ry="17" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="54" cy="172" rx="17" ry="7" fill={hair} />
              <rect x="37" y="171" width="34" height="10" rx="5" fill={hair} />
              <ellipse cx="61" cy="184" rx="3" ry="2.5" fill="#fff" />
              <circle cx="62" cy="185" r="1.5" fill="#333" />
              {/* Arms */}
              <rect x="46" y="190" width="52" height="12" rx="6" fill={`url(#${uid}skinGrad)`} />
              {/* Torso */}
              <rect x="82" y="182" width="80" height="26" rx="12" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.5s ease-in-out infinite" }} />
              {/* Hip */}
              <rect x="152" y="183" width="36" height="24" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Right leg straight */}
              <rect x="186" y="188" width="90" height="16" rx="8" fill={pantsDark} />
              <ellipse cx="276" cy="196" rx="11" ry="7" fill={skinDark} />
              {/* Left leg: thigh lifts + knee bends 90° */}
              <g style={{ transformOrigin: "162px 192px", animation: "hipExtProneAnim 2.5s ease-in-out infinite" }}>
                <rect x="163" y="162" width="17" height="38" rx="8" fill={`url(#${uid}pantsGrad)`} />
                {/* Bent shin going upward */}
                <rect x="152" y="140" width="14" height="34" rx="7" fill={`url(#${uid}pantsGrad)`} opacity="0.85" />
                <ellipse cx="159" cy="140" rx="8" ry="6" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 11: BIRD DOG (All-Fours) */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 11 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="210" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="210" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              <ellipse cx="180" cy="218" rx="90" ry="6" fill={`url(#${uid}floorGlow)`} />
              {/* Left hand on floor */}
              <ellipse cx="88" cy="212" rx="12" ry="7" fill={skin} />
              <rect x="82" y="182" width="14" height="36" rx="7" fill={`url(#${uid}skinGrad)`} />
              {/* Right arm extends forward (animated) */}
              <g style={{ transformOrigin: "148px 178px", animation: "birdDogArm 2.4s ease-in-out infinite" }}>
                <rect x="102" y="172" width="60" height="13" rx="6" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="162" cy="178" rx="10" ry="7" fill={skin} />
              </g>
              {/* Torso */}
              <rect x="108" y="164" width="90" height="30" rx="14" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.4s ease-in-out infinite" }} />
              {/* Head */}
              <ellipse cx="98" cy="158" rx="18" ry="17" fill={`url(#${uid}skinGrad)`} />
              <ellipse cx="98" cy="143" rx="16" ry="7" fill={hair} />
              <rect x="82" y="142" width="32" height="10" rx="5" fill={hair} />
              <ellipse cx="91" cy="156" rx="3" ry="2.5" fill="#fff" />
              <circle cx="92" cy="157" r="1.5" fill="#333" />
              {/* Hips */}
              <rect x="190" y="165" width="36" height="28" rx="12" fill={`url(#${uid}pantsGrad)`} />
              {/* Left knee on floor */}
              <ellipse cx="200" cy="213" rx="14" ry="7" fill={pants} />
              <rect x="194" y="186" width="14" height="32" rx="7" fill={`url(#${uid}pantsGrad)`} />
              {/* Right leg extends back (animated) */}
              <g style={{ transformOrigin: "220px 180px", animation: "birdDogLeg 2.4s ease-in-out infinite" }}>
                <rect x="222" y="132" width="16" height="52" rx="8" fill={`url(#${uid}pantsGrad)`} />
                <ellipse cx="230" cy="132" rx="9" ry="7" fill={skinDark} />
              </g>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 12: CHILD POSE ROCKING */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 12 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="210" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="210" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              <ellipse cx="180" cy="218" rx="90" ry="6" fill={`url(#${uid}floorGlow)`} />
              {/* Body rocks forward/back */}
              <g style={{ animation: "childRockAnim 2.6s ease-in-out infinite" }}>
                {/* Hands on floor */}
                <ellipse cx="96" cy="210" rx="12" ry="7" fill={skin} />
                <ellipse cx="116" cy="210" rx="12" ry="7" fill={skinDark} opacity="0.7" />
                {/* Arms stretched */}
                <rect x="92" y="185" width="14" height="32" rx="7" fill={`url(#${uid}skinGrad)`} />
                <rect x="108" y="185" width="12" height="30" rx="6" fill={`url(#${uid}skinGrad)`} opacity="0.7" />
                {/* Head bowing */}
                <ellipse cx="104" cy="176" rx="17" ry="16" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="104" cy="162" rx="16" ry="7" fill={hair} />
                <rect x="88" y="161" width="32" height="10" rx="5" fill={hair} />
              </g>
              {/* Torso curled over */}
              <rect x="130" y="170" width="72" height="36" rx="14" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.6s ease-in-out infinite" }} />
              {/* Hips sitting on heels */}
              <rect x="192" y="172" width="40" height="30" rx="12" fill={`url(#${uid}pantsGrad)`} />
              {/* Knees on mat */}
              <ellipse cx="198" cy="211" rx="14" ry="7" fill={pants} />
              <ellipse cx="215" cy="211" rx="12" ry="6" fill={pantsDark} />
              {/* Shins/feet flat */}
              <rect x="194" y="194" width="14" height="20" rx="7" fill={`url(#${uid}pantsGrad)`} />
              <rect x="210" y="194" width="12" height="20" rx="6" fill={pantsDark} />
              <ellipse cx="218" cy="211" rx="20" ry="7" fill={skinDark} opacity="0.8" />
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════ */}
        {/* EXERCISE 13: PRESS UP (COBRA) */}
        {/* ═══════════════════════════════════════════════════ */}
        {exerciseId === 13 && (() => {
          return (
            <g filter={`url(#${uid}shadow)`}>
              <rect x="30" y="210" width="260" height="22" rx="8" fill={mat} opacity="0.18" />
              <rect x="30" y="210" width="260" height="6" rx="3" fill={mat} opacity="0.25" />
              <ellipse cx="180" cy="218" rx="90" ry="6" fill={`url(#${uid}floorGlow)`} />
              {/* Legs flat on mat */}
              <rect x="160" y="198" width="110" height="18" rx="9" fill={`url(#${uid}pantsGrad)`} />
              <ellipse cx="270" cy="207" rx="13" ry="8" fill={skinDark} />
              {/* Hip on mat */}
              <rect x="148" y="196" width="38" height="22" rx="11" fill={`url(#${uid}pantsGrad)`} />
              {/* Hands on mat */}
              <ellipse cx="120" cy="212" rx="13" ry="7" fill={skin} />
              <ellipse cx="140" cy="212" rx="11" ry="7" fill={skinDark} opacity="0.8" />
              {/* Arms push upper body up */}
              <g style={{ animation: "pressUpArm 2.4s ease-in-out infinite" }}>
                <rect x="116" y="175" width="14" height="42" rx="7" fill={`url(#${uid}skinGrad)`} />
                <rect x="133" y="180" width="12" height="36" rx="6" fill={`url(#${uid}skinGrad)`} opacity="0.8" />
              </g>
              {/* Upper body arches up */}
              <g style={{ animation: "pressUpAnim 2.4s ease-in-out infinite" }}>
                {/* Torso */}
                <rect x="120" y="142" width="50" height="46" rx="14" fill={`url(#${uid}shirtGrad)`} style={{ animation: "breathe 2.4s ease-in-out infinite" }} />
                {/* Neck */}
                <rect x="133" y="126" width="13" height="20" rx="6" fill={`url(#${uid}skinGrad)`} />
                {/* Head tilts back/up */}
                <ellipse cx="130" cy="116" rx="19" ry="18" fill={`url(#${uid}skinGrad)`} />
                <ellipse cx="130" cy="100" rx="18" ry="8" fill={hair} />
                <rect x="112" y="99" width="36" height="10" rx="5" fill={hair} />
                <ellipse cx="136" cy="114" rx="3" ry="2.5" fill="#fff" />
                <circle cx="137" cy="115" r="1.5" fill="#333" />
                <path d="M 127 122 Q 131 126 135 122" stroke="#a06050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </g>
            </g>
          );
        })()}

        {/* Ambient live badge */}
        <g>
          <circle cx="288" cy="24" r="6" fill="rgba(20,184,166,0.15)" />
          <circle cx="288" cy="24" r="3.5" fill="#14b8a6">
            <animate attributeName="r" values="3.5;5;3.5" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Visualizer Metadata Info Panel */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <span className="text-[9px] font-bold text-teal-400/90 tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-lg border border-teal-500/10 backdrop-blur-md shadow-lg">
          {meta.pose} • {meta.label}
        </span>
        <span className="text-[9px] font-bold text-indigo-400/90 tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/10 backdrop-blur-md shadow-lg flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping"></span>
          Live Demo
        </span>
      </div>
    </div>
  );
};


export default function App() {
  // App Core State
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [routineList, setRoutineList] = useState(allExercises);
  const [aiRoutineMessage, setAiRoutineMessage] = useState("");
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [ttsError, setTtsError] = useState("");

  // Settings Pane State
  const [showSettings, setShowSettings] = useState(false);
  const [userApiKey, setUserApiKey] = useState("");
  const [isKeySaved, setIsKeySaved] = useState(false);

  // Gemini Tailoring State
  const [customRoutinePrompt, setCustomRoutinePrompt] = useState("");
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customError, setCustomError] = useState("");
  const [showTailorInput, setShowTailorInput] = useState(false);

  // Gemini Inline QA State
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  const exercise = routineList[currentIndex];

  // Fetch local API Key on startup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedKey = localStorage.getItem("flexiback_user_gemini_key") || "";
      setUserApiKey(savedKey);
      if (savedKey) setIsKeySaved(true);
    }
  }, []);

  // Initialize Speech voices cache
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        setTimeout(() => window.speechSynthesis.getVoices(), 100);
      }
    } catch (e) {
      console.warn("Speech synthesis initialization warning:", e);
    }
  }, []);

  // Clean up Speech on switching exercises
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setAiPrompt("");
    setAiResponse(null);
    setAiError("");
  }, [currentIndex, started]);

  // Handle saving API key in localStorage
  const saveApiKey = (key: string) => {
    if (typeof window !== "undefined") {
      const trimmed = key.trim();
      if (trimmed === "") {
        localStorage.removeItem("flexiback_user_gemini_key");
        setIsKeySaved(false);
      } else {
        localStorage.setItem("flexiback_user_gemini_key", trimmed);
        setIsKeySaved(true);
      }
      setUserApiKey(trimmed);
      setShowSettings(false);
    }
  };

  const speakHindi = (text: string) => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setTtsError("Speech synthesis is unsupported on this browser.");
        return;
      }
      
      window.speechSynthesis.cancel(); 
      
      if (isPlaying) {
        setIsPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85; // Natural pace
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.name.includes('Hindi'));
      if (hindiVoice) utterance.voice = hindiVoice;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = (e) => {
        console.error("TTS speech synthesis error:", e);
        setIsPlaying(false);
      };
      
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      setTtsError("Audio playback failed.");
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < routineList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const returnHome = () => {
    setCompleted(false);
    setCurrentIndex(0);
    setStarted(false);
    setRoutineList(allExercises);
    setAiRoutineMessage("");
    setCustomRoutinePrompt("");
    setShowTailorInput(false);
  };

  // --- Gemini custom sequence generator ---
  const handleTailorRoutine = async () => {
    if (!customRoutinePrompt.trim()) return;
    setIsCustomizing(true);
    setCustomError("");

    const systemInst = `You are an expert AI Physical Therapist. Analyze the user's specific back pain condition, time constraint, or energy level, and select the optimal sequence of lower back therapeutic exercises.
    
    The available candidate exercises are:
    ${allExercises.map(e => `ID: ${e.id} | Name: ${e.title} | Instructions: ${e.instruction_en}`).join("\n")}
    
    RULES:
    1. Select a minimum of 3 and maximum of 7 exercises.
    2. Respond with an object containing:
       - selected_ids: An array of integers representing the chosen exercise IDs in the exact order they should be performed.
       - message: A highly encouraging, professional physical therapy feedback note (1-2 sentences) explaining why these were selected and how they will support their back today.`;

    const schema = {
      type: "OBJECT",
      properties: {
        selected_ids: { type: "ARRAY", items: { type: "INTEGER" }, description: "Sequential list of selected exercise IDs." },
        message: { type: "STRING", description: "Encouraging clinical feedback message explaining the routine." }
      },
      required: ["selected_ids", "message"]
    };

    try {
      const result = await fetchGeminiAPI(systemInst, `User current condition: "${customRoutinePrompt}"`, schema);
      
      if (!result.selected_ids || result.selected_ids.length === 0) {
        throw new Error("No exercises returned in customization.");
      }

      // Filter and sequence the matching exercises
      const sequencedRoutine = result.selected_ids
        .map((id: number) => allExercises.find(e => e.id === id))
        .filter(Boolean);

      if (sequencedRoutine.length === 0) {
        throw new Error("No matching exercises found.");
      }

      setRoutineList(sequencedRoutine);
      setAiRoutineMessage(result.message);
      setStarted(true);
      setCurrentIndex(0);
    } catch (e: any) {
      console.error(e);
      setCustomError(e.message || "Failed to customize routine. Please verify key or try again.");
    } finally {
      setIsCustomizing(false);
    }
  };

  // --- Gemini inline posture adjustment Q&A ---
  const askExerciseQuestion = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    setAiError("");

    const systemInst = "You are a professional AI Physical Therapy Assistant. The user is currently performing an exercise and needs a posture modification, safety adjustment, or assistance due to discomfort. Provide highly specific, safe, and encouraging guidance in exactly 1 or 2 sentences. Do NOT attempt to provide clinical diagnoses. Provide both English (advice_en) and Hindi (advice_hi) translations of your response.";
    const prompt = `Exercise being performed: ${exercise.title}\nDescription: ${exercise.instruction_en}\nUser question/issue: "${aiPrompt}"`;
    
    const schema = {
      type: "OBJECT",
      properties: {
        advice_en: { type: "STRING", description: "Safe modification guidance in English (1-2 sentences)." },
        advice_hi: { type: "STRING", description: "Accurate Hindi translation of the guidance (1-2 sentences)." }
      },
      required: ["advice_en", "advice_hi"]
    };

    try {
      const result = await fetchGeminiAPI(systemInst, prompt, schema);
      setAiResponse(result);
    } catch (e: any) {
      console.error(e);
      setAiError(e.message || "Failed to connect to AI. Please try again.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const progressPercentage = ((currentIndex) / routineList.length) * 100;

  // --- RENDER: HOME SCREEN ---
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative font-sans">
        
        {/* Settings Button (Top-Right) */}
        <div className="absolute top-6 right-6 z-30">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
            title="Configure API Key"
          >
            <SettingsIcon size={20} />
          </button>
        </div>

        {/* Brand Banner */}
        <div className="relative z-10 max-w-lg w-full text-center">
          
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-teal-500/20 border border-teal-400/30 relative animate-pulse" style={{ animationDuration: '6s' }}>
            <Activity size={48} className="text-white" />
            <Sparkles className="text-amber-300 absolute -top-3 -right-3 w-8 h-8 animate-bounce" style={{ animationDuration: '3s' }} />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-outfit text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-indigo-300">
            FlexiBack
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-md mx-auto">
            Your premium, AI-powered physical therapy companion to strengthen, rehabilitate, and relieve low back stiffness.
          </p>
          
          {/* Main Action Modules */}
          <div className="space-y-6 max-w-sm mx-auto">
            <button 
              onClick={() => { setRoutineList(allExercises); setStarted(true); }}
              className="group w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(20,184,166,0.35)] active:scale-95 cursor-pointer"
            >
              Start Full 13-Step Routine 
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Premium AI Customizer Accordion */}
            <div className="glass-panel rounded-3xl p-5 border border-white/5 shadow-2xl relative overflow-hidden">
              {!showTailorInput ? (
                <button 
                  onClick={() => setShowTailorInput(true)}
                  className="w-full py-2.5 text-indigo-300 hover:text-indigo-200 font-bold flex items-center justify-center gap-2.5 transition-all text-base cursor-pointer"
                >
                  <Sparkles size={20} className="text-indigo-400" />
                  Tailor Custom Routine ✨
                </button>
              ) : (
                <div className="flex flex-col gap-4 text-left animate-in fade-in slide-in-from-top-3 duration-300">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-indigo-200 flex items-center gap-1.5">
                      <Sparkles size={16} /> How is your back today?
                    </label>
                    <button 
                      onClick={() => setShowTailorInput(false)}
                      className="text-xs text-slate-500 hover:text-slate-300"
                    >
                      Cancel
                    </button>
                  </div>
                  <input 
                    type="text"
                    value={customRoutinePrompt}
                    onChange={(e) => setCustomRoutinePrompt(e.target.value)}
                    placeholder="e.g., 'Only have 10 mins, focus on core strength'"
                    className="w-full bg-slate-950/60 border border-white/10 hover:border-indigo-500/30 focus:border-indigo-400 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none transition-colors text-sm"
                    onKeyDown={(e) => e.key === 'Enter' && handleTailorRoutine()}
                  />
                  <button 
                    onClick={handleTailorRoutine}
                    disabled={isCustomizing || !customRoutinePrompt.trim()}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                  >
                    {isCustomizing ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                    {isCustomizing ? "Analyzing Back ✨..." : "Generate Routine ✨"}
                  </button>
                  {customError && <p className="text-rose-400 text-xs mt-1 text-center font-medium">{customError}</p>}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Global Floating Settings Panel (Modal Overlay) */}
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="glass-panel max-w-md w-full rounded-3xl p-6 border border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-bold font-outfit mb-2 text-white flex items-center gap-2">
                <SettingsIcon className="text-teal-400" /> Settings
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Your calls will proxy securely through our server. If you do not have `GEMINI_API_KEY` configured in your server dashboard, you can save a temporary custom key locally in your browser.
              </p>
              
              <div className="space-y-4 mb-6">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Gemini API Key
                </label>
                <input 
                  type="password"
                  value={userApiKey}
                  onChange={(e) => setUserApiKey(e.target.value)}
                  placeholder={isKeySaved ? "••••••••••••••••••••••••••••" : "Paste your Gemini API Key here"}
                  className="w-full bg-slate-950/80 border border-white/10 focus:border-teal-500 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none transition-colors text-sm"
                />
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>Key Status: {isKeySaved ? <span className="text-teal-400 font-bold">Client Configured</span> : <span className="text-indigo-400">Server Standard Flow</span>}</span>
                  {isKeySaved && (
                    <button 
                      onClick={() => saveApiKey("")}
                      className="text-rose-400 hover:text-rose-300 font-semibold uppercase tracking-wider"
                    >
                      Remove Key
                    </button>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-colors font-bold text-sm cursor-pointer"
                >
                  Close
                </button>
                <button 
                  onClick={() => saveApiKey(userApiKey)}
                  className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
                >
                  Save API Key
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-slate-600 z-10 flex items-center justify-center gap-1.5">
          Developed with <Heart className="text-rose-500/80 animate-pulse" size={14} /> for healthy spines
        </div>
      </div>
    );
  }

  // --- RENDER: COMPLETE SCREEN ---
  if (completed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle size={48} className="text-emerald-400" />
        </div>
        <h2 className="text-4xl font-bold font-outfit mb-4 text-white">Routine Complete!</h2>
        <p className="text-slate-400 text-base max-w-sm mb-8 leading-relaxed">
          Amazing work! You have successfully completed your low back exercises. Your spine thank you.
        </p>
        <button 
          onClick={returnHome}
          className="px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold transition-all active:scale-95 cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  // --- RENDER: WORKOUT ACTIVE PANEL ---
  return (
    <div className="min-h-screen text-slate-100 font-sans flex flex-col items-center py-8 px-4 sm:px-6 relative">
      
      {/* Settings Modal Toggle while in routine */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass-panel max-w-md w-full rounded-3xl p-6 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-bold font-outfit mb-2 text-white flex items-center gap-2">
              <SettingsIcon className="text-teal-400" /> Settings
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Adjust API configurations. Your custom key is stored locally and securely in your browser.
            </p>
            
            <div className="space-y-4 mb-6">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Gemini API Key
              </label>
              <input 
                type="password"
                value={userApiKey}
                onChange={(e) => setUserApiKey(e.target.value)}
                placeholder={isKeySaved ? "••••••••••••••••••••••••••••" : "Paste your Gemini API Key here"}
                className="w-full bg-slate-950/80 border border-white/10 focus:border-teal-500 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none transition-colors text-sm"
              />
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>Key Status: {isKeySaved ? <span className="text-teal-400 font-bold">Client Configured</span> : <span className="text-indigo-400">Server Standard Flow</span>}</span>
                {isKeySaved && (
                  <button 
                    onClick={() => saveApiKey("")}
                    className="text-rose-400 hover:text-rose-300 font-semibold uppercase tracking-wider"
                  >
                    Remove Key
                  </button>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowSettings(false)}
                className="flex-1 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-colors font-bold text-sm cursor-pointer"
              >
                Close
              </button>
              <button 
                onClick={() => saveApiKey(userApiKey)}
                className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
              >
                Save API Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Info & Progress Bar */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-6 z-10">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Exercise {currentIndex + 1} of {routineList.length}
          </span>
          <div className="w-48 sm:w-64 h-2 bg-slate-900 border border-white/5 rounded-full mt-2 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="API Configurations"
          >
            <SettingsIcon size={16} />
          </button>
          
          <button 
            onClick={returnHome} 
            className="text-slate-400 hover:text-white font-bold text-xs bg-slate-900/60 border border-white/5 px-3 py-2 rounded-xl transition-all cursor-pointer"
          >
            Exit Workout
          </button>
        </div>
      </div>

      {/* AI Tailoring Message (Display encouragement on Step 1 if custom) */}
      {aiRoutineMessage && currentIndex === 0 && (
        <div className="w-full max-w-2xl glass-panel-indigo p-4 rounded-2xl mb-6 flex items-start gap-3 animate-in fade-in duration-300">
          <Sparkles className="text-indigo-400 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-indigo-200 text-xs md:text-sm font-medium leading-relaxed">{aiRoutineMessage}</p>
        </div>
      )}

      {/* Primary Workout Card */}
      <div className="w-full max-w-2xl glass-panel rounded-[32px] p-6 sm:p-8 shadow-2xl flex-1 flex flex-col z-10">
        
        {/* Exercise Header */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-1.5 tracking-tight font-outfit text-white leading-tight">
              {exercise.title}
            </h2>
            <h3 className="text-lg text-teal-400 font-bold font-outfit">
              {exercise.title_hi}
            </h3>
          </div>
        </div>

        {/* Interactive Anatomical Human Exercise Simulator */}
        <HumanExerciseVisualizer exerciseId={exercise.id} />

        {/* Exercise Description Container */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          
          {/* English Instructions */}
          <div className="bg-slate-950/45 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">English Guide</h4>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {exercise.instruction_en}
            </p>
          </div>

          {/* Hindi Instructions with Audio */}
          <div className="bg-teal-950/10 p-5 rounded-2xl border border-teal-500/10 hover:border-teal-500/20 transition-all duration-300 shadow-lg shadow-teal-950/5">
            <h4 className="text-[10px] font-bold text-teal-500/80 uppercase tracking-widest mb-1.5">हिंदी गाइड</h4>
            <p className="text-slate-200 leading-relaxed text-base md:text-lg mb-4 font-semibold">
              {exercise.instruction_hi}
            </p>
            
            <button 
              onClick={() => speakHindi(exercise.instruction_hi)}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl transition-all duration-300 font-bold text-sm cursor-pointer
                ${isPlaying 
                  ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-500/25 shadow-lg shadow-rose-950/20' 
                  : 'bg-teal-500 text-slate-950 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25 shadow-md'}`}
            >
              {isPlaying ? <Pause size={18} /> : <Volume2 size={18} />}
              {isPlaying ? "Pause Translation Audio" : "Voice Guide Hindi Instructions"}
            </button>
            {ttsError && <p className="text-rose-400 text-xs mt-2.5 text-center font-medium">{ttsError}</p>}
          </div>

          {/* Premium AI Posture Modification Chat Box */}
          <div className="glass-panel-indigo rounded-2xl p-5 shadow-inner">
            <div className="flex items-center gap-2 mb-3.5">
              <Sparkles size={18} className="text-indigo-400" />
              <h4 className="text-indigo-300 font-bold text-xs uppercase tracking-wider">
                Lumbar Posture adjustment & modification
              </h4>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="e.g., 'My hips are tight. Can I bend my knees slightly?'"
                className="flex-1 bg-slate-950/80 border border-white/5 hover:border-indigo-500/30 focus:border-indigo-400 rounded-xl px-4 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && askExerciseQuestion()}
              />
              <button 
                onClick={askExerciseQuestion}
                disabled={isAiLoading || !aiPrompt.trim()}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white p-3.5 rounded-xl transition-colors flex items-center justify-center cursor-pointer shadow-lg shadow-indigo-600/10"
              >
                {isAiLoading ? <Loader2 size={18} className="animate-spin" /> : <MessageSquare size={18} />}
              </button>
            </div>

            {aiError && <p className="text-rose-400 text-xs mt-2.5 font-medium">{aiError}</p>}

            {aiResponse && (
              <div className="mt-4 p-4 bg-slate-950/60 border border-indigo-500/20 rounded-xl space-y-3.5 animate-in slide-in-from-bottom-2 duration-300">
                <div className="space-y-1">
                  <h5 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">AI Physio Adjustment</h5>
                  <p className="text-indigo-100 text-sm leading-relaxed">{aiResponse.advice_en}</p>
                </div>
                <div className="h-px w-full bg-indigo-500/10"></div>
                <div className="space-y-1">
                  <h5 className="text-[9px] font-bold text-teal-500/60 uppercase tracking-widest">हिंदी अनुवाद</h5>
                  <p className="text-teal-200 text-sm leading-relaxed font-semibold">{aiResponse.advice_hi}</p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Navigation Control Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3.5 rounded-2xl flex items-center justify-center transition-all cursor-pointer
              ${currentIndex === 0 
                ? 'text-slate-600 bg-white/2% border border-transparent cursor-not-allowed' 
                : 'text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'}`}
          >
            <ChevronLeft size={22} />
          </button>

          <button 
            onClick={handleNext}
            className="flex-1 max-w-[220px] py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-white/5 text-base"
          >
            {currentIndex === routineList.length - 1 ? 'Complete Routine' : 'Next Exercise'}
            {currentIndex !== routineList.length - 1 && <ChevronRight size={18} />}
          </button>
        </div>

      </div>
    </div>
  );
}
