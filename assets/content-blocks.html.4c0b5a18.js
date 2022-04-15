import{_ as t,r as o,o as p,a as c,b as n,e,F as r,d as s,f as l}from"./app.96040f5d.js";const i={},u=n("h1",{id:"sass-content-blocks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-content-blocks","aria-hidden":"true"},"#"),s(" Sass Content Blocks")],-1),k={class:"custom-container watch"},b={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-content-container",target:"_blank",rel:"noopener noreferrer"},d=s('Watch "Using the @content container" on LinkedIn Learning'),m=s("A "),_={href:"https://sass-lang.com/documentation/at-rules/mixin#content-blocks",target:"_blank",rel:"noopener noreferrer"},h=s("content block"),f=s(" is an block of styles that are taken by a mixin. When a mixin is declare, a content block can by included using the "),g=n("code",null,"@content",-1),y=s(" at-rule in the mixin's body."),x=l(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">hover </span><span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>[disabled]<span class="token punctuation">)</span><span class="token selector">:hover </span><span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> .375rem .75rem<span class="token punctuation">;</span>
  
  <span class="token property">background-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #007bff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> .25rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  
  <span class="token keyword">@include</span> <span class="token selector">hover </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #0069d9<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #0069d9<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,1),v={class:"custom-container try"},w={href:"https://www.sassmeister.com/gist/c13a02f3bf928d6b3efcc2d5b0a1a027",target:"_blank",rel:"noopener noreferrer"},B=s("Try it yourself on Sassmeister");function L(N,V){const a=o("ExternalLinkIcon");return p(),c(r,null,[u,n("div",k,[n("p",null,[n("a",b,[d,e(a)])])]),n("p",null,[m,n("a",_,[h,e(a)]),f,g,y]),x,n("div",v,[n("p",null,[n("a",w,[B,e(a)])])])],64)}var I=t(i,[["render",L]]);export{I as default};
