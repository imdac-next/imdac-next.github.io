import{_ as o,M as i,p as l,q as p,R as n,t as e,N as s,a3 as t}from"./framework-dd056dd6.js";const c={},d=n("h1",{id:"laravel-and-databases",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#laravel-and-databases","aria-hidden":"true"},"#"),e(" Laravel and Databases")],-1),r={href:"https://laravel.com/docs/8.x/database",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),e(" Configuration")],-1),v={href:"https://laravel.com/docs/8.x/configuration#environment-configuration",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>To update the database settings, open the <code>.env</code> file in the root directory of your Laravel project, and then find and update the following lines with your specific database settings:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If you do not see a <code>.env</code>, look for a <code>.env.example</code> file. Then remain it be <code>.env</code>.</p></div><h2 id="defining-models" tabindex="-1"><a class="header-anchor" href="#defining-models" aria-hidden="true">#</a> Defining Models</h2><p>Before we can start using a database, a model must be defined. Models are stored in the <code>app/Models</code> directory of the Laravel project, and while it is possible to create these files manually, the easiest way is to use the <code>artisan</code> <code>make:model</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Movie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will create the file <code>Movie.php</code>. It would look something like this:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="model-conventions" tabindex="-1"><a class="header-anchor" href="#model-conventions" aria-hidden="true">#</a> Model Conventions</h2>`,9),m={href:"https://laravel.com/docs/8.x/eloquent#eloquent-model-conventions",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"Category",-1),b=n("code",null,"categories",-1),g=t(`<p>It is possible to override these conventions by adding variables to the Model class. For example, the primary key of a table is not the <code>id</code> column as Laravel assumes, then the <code>$primaryKey</code> variable can be added with the correct column name.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;movie_id&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="laravel-eloquent" tabindex="-1"><a class="header-anchor" href="#laravel-eloquent" aria-hidden="true">#</a> Laravel Eloquent</h2>`,3),f={href:"https://laravel.com/docs/8.x/eloquent",target:"_blank",rel:"noopener noreferrer"},_=n("h3",{id:"all",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#all","aria-hidden":"true"},"#"),e(" all")],-1),x=n("code",null,"all",-1),w={href:"https://laravel.com/docs/8.x/eloquent#collections",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// retrieve all movies</span>
<span class="token variable">$movies</span> <span class="token operator">=</span> <span class="token class-name static-context">Movie</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><p>The <code>find</code> method can retrieve a single row from a table by its primary key.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// retreive a movie where movie_id = 1</span>
<span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token class-name static-context">Movie</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> where</h3><p>The <code>where</code> method can be used to retrieve multiple rows filtered by a specific condition. When using the <code>where</code> method, the <code>get</code> method must also be used.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// retrieve all movies with the word &quot;the&quot; in the title</span>
<span class="token variable">$movies</span> <span class="token operator">=</span> <span class="token class-name static-context">Movie</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;movie_title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%the %&quot;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="save" tabindex="-1"><a class="header-anchor" href="#save" aria-hidden="true">#</a> save</h3>`,8),q={href:"https://laravel.com/docs/8.x/eloquent#inserting-and-updating-models",target:"_blank",rel:"noopener noreferrer"},M=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// insert a new movie </span>
<span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">;</span>
<span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token property">movie_title</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;movie_title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A similar process is done for updating data. However, instead of creating a new model instance, an existing model is retrieved using the <code>find</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// update an existing movie</span>
<span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token class-name static-context">Movie</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token property">movie_title</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;movie_title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h3>`,4),L={href:"https://laravel.com/docs/8.x/eloquent#deleting-models",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"delete",-1),E=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// delete a movie</span>
<span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token class-name static-context">Movie</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$movie</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function T($,B){const a=i("ExternalLinkIcon");return l(),p("div",null,[d,n("p",null,[n("a",r,[e("Databases"),s(a)]),e(" are an essential part of almost all web applications. Fortunately, Laravel makes it easy to connect with databases, and the Eloquent Object Relational Mapper (ORM) simplifies the process of interacting with the database. Laravel support several databases, including MySQL, PostgreSQL, SQLite, SQL Server.")]),u,n("p",null,[e("Laravel simplifies the connection to a database by including the connection out of the box. The configuration setting for the database can be viewed and updated in the "),n("a",v,[e("environment configuration"),s(a)]),e(" file.")]),h,n("p",null,[e("Laravel has several "),n("a",m,[e("conventions"),s(a)]),e(" when it comes to the table and column names as well as expected columns. For example, Laravel will assume the "),k,e(" model will work with the "),b,e(" database table.")]),g,n("p",null,[n("a",f,[e("Eloquent"),s(a)]),e(" is an interface built on PDO and is used to interact with a database. Eloquent includes methods to retrieve and manipulate data in a database table using the corresponding model.")]),_,n("p",null,[e("The "),x,e(" method is used to retrieve all rows from a table as a "),n("a",w,[e("Collection"),s(a)]),e(", which is an array-like object.")]),y,n("p",null,[e("Eloquent makes it easy to "),n("a",q,[e("insert and update"),s(a)]),e(" data in a database. To insert a new record into the database, you should instantiate a new model instance and set attributes on the model. Then, call the save method on the model instance.")]),M,n("p",null,[n("a",L,[e("Deleting a row"),s(a)]),e(" in a table is achieved using the "),D,e(" method.")]),E])}const N=o(c,[["render",T],["__file","index.html.vue"]]);export{N as default};