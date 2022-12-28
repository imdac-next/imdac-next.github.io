import{_ as o,M as t,p,q as c,N as n,R as a,t as s,a3 as r}from"./framework-dd056dd6.js";const i={},u=r(`<h1 id="picture-element" tabindex="-1"><a class="header-anchor" href="#picture-element" aria-hidden="true">#</a> <code>&lt;picture&gt;</code> Element</h1><ul><li><code>&lt;picture&gt;</code> elements allow us to set different image sources based on device properties</li><li><code>&lt;picture&gt;</code> elements use an <code>&lt;img&gt;</code> element as a fallback.</li><li>The <code>&lt;img&gt;</code> element will be used as the container to render the picture.</li><li>Multiple <code>&lt;source&gt;</code> elements are used to load different versions of the picture.</li><li>Each <code>&lt;source&gt;</code> element gets a <code>media </code>attribute which defines the parameters for loading the image.</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“hugePic.jpg”</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“(min-width:</span> <span class="token attr-name">1200px)”</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“normalPic.jpg”</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“(min-width:</span> <span class="token attr-name">800px)</span> <span class="token attr-name">and</span> <span class="token attr-name"><span class="token namespace">(max-width:</span></span> <span class="token attr-name">1200px)”</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“smallPic.jpg”</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“(max-width:</span> <span class="token attr-name">800px)”</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“default.jpg”</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“image</span> <span class="token attr-name">description”</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://www.youtube.com/watch?v=mwu2U_Sm6LY",target:"_blank",rel:"noopener noreferrer"},m={href:"http://responsiveimages.org/demos/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",target:"_blank",rel:"noopener noreferrer"};function h(v,_){const l=t("Youtube"),e=t("ExternalLinkIcon");return p(),c("div",null,[u,n(l,{id:"mwu2U_Sm6LY",citation:"griffith"}),a("ul",null,[a("li",null,[a("a",d,[s("Img and Picture video"),n(e)])]),a("li",null,[a("a",m,[s("Examples of Responsive Images"),n(e)])]),a("li",null,[a("a",k,[s("MDN Responsive Images Tutorial"),n(e)])]),a("li",null,[a("a",g,[s("MDN picture element ref"),n(e)])])])])}const b=o(i,[["render",h],["__file","index.html.vue"]]);export{b as default};