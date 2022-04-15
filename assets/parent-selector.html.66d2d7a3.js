import{_ as t,r as o,o as c,a as l,b as n,e,F as r,d as s,f as p}from"./app.96040f5d.js";const i={},u=n("h1",{id:"sass-parent-selector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-parent-selector","aria-hidden":"true"},"#"),s(" Sass Parent Selector")],-1),b={class:"custom-container watch"},k={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-extend-method",target:"_blank",rel:"noopener noreferrer"},d=s('Watch "Referencing parent selectors with &" on LinkedIn Learning'),m=s("The "),h={href:"https://sass-lang.com/documentation/style-rules/parent-selector",target:"_blank",rel:"noopener noreferrer"},_=s("parent selector"),g=s(" ("),f=n("code",null,"&",-1),y=s(") is a special selector found in Sass and is used to refer to the outer selector when nesting. The parent selector makes it possible to neatly add and complex selectors in an easy to read fashion."),v=p(`<p>The parent selector can be used in conjunction with pseudo-classes. For example, it could be used to style navbar links.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$yellow</span></span><span class="token punctuation">:</span> #FFBA00<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>

<span class="token selector">.link </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$border-color</span><span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover, <span class="token parent important">&amp;</span>.active </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$yellow</span><span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:last-of-type </span><span class="token punctuation">{</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Which would produce the following CSS.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link:hover, .link.active</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #FFBA00<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link:last-of-type</span> <span class="token punctuation">{</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4),x=s("The parent selector can also be used to when create structured class names like ones used methodologies like "),w={href:"http://getbem.com/",target:"_blank",rel:"noopener noreferrer"},F=s("BEM"),S=s("."),B=p(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$light-grey</span></span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>

<span class="token selector">.form </span><span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$light-grey</span><span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>__input </span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,1);function $(T,E){const a=o("ExternalLinkIcon");return c(),l(r,null,[u,n("div",b,[n("p",null,[n("a",k,[d,e(a)])])]),n("p",null,[m,n("a",h,[_,e(a)]),g,f,y]),v,n("p",null,[x,n("a",w,[F,e(a)]),S]),B],64)}var N=t(i,[["render",$]]);export{N as default};
