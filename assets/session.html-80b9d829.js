import{_ as p,M as t,p as c,q as l,N as a,R as n,t as s,a3 as i}from"./framework-dd056dd6.js";const r={},u=n("h1",{id:"session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#session","aria-hidden":"true"},"#"),s(" $_SESSION")],-1),d=n("p",null,"Like a cookie, a session is a way to store information to be used across multiple pages; however, with a session, the information is store on the server, not the user's computer and only lasts until the user closes the browser.",-1),h=n("h2",{id:"starting-a-session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#starting-a-session","aria-hidden":"true"},"#"),s(" Starting a Session")],-1),k={href:"https://www.php.net/manual/en/function.session-start.php",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"session_start()",-1),m=n("code",null,"session_start()",-1),g=i(`<h2 id="creating-session-data" tabindex="-1"><a class="header-anchor" href="#creating-session-data" aria-hidden="true">#</a> Creating Session Data</h2><p>Once the <code>session_start()</code> function is invoked, the <code>$_SESSION</code> array can be used. The [<code>$_SESSION</code>] array is an associative array containing a session variable available to the current script. Like any other associative array, new items can be added to the session using bracket notation.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// page1.php</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Michael&#39;</span><span class="token punctuation">;</span>

<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Location: page2.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// page2.php</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Michael</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="editing-session-data" tabindex="-1"><a class="header-anchor" href="#editing-session-data" aria-hidden="true">#</a> Editing Session Data</h2><p>Because the <code>$_SESSION</code> variable is an associative array, we can manipulate its values in the same way as any other array.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// page1.php</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Michael</span>

<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Joe&#39;</span><span class="token punctuation">;</span> 
<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Joe</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removing-session-data" tabindex="-1"><a class="header-anchor" href="#removing-session-data" aria-hidden="true">#</a> Removing Session Data</h2>`,8),b={href:"https://www.php.net/manual/en/function.unset.php",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"unset",-1),S=i(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// page1.php</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Michael</span>

<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(w,y){const o=t("Youtube"),e=t("ExternalLinkIcon");return c(),l("div",null,[u,a(o,{id:"i89a4Zbzy20",citation:"griffith"}),d,h,n("p",null,[s("In PHP, to start a session the "),n("a",k,[v,a(e)]),s(" function must be invoked. When the function is called, PHP automatically opens and reads the current session. The "),m,s(" method will need to be invoked on every page that requires a session and should be called before outputting anything to the browser.")]),g,n("p",null,[s("The "),n("a",b,[_,a(e)]),s(" method can be used to remove a variable from the Session.")]),S])}const E=p(r,[["render",f],["__file","session.html.vue"]]);export{E as default};
