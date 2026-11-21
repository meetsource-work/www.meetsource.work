const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.TgZBXeDn.js","_astro/transform.gSNGMBKD.js"])))=>i.map(i=>d[i]);
const C="modulepreload",A=function(e){return"/"+e},g={},h=function(d,m,r){let o=Promise.resolve();if(m&&m.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),t=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(m.map(n=>{if(n=A(n),n in g)return;g[n]=!0;const l=n.endsWith(".css"),v=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${v}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":C,l||(c.as="script"),c.crossOrigin="",c.href=n,t&&c.setAttribute("nonce",t),document.head.appendChild(c),l)return new Promise((w,E)=>{c.addEventListener("load",w),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function i(a){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=a,window.dispatchEvent(t),!t.defaultPrevented)throw a}return o.then(a=>{for(const t of a||[])t.status==="rejected"&&i(t.reason);return d().catch(i)})},s=(...e)=>console.log("[astro-mermaid]",...e),p=(...e)=>console.error("[astro-mermaid]",...e),b=()=>document.querySelectorAll("pre.mermaid").length>0;let u=null;async function L(){return u||(s("Loading mermaid.js..."),u=h(()=>import("./mermaid.core.TgZBXeDn.js").then(e=>e.bI),__vite__mapDeps([0,1])).then(async({default:e})=>{const d=[];if(d&&d.length>0){s("Registering",d.length,"icon packs");const r=d.map(o=>o.icons?{name:o.name,icons:o.icons}:{name:o.name,loader:()=>fetch(o.url).then(i=>i.json())});await e.registerIconPacks(r)}const m=await h(()=>import("./mermaid-layout-elk.core.C7YgWsA-.js").then(r=>r.m),[]).catch(()=>null);return m?.default&&(s("Registering elk layouts"),e.registerLayoutLoaders(m.default)),e}).catch(e=>{throw p("Failed to load mermaid:",e),u=null,e}),u)}const f={startOnLoad:!1,theme:"neutral"};async function k(){s("Initializing mermaid diagrams...");const e=document.querySelectorAll("pre.mermaid");if(s("Found",e.length,"mermaid diagrams"),e.length===0)return;const d=await L();let m=f.theme;d.initialize({...f,theme:m,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const r of e){if(r.hasAttribute("data-processed"))continue;r.hasAttribute("data-diagram")||r.setAttribute("data-diagram",r.textContent||"");const o=r.getAttribute("data-diagram")||"",i="mermaid-"+Math.random().toString(36).slice(2,11);s("Rendering diagram:",i);try{const a=document.getElementById(i);a&&a.remove();const{svg:t}=await d.render(i,o);r.innerHTML=t,r.setAttribute("data-processed","true"),s("Successfully rendered diagram:",i)}catch(a){p("Mermaid rendering error for diagram:",i,a);const t=document.createElement("div");t.style.cssText="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;";const n=document.createElement("strong");n.textContent="Error rendering diagram:";const l=document.createElement("span");l.textContent=" "+(a.message||"Unknown error"),t.appendChild(n),t.appendChild(l),r.textContent="",r.appendChild(t),r.setAttribute("data-processed","true")}}}b()?(s("Mermaid diagrams detected on initial load"),k()):s("No mermaid diagrams found on initial load");document.addEventListener("astro:after-swap",()=>{s("View transition detected"),b()&&k()});const y=document.createElement("style");y.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(y);export{h as _};
