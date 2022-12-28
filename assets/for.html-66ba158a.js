import{_ as t,M as o,p,q as i,R as n,t as s,N as e,a3 as l}from"./framework-dd056dd6.js";const c={},r=n("h1",{id:"php-for-loop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-for-loop","aria-hidden":"true"},"#"),s(" PHP for Loop")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/php-essential-training-2/for-loops",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.php.net/manual/en/control-structures.for.php",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"for",-1),h=l(`<p>The three expressions are as follows:</p><ol><li>The <em><strong>initialization</strong></em> of the iterator</li><li>The <em><strong>condition</strong></em>, which is checked before each loop to see if the loop should continue</li><li>The <em><strong>iteration</strong></em> of the iterator</li></ol><p>The statement is enclosed in a set of curly braces (<code>{}</code>) and is executed each the statement loops as long as the <em><strong>condition</strong></em> evaluates to true.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (initialization; condition; iteration) {
  statement;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The structure of the <code>for</code> loop is similar to the example used when discussing the <code>while</code> loop. In the following example, a <code>while</code> loop is used to output 1 to 10.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token variable">$count</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// initialization </span>

  <span class="token comment">// output 1 to 10</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$count</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// condition</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$count</span><span class="token punctuation">}</span></span>, &quot;</span><span class="token punctuation">;</span>
    <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// iteration</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This same task can be done using the the <code>for</code> loop</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token comment">// output 1 to 10</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$count</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$count</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$count</span><span class="token punctuation">}</span></span>, &quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-for-loop-with-arrays" tabindex="-1"><a class="header-anchor" href="#using-for-loop-with-arrays" aria-hidden="true">#</a> Using for Loop with Arrays</h2><p>The <code>for</code> loop can be used to iterate over an indexed array. This is accomplished by initializing the variable to serve as the array index, and the condition will be as long as the index is less than the number of items in the array. The <code>count()</code> function can be used to get the number of items in an array.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token variable">$ages</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token variable">$numOfItems</span> <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$ages</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$index</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$index</span> <span class="token operator">&lt;</span> <span class="token variable">$numOfItems</span><span class="token punctuation">;</span> <span class="token variable">$index</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$ages</span><span class="token punctuation">[</span><span class="token variable">$index</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The above example only works with indexed arrays. For associative arrays, use the <code>foreach</code> loop.</p></div>`,12);function v(b,g){const a=o("ExternalLinkIcon");return p(),i("div",null,[r,n("div",u,[n("p",null,[n("a",d,[s('Watch "For loops" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("The "),n("a",k,[m,e(a)]),s(" loop is the most complex loop in PHP. The loop consists of three expressions separated by semi-colons and enclosed in parentheses and statements.")]),h])}const x=t(c,[["render",v],["__file","for.html.vue"]]);export{x as default};
