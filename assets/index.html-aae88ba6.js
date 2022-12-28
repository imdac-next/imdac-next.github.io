import{_ as o,M as p,p as l,q as i,R as n,t as a,N as e,a3 as t}from"./framework-dd056dd6.js";const c={},r=n("h1",{id:"conditionals-and-loops",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#conditionals-and-loops","aria-hidden":"true"},"#"),a(" Conditionals and Loops")],-1),d=n("h2",{id:"conditional-rendering",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#conditional-rendering","aria-hidden":"true"},"#"),a(" Conditional Rendering")],-1),u={href:"https://vuejs.org/v2/guide/conditional.html#v-if",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"v-if",-1),h=n("code",null,"v-else",-1),v=n("code",null,"v-if",-1),m=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Hello, {{ name }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
    Hello, Friend
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Michael&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g=n("iframe",{height:"185",style:{width:"100%"},scrolling:"no",title:"Vue Basics - Conditional Data",src:"https://codepen.io/IMD/embed/abveOyE?height=185&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/abveOyE'>Vue Basics - Conditional Data</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),b={class:"try"},f={href:"https://codepen.io/IMD/pen/eYmrJrj",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"loops",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loops","aria-hidden":"true"},"#"),a(" Loops")],-1),_={href:"https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"v-for",-1),x=t(`<h3 id="iterating-over-arrays-and-objects" tabindex="-1"><a class="header-anchor" href="#iterating-over-arrays-and-objects" aria-hidden="true">#</a> Iterating over Arrays and Objects</h3><p>The <code>v-for</code> directive will render a block for every data item in an array or object. For iterating over an array or object, <code>v-for</code> directive using the following syntax as it&#39;s value: <code>item in collection</code>, where <code>collection</code> is the array or object and <code>item</code> is the current element.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ item }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#list&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Eggs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bread&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),I=n("iframe",{height:"219",style:{width:"100%"},scrolling:"no",title:"Vue Basics - Loops",src:"https://codepen.io/IMD/embed/XWmvbza?height=219&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/XWmvbza'>Vue Basics - Loops</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),M=t(`<h3 id="repeatedly-render" tabindex="-1"><a class="header-anchor" href="#repeatedly-render" aria-hidden="true">#</a> Repeatedly Render</h3><p>If you need repeatedly render a block, without an array or object, the <code>v-for</code> can be used to repeat a template block a specified number of times, as in the example below.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hip Hip Hurray!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q=n("iframe",{height:"218",style:{width:"100%"},scrolling:"no",title:"Vue Basics - Loops",src:"https://codepen.io/IMD/embed/RwWXPyO?height=218&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/RwWXPyO'>Vue Basics - Loops</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function D(j,V){const s=p("ExternalLinkIcon");return l(),i("div",null,[r,d,n("p",null,[a("The "),n("a",u,[k,e(s)]),a(" directive is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. The "),h,a(" directive can be added, which will be rendered if the expression of the previous "),v,a(" returns falsy.")]),m,g,n("div",b,[n("p",null,[n("a",f,[a("Try it yourself on CodePen"),e(s)])])]),y,n("p",null,[a("The "),n("a",_,[w,e(s)]),a(" directive can be used to repeatedly render a template block.")]),x,I,M,q])}const C=o(c,[["render",D],["__file","index.html.vue"]]);export{C as default};
