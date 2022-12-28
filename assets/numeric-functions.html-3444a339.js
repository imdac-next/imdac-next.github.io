import{_ as c,M as o,p as l,q as r,N as e,R as n,t as s,a3 as t}from"./framework-dd056dd6.js";const d={},p=n("h1",{id:"numeric-functions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#numeric-functions","aria-hidden":"true"},"#"),s(" Numeric Functions")],-1),u={href:"https://dev.mysql.com/doc/refman/5.7/en/mathematical-functions.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="rand-function" tabindex="-1"><a class="header-anchor" href="#rand-function" aria-hidden="true">#</a> RAND() Function</h2><p>The <code>RAND()</code> function returns a random decimal number between 0 and 1.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Returns a random decimal between 0 and 1 </span>
<span class="token comment">-- for each row in the movies table</span>
<span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={class:"try"},h={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/0",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="round-function" tabindex="-1"><a class="header-anchor" href="#round-function" aria-hidden="true">#</a> ROUND() Function</h2><p>The <code>ROUND()</code> function will round a number to the specified number of decimal places. If the number of a decimal place is NOT specified a whole number will be returned.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Returns either 0 or 1 for each row in the movies table</span>
<span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">-- Returns a random whole number between 0 and 10</span>
<span class="token comment">-- for each row in the movies table</span>
<span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={class:"try"},b={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/1",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="floor-function" tabindex="-1"><a class="header-anchor" href="#floor-function" aria-hidden="true">#</a> FLOOR() Function</h2><p>The <code>FLOOR()</code> function will always round a number down to the previous whole number.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Returns a random number from 0 to 1 that is rounded down.</span>
<span class="token comment">-- This will result in all 0s</span>
<span class="token keyword">SELECT</span> FLOOR<span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={class:"try"},g={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/2",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="ceil-function" tabindex="-1"><a class="header-anchor" href="#ceil-function" aria-hidden="true">#</a> CEIL() Function</h2><p>The <code>CEIL()</code> function will always round a number up to the next whole number.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Returns a random number from 0 to 1 that is rounded up.</span>
<span class="token comment">-- This will result in all 1s</span>
<span class="token keyword">SELECT</span> CEIL<span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E={class:"try"},R={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/3",target:"_blank",rel:"noopener noreferrer"},D=t(`<h2 id="radians-function" tabindex="-1"><a class="header-anchor" href="#radians-function" aria-hidden="true">#</a> RADIANS() Function</h2><p>The <code>RADIANS()</code> function will convert degrees into radians.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Returns the number of radians in 90 and 180 degrees</span>
<span class="token keyword">SELECT</span> RADIANS<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> ninety<span class="token punctuation">,</span> RADIANS<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span> <span class="token keyword">as</span> oneeighty
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),F={class:"try"},A={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/4",target:"_blank",rel:"noopener noreferrer"},T=t(`<h2 id="degrees-function" tabindex="-1"><a class="header-anchor" href="#degrees-function" aria-hidden="true">#</a> DEGREES() Function</h2><p>The <code>DEGREES()</code> function will convert radians into degrees.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Return the number of degrees in Pi</span>
<span class="token keyword">SELECT</span> DEGREES<span class="token punctuation">(</span><span class="token number">3.141592653589793</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> pi
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={class:"try"},O={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/5",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="power-function" tabindex="-1"><a class="header-anchor" href="#power-function" aria-hidden="true">#</a> POWER() Function</h2><p>The <code>POWER()</code> function will return the provided number raised to the specified power.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Return the genre_id raised to the power of 2</span>
<span class="token comment">-- for each movie</span>
<span class="token keyword">SELECT</span> POWER<span class="token punctuation">(</span>genre_id<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),S={class:"try"},x={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/6",target:"_blank",rel:"noopener noreferrer"},C=t(`<h2 id="conv-function" tabindex="-1"><a class="header-anchor" href="#conv-function" aria-hidden="true">#</a> CONV() Function</h2><p>The <code>CONV()</code> function will convert numbers between different bases.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Covert genre_id from base 10 to binary</span>
<span class="token keyword">SELECT</span> CONV<span class="token punctuation">(</span>genre_id<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> bin
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>movies<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),L={class:"try"},B={href:"https://www.db-fiddle.com/f/mCnUuL68EEMemB8gDnzAf9/7",target:"_blank",rel:"noopener noreferrer"};function M(U,I){const i=o("Youtube"),a=o("ExternalLinkIcon");return l(),r("div",null,[p,e(i,{id:"JzG-6Fr8OXE",citation:"griffith"}),n("p",null,[n("a",u,[s("Numeric Functions"),e(a)]),s(" are used to alter the returned data of those columns using a number datatype. Numeric Functions, like String Functions, do not alter the actual data that is stored in the database as all functions are executed after the data is retrieved but before it is displayed.")]),m,n("div",k,[n("p",null,[n("a",h,[s("Try it yourself on DB Fiddle"),e(a)])])]),f,n("div",v,[n("p",null,[n("a",b,[s("Try it yourself on DB Fiddle"),e(a)])])]),_,n("div",w,[n("p",null,[n("a",g,[s("Try it yourself on DB Fiddle"),e(a)])])]),y,n("div",E,[n("p",null,[n("a",R,[s("Try it yourself on DB Fiddle"),e(a)])])]),D,n("div",F,[n("p",null,[n("a",A,[s("Try it yourself on DB Fiddle"),e(a)])])]),T,n("div",N,[n("p",null,[n("a",O,[s("Try it yourself on DB Fiddle"),e(a)])])]),q,n("div",S,[n("p",null,[n("a",x,[s("Try it yourself on DB Fiddle"),e(a)])])]),C,n("div",L,[n("p",null,[n("a",B,[s("Try it yourself on DB Fiddle"),e(a)])])])])}const V=c(d,[["render",M],["__file","numeric-functions.html.vue"]]);export{V as default};
