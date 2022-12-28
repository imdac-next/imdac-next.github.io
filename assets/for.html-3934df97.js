import{_ as t,M as o,p as r,q as c,R as n,t as s,N as a,a3 as i}from"./framework-dd056dd6.js";const l={},p=n("h1",{id:"sass-for",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-for","aria-hidden":"true"},"#"),s(" Sass @for")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/looping-through-lists-with-for",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sass-lang.com/documentation/at-rules/control/for",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"@for",-1),_=n("code",null,"to",-1),f=n("code",null,"through",-1),m={href:"https://sass-lang.com/documentation/interpolation",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"#{}",-1),v=i(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Interpolation should NOT be use when working with arithmetic.</p></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// loops 10 times</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">10 </span><span class="token punctuation">{</span>
  .<span class="token property">box</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span>#000<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={class:"try"},w={href:"https://www.sassmeister.com/gist/8833cfe75db63bb3d1b87a45239939f5",target:"_blank",rel:"noopener noreferrer"};function y(x,N){const e=o("ExternalLinkIcon");return r(),c("div",null,[p,n("div",u,[n("p",null,[n("a",d,[s('Watch "Looping through lists with @for" on LinkedIn Learning'),a(e)])])]),n("p",null,[s("The "),n("a",h,[k,a(e)]),s(" rule is used to count up or down from a range of numbers. For each iteration, the value of the iterator is set to current number and the block is evaluated. The range of numbers can be connected using "),_,s(", which will exclude the final number, or "),f,s(", which will include the final number.")]),n("p",null,[s("When using the iterator, or any variable, as part of a selector, property, or value, "),n("a",m,[s("interpolation"),a(e)]),s(" should be used. This is accomplished by using the "),b,s(" syntax.")]),v,n("div",g,[n("p",null,[n("a",w,[s("Try it yourself on Sassmeister"),a(e)])])])])}const L=t(l,[["render",y],["__file","for.html.vue"]]);export{L as default};
