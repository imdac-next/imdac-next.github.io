import{_ as o,M as p,p as c,q as l,R as n,t as s,N as t,a3 as e}from"./framework-dd056dd6.js";const i={},u=n("h1",{id:"listening-to-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#listening-to-events","aria-hidden":"true"},"#"),s(" Listening to Events")],-1),r=n("h2",{id:"the-v-on-directive",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-v-on-directive","aria-hidden":"true"},"#"),s(" The "),n("code",null,"v-on"),s(" Directive")],-1),d={href:"https://vuejs.org/v2/api/#v-on",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"v-on",-1),k=n("code",null,"v-on",-1),h=n("code",null,"v-on",-1),g=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button clicked {{ counter }} times<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=n("iframe",{height:"262",style:{width:"100%"},scrolling:"no",title:"Vue Event Handling: Listening to Events",src:"https://codepen.io/IMD/embed/ExVzwvp?height=262&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/ExVzwvp'>Vue Event Handling: Listening to Events</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),b=n("h2",{id:"event-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#event-types","aria-hidden":"true"},"#"),s(" Event Types")],-1),_=n("code",null,"v-on",-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/Events",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"native DOM events",-1),q=n("code",null,"v-on",-1),x=e(`<p>The following examples are a short list of the possible event types that can be added to the <code>v-on</code> directive.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- event type: click --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- event type: keyup --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- event type: change --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name"><span class="token namespace">v-on:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- event type: submit --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shorthand" tabindex="-1"><a class="header-anchor" href="#shorthand" aria-hidden="true">#</a> Shorthand</h2><p>The shorthand for the <code>v-on</code> directive is the <code>@</code> character.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,6),E={href:"https://vuejs.org/v2/guide/events.html#Listening-to-Events",target:"_blank",rel:"noopener noreferrer"},T={href:"https://vuejs.org/v2/api/#v-on",target:"_blank",rel:"noopener noreferrer"};function w(V,D){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[s("The "),n("a",d,[v,t(a)]),s(" directive is used to listen and respond to DOM events. The event type follows the "),k,s(" directive separated by a colon. The value of the "),h,s(" directive contains a JavaScript expression, which is executed when the specified event occurs.")]),g,m,b,n("p",null,[s("The "),_,s(" directive is used to listen to "),n("a",f,[y,t(a)]),s(". The specific event type is applied by a colon and the event type proceeding the "),q,s(" directive.")]),x,n("ul",null,[n("li",null,[n("a",E,[s("Event Handling - Listening to Events"),t(a)])]),n("li",null,[n("a",T,[s("v-on"),t(a)])])])])}const I=o(i,[["render",w],["__file","listening-for-events.html.vue"]]);export{I as default};
