/* ==========================================================================
   TUBALCAIN — SHARED CONFIG (Global Layer)
   Rebuild Brief §5.0 / §6.4 — single source of truth.

   This file is the ONLY place a city, a WhatsApp number, a pricing figure,
   the guarantee copy or an approved stat may be defined. Page A
   (offer-v2.html) and the Page B master qualifier (index.html) both load
   this file and read from it — nothing here is duplicated into markup.

   To onboard a client installer, do not copy/edit a page. Add an entry to
   TUBALCAIN_INSTANCES below (or hand the same shape to the qualifier via a
   ?instance= config lookup in a real deployment) and add a row to the
   installer routing table used by the Make.com scenario (§5.0.1).
   ========================================================================== */

const TUBALCAIN_CONFIG = {

  brand: {
    name: "Tubalcain Ads Enterprise",
    founder: "Alajayibo Mystery",
    founderTitle: "Founder, Tubalcain Ads Enterprise",
    mainSiteUrl: "https://tubalcainmy.github.io",
    guideUrl: "https://tubalcain.systeme.io/solar-guide-thank-you",
    programName: "30-in-30 Verified Buyer Programme"
  },

  // Both numbers are monitored. Label describes which audience it serves —
  // see Global Fix G3. Do not add a third number without updating this file.
  whatsapp: {
    installer: {
      number: "2348029234994",
      label: "Installer / partner enquiries"
    },
    homeowner: {
      number: "2347071194277",
      label: "Homeowner qualifier leads"
    }
  },

  // Global Fix G4 — stated identically in the meta title, the badge, and on Page A.
  assessmentDurationLabel: "2 minutes",

  // Global Fix G6 / §4.6 — the system is now 9 gates, not 8, everywhere:
  // page copy, URL slugs, image alt text, meta descriptions.
  gateCount: 9,

  // §5.0 — single territories array. Page A must never list a territory
  // that has no qualifier coverage (Global Fix G2). The Page B master
  // shows every active territory; a client instance is filtered down to
  // that installer's own sub-areas (see TUBALCAIN_INSTANCES below).
  territories: [
    {
      id: "lagos-ikeja",
      city: "Lagos",
      zoneLabel: "Lagos — Mainland (Ikeja axis)",
      subareas: ["Ikeja", "Ogba", "Agege", "Ifako", "Agidingbi"],
      active: true
    },
    {
      id: "lagos-island",
      city: "Lagos",
      zoneLabel: "Lagos — Island & Lekki",
      subareas: ["VI", "Lekki", "Ajah", "Ikoyi", "Oniru"],
      active: true
    },
    {
      id: "abuja",
      city: "Abuja",
      zoneLabel: "Abuja — FCT",
      subareas: ["Wuse", "Maitama", "Gwarinpa", "Kubwa", "Lugbe"],
      active: true
    },
    {
      id: "ph",
      city: "Port Harcourt",
      zoneLabel: "Port Harcourt — Rivers State",
      subareas: ["GRA", "Trans Amadi", "Rumuola", "Eleme"],
      active: true
    },
    {
      id: "benin",
      city: "Benin City",
      zoneLabel: "Benin City — Edo State",
      subareas: ["GRA", "Uselu", "Ugbowo", "Sapele Road"],
      active: true
    },
    {
      id: "warri",
      city: "Warri",
      zoneLabel: "Warri — Delta State",
      subareas: ["Effurun", "Okumagba", "Uvwie"],
      active: true
    }
  ],

  // §8.1 — Approved Claims. Every number appearing on either page must be
  // read from here. If a figure is not in this object, it does not appear
  // on the site (§1.2 non-negotiable rule).
  approvedClaims: {
    closeRatePct: 38,                 // Page A only, once per page. Never a contact rate. Never on Page B.
    perBuyerFeeTier1: 5000,           // ₦, charged after delivery
    perBuyerFeeTier2: 10000,          // ₦, package-matched buyer
    depositAmount: 150000,            // ₦, one-time campaign deposit, funds Facebook ad spend
    depositSplitFirst: 75000,         // ₦, launch instalment
    depositSplitSecond: 75000,        // ₦, day-15 instalment
    monthOneAllIn: 300000,            // ₦150,000 + 30 × ₦5,000
    allInPerBuyerApprox: 10000,       // ₦, approx all-in per verified buyer
    guaranteedBuyers: 30,             // "30 verified buyers, or we fund month two ourselves"
    speedGuaranteeDays: 7,            // first verified buyer within 7 days
    speedGuaranteeFreeBuyers: 5,      // or the first 5 buyers are free
    territoryVolumeFloor: 25,         // verified buyers/month to keep exclusivity
    territoryNoticeDays: 7,           // written notice before an idle slot returns to the pool
    packageBracketMin: 1500000,       // ₦, Gate 3 minimum
    powerSpendMin: 30000,             // ₦/month, Gate 2 minimum — genuinely confirmed by Q1
    campaignLiveHours: 48,            // operationally committed
    monthTwoFreeBuyers: 5,            // loyalty term after 30 delivered buyers
    referralFreeBuyers: 5,            // referred installer launches -> referrer's next 5 free
    referralAcquisitionCostApprox: 25000, // ₦, cost to acquire a client this way
    leadCreditCapPerMonth: 5          // automatic credits, no review, capped per installer
  },

  // Approved guarantee copy — §4.3. Use verbatim; do not paraphrase.
  guaranteeCopy: "If we do not deliver 30 verified buyers in your first 30 days, we put our own ₦150,000 into Facebook and run month two for you. You send nothing further. And we keep running until all 30 are delivered — if that takes 45 days, it takes 45 days.",
  speedGuaranteeCopy: "Your first verified buyer arrives within 7 days of launch, or the first 5 buyers are free.",
  exclusivityCopy: "Your city is yours alone while your campaign is active and you are taking at least 25 verified buyers per month. Below that, the slot returns to the pool with 7 days written notice.",
  leadCreditCopy: "Any buyer who fails a gate on your first call — renting, wrong package bracket, already signed elsewhere — you flag it on WhatsApp and it is credited automatically. Up to 5 per month, no questions asked.",

  // §4.6 — Nine Gates, approved labels. Gate 3 wording is locked — never
  // "budget confirmed" or "budget verified" (banned language, §8.2).
  gates: [
    { n: 1, confirms: "Install window within 90 days", label: "Timeline Set" },
    { n: 2, confirms: "Monthly power spend of ₦30,000+", label: "ROI Verified" },
    { n: 3, confirms: "Package range of ₦1.5M+ selected", label: "Package Bracket Selected" },
    { n: 4, confirms: "Property ownership or documented authority", label: "Decision Maker" },
    { n: 5, confirms: "Roof, wiring and shading self-reported", label: "Home Condition Flagged" },
    { n: 6, confirms: "Not signed with another installer", label: "Winnable" },
    { n: 7, confirms: "Inside the installer's active territory", label: "Location Matched" },
    { n: 8, confirms: "WhatsApp given willingly, expecting contact", label: "Pre-Warmed" },
    { n: 9, confirms: "Full payment or instalment preference stated", label: "Payment Method Known" }
  ],

  // Generic package brackets shown on the Page B MASTER only. A client
  // instance replaces this with that installer's real, priced package list
  // (§5.0 "What differs between master and instance").
  genericPackageBrackets: [
    { val: "under500k", cost: 350000, size: "Below minimum", budgetLabel: "Under ₦500,000", belowMinimum: true },
    { val: "500k-1m", cost: 750000, size: "Below minimum", budgetLabel: "₦500,000 – ₦1,000,000", belowMinimum: true },
    { val: "1m-1.5m", cost: 1250000, size: "Below minimum", budgetLabel: "₦1,000,000 – ₦1,500,000", belowMinimum: true, recoverable: true },
    { val: "1.5m-2m", cost: 1750000, size: "3.5 – 5 kVA", budgetLabel: "₦1,500,000 – ₦2,000,000", note: "Small home — lights, fans, fridge, TV" },
    { val: "2m-3.5m", cost: 2750000, size: "5 – 7.5 kVA", budgetLabel: "₦2,000,000 – ₦3,500,000", note: "Medium home — above + AC unit" },
    { val: "3.5m-5.5m", cost: 4500000, size: "7.5 – 10 kVA", budgetLabel: "₦3,500,000 – ₦5,500,000", note: "Large home — full house power" },
    { val: "over5.5m", cost: 7000000, size: "10 kVA+", budgetLabel: "₦5,500,000+", note: "Large property or commercial use" },
    { val: "not-sure-budget", cost: 2000000, size: "To be assessed", budgetLabel: "Not sure yet", note: "Your installer will recommend the right package based on your energy usage", bracketUnknown: true }
  ],

  // Shared Make.com webhook — §5.0.1 / §7.3. Do not split per client.
  webhookUrl: "https://hook.us2.make.com/332cozc0nvke7hlwo5ucqbm4e2hirf27",

  // Meta / GA4 — master pixel + test routing key. A live client instance
  // overrides pixelId and routingKey in its own instance config.
  tracking: {
    metaPixelId: "2252101838924260",
    ga4MeasurementId: "G-62DKYP07HR"
  }
};

