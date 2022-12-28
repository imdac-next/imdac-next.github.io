import{_ as i,M as o,p as l,q as c,R as n,t as e,N as a,a3 as s}from"./framework-dd056dd6.js";const p={},r=s('<h1 id="using-a-string" tabindex="-1"><a class="header-anchor" href="#using-a-string" aria-hidden="true">#</a> Using a String</h1><h2 id="adding-an-html-element" tabindex="-1"><a class="header-anchor" href="#adding-an-html-element" aria-hidden="true">#</a> Adding an HTML Element</h2><p>Adding a simple HTML element to the page requires creating string, then add or insert then HTML element contained within the string to an existing HTML element using the <code>innerHTML</code> property or the <code>insertAdjacentHTML()</code> method.</p><p>A string literal can be used to represent a simple, static HTML element, which will be added to the existing HTML element, retrieved using either <code>getElementById()</code> or <code>querySelector()</code>. With the existing HTML element retrieved, the <code>innerHTML</code> property method can be used to add the new HTML element to the existing HTML element.</p>',4),d={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"innerHTML",-1),h=n("code",null,"innerHTML",-1),g=s(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>When adding HTML using <code>innerHTML</code>, any existing HTML inside of the target element will be overwritten.</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> simpleHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;New Title&lt;/h1&gt;&#39;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>

body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> simpleHTML
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=n("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/ExKmqpa?height=265&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/ExKmqpa'>HTML Creation - Using a String</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),k=s(`<h2 id="inserting-an-html-element" tabindex="-1"><a class="header-anchor" href="#inserting-an-html-element" aria-hidden="true">#</a> Inserting an HTML Element</h2><h3 id="using-concatenation" tabindex="-1"><a class="header-anchor" href="#using-concatenation" aria-hidden="true">#</a> Using concatenation</h3><p>When using the <code>innerHTML</code> property, the existing HTML will be overwritten. However, there will be times when we will want to insert HTML and keep the existing HTML. This can be accomplished by using <code>innerHTML</code> by using the concatenation operator (<code>+</code>).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> simpleHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;New Title&lt;/h1&gt;&#39;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// insert the new element at the beginning</span>
body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> simpleHTML <span class="token operator">+</span> body<span class="token punctuation">.</span>innerHTML

<span class="token comment">// insert the new element at the end</span>
body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> body<span class="token punctuation">.</span>innerHTML <span class="token operator">+</span> simpleHTML
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("iframe",{height:"315",style:{width:"100%"},scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/YzqVmdV?height=315&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/YzqVmdV'>HTML Creation - Using a String</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),b=n("h3",{id:"using-insertadjacenthtml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#using-insertadjacenthtml","aria-hidden":"true"},"#"),e(" Using insertAdjacentHTML")],-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"insertAdjacentHTML()",-1),T=s(`<p>The method takes two arguments. The first is the position, which will consist of one of the four predefined positions (see below). The second is a string of HTML.</p><p>The four predefined positions are:</p><ul><li><code>beforebegin</code>: Before the element</li><li><code>afterbegin</code>: Inside the element, before its first child</li><li><code>beforeend</code>: Inside the element, after its last child</li><li><code>afterend</code>: After the element</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- beforebegin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- afterbegin --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- beforeend --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- afterend --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With the <code>insertAdjacentHTML()</code> method, it is possible to insert HTML anywhere on the page.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> simpleHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;New Title&lt;/h1&gt;&#39;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> firstChild <span class="token operator">=</span> body<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;:first-child&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// insert the new element as after the first child</span>
firstChild<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;afterend&#39;</span><span class="token punctuation">,</span> simpleHTML<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),L=n("iframe",{height:"315",style:{width:"100%"},scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/yLObmrW?height=315&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/yLObmrW'>HTML Creation - Using a String</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function H(y,w){const t=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[e("The "),n("a",d,[u,a(t)]),e(" property can be used to get and set the HTML contained within an existing element. When getting HTML, the "),h,e(" property will return a string. When setting HTML, a string must be provided. JavaScript will automatically convert to the string into an HTML element.")]),g,m,k,v,b,n("p",null,[e("Of course, this is limited to just inserting elements to be a first child or last child. In contrast, the "),n("a",f,[M,a(t)]),e(" method inserts a HTML string into a specified position.")]),T,L])}const x=i(p,[["render",H],["__file","using-a-string.html.vue"]]);export{x as default};