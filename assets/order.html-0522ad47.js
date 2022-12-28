import{_ as e,M as p,p as o,q as l,R as n,t as a,N as t,a3 as c}from"./framework-dd056dd6.js";const i={},u=c(`<h1 id="items-order" tabindex="-1"><a class="header-anchor" href="#items-order" aria-hidden="true">#</a> Items Order</h1><p>We can order flex items by using the property <code>order</code> on each item. The default value of the <code>order</code> property for each flex item is <code>0</code>.</p><p>A positive value will move the item towards the end of the main axis and a negative value will move it towards the start of the main axis.</p><p>Example: If we have the flex-direction set to row then a positive value will move the item towards the right and negative value will move it towards the left.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.flex-container</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>171<span class="token punctuation">,</span> 174<span class="token punctuation">,</span> 180<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-container .box1</span><span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-container .box3</span><span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=n("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Flexbox - Order",src:"https://codepen.io/IMD/embed/GRqwyGv?height=265&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/GRqwyGv'>Flexbox - Order</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),d=n("h2",{id:"references",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),a(" References")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/order",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items",target:"_blank",rel:"noopener noreferrer"};function m(h,g){const s=p("ExternalLinkIcon");return o(),l("div",null,[u,r,d,n("ul",null,[n("li",null,[n("a",k,[a("order - CSS: Cascading Style Sheets | MDN"),t(s)])]),n("li",null,[n("a",v,[a("Ordering Flex Items - CSS: Cascading Style Sheets | MDN"),t(s)])])])])}const f=e(i,[["render",m],["__file","order.html.vue"]]);export{f as default};
