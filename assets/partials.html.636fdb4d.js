import{_ as t,r as p,o,a as c,b as s,e,F as l,d as n,f as r}from"./app.96040f5d.js";const i={},u=s("h1",{id:"sass-partials",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass-partials","aria-hidden":"true"},"#"),n(" Sass Partials")],-1),b={class:"custom-container watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/using-partials",target:"_blank",rel:"noopener noreferrer"},m=n('Watch "Using Partials" on LinkedIn Learning'),k={href:"https://sass-lang.com/guide#topic-4",target:"_blank",rel:"noopener noreferrer"},h=n("Partials"),g=n(" are Sass files that contain little snippets of CSS or Sass that can be included into other Sass files. Partials are a great way to create modularized CSS, which is easier to maintain. To create a partial, simply add an underscore at the beginning of the filename. This will inform that Sass compiler not to compile this file directly."),_=n("To add a partial to another Sass file, the "),f={href:"https://sass-lang.com/documentation/at-rules/import",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"@import",-1),y=n(" rule is used."),w=r(`<div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>While the <code>@import</code> rule can be used to import the partials, as of October 2019, the Sass team has begun discouraging it use in favor of the <code>@use</code> rule.</p><p>However, at this time, <code>@use</code> rule is not compatible with the compiler being used in this class. So, for now, we will continue to use <code>@import</code></p></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// _variables.scss</span>
<span class="token property"><span class="token variable">$offwhite</span></span><span class="token punctuation">:</span>    #EEE8D6<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$darkblue</span></span><span class="token punctuation">:</span>    #022933<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$yellow</span></span><span class="token punctuation">:</span>      #FFBA00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// _base.scss</span>

<span class="token selector">html </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.8rem<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$font-main</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color-main</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color-backgrounds</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">h1,h2,h3,h4,h5,h6 </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$font-highlight</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color-headlines</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// style.scss</span>
<span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4);function S(x,$){const a=p("ExternalLinkIcon");return o(),c(l,null,[u,s("div",b,[s("p",null,[s("a",d,[m,e(a)])])]),s("p",null,[s("a",k,[h,e(a)]),g]),s("p",null,[_,s("a",f,[v,e(a)]),y]),w],64)}var N=t(i,[["render",S]]);export{N as default};
