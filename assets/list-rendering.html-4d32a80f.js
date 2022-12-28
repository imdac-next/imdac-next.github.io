import{_ as p,M as o,p as l,q as c,R as n,t as s,N as t,a3 as e}from"./framework-dd056dd6.js";const i={},u=n("h1",{id:"list-rendering",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#list-rendering","aria-hidden":"true"},"#"),s(" List Rendering")],-1),r=n("p",null,[s("Vue has many directives. One of most useful and widely used, is the "),n("code",null,"v-for"),s(" directive, which is used to display a list of items using data from an array or object. It can also be used with a number to repeatly render an element.")],-1),d=n("h2",{id:"v-for",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v-for","aria-hidden":"true"},"#"),s(" v-for")],-1),k={href:"https://v3.vuejs.org/api/directives.html#v-for",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"v-for",-1),m=n("code",null,"v-for",-1),h=n("code",null,"alias in expression",-1),g=n("code",null,"alias",-1),b=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Eggs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bread&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ item }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"try"},y={href:"https://codepen.io/IMD/pen/xxbjZbJ",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>Alternatively, you can also specify an alias for the index (array) or key (object).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">health</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">85</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stanima</span><span class="token operator">:</span> <span class="token number">35</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value, stat) in stats<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ stat }}: {{ value }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={class:"try"},x={href:"https://codepen.io/IMD/pen/dypmXmx",target:"_blank",rel:"noopener noreferrer"},q=e(`<h2 id="repeatedly-render" tabindex="-1"><a class="header-anchor" href="#repeatedly-render" aria-hidden="true">#</a> Repeatedly Render</h2><p>If you need repeatedly render a block, without an array or object, the <code>v-for</code> can be used to repeat a template block a specified number of times, as in the example below.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hip Hip Hurray!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j=n("iframe",{height:"218",style:{width:"100%"},scrolling:"no",title:"Vue Basics - List Rendering",src:"https://codepen.io/IMD/embed/RwWXPyO?height=218&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/RwWXPyO'>Vue Basics - List Rendering</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function I(V,M){const a=o("ExternalLinkIcon");return l(),c("div",null,[u,r,d,n("p",null,[s("The "),n("a",k,[v,t(a)]),s(" directive allows for a section of a template to be rendered for every data item in an array or object. The "),m,s(" directive does require a special syntax in the form of "),h,s(", where "),g,s(" is the current element being iterated on.")]),b,n("div",f,[n("p",null,[n("a",y,[s("Try it yourself on CodePen"),t(a)])])]),_,n("div",w,[n("p",null,[n("a",x,[s("Try it yourself on CodePen"),t(a)])])]),q,j])}const D=p(i,[["render",I],["__file","list-rendering.html.vue"]]);export{D as default};
