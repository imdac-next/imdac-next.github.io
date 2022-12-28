import{_ as p,M as c,p as o,q as i,R as n,t as s,N as t,a3 as e}from"./framework-dd056dd6.js";const l={},u=n("h1",{id:"react-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-events","aria-hidden":"true"},"#"),s(" React Events")],-1),r={href:"https://reactjs.org/docs/handling-events.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>activateLaser<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  Activate Laser
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The event handler function is defined within the component function and will be invoked when the event occurs.</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">function</span> <span class="token function">activateLaser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Laser Activated!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>activateLaser<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Activate Laser
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={class:"try"},v={href:"https://codepen.io/IMD/pen/oNdEyJx",target:"_blank",rel:"noopener noreferrer"},m={href:"https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers",target:"_blank",rel:"noopener noreferrer"},g=e(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">LaserButton</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">activateLaser</span><span class="token punctuation">(</span><span class="token parameter">power</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Laser is set to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>power<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">activateLaser</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>power<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>power<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={class:"try"},h={href:"https://codepen.io/IMD/pen/vYjdrMx",target:"_blank",rel:"noopener noreferrer"};function _(f,x){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[n("a",r,[s("React event handling"),t(a)]),s(" is accomplished using React events attributes and event handler functions. React event attributes are similar to HTML event attributes, except that React events are named using camelCase.")]),d,n("div",k,[n("p",null,[n("a",v,[s("Try it yourself on CodePen"),t(a)])])]),n("p",null,[n("a",m,[s("Passing arguments"),t(a)]),s(" to React event handlers is common practice but must be accomplished from within a function.")]),g,n("div",b,[n("p",null,[n("a",h,[s("Try it yourself on CodePen"),t(a)])])])])}const w=p(l,[["render",_],["__file","index.html.vue"]]);export{w as default};