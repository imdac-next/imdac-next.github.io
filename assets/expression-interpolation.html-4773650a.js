import{_ as n,p as s,q as a,a3 as e}from"./framework-dd056dd6.js";const t={},o=e('<h2 id="expression-interpolation" tabindex="-1"><a class="header-anchor" href="#expression-interpolation" aria-hidden="true">#</a> Expression Interpolation</h2><p>Template literal can contain placeholders (<code>${expression}</code>) which are used to embed contain an expressions into a string. Expressions can include variables, formulas or functions.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Ted&#39;</span>\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Have you met </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">`</span></span> <span class="token comment">// Have you met Ted?</span>\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">5</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The product of a and b is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a <span class="token operator">*</span> b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token comment">// The product of a and b is 8</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),p=[o];function i(c,r){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","expression-interpolation.html.vue"]]);export{d as default};
