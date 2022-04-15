import{_ as p,r as t,o,a as c,b as n,e,F as l,d as s,f as r}from"./app.96040f5d.js";const i={},u=n("h1",{id:"nesting-in-sass",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nesting-in-sass","aria-hidden":"true"},"#"),s(" Nesting in Sass")],-1),b={class:"custom-container watch"},k={href:"https://www.linkedin.com/learning/sass-essential-training/nesting-your-styles",target:"_blank",rel:"noopener noreferrer"},m=s('Watch "Nesting your styles" on LinkedIn Learning'),d={href:"https://sass-lang.com/guide#topic-3",target:"_blank",rel:"noopener noreferrer"},_=s("Nesting"),h=s(" in Sass is used to create the same visual hierarchy in CSS as in HTML. Each nested rule will have its parent selector added to its own, allowing for must more readable CSS."),g=r(`<p>To nest a style rule, simple place the child style inside the parent&#39;s style block.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>

<span class="token selector">ul </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dotted <span class="token variable">$red</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>The Sass code above will be compiled to the following CSS.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dotted #D14348<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4),y={class:"custom-container try"},f={href:"https://www.sassmeister.com/gist/8e812aab2beecb42bd1890b453492ef7",target:"_blank",rel:"noopener noreferrer"},v=s("Try it yourself on Sassmeister");function x(w,S){const a=t("ExternalLinkIcon");return o(),c(l,null,[u,n("div",b,[n("p",null,[n("a",k,[m,e(a)])])]),n("p",null,[n("a",d,[_,e(a)]),h]),g,n("div",y,[n("p",null,[n("a",f,[v,e(a)])])])],64)}var L=p(i,[["render",x]]);export{L as default};
