import{_ as i,M as o,p as l,q as c,N as s,R as n,t as e,a3 as t}from"./framework-dd056dd6.js";const r={},d=n("h1",{id:"php-syntax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-syntax","aria-hidden":"true"},"#"),e(" PHP Syntax")],-1),u=n("h2",{id:"the-php-extension",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-php-extension","aria-hidden":"true"},"#"),e(" The .php Extension")],-1),h=n("p",null,[e("Just like how HTML files end with "),n("code",null,".html"),e(" and CSS files end with "),n("code",null,".css"),e(", when working with PHP, the specific "),n("code",null,".php"),e(" extension must be used. This extension with what informs the web server that a file may contain PHP.")],-1),m=n("h2",{id:"the-php-tag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-php-tag","aria-hidden":"true"},"#"),e(" The PHP Tag")],-1),g=n("code",null,"<?php ?>",-1),k={href:"https://www.php.net/manual/en/language.basic-syntax.phptags.php",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>All whitespace inside of a PHP tag will be ignored by the PHP Server.</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A single PHP file may contain multiple PHP tags and is in fact how PHP is embedded into HTML.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;A Simple PHP File&quot;</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$title</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello World&quot;</span> <span class="token delimiter important">?&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={class:"try"},_={href:"https://repl.it/@eisenbm/php-syntax",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="the-semicolon" tabindex="-1"><a class="header-anchor" href="#the-semicolon" aria-hidden="true">#</a> The Semicolon</h2><p>In PHP, all lines of code <strong>MUST</strong> end with a semicolon (<code>;</code>).</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token comment">// Semicolons at the end of each line</span>
  <span class="token variable">$greeting</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Hello, World.&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">echo</span> <span class="token variable">$greeting</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Forgetting the semicolon will result in a syntax error.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token comment">// This will result in a syntax error</span>
  <span class="token variable">$greeting</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;I have no semicolon.&quot;</span>
  <span class="token keyword">echo</span> <span class="token variable">$greeting</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w={class:"try"},y={href:"https://repl.it/@eisenbm/php-semicolon",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"the-echo-statement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-echo-statement","aria-hidden":"true"},"#"),e(" The echo Statement")],-1),x={href:"https://www.php.net/manual/en/function.echo.php",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"echo",-1),H=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To output, more than one string using <code>echo</code>, a comma (<code>,</code>) or a period (<code>.</code>) can be used between strings.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;John&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Total: &quot;</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// Total: 8</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span> <span class="token comment">// creates a new line</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello &quot;</span> <span class="token operator">.</span> <span class="token variable">$name</span><span class="token punctuation">;</span> <span class="token comment">// Hello John</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If a file only contains PHP, the closing PHP tag is <strong>NOT</strong> required.</p></div>`,4),T={class:"try"},S={href:"https://repl.it/@eisenbm/php-echo",target:"_blank",rel:"noopener noreferrer"},C=n("h2",{id:"comments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#comments","aria-hidden":"true"},"#"),e(" Comments")],-1),N=n("p",null,"Comments are messages that a developer leaves in the code to help explain the code or to leave a note about the code, but are completely ignored by the interpreter. Comments are a vital tool for any developer, and the better comments are used the better a developer will become.",-1),I={href:"https://www.php.net/manual/en/language.basic-syntax.comments.php",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="single-line-comments" tabindex="-1"><a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a> Single Line Comments</h3><p>Single line comments start with a <code>//</code> and continues to the end of the line. Any text between the <code>//</code> and the end line will be ignored by PHP. PHP comments only work inside of PHP tags <code>&lt;?php ?&gt;</code>. Any comments outside of the PHP tag will be rendered as text by the browser.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>It is also possible to use <code>#</code> for single-line comments, but this is not commonly used.</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token comment">// This a single line comment</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

// This will appear as text in the browser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="multi-line-comments" tabindex="-1"><a class="header-anchor" href="#multi-line-comments" aria-hidden="true">#</a> Multi-line Comments</h3><p>Multi-line comments start with a <code>/*</code> and will continue until a <code>*/</code> is encountered.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token comment">/* This is a 
    multiline comment */</span> 
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),$={class:"try"},E={href:"https://repl.it/@eisenbm/php-comments",target:"_blank",rel:"noopener noreferrer"};function M(A,R){const p=o("Youtube"),a=o("ExternalLinkIcon");return l(),c("div",null,[d,s(p,{id:"U10yvfIStx8",citation:"This video was created by <a href='https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw'>Dani Krossing</a>"}),u,h,m,n("p",null,[e("To inform the PHP server which lines of code should be interpreted as PHP, we need to use the PHP tag "),g,e(". The "),n("a",k,[e("PHP tag"),s(a)]),e(" must be used for any and all PHP code.")]),v,n("div",b,[n("p",null,[n("a",_,[e("Try it yourself on Repl.it"),s(a)])])]),f,n("div",w,[n("p",null,[n("a",y,[e("Try it yourself on Repl.it"),s(a)])])]),P,n("p",null,[e("The "),n("a",x,[q,s(a)]),e(" Statement is used to output one or more strings. It is considered to be the primary way to output data from PHP to the browser as HTML.")]),H,n("div",T,[n("p",null,[n("a",S,[e("Try it yourself on Repl.it"),s(a)])])]),C,N,n("p",null,[n("a",I,[e("PHP Comments"),s(a)]),e(" can be divided into two categories: single-line comments and multi-line comments.")]),L,n("div",$,[n("p",null,[n("a",E,[e("Try it yourself on Repl.it"),s(a)])])])])}const J=i(r,[["render",M],["__file","php-syntax.html.vue"]]);export{J as default};