import{_ as t,M as o,p,q as i,R as n,t as s,N as e,a3 as r}from"./framework-dd056dd6.js";const c={},l=n("h1",{id:"form-handling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#form-handling","aria-hidden":"true"},"#"),s(" Form Handling")],-1),d={class:"watch"},u={href:"https://laracasts.com/series/laravel-6-from-scratch/episodes/23",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"Laravel makes it easy to handle forms and the data that come from them. The framework has many features to help forms handling easier including protection from malicious attack to validation of form data.",-1),h=n("h2",{id:"csrf-protection",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#csrf-protection","aria-hidden":"true"},"#"),s(" CSRF Protection")],-1),k={href:"https://laravel.com/docs/7.x/csrf",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>Laravel automatically generates a token for each active user session. This token verifies the authenticated user is the one making the request.</p><p>When creating an HTML form for a Laravel application, the hidden CSRF token field should be include. This can be done using the <code>@csrf</code> blade directive.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string double-quoted-string">&quot;POST&quot;</span><span class="token operator">&gt;</span>
  @csrf
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;movie_title&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="processing-the-form" tabindex="-1"><a class="header-anchor" href="#processing-the-form" aria-hidden="true">#</a> Processing the Form</h2><p>The <code>action</code> attribute of an HTML form determines where the form submits. When that HTML form is part of a Laravel application, the value of the <code>action</code> attribute will match the desired routes URI.</p><p>For example, if the form in question was to add a new movie, then our desired route would be the one pointing to the <code>store</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/movies&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;MoviesController@store&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Therefore the value we would want to set for the <code>action</code> attribute is <code>/movies</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string double-quoted-string">&quot;POST&quot;</span> action<span class="token operator">=</span><span class="token string double-quoted-string">&quot;/movies&quot;</span><span class="token operator">&gt;</span>
  @csrf
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;movie_title&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would also that the <code>store</code> method would process the form data. The form data is accessible through the <code>request()</code> helper function, which returns the current request instance. Paired with the <code>all()</code> method, it will return an array of all values from a form. Individual inputs can be retrieved by their <code>name</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$all</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$movie_title</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;movie_title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the data was destined for a database, the function might look something like this.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// creates a new Movie object</span>
  <span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token property">movie_title</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;movie_title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Save the object as a row in the movies table</span>
  <span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// returns to the movies page</span>
  <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/movies&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function g(f,b){const a=o("ExternalLinkIcon");return p(),i("div",null,[l,n("div",d,[n("p",null,[n("a",u,[s('Watch "Form Handling" on Laracasts'),e(a)])])]),m,h,n("p",null,[s("Cross-site request forgery (CSRF) attacks are a type of malicious exploit are made. Such attacks can cause serious damage to your site and organization. Fortunately, Laravel provides "),n("a",k,[s("CSRF Protection"),e(a)]),s(" out of the box.")]),v])}const q=t(c,[["render",g],["__file","form-handling.html.vue"]]);export{q as default};
