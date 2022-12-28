import{_ as i,M as c,p as r,q as l,R as n,t as e,N as s,a3 as t}from"./framework-dd056dd6.js";const p={},d=n("h1",{id:"creating-new-strings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#creating-new-strings","aria-hidden":"true"},"#"),e(" Creating New Strings")],-1),u=n("p",null,"Most string methods in JavaScript create and return new strings, instead of altering the original. But the following methods are used modified the characters of the original strings to create a whole new string.",-1),h=n("h2",{id:"concat",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concat","aria-hidden":"true"},"#"),e(" concat()")],-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"concat()",-1),m=n("code",null,"+",-1),v=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span>

<span class="token comment">// combine greeting and subject with a comma and space between</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello, World&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat()</h2>`,2),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"repeat()",-1),f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> chant <span class="token operator">=</span> <span class="token string">&#39;I think I can. &#39;</span>

<span class="token comment">// repeat chant three times.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chant<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;I think I can. I think I can. I think I can.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace()</h2>`,2),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"replace()",-1),x=n("code",null,"pattern",-1),S=n("code",null,"replacement",-1),I=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> chant <span class="token operator">=</span> <span class="token string">&#39;I think I can.&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chant<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;think&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;know&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;I know I can.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>pattern</code> can also be a regular expression, which will allow multiple occurrences of the pattern to be replaced.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">&#39;The Little Engine that Could&#39;</span>

<span class="token comment">// create a slug from the title</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;the-little-engine-that-could&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim()</h2>`,4),T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"trim()",-1),y=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;    Hello, World!     &#39;</span><span class="token punctuation">;</span>

<span class="token comment">// removing all whitespace from string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello, World!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"trimStart()",-1),z={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd",target:"_blank",rel:"noopener noreferrer"},J=n("code",null,"trimEnd()",-1);function R(G,O){const a=c("ExternalLinkIcon"),o=c("Youtube");return r(),l("div",null,[d,u,h,n("p",null,[e("The "),n("a",g,[k,s(a)]),e(" method is used to concatenate strings together. This is alternative to using the plus sign ("),m,e("). The method accepts multiple string arguments.")]),v,n("p",null,[e("The "),n("a",b,[_,s(a)]),e(" method is creates and returns a new string by combining the specified number of copies of the string tother.")]),f,s(o,{id:"mcCn1NAu22k",citation:"griffith"}),n("p",null,[e("The "),n("a",w,[j,s(a)]),e(" method returns a new string with some or all matches of a "),x,e(" replaced by a "),S,e(".")]),I,s(o,{id:"ZE1hi41_ZzE",citation:"griffith"}),n("p",null,[e("The "),n("a",T,[W,s(a)]),e(" method removes whitespace from the beginning and the end of a string. In this context, whitespace refers to all the whitespace characters including: spaces, tabs and returns.")]),y,n("p",null,[e("Also see "),n("a",E,[N,s(a)]),e(" and "),n("a",z,[J,s(a)]),e(" for alternative methods of removing whitespace from a string.")])])}const C=i(p,[["render",R],["__file","creating-new-strings.html.vue"]]);export{C as default};
