// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.thetirespecialist.net",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.thetirespecialist.net/","title_tag":"Mobile Tire Service Dallas | The Tire Specialist","meta_description":"#1 mobile tire service in Dallas–Fort Worth. Fast truck tire repair, roadside assistance and tire installation across DFW to keep your commercial fleet moving."},{"page_url":"https://www.thetirespecialist.net/thetirespecialist-1","title_tag":"Mobile Truck Roadside Service DFW | The Tire Specialist","meta_description":"24/7 mobile truck roadside service and emergency tire service across Dallas–Fort Worth, Denton, Arlington and more. Fast commercial truck tire repair on site."},{"page_url":"https://www.thetirespecialist.net/tires-3","title_tag":"Roadside Assistance DFW Area | The Tire Specialist","meta_description":"Call 800-719-2649 for quick, reliable roadside assistance and mobile truck tire repair within a 100-mile DFW radius including Dallas, Fort Worth and nearby cities."},{"page_url":"https://www.thetirespecialist.net/tires","title_tag":"Truck Tire Repair Fort Worth & DFW | The Tire Specialist","meta_description":"Mobile tire service for commercial trucks in Dallas–Fort Worth. Wide range of tire brands, expert tire replacement and on-site truck tire repair across DFW."},{"page_url":"https://www.thetirespecialist.net/tireservice","title_tag":"Fleet Tire Services Dallas | The Tire Specialist","meta_description":"Comprehensive fleet tire services in Dallas–Fort Worth. Regular inspections, tire replacement planning and mobile service to reduce downtime and tire costs."},{"page_url":"https://www.thetirespecialist.net/tires-2","title_tag":"Commercial Tire Repair DFW | The Tire Specialist","meta_description":"Trusted commercial tire repair and mobile tire service for fleets and trucks across the DFW metro. Responsive roadside help to keep your vehicles on schedule."},{"page_url":"https://www.thetirespecialist.net/thetirespecialist","title_tag":"Mobile Tire Technicians Texas | The Tire Specialist","meta_description":"Expert mobile tire technicians in Texas serving DFW trucks and fleets. Tips on tire wear, wheel alignment, commercial tire service and mobile roadside repairs."}],"keywords":["mobile tire service dallas","truck tire repair fort worth","roadside assistance dfw","tire installation dallas","emergency tire service texas","mobile truck roadside service","tire replacement fort worth","fleet tire services dallas","commercial tire repair dfw","mobile tire technicians texas"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.thetirespecialist.net/#autoshop",
  "name": "The Tire Specialist",
  "url": "https://www.thetirespecialist.net/",
  "image": [
    "https://static.wixstatic.com/media/90398c_de8d8f6a939f4cf79fed5d2a0f36f76d~mv2.jpg/v1/fill/w_147,h_110,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/90398c_de8d8f6a939f4cf79fed5d2a0f36f76d~mv2.jpg",
    "https://static.wixstatic.com/media/90398c_85719e8957384979b7afec223d8db065.jpg/v1/fill/w_152,h_182,al_c,q_80,blur_3,enc_avif,quality_auto/90398c_85719e8957384979b7afec223d8db065.jpg",
    "https://static.wixstatic.com/media/90398c_58e47c47c4ea40d9b05819af543b36e5~mv2.jpg/v1/crop/x_0,y_0,w_812,h_812/fill/w_583,h_583,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/TIRE%20MOBILE%20SERVICE_edited.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/90398c_90525c406f0b49ca9d73bb86bb719bc4%7Emv2_d_3264_1836_s_2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/90398c_90525c406f0b49ca9d73bb86bb719bc4%7Emv2_d_3264_1836_s_2.jpg",
  "telephone": "+1-800-719-2649",
  "email": "tts@thetirespecialist.net",
  "description": "The Tire Specialist provides premier mobile truck tire services, including roadside assistance, tire repair, and new tire installations for commercial trucks throughout the Dallas–Fort Worth metropolitan area.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas–Fort Worth",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "Dallas–Fort Worth metropolitan area"
    },
    {
      "@type": "Place",
      "name": "Addison"
    },
    {
      "@type": "Place",
      "name": "Allen"
    },
    {
      "@type": "Place",
      "name": "Azle"
    },
    {
      "@type": "Place",
      "name": "Balch Springs"
    },
    {
      "@type": "Place",
      "name": "Bedford"
    },
    {
      "@type": "Place",
      "name": "Benbrook"
    },
    {
      "@type": "Place",
      "name": "Burleson"
    },
    {
      "@type": "Place",
      "name": "Cedar Hill"
    },
    {
      "@type": "Place",
      "name": "Cleburne"
    },
    {
      "@type": "Place",
      "name": "Colleyville"
    },
    {
      "@type": "Place",
      "name": "Coppell"
    },
    {
      "@type": "Place",
      "name": "Corinth"
    },
    {
      "@type": "Place",
      "name": "Crowley"
    },
    {
      "@type": "Place",
      "name": "DeSoto"
    },
    {
      "@type": "Place",
      "name": "Duncanville"
    },
    {
      "@type": "Place",
      "name": "Ennis"
    },
    {
      "@type": "Place",
      "name": "Euless"
    },
    {
      "@type": "Place",
      "name": "Farmers Branch"
    },
    {
      "@type": "Place",
      "name": "Flower Mound"
    },
    {
      "@type": "Place",
      "name": "Forest Hill"
    },
    {
      "@type": "Place",
      "name": "Forney"
    },
    {
      "@type": "Place",
      "name": "Glenn Heights"
    },
    {
      "@type": "Place",
      "name": "Grapevine"
    },
    {
      "@type": "Place",
      "name": "Greenville"
    },
    {
      "@type": "Place",
      "name": "Haltom City"
    },
    {
      "@type": "Place",
      "name": "Highland Village"
    },
    {
      "@type": "Place",
      "name": "Hurst"
    },
    {
      "@type": "Place",
      "name": "Keller"
    },
    {
      "@type": "Place",
      "name": "Lancaster"
    },
    {
      "@type": "Place",
      "name": "Lewisville"
    },
    {
      "@type": "Place",
      "name": "Little Elm"
    },
    {
      "@type": "Place",
      "name": "Mansfield"
    },
    {
      "@type": "Place",
      "name": "Mineral Wells"
    },
    {
      "@type": "Place",
      "name": "Murphy"
    },
    {
      "@type": "Place",
      "name": "North Richland Hills"
    },
    {
      "@type": "Place",
      "name": "Prosper"
    },
    {
      "@type": "Place",
      "name": "Rockwall"
    },
    {
      "@type": "Place",
      "name": "Rowlett"
    },
    {
      "@type": "Place",
      "name": "Saginaw"
    },
    {
      "@type": "Place",
      "name": "Sachse"
    },
    {
      "@type": "Place",
      "name": "Seagoville"
    },
    {
      "@type": "Place",
      "name": "Sherman"
    },
    {
      "@type": "Place",
      "name": "Southlake"
    },
    {
      "@type": "Place",
      "name": "Terrell"
    },
    {
      "@type": "Place",
      "name": "The Colony"
    },
    {
      "@type": "Place",
      "name": "University Park"
    },
    {
      "@type": "Place",
      "name": "Watauga"
    },
    {
      "@type": "Place",
      "name": "Waxahachie"
    },
    {
      "@type": "Place",
      "name": "Weatherford"
    },
    {
      "@type": "Place",
      "name": "White Settlement"
    },
    {
      "@type": "Place",
      "name": "Wylie"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "description": "Mobile tire and roadside service within a 100-mile radius of the Dallas–Fort Worth metropolitan area."
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://twitter.com"
  ],
  "serviceType": [
    "Mobile truck tire service",
    "Mobile tire installation",
    "Truck roadside assistance",
    "Emergency mobile road service",
    "Commercial truck tire repair",
    "Fleet tire inspection and service"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Tire and Roadside Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Truck Roadside Service",
          "description": "24/7 mobile roadside assistance for commercial trucks in the Dallas–Fort Worth area, including tire repairs and emergency support."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Tire Service",
          "description": "On-site tire repair and replacement for commercial trucks to minimize downtime and keep fleets on schedule."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fleet Tire Service",
          "description": "Regular fleet inspections and tire maintenance, including checks for air pressure, tread depth, alignment issues, and mis-matched duals."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
