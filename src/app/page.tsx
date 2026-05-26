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
  { id: 1, title: "Wall Slides", title_hi: "à¤µà¥‰à¤² à¤¸à¥à¤²à¤¾à¤‡à¤¡à¥à¤¸", instruction_en: "Stand with your back against a wall and feet shoulder-width apart. Slide down into a crouch with knees bent to about 90 degrees. Count to five and slide back up the wall. Repeat 5 times.", instruction_hi: "à¤¦à¥€à¤µà¤¾à¤° à¤•à¥‡ à¤¸à¤¹à¤¾à¤°à¥‡ à¤…à¤ªà¤¨à¥€ à¤ªà¥€à¤  à¤Ÿà¤¿à¤•à¤¾à¤•à¤° à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹ à¤œà¤¾à¤à¤‚ à¤”à¤° à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‡ à¤¬à¥€à¤š à¤•à¤‚à¤§à¥‹à¤‚ à¤œà¤¿à¤¤à¤¨à¥€ à¤¦à¥‚à¤°à¥€ à¤°à¤–à¥‡à¤‚à¥¤ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤²à¤—à¤­à¤— 90 à¤¡à¤¿à¤—à¥à¤°à¥€ à¤¤à¤• à¤®à¥‹à¤¡à¤¼à¤•à¤° à¤¨à¥€à¤šà¥‡ à¤•à¥€ à¤“à¤° à¤¸à¥à¤²à¤¾à¤‡à¤¡ à¤•à¤°à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¤à¤• à¤—à¤¿à¤¨à¥‡à¤‚ à¤”à¤° à¤µà¤¾à¤ªà¤¸ à¤Šà¤ªà¤° à¤† à¤œà¤¾à¤à¤‚à¥¤ à¤‡à¤¸à¥‡ 5 à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 2, title: "Back Leg Swing", title_hi: "à¤¬à¥ˆà¤• à¤²à¥‡à¤— à¤¸à¥à¤µà¤¿à¤‚à¤—", instruction_en: "Stand behind a chair with your hands on the top of the chair. Lift one leg back and up while keeping the knee straight. Return slowly. Raise other leg and return. Repeat five times with each leg.", instruction_hi: "à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¥‡ à¤ªà¥€à¤›à¥‡ à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹ à¤œà¤¾à¤à¤‚ à¤”à¤° à¤…à¤ªà¤¨à¥‡ à¤¹à¤¾à¤¥ à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¥‡ à¤Šà¤ªà¤° à¤°à¤–à¥‡à¤‚à¥¤ à¤˜à¥à¤Ÿà¤¨à¥‡ à¤•à¥‹ à¤¸à¥€à¤§à¤¾ à¤°à¤–à¤¤à¥‡ à¤¹à¥à¤ à¤à¤• à¤ªà¥ˆà¤° à¤•à¥‹ à¤ªà¥€à¤›à¥‡ à¤”à¤° à¤Šà¤ªà¤° à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤µà¤¾à¤ªà¤¸ à¤†à¤à¤‚à¥¤ à¤¦à¥‚à¤¸à¤°à¥‡ à¤ªà¥ˆà¤° à¤•à¥‹ à¤‰à¤ à¤¾à¤à¤‚ à¤”à¤° à¤µà¤¾à¤ªà¤¸ à¤†à¤à¤‚à¥¤ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤ªà¥ˆà¤° à¤•à¥‡ à¤¸à¤¾à¤¥ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 3, title: "Knee to Chest", title_hi: "à¤¨à¥€ à¤Ÿà¥‚ à¤šà¥‡à¤¸à¥à¤Ÿ", instruction_en: "Lie on your back on a firm surface. Clasp your hands behind the thigh and pull it towards your chest. Keep the opposite leg flat on the surface of the floor. Maintain the position for 3 seconds. Switch legs and repeat five times.", instruction_hi: "à¤à¤• à¤®à¤œà¤¬à¥‚à¤¤ à¤¸à¤¤à¤¹ à¤ªà¤° à¤…à¤ªà¤¨à¥€ à¤ªà¥€à¤  à¤•à¥‡ à¤¬à¤² à¤²à¥‡à¤Ÿ à¤œà¤¾à¤à¤‚à¥¤ à¤…à¤ªà¤¨à¥€ à¤œà¤¾à¤‚à¤˜ à¤•à¥‡ à¤ªà¥€à¤›à¥‡ à¤¹à¤¾à¤¥à¥‹à¤‚ à¤•à¥‹ à¤«à¤‚à¤¸à¤¾à¤à¤‚ à¤”à¤° à¤‡à¤¸à¥‡ à¤…à¤ªà¤¨à¥€ à¤›à¤¾à¤¤à¥€ à¤•à¥€ à¤“à¤° à¤–à¥€à¤‚à¤šà¥‡à¤‚à¥¤ à¤¦à¥‚à¤¸à¤°à¥‡ à¤ªà¥ˆà¤° à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤ªà¤° à¤¸à¥€à¤§à¤¾ à¤°à¤–à¥‡à¤‚à¥¤ 3 à¤¸à¥‡à¤•à¤‚à¤¡ à¤¤à¤• à¤‡à¤¸à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤°à¤¹à¥‡à¤‚à¥¤ à¤ªà¥ˆà¤° à¤¬à¤¦à¤²à¥‡à¤‚ à¤”à¤° à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 4, title: "Lower Abdominal Exercises", title_hi: "à¤²à¥‹à¤…à¤° à¤à¤¬à¥à¤¡à¥‰à¤®à¤¿à¤¨à¤²", instruction_en: "Lie on your back with your knees bent and feet flat on your bed. Place both hands under your knees and gently pull your knees as close to your chest as possible. Do not raise your head. Repeat five times.", instruction_hi: "à¤…à¤ªà¤¨à¥‡ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤®à¥‹à¤¡à¤¼à¤•à¤° à¤”à¤° à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‹ à¤¬à¤¿à¤¸à¥à¤¤à¤° à¤ªà¤° à¤¸à¥€à¤§à¤¾ à¤°à¤–à¤•à¤° à¤ªà¥€à¤  à¤•à¥‡ à¤¬à¤² à¤²à¥‡à¤Ÿ à¤œà¤¾à¤à¤‚à¥¤ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤¹à¤¾à¤¥à¥‹à¤‚ à¤•à¥‹ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‡ à¤¨à¥€à¤šà¥‡ à¤°à¤–à¥‡à¤‚ à¤”à¤° à¤§à¥€à¤°à¥‡ à¤¸à¥‡ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤›à¤¾à¤¤à¥€ à¤•à¥‡ à¤œà¤¿à¤¤à¤¨à¤¾ à¤•à¤°à¥€à¤¬ à¤¹à¥‹ à¤¸à¤•à¥‡ à¤²à¤¾à¤à¤‚à¥¤ à¤…à¤ªà¤¨à¤¾ à¤¸à¤¿à¤° à¤¨ à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 5, title: "Knees to Chest Exercise", title_hi: "à¤¨à¥€à¤œà¤¼ à¤Ÿà¥‚ à¤šà¥‡à¤¸à¥à¤Ÿ (à¤…à¤²à¥à¤Ÿà¤°à¤¨à¥‡à¤Ÿ)", instruction_en: "Keep your knees bent and lie flat on the floor. Flatten your back to the floor by pulling your abdominal muscles up and in. Raise your leg keeping your knee straight. Hold for three seconds. Repeat five times with each leg.", instruction_hi: "à¤…à¤ªà¤¨à¥‡ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤®à¥‹à¤¡à¤¼à¤•à¤° à¤°à¤–à¥‡à¤‚ à¤”à¤° à¤«à¤°à¥à¤¶ à¤ªà¤° à¤¸à¥€à¤§à¥‡ à¤²à¥‡à¤Ÿ à¤œà¤¾à¤à¤‚à¥¤ à¤ªà¥‡à¤Ÿ à¤•à¥€ à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤Šà¤ªà¤° à¤”à¤° à¤…à¤‚à¤¦à¤° à¤•à¥€ à¤“à¤° à¤–à¥€à¤‚à¤šà¤•à¤° à¤…à¤ªà¤¨à¥€ à¤ªà¥€à¤  à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤ªà¤° à¤¸à¥€à¤§à¤¾ à¤•à¤°à¥‡à¤‚à¥¤ à¤˜à¥à¤Ÿà¤¨à¤¾ à¤¸à¥€à¤§à¤¾ à¤°à¤–à¤¤à¥‡ à¤¹à¥à¤ à¤ªà¥ˆà¤° à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤¤à¥€à¤¨ à¤¸à¥‡à¤•à¤‚à¤¡ à¤°à¥à¤•à¥‡à¤‚à¥¤ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤ªà¥ˆà¤° à¤¸à¥‡ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 6, title: "Pelvic Tilt", title_hi: "à¤ªà¥‡à¤²à¥à¤µà¤¿à¤• à¤Ÿà¤¿à¤²à¥à¤Ÿ", instruction_en: "Push the lower part of your back into the floor by pulling the lower abdominal muscles up and in. Hold your back flat while breathing easily in and out. Hold for three seconds. Repeat five times.", instruction_hi: "à¤¨à¤¿à¤šà¤²à¥‡ à¤ªà¥‡à¤Ÿ à¤•à¥€ à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤Šà¤ªà¤° à¤”à¤° à¤…à¤‚à¤¦à¤° à¤–à¥€à¤‚à¤šà¤•à¤° à¤…à¤ªà¤¨à¥€ à¤ªà¥€à¤  à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤®à¥‡à¤‚ à¤§à¤•à¥‡à¤²à¥‡à¤‚à¥¤ à¤†à¤°à¤¾à¤® à¤¸à¥‡ à¤¸à¤¾à¤‚à¤¸ à¤²à¥‡à¤¤à¥‡ à¤”à¤° à¤›à¥‹à¤¡à¤¼à¤¤à¥‡ à¤¹à¥à¤ à¤…à¤ªà¤¨à¥€ à¤ªà¥€à¤  à¤•à¥‹ à¤¸à¥€à¤§à¤¾ à¤°à¤–à¥‡à¤‚à¥¤ à¤¤à¥€à¤¨ à¤¸à¥‡à¤•à¤‚à¤¡ à¤¤à¤• à¤°à¥à¤•à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 7, title: "Hip Rolling", title_hi: "à¤¹à¤¿à¤ª à¤°à¥‹à¤²à¤¿à¤‚à¤—", instruction_en: "Keep both knees bent, feet flat on the floor. Cross your arms over your chest. Turn your head to the right as you turn both knees to the left. Allow knees to relax. Bring knees back up, reverse directions. Repeat five times.", instruction_hi: "à¤¦à¥‹à¤¨à¥‹à¤‚ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤®à¥‹à¤¡à¤¼à¤•à¤° à¤°à¤–à¥‡à¤‚, à¤ªà¥ˆà¤° à¤«à¤°à¥à¤¶ à¤ªà¤° à¤¸à¥€à¤§à¥‡ à¤¹à¥‹à¤‚à¥¤ à¤…à¤ªà¤¨à¥€ à¤¬à¤¾à¤¹à¥‹à¤‚ à¤•à¥‹ à¤…à¤ªà¤¨à¥€ à¤›à¤¾à¤¤à¥€ à¤ªà¤° à¤•à¥à¤°à¥‰à¤¸ à¤•à¤°à¥‡à¤‚à¥¤ à¤œà¥ˆà¤¸à¥‡ à¤¹à¥€ à¤†à¤ª à¤¦à¥‹à¤¨à¥‹à¤‚ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤¬à¤¾à¤ˆà¤‚ à¤“à¤° à¤˜à¥à¤®à¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤…à¤ªà¤¨à¥‡ à¤¸à¤¿à¤° à¤•à¥‹ à¤¦à¤¾à¤ˆà¤‚ à¤“à¤° à¤˜à¥à¤®à¤¾à¤à¤‚à¥¤ à¤˜à¥à¤Ÿà¤¨à¥‹à¤‚ à¤•à¥‹ à¤†à¤°à¤¾à¤® à¤¦à¥‡à¤‚à¥¤ à¤¦à¤¿à¤¶à¤¾ à¤¬à¤¦à¤²à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 8, title: "Pelvic Lift", title_hi: "à¤ªà¥‡à¤²à¥à¤µà¤¿à¤• à¤²à¤¿à¤«à¥à¤Ÿ", instruction_en: "Keep your legs together. Cross your arms over your chest. Tilt your pelvis and push your low back to the floor. Slowly lift your pelvis off the floor. Maintain for three seconds. Lower pelvis. Repeat five times.", instruction_hi: "à¤…à¤ªà¤¨à¥‡ à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‹ à¤à¤• à¤¸à¤¾à¤¥ à¤°à¤–à¥‡à¤‚à¥¤ à¤¬à¤¾à¤¹à¥‹à¤‚ à¤•à¥‹ à¤›à¤¾à¤¤à¥€ à¤ªà¤° à¤•à¥à¤°à¥‰à¤¸ à¤•à¤°à¥‡à¤‚à¥¤ à¤¶à¥à¤°à¥‹à¤£à¤¿ à¤•à¥‹ à¤à¥à¤•à¤¾à¤à¤‚ à¤”à¤° à¤ªà¥€à¤  à¤•à¥‡ à¤¨à¤¿à¤šà¤²à¥‡ à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤ªà¤° à¤§à¤•à¥‡à¤²à¥‡à¤‚à¥¤ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤¶à¥à¤°à¥‹à¤£à¤¿ à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤¸à¥‡ à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤¤à¥€à¤¨ à¤¸à¥‡à¤•à¤‚à¤¡ à¤¤à¤• à¤¬à¤¨à¤¾à¤ à¤°à¤–à¥‡à¤‚à¥¤ à¤¶à¥à¤°à¥‹à¤£à¤¿ à¤¨à¥€à¤šà¥‡ à¤•à¤°à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 9, title: "Leg Raises", title_hi: "à¤²à¥‡à¤— à¤°à¥‡à¤œà¥‡à¤œà¤¼", instruction_en: "Lie on your stomach. Tighten the muscles in one leg and raise it from the floor. Hold your leg up for a count of 5 and return it to the floor. Do the same with the other leg. Repeat five times with each leg.", instruction_hi: "à¤ªà¥‡à¤Ÿ à¤•à¥‡ à¤¬à¤² à¤²à¥‡à¤Ÿ à¤œà¤¾à¤à¤‚à¥¤ à¤à¤• à¤ªà¥ˆà¤° à¤•à¥€ à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤•à¤¸ à¤²à¥‡à¤‚ à¤”à¤° à¤‡à¤¸à¥‡ à¤«à¤°à¥à¤¶ à¤¸à¥‡ à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤…à¤ªà¤¨à¥‡ à¤ªà¥ˆà¤° à¤•à¥‹ 5 à¤•à¥€ à¤—à¤¿à¤¨à¤¤à¥€ à¤¤à¤• à¤Šà¤ªà¤° à¤°à¤–à¥‡à¤‚ à¤”à¤° à¤«à¤°à¥à¤¶ à¤ªà¤° à¤µà¤¾à¤ªà¤¸ à¤²à¤¾à¤à¤‚à¥¤ à¤¦à¥‚à¤¸à¤°à¥‡ à¤ªà¥ˆà¤° à¤¸à¥‡ à¤­à¥€ à¤à¤¸à¤¾ à¤¹à¥€ à¤•à¤°à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 10, title: "Hip Extension", title_hi: "à¤¹à¤¿à¤ª à¤à¤•à¥à¤¸à¤Ÿà¥‡à¤‚à¤¶à¤¨", instruction_en: "Bend your knee to a 90 degree angle so the sole of your foot faces the ceiling. Lift one thigh off the floor approximately 6 inches. Slowly lower your thigh back to the starting position. Repeat five times with each leg.", instruction_hi: "à¤…à¤ªà¤¨à¥‡ à¤˜à¥à¤Ÿà¤¨à¥‡ à¤•à¥‹ 90 à¤¡à¤¿à¤—à¥à¤°à¥€ à¤•à¥‡ à¤•à¥‹à¤£ à¤ªà¤° à¤®à¥‹à¤¡à¤¼à¥‡à¤‚ à¤¤à¤¾à¤•à¤¿ à¤†à¤ªà¤•à¥‡ à¤ªà¥ˆà¤° à¤•à¤¾ à¤¤à¤²à¤µà¤¾ à¤›à¤¤ à¤•à¥€ à¤“à¤° à¤¹à¥‹à¥¤ à¤à¤• à¤œà¤¾à¤‚à¤˜ à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤¸à¥‡ à¤²à¤—à¤­à¤— 6 à¤‡à¤‚à¤š à¤Šà¤ªà¤° à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤œà¤¾à¤‚à¤˜ à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤µà¤¾à¤ªà¤¸ à¤²à¤¾à¤à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 11, title: "Hip Extension (All-Fours)", title_hi: "à¤¹à¤¿à¤ª à¤à¤•à¥à¤¸à¤Ÿà¥‡à¤‚à¤¶à¤¨ (à¤šà¤¾à¤°à¥‹à¤‚ à¤¹à¤¾à¤¥-à¤ªà¥ˆà¤°)", instruction_en: "Assume the 'all-fours' position. Extend the head up and the leg out to a flat position parallel to the floor. Return to the starting position. Repeat five times, alternating legs.", instruction_hi: "à¤šà¤¾à¤°à¥‹à¤‚ à¤¹à¤¾à¤¥-à¤ªà¥ˆà¤° à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ (à¤‘à¤²-à¤«à¥‹à¤°à¥à¤¸) à¤®à¥‡à¤‚ à¤†à¤à¤‚à¥¤ à¤¸à¤¿à¤° à¤•à¥‹ à¤Šà¤ªà¤° à¤‰à¤ à¤¾à¤à¤‚ à¤”à¤° à¤ªà¥ˆà¤° à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤•à¥‡ à¤¸à¤®à¤¾à¤¨à¤¾à¤‚à¤¤à¤° à¤¸à¥€à¤§à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤¬à¤¾à¤¹à¤° à¤«à¥ˆà¤²à¤¾à¤à¤‚à¥¤ à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤²à¥Œà¤Ÿ à¤†à¤à¤‚à¥¤ à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‹ à¤¬à¤¦à¤²à¤¤à¥‡ à¤¹à¥à¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 12, title: "Hand-Knee Rocking", title_hi: "à¤¹à¥ˆà¤‚à¤¡-à¤¨à¥€ à¤°à¥‰à¤•à¤¿à¤‚à¤—", instruction_en: "Kneel on a mat with your knees and ankles. Allow your buttocks to rest on your heels. Relax in this position and then slowly move forward with your elbows straight into a press-up position. Repeat five times.", instruction_hi: "à¤šà¤Ÿà¤¾à¤ˆ à¤ªà¤° à¤˜à¥à¤Ÿà¤¨à¥‡ à¤”à¤° à¤Ÿà¤–à¤¨à¥‹à¤‚ à¤•à¥‡ à¤¬à¤² à¤¬à¥ˆà¤ à¥‡à¤‚à¥¤ à¤…à¤ªà¤¨à¥‡ à¤•à¥‚à¤²à¥à¤¹à¥‹à¤‚ à¤•à¥‹ à¤…à¤ªà¤¨à¥€ à¤à¤¡à¤¼à¤¿à¤¯à¥‹à¤‚ à¤ªà¤° à¤Ÿà¤¿à¤•à¤¨à¥‡ à¤¦à¥‡à¤‚à¥¤ à¤‡à¤¸ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤†à¤°à¤¾à¤® à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤«à¤¿à¤° à¤…à¤ªà¤¨à¥€ à¤•à¥‹à¤¹à¤¨à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¸à¥€à¤§à¤¾ à¤°à¤–à¤¤à¥‡ à¤¹à¥à¤ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤†à¤—à¥‡ à¤•à¥€ à¤“à¤° à¤ªà¥à¤°à¥‡à¤¸-à¤…à¤ª à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤¬à¤¢à¤¼à¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" },
  { id: 13, title: "Press Up", title_hi: "à¤ªà¥à¤°à¥‡à¤¸ à¤…à¤ª", instruction_en: "Straighten your arms, raising your upper trunk off the floor. Keep your pelvis against the mat, allowing your lower back to arch. Hold for three seconds. Return to starting position. Repeat five times.", instruction_hi: "à¤…à¤ªà¤¨à¥€ à¤¬à¤¾à¤¹à¥‹à¤‚ à¤•à¥‹ à¤¸à¥€à¤§à¤¾ à¤•à¤°à¥‡à¤‚, à¤…à¤ªà¤¨à¥‡ à¤¶à¤°à¥€à¤° à¤•à¥‡ à¤Šà¤ªà¤°à¥€ à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤•à¥‹ à¤«à¤°à¥à¤¶ à¤¸à¥‡ à¤Šà¤ªà¤° à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤…à¤ªà¤¨à¥‡ à¤¶à¥à¤°à¥‹à¤£à¤¿ (à¤ªà¥‡à¤²à¥à¤µà¤¿à¤¸) à¤•à¥‹ à¤šà¤Ÿà¤¾à¤ˆ à¤•à¥‡ à¤–à¤¿à¤²à¤¾à¤« à¤°à¤–à¥‡à¤‚, à¤œà¤¿à¤¸à¤¸à¥‡ à¤†à¤ªà¤•à¥€ à¤ªà¥€à¤  à¤•à¥‡ à¤¨à¤¿à¤šà¤²à¥‡ à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤®à¥‡à¤‚ à¤®à¥‡à¤¹à¤°à¤¾à¤¬ (à¤†à¤°à¥à¤š) à¤¬à¤¨ à¤¸à¤•à¥‡à¥¤ à¤¤à¥€à¤¨ à¤¸à¥‡à¤•à¤‚à¤¡ à¤°à¥à¤•à¥‡à¤‚à¥¤ à¤µà¤¾à¤ªà¤¸ à¤²à¥Œà¤Ÿà¥‡à¤‚à¥¤ à¤ªà¤¾à¤‚à¤š à¤¬à¤¾à¤° à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤" }
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

// --- REALISTIC 3D HUMAN EXERCISE VISUALIZER ---
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
  const meta = EXERCISE_LABELS[exerciseId] || { pose: "Active", label: "Exercise" };
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
  }, [exerciseId]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/[0.06] mb-6 group" style={{ minHeight: 320, background: "linear-gradient(135deg, #080c14 0%, #0c1220 40%, #0a0f1a 100%)" }}>

      {/* Ambient glow halos behind the figure */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)", animation: "pulse 4s ease-in-out infinite" }} />
        <div className="absolute top-1/3 left-1/3 w-56 h-56 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", animation: "pulse 5s ease-in-out infinite 1s" }} />
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(20,184,166,0.06), transparent)" }} />
      </div>

      {/* Subtle animated grid overlay for depth */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* THE REALISTIC 3D EXERCISE IMAGE */}
      <div className="relative z-10 flex items-center justify-center w-full" style={{ minHeight: 280 }}>
        {!imgError ? (
          <img
            src={`/exercises/exercise_${exerciseId}.png`}
            alt={`${meta.label} demonstration`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="transition-all duration-700 ease-out select-none"
            style={{
              maxHeight: 300,
              maxWidth: "92%",
              objectFit: "contain",
              filter: imgLoaded ? "drop-shadow(0 8px 32px rgba(20,184,166,0.15))" : "blur(8px)",
              opacity: imgLoaded ? 1 : 0.3,
              animation: imgLoaded ? "exerciseBreathe 4s ease-in-out infinite" : "none",
            }}
            draggable={false}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 text-center px-8 py-12">
            <Activity size={40} className="text-teal-500/40" />
            <p className="text-slate-500 text-sm font-medium">Exercise Demonstration</p>
            <p className="text-slate-600 text-xs">{meta.pose} â€¢ {meta.label}</p>
          </div>
        )}

        {/* Cinematic vignette overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ boxShadow: "inset 0 0 80px 30px rgba(8,12,20,0.7)" }} />
      </div>

      {/* Floating live-pulse badge (top-right) */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-teal-500/15 shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <span className="text-[9px] font-bold text-teal-400/90 tracking-widest uppercase">3D Demo</span>
      </div>

      {/* Bottom metadata bar */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <span className="text-[9px] font-bold text-teal-400/90 tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-lg border border-teal-500/10 backdrop-blur-md shadow-lg">
          {meta.pose} â€¢ {meta.label}
        </span>
        <span className="text-[9px] font-bold text-indigo-400/90 tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/10 backdrop-blur-md shadow-lg">
          Step {exerciseId} of 13
        </span>
      </div>

      {/* CSS animation for the breathing/subtle scale effect */}
      <style>{`
        @keyframes exerciseBreathe {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.015) translateY(-2px); }
        }
      `}</style>
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
                  Tailor Custom Routine âœ¨
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
                    {isCustomizing ? "Analyzing Back âœ¨..." : "Generate Routine âœ¨"}
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
                  placeholder={isKeySaved ? "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" : "Paste your Gemini API Key here"}
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
                placeholder={isKeySaved ? "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" : "Paste your Gemini API Key here"}
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
            <h4 className="text-[10px] font-bold text-teal-500/80 uppercase tracking-widest mb-1.5">à¤¹à¤¿à¤‚à¤¦à¥€ à¤—à¤¾à¤‡à¤¡</h4>
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
                  <h5 className="text-[9px] font-bold text-teal-500/60 uppercase tracking-widest">à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦</h5>
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
