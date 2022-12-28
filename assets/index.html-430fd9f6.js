import{_ as i,M as t,p as c,q as r,N as a,R as n,t as s,a3 as o}from"./framework-dd056dd6.js";const l={},u=n("h1",{id:"javascript-objects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-objects","aria-hidden":"true"},"#"),s(" JavaScript Objects")],-1),d=n("p",null,[s("Objects are perhaps the most important component inside JavaScript. Remember that any value that is not a primitive data type is an object. Furthermore is JavaScript allows us to create custom objects known as "),n("code",null,"object literals"),s(".")],-1),k=n("h2",{id:"creating-object-literals",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#creating-object-literals","aria-hidden":"true"},"#"),s(" Creating Object Literals")],-1),v={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Object literals",-1),b=o(`<p>They are created by using a set of curly braces (<code>{}</code>). Inside the curly braces is a comma-separated list of properties. Each property is made up of a key and a value separated by a colon (<code>:</code>).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// An object with no properties</span>
<span class="token keyword">const</span> empty <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// An object with properties </span>
<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Toyota&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Prius&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retrieving-object-properties" tabindex="-1"><a class="header-anchor" href="#retrieving-object-properties" aria-hidden="true">#</a> Retrieving Object Properties</h2><p>Every property in an object acts as a variable or container, with the key serving as an identifier. So, it is possible to retrieve a property&#39;s value through the use of the property&#39;s key.</p>`,4),y={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"dot notation",-1),h={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Bracket_notation",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"bracket notation",-1),f=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Toyota&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Prius&#39;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// dot notation</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span>make<span class="token punctuation">)</span> <span class="token comment">// &#39;Toyota&#39;</span>

<span class="token comment">// bracket notation</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">[</span><span class="token string">&#39;model&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Prius&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>When using <code>bracket notation</code> the key name must be in quotes, while when using <code>dot notation</code> the key name should not.</p></div><p>Like arrays, objects can also include arrays and other objects. Such objects are often referred to as multidimensional objects. When this occurs an extra set of notation is required to retrieve these nested values.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Just like stand-alone arrays, when working with arrays inside objects, you can only use <code>bracket notation</code> on the array. However is possible to mix the notations in the statement.</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Toyota&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Prius&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Hybrid&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Remote Keyless Entry&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Anti-Lock Brakes&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Stability Control&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;GPS Navigation&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// dot notation</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Remote Keyless Entry&#39;</span>

<span class="token comment">// bracket notation</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">[</span><span class="token string">&#39;features&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Anti-lock Brakes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-object-properties" tabindex="-1"><a class="header-anchor" href="#updating-object-properties" aria-hidden="true">#</a> Updating Object Properties</h2><p>Just like with variables, it is also possible to updates the values of an object&#39;s property using the equal sign (<code>=</code>). Both <code>dot notation</code> and <code>bracket notation</code> can be used when updating property values.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Toyota&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Prius&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Hybrid&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Remote Keyless Entry&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Anti-Lock Brakes&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Stability Control&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;GPS Navigation&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// dot notation</span>
car<span class="token punctuation">.</span>make <span class="token operator">=</span> <span class="token string">&#39;Tesla&#39;</span>

<span class="token comment">// bracket notation</span>
car<span class="token punctuation">[</span><span class="token string">&#39;model&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Model 3&#39;</span>

<span class="token comment">// nested property</span>
car<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Electric&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-object-properties" tabindex="-1"><a class="header-anchor" href="#adding-object-properties" aria-hidden="true">#</a> Adding Object Properties</h2><p>Adding new properties to an object is remarkably similar to updating properties. The same syntax is used, except that instead of using an existing property key a new property key is used.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Tesla&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Model 3&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Electric&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Remote Keyless Entry&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Anti-Lock Brakes&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Stability Control&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;GPS Navigation&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// dot notation</span>
car<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;Red&#39;</span>

<span class="token comment">// bracket notation</span>
car<span class="token punctuation">[</span><span class="token string">&#39;range&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removing-object-properties" tabindex="-1"><a class="header-anchor" href="#removing-object-properties" aria-hidden="true">#</a> Removing Object Properties</h2><p>To remove a property from an object, use the <a href=""><code>delete</code></a> operator followed by the desired property to remove.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
  <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token string">&#39;Tesla&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;Model 3&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Electric&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Remote Keyless Entry&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Anti-Lock Brakes&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Stability Control&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;GPS Navigation&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">range</span><span class="token operator">:</span> <span class="token number">500</span>
<span class="token punctuation">}</span>

<span class="token comment">// dot notation</span>
<span class="token keyword">delete</span> car<span class="token punctuation">.</span>range

<span class="token comment">// bracket notation</span>
<span class="token keyword">delete</span> car<span class="token punctuation">[</span><span class="token string">&#39;features&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-object-methods" tabindex="-1"><a class="header-anchor" href="#defining-object-methods" aria-hidden="true">#</a> Defining Object Methods</h2><p>In addition to storing data, objects can also contain entire methods. These methods are commonly used to process data stored in the object&#39;s properties.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">displayValue</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

object<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
object<span class="token punctuation">.</span><span class="token function">displayValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that in order to access the property <code>value</code>, a special keyword <code>this</code> must be used to dictate that we expect to find the variable as a property of the &quot;owner&quot; of the method.</p>`,18);function _(w,x){const p=t("Youtube"),e=t("ExternalLinkIcon");return c(),r("div",null,[u,a(p,{id:"kZjJqm_VIGQ",citation:"griffith"}),d,k,n("p",null,[n("a",v,[m,a(e)]),s(" give us the ability to group things more descriptively, by creating key/value pairs, known as properties.")]),b,n("p",null,[s("There are two methods for retrieving a property's value, "),n("a",y,[g,a(e)]),s(" and "),n("a",h,[j,a(e)]),s(".")]),f])}const T=i(l,[["render",_],["__file","index.html.vue"]]);export{T as default};
