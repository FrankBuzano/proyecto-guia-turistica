class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          font-family: 'Manrope', sans-serif;
        }

        /* The Hero Section Container */
        .hero {
          position: relative;
          height: max(921px, 100vh);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
        }

        /* Asymmetric Mosaic Background */
        .asymmetric-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 250px;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .asymmetric-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-auto-rows: unset;
            height: 100%;
            padding: 1rem;
          }
        }

        .grid-item {
          overflow: hidden;
          border-radius: 1.5rem; /* rounded-xl */
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Grid Item Placements (from Tailwind responsive classes) */
        @media (min-width: 768px) {
          .item-1 { grid-column: 1 / 3; grid-row: 1 / 3; }
          .item-2 { grid-column: 3 / 4; grid-row: 1 / 2; }
          .item-3 { grid-column: 4 / 5; grid-row: 1 / 2; }
          .item-4 { grid-column: 5 / 7; grid-row: 1 / 2; }
          .item-5 { grid-column: 3 / 4; grid-row: 2 / 3; }
          .item-6 { grid-column: 4 / 5; grid-row: 2 / 3; }
          .item-7 { grid-column: 5 / 7; grid-row: 2 / 3; }
          .item-8 { grid-column: 1 / 2; grid-row: 3 / 4; }
          .item-9 { grid-column: 2 / 3; grid-row: 3 / 4; }
          .item-10 { grid-column: 3 / 5; grid-row: 3 / 4; }
          .item-11 { grid-column: 5 / 6; grid-row: 3 / 4; }
          .item-12 { grid-column: 6 / 7; grid-row: 3 / 4; }
        }

        /* Tonal Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          /* Recreating the from-black/60 via-emerald-950/40 to-emerald-950/90 */
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(2, 44, 25, 0.4) 50%,
            rgba(2, 44, 25, 0.9) 100%
          );
        }

        /* Hero Content */
        .content {
          position: relative;
          z-index: 20;
          text-align: center;
          max-width: 56rem; /* max-w-4xl */
          margin: 0 auto;
          padding: 0 1rem;
        }

        h1 {
          font-family: 'Noto Serif', serif;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 6rem; /* text-8xl */
          }
        }

        h1 .text-primary {
          color: #4de082;
          font-style: italic;
        }

        p {
          font-size: 1.125rem; /* text-lg */
          color: #a0a6a2; /* text-on-surface-variant */
          max-width: 42rem; /* max-w-2xl */
          margin: 0 auto 2.5rem; /* mb-10 */
          line-height: 1.625;
        }

        @media (min-width: 768px) {
          p {
            font-size: 1.25rem; /* text-xl */
          }
        }

        /* Buttons matching Design System */
        .btn-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .btn-group {
            flex-direction: row;
          }
        }

        .btn {
          width: 100%;
          padding: 1rem 2.5rem; /* py-4 px-10 */
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 1.125rem; /* text-lg */
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 640px) {
          .btn {
            width: auto;
          }
        }

        .btn-primary {
          background-color: #4de082;
          color: #003919;
          border: none;
          box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.2); /* shadow-xl shadow-emerald-500/20 */
          border-top: 1px solid rgba(255, 255, 255, 0.2); /* Inner glow */
        }

        .btn-primary:active {
          transform: scale(0.95);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.3); /* border-2 border-white/30 */
        }

        .btn-secondary:active {
          transform: scale(0.95);
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1); /* hover:bg-white/10 */
        }

      </style>
      <div class="hero">
        <div class="asymmetric-grid">
          <div class="grid-item item-1">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0itoZfChtK37oZQreWs5ygKRyOszBzK1Te_hUWw1zGRdA0D5Fex9fgh7lpezWAFrs3k8PiOna7XJ5u0qIF5cUqh0sOnnL8aLOWBYK1CojIbE2RxNRZbleWLZHgmmfNNzX2Wf_OT6Bro9TpqYXZcZ7lr_OQCm_5l2Lz2tFPZHC2M_8Qap6YV7gy9vy2Pqu57bu96Mf4HQ2CtKnt3BHGbvmAHc5SsFeB_ZU5h5p0fOJrl57wof1LOl2U4piQRRG4Oc2BPRbdKNFjKs" alt="">
          </div>
          <div class="grid-item item-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU66Nk9yGsSpcnxSQIBHPi4Om_DML_ZWo7VR9rzFi8PHIK6Kp_zGGmN8H0P-pY1SvWK34JrdTa7vUkMW2BIOzXaqsyoOX8zMKPWh0FBxt_t-uGquhSip5TI8jMSys1dr-JjPk16W9Y7AU9PCRFeJnKeGV_-ygGh2Ao9MjuG4MkiFiuiWM83VR9qZwgdsWPYSI4itd2vvhlrf5GPSJXnFIiRrMx17nGxAiJOVIytSqbM-bepmMOaYiWmVZGsS4R9IWRjTg5oz7f5yQ" alt="">
          </div>
          <div class="grid-item item-3">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_bL6Ngsk5QkoI1eJf2DonAWsY52YM8Me-IdULB9uYeBUGT225Nz8WYA4NbG9zSwv8iT00xmytITQ_8FRd55U_ACqD-SZmElpB0rre84v11C3N5HnaIJPM572VKCwOQ9MVSZ1P_SuSa2-hYhZ8cS-PWCNAupfcRXuHVIEjq8AIQ02NZLmdOzYdwIFA7XC1iFTBRM_e_bCOPV-Tnbp3DgKsaMYIUbef-LHF1clyVIM9mM9VqbPq6HXXaovCvgXJ6QSb8Ura10f9R0" alt="">
          </div>
          <div class="grid-item item-4">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2GXwPsZy5WTZIu9PEDr6LCwxiE5Kyi1K90_4_E-z0zuYyuGLRhdtIZJevtstbYi0Q0GXivqA-Asj_82iE8m7wuwROqkJedewufPn8LNgxXLYJXCspHSRKP5BVKZEh0tTq9QbQ1gwaAISBIIdzTbDWp3cSlXb8Ct1uJH3hOzws5od8z7r1Ue_TAdBRuusOKyAxmeKbewVchWdjJRC4M-WF_OH3M8ngtK5kaeq82k7EgzIu_STmmYOdgzbtu4TTJ8vCC0sb1-qz-c" alt="">
          </div>
          <div class="grid-item item-5">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVj4on6vq3B4Rm4FJsR6TYOlkJ-lSewzBQv7xtIfkYIF_8py3qO_no0vnBwX0yQHPNUL18KJ7xl8uKpYfeQZR17ivajbgtUAlyVDf_3iLq98NHAKfmsg4nyJY7mIlwSIN_l2L8wZk-Gv6HtRvXpUhAEBVTbofKJIIB7Ku1puYSYTU4zDN1x9K_f0M5ZZNDvSJ_knJjNJ6D3dn8XGmhJvyIr0pj9BS66ytv7A60SDOYd6HQ8zh_wRUeh97nibzcKYzaK6-IIcZVNk" alt="">
          </div>
          <div class="grid-item item-6">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlKNlTq9suAvzxmjLAqv_LVoy8N-vhh8ukAWvV0tD5ywCnbFfzXHrunktQME6Ry9GBVcRqpkT8wK6DsoWJ-82ym66buq9AtrXKONJiPjz5xrI3-Kow3y3V3acoCos2XG0E6mUechlsxPfNWdAB0z8nDXxmRzyV2yk6siKYiLJdbirypr3yIuef_nF9TQqE34SR7-uVzS-5sjbe7tC_N7v4VwHHo5ojXf_Kk02KgHZiwsMhFhzlPCEPtA9zStXg0yRP1w7XX-BkUjw" alt="">
          </div>
          <div class="grid-item item-7">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU66Nk9yGsSpcnxSQIBHPi4Om_DML_ZWo7VR9rzFi8PHIK6Kp_zGGmN8H0P-pY1SvWK34JrdTa7vUkMW2BIOzXaqsyoOX8zMKPWh0FBxt_t-uGquhSip5TI8jMSys1dr-JjPk16W9Y7AU9PCRFeJnKeGV_-ygGh2Ao9MjuG4MkiFiuiWM83VR9qZwgdsWPYSI4itd2vvhlrf5GPSJXnFIiRrMx17nGxAiJOVIytSqbM-bepmMOaYiWmVZGsS4R9IWRjTg5oz7f5yQ" alt="">
          </div>
          <div class="grid-item item-8">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVj4on6vq3B4Rm4FJsR6TYOlkJ-lSewzBQv7xtIfkYIF_8py3qO_no0vnBwX0yQHPNUL18KJ7xl8uKpYfeQZR17ivajbgtUAlyVDf_3iLq98NHAKfmsg4nyJY7mIlwSIN_l2L8wZk-Gv6HtRvXpUhAEBVTbofKJIIB7Ku1puYSYTU4zDN1x9K_f0M5ZZNDvSJ_knJjNJ6D3dn8XGmhJvyIr0pj9BS66ytv7A60SDOYd6HQ8zh_wRUeh97nibzcKYzaK6-IIcZVNk" alt="">
          </div>
          <div class="grid-item item-9">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0itoZfChtK37oZQreWs5ygKRyOszBzK1Te_hUWw1zGRdA0D5Fex9fgh7lpezWAFrs3k8PiOna7XJ5u0qIF5cUqh0sOnnL8aLOWBYK1CojIbE2RxNRZbleWLZHgmmfNNzX2Wf_OT6Bro9TpqYXZcZ7lr_OQCm_5l2Lz2tFPZHC2M_8Qap6YV7gy9vy2Pqu57bu96Mf4HQ2CtKnt3BHGbvmAHc5SsFeB_ZU5h5p0fOJrl57wof1LOl2U4piQRRG4Oc2BPRbdKNFjKs" alt="">
          </div>
          <div class="grid-item item-10">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlKNlTq9suAvzxmjLAqv_LVoy8N-vhh8ukAWvV0tD5ywCnbFfzXHrunktQME6Ry9GBVcRqpkT8wK6DsoWJ-82ym66buq9AtrXKONJiPjz5xrI3-Kow3y3V3acoCos2XG0E6mUechlsxPfNWdAB0z8nDXxmRzyV2yk6siKYiLJdbirypr3yIuef_nF9TQqE34SR7-uVzS-5sjbe7tC_N7v4VwHHo5ojXf_Kk02KgHZiwsMhFhzlPCEPtA9zStXg0yRP1w7XX-BkUjw" alt="">
          </div>
          <div class="grid-item item-11">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2GXwPsZy5WTZIu9PEDr6LCwxiE5Kyi1K90_4_E-z0zuYyuGLRhdtIZJevtstbYi0Q0GXivqA-Asj_82iE8m7wuwROqkJedewufPn8LNgxXLYJXCspHSRKP5BVKZEh0tTq9QbQ1gwaAISBIIdzTbDWp3cSlXb8Ct1uJH3hOzws5od8z7r1Ue_TAdBRuusOKyAxmeKbewVchWdjJRC4M-WF_OH3M8ngtK5kaeq82k7EgzIu_STmmYOdgzbtu4TTJ8vCC0sb1-qz-c" alt="">
          </div>
          <div class="grid-item item-12">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_bL6Ngsk5QkoI1eJf2DonAWsY52YM8Me-IdULB9uYeBUGT225Nz8WYA4NbG9zSwv8iT00xmytITQ_8FRd55U_ACqD-SZmElpB0rre84v11C3N5HnaIJPM572VKCwOQ9MVSZ1P_SuSa2-hYhZ8cS-PWCNAupfcRXuHVIEjq8AIQ02NZLmdOzYdwIFA7XC1iFTBRM_e_bCOPV-Tnbp3DgKsaMYIUbef-LHF1clyVIM9mM9VqbPq6HXXaovCvgXJ6QSb8Ura10f9R0" alt="">
          </div>
        </div>
        
        <div class="overlay"></div>
        
        <div class="content">
          <h1>
            Where Nature <br/>
            <span class="text-primary">Meets Wonder</span>
          </h1>
          <p>
            Explore Hidden Wonders with Eco-Friendly Tours Pura Vida: Adventure, Wildlife, Relaxation & Sustainable Luxury.
          </p>
          <div class="btn-group">
            <button class="btn btn-primary">Get Inspired</button>
            <button class="btn btn-secondary" style="margin-left: 1rem;">Start Planning</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