/* --------------------------------------------------------------------------
   INSTANCE LAYER (§5.0 / §6.4)
   One object per live client installer, keyed by a short, lowercase,
   permanent installer_id (never reused, even if the business renames).
   Deploying a client = adding an entry here, not duplicating a page.

   The master qualifier (this repo's index.html) runs with instanceKey =
   null and falls back to TUBALCAIN_CONFIG.territories / genericPackageBrackets.
   A client instance page sets window.TUBALCAIN_INSTANCE_KEY before this
   script loads (or is served from a build step that inlines the matching
   entry) so the qualifier narrows Q2 to that installer's sub-areas and Q5
   to that installer's real, priced package list.
   -------------------------------------------------------------------------- */
const TUBALCAIN_INSTANCES = {
  // Example only — not a live client. Shows the required shape:
  // "demo-lagos-solar": {
  //   installerName: "Demo Solar Co.",
  //   whatsapp: "2348000000000",
  //   territoryIds: ["lagos-ikeja"],
  //   paymentOptions: ["full", "instalment", "financing"],
  //   packages: [
  //     { name: "Starter 3.5kVA", kva: 3.5, price: 1800000, powers: "Lights, fans, fridge, TV" },
  //     { name: "Family 5kVA", kva: 5, price: 2600000, powers: "Starter + AC unit" }
  //   ],
  //   metaPixelId: "0000000000000000",
  //   routingKey: "demo-lagos-solar"
  // }
};

const TUBALCAIN_INSTANCE_KEY = (typeof window !== "undefined" && window.TUBALCAIN_INSTANCE_KEY) || null;
const TUBALCAIN_INSTANCE = TUBALCAIN_INSTANCE_KEY ? (TUBALCAIN_INSTANCES[TUBALCAIN_INSTANCE_KEY] || null) : null;
