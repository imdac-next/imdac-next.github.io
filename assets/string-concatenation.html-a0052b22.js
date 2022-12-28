import{_ as s,p as n,q as a,a3 as e}from"./framework-dd056dd6.js";const t={},o=e(`<h2 id="string-concatenation" tabindex="-1"><a class="header-anchor" href="#string-concatenation" aria-hidden="true">#</a> String Concatenation</h2><p>The term concatenation refers to the combining of two or more strings together. In JavaScript, this is accomplished by use of the plus sign (<code>+</code>) . Concatenation can be used with string literals, numbers and variables.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> <span class="token string">&#39;world&#39;</span>

<span class="token keyword">const</span> pet <span class="token operator">=</span> <span class="token string">&#39;dogs&#39;</span>
<span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I have &#39;</span> <span class="token operator">+</span> number <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> pet <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When concatenating, JavaScript will attempt to convert all values to strings. Furthermore, because the plus sign (<code>+</code>) is also use for addition, this can cause unexpected results when working with strings and numbers.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 3</span>
<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>String Literals do not support multiple lines, but it is possible to include multiple lines in a string by using the newline special character (<code>\\n</code>) and string concatenation.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">&#39;Sherlock Holmes\\n&#39;</span> <span class="token operator">+</span>
<span class="token string">&#39;The Hound of the Baskervilles&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[o];function c(r,p){return n(),a("div",null,i)}const d=s(t,[["render",c],["__file","string-concatenation.html.vue"]]);export{d as default};
