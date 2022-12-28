import{_ as s,M as o,p as i,q as c,R as n,t as e,N as a,a3 as l}from"./framework-dd056dd6.js";const p={},r=n("h1",{id:"attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),e(" Attributes")],-1),d={class:"watch"},u={href:"https://www.linkedin.com/learning/vue-js-essential-training-2/binding-attributes-with-v-bind",target:"_blank",rel:"noopener noreferrer"},h={href:"https://codepen.io/planetoftheweb/pen/omXeJR",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuejs.org/v2/api/#v-bind",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"v-bind",-1),v=l(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dynamic Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the case of boolean attributes, where there existence implies true, <code>v-bind</code> will not render the attribute if the value is <code>null</code>, <code>undefined</code>, or <code>false</code>.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The shorthand for <code>v-bind</code> is the colon (<code>:</code>)</p></div>`,4),b={class:"try"},_={href:"https://codepen.io/IMD/pen/ZEYoOdy",target:"_blank",rel:"noopener noreferrer"};function g(f,w){const t=o("ExternalLinkIcon");return i(),c("div",null,[r,n("div",d,[n("p",null,[n("a",u,[e('Watch "Binding attributes with v-bind" on LinkedIn Learning'),a(t)])])]),n("p",null,[n("small",null,[e("Follow along with this video on "),n("a",h,[e("CodePen"),a(t)])])]),n("p",null,[e("It is sometime necessary to place dynamic values inside HTML attribute. However, in this case the mustache syntax will not work. Instead, it is necessary to use the "),n("a",k,[m,a(t)]),e(" directive.")]),v,n("div",b,[n("p",null,[n("a",_,[e("Try it yourself on CodePen"),a(t)])])])])}const y=s(p,[["render",g],["__file","attributes.html.vue"]]);export{y as default};
