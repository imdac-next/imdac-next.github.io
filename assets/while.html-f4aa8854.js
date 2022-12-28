import{_ as c,M as a,p as i,q as p,N as e,R as n,t as s,a3 as l}from"./framework-dd056dd6.js";const u={},d=n("h1",{id:"while",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#while","aria-hidden":"true"},"#"),s(" while")],-1),r={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"while",-1),v=n("code",null,"true",-1),h=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token operator">++</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example, may look familiar because it is the same structure that is used by the <code>for</code> statement, which is the preferred method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> count <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> count<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>while</code> statement does have one advantage over the <code>for</code> statement, and that is to create a loop when the number of iterations is unknowable. This can occur if the condition is based on a random event, such as flipping a coin.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// flip the coin until heads appears (heads = 0, tails = 1)</span>
<span class="token keyword">let</span> coin <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// will continue looping until coin = 0 </span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>coin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  coin <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>coin<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do...while</h2><p>The <code>do...while</code> statement is a variation of the <code>while</code> statement. Like the <code>while</code> statement, it creates a loop that executes a block of code while the condition is <code>true</code>. However, the condition is evaluated <em>after</em> executing the statement, resulting in the block of code executing at least once.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// flip the coin until heads appears (heads = 0, tails = 1)</span>
<span class="token keyword">let</span> coin

<span class="token comment">// set the value of the coin first</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
  coin <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>coin<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>coin<span class="token punctuation">)</span> <span class="token comment">// loop until coin = 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(b,f){const t=a("Youtube"),o=a("ExternalLinkIcon");return i(),p("div",null,[d,e(t,{id:"NIZJeDXoxfE",citation:"griffith"}),n("p",null,[s("The "),n("a",r,[k,s(" statement"),e(o)]),s(" creates a loop that executes it block of code as long as the condition is "),v,s(". The condition is evaluated before the executing the block of code.")]),h])}const g=c(u,[["render",m],["__file","while.html.vue"]]);export{g as default};
