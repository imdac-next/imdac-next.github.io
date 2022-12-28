import{_ as n,p as a,q as s,a3 as t}from"./framework-dd056dd6.js";const p={},e=t(`<h1 id="php-and-html" tabindex="-1"><a class="header-anchor" href="#php-and-html" aria-hidden="true">#</a> PHP and HTML</h1><h2 id="php-and-html-cycle" tabindex="-1"><a class="header-anchor" href="#php-and-html-cycle" aria-hidden="true">#</a> PHP and HTML Cycle</h2><p>PHP and HTML interact a lot. PHP is a HTML pre-processor, which means it is designed to generate HTML. In turn, HTML can pass data and information PHP through HTTP requests (we will learn more about that later), which is then used to generate new HTML. This cycle is how dynamic HTML that tracks and follows a user is created.</p><h2 id="intertwine-php-and-html" tabindex="-1"><a class="header-anchor" href="#intertwine-php-and-html" aria-hidden="true">#</a> Intertwine PHP and HTML</h2><p>Many beginning PHP developers will try to keep PHP separate from HTML. While a noble pursuit, it is the wrong one. Because PHP will run on the server and the PHP compiler will only send HTML to the browser, it is possible and encourage intertwine the two.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Hello Class&#39;</span><span class="token punctuation">;</span>
  <span class="token variable">$language</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;PHP&#39;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$title</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Greetings from the world of <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$language</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But we are not just limited to the just the output of variables. It possible to make HTML conditional or repeat HTML using PHP conditional statements and loops.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Hello Class&#39;</span><span class="token punctuation">;</span>
  <span class="token variable">$language</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;PHP&#39;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
        <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$title</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
      <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">else</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
        Hello World
      <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endif</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Greetings from the world of <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$language</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endfor</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-templates" tabindex="-1"><a class="header-anchor" href="#php-templates" aria-hidden="true">#</a> PHP Templates</h2><p>In most multiple pages, there are elements that remain consistent from page to page, like the navigation or footer. If a change is required to one of these repeating elements, you must make the change on every page. This can take time and can lead to mistakes. This is where PHP templates come in.</p><p>By creating templates, it is possible separating the repeating content from the page-specific materials. These means change are needed, they only need to made in one place.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token comment">/* Simple PHP Template */</span><span class="token delimiter important">?&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$title</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endif</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$content</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endif</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[e];function o(i,c){return a(),s("div",null,l)}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};
