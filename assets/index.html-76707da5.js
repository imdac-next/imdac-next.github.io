import{_ as o,M as t,p as i,q as c,R as e,t as n,N as a,a3 as l}from"./framework-dd056dd6.js";const r={},d=l(`<h1 id="javascript-comments" tabindex="-1"><a class="header-anchor" href="#javascript-comments" aria-hidden="true">#</a> JavaScript Comments</h1><p>JavaScript, like most programming languages, provides developers ways to leave comments through the code. JavaScript comments can be used to explain a block code, to make code more readable, or to leave messages for other developers or yourself. They can also be used to prevent execution, when testing or experiment with code.</p><p>JavaScript has two forms of comments Single Line Comments and Multi-line Comments.</p><h2 id="single-line-comments" tabindex="-1"><a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a> Single Line Comments</h2><p>Single line comments start with <code>//</code> and continue until the end of the line. Any text following the <code>//</code> and before the end of the line will be ignored by JavaScript.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// The following line demonstrates how to log a message to the console</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// The following line demonstrates how to log a warning to the console</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Take me to your leader!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Single line comments can be uses on the same line as code. These comments are referred as inline comments.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">5</span> 

<span class="token keyword">const</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token comment">// The value of c should be 8 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-line-comments" tabindex="-1"><a class="header-anchor" href="#multi-line-comments" aria-hidden="true">#</a> Multi-line Comments</h2><p>Multi-line comments, or block comments, start with <code>/*</code> and end with <code>*/</code></p><p>Any text between <code>/*</code> and <code>*/</code> will be ignored by JavaScript.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
The multiply function takes 
two numbers and multiplies them together
and returns the product.
*/</span>
<span class="token keyword">function</span> <span class="token function">multiply</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Multi-line comments are often used for formal documentation</p></div><h2 id="preventing-code-execution" tabindex="-1"><a class="header-anchor" href="#preventing-code-execution" aria-hidden="true">#</a> Preventing Code Execution</h2><p>Using comments to prevent code execution is an acceptable way to test and experiment with code.</p><p>Adding <code>//</code> in front of a line of code will prevent the line of code from executing.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// The following line demonstrates how to log a message to the console</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// The following line demonstrates how to log a warning to the console</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Take me to your leader!&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// The following line will not be executed</span>
<span class="token comment">// console.error(&#39;Resistance is futile!&#39;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),p={href:"https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),n(" References")],-1),u={href:"https://www.w3schools.com/js/js_comments.asp",target:"_blank",rel:"noopener noreferrer"};function v(h,k){const s=t("ExternalLinkIcon");return i(),c("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[n("How to Write Comments in JavaScript"),a(s)])])]),m,e("ul",null,[e("li",null,[e("a",u,[n("JavaScript Comments"),a(s)])])])])}const g=o(r,[["render",v],["__file","index.html.vue"]]);export{g as default};
