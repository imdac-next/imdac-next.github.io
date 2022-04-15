import{_ as t,r as o,o as c,a as l,b as n,e as p,F as r,d as s,f as e}from"./app.96040f5d.js";const u={},i=n("h1",{id:"sass-extend-rule",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-extend-rule","aria-hidden":"true"},"#"),s(" Sass @extend Rule")],-1),b={class:"custom-container watch"},k={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-extend-method",target:"_blank",rel:"noopener noreferrer"},d=s('Watch "Using the @extend method" on LinkedIn Learning'),m=s("The "),h={href:"https://sass-lang.com/documentation/at-rules/extend",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"@extend",-1),_=s(" rule allows for one selector to inherit the styles of another. This gives developers the ability to write a single base style that can be shared among multiples selectors."),g=e(`<p>Imagine creating custom buttons styles for a web site. The base button style would be the same for all to the buttons, only the background and border colors would change across the different custom buttons. In this situation, a base class could be used <code>.btn</code> and then additional modifier class <code>.btn-cool</code> or <code>.btn-hot</code> as shown below.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-base</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>However, this method requires two classes to be added to each button. But, with the <code>@extend</code> rule, we include the base button styles in each of the custom buttons, eliminating the need to attach the <code>.btn</code> class to the buttons.</p>`,3),f=s("Furthermore, if we use a "),x={href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"noopener noreferrer"},w=s("placeholder selector"),v=s(" there is no need for "),E=n("code",null,".btn",-1),S=s(" class at all."),D=e(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color-btn-default</span></span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-btn-hot</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-btn-cool</span></span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>

<span class="token selector"><span class="token placeholder">%btn</span> </span><span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-default</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-hot</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-cool</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>The above SCSS would be compiled to the following CSS.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn-default, .btn-hot, .btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,3),T={class:"custom-container try"},$={href:"https://www.sassmeister.com/gist/4a4d0a8023599cd0e590bd5718fb6cae",target:"_blank",rel:"noopener noreferrer"},I=s("Try it yourself on Sassmeister");function B(L,N){const a=o("ExternalLinkIcon");return c(),l(r,null,[i,n("div",b,[n("p",null,[n("a",k,[d,p(a)])])]),n("p",null,[m,n("a",h,[y,p(a)]),_]),g,n("p",null,[f,n("a",x,[w,p(a)]),v,E,S]),D,n("div",T,[n("p",null,[n("a",$,[I,p(a)])])])],64)}var A=t(u,[["render",B]]);export{A as default};
