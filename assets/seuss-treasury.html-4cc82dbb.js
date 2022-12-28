import{_ as r,M as i,p,q as c,R as e,t as n,N as s,a3 as a}from"./framework-dd056dd6.js";const l={},d=a('<h1 id="seuss-treasury" tabindex="-1"><a class="header-anchor" href="#seuss-treasury" aria-hidden="true">#</a> Seuss Treasury</h1><h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>Use Vue, Vue CLI, Vue Router, Fetch, and the Seussology API to create a simple books web application.</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2>',4),u={href:"https://seussology.info",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="retrieving-all-books" tabindex="-1"><a class="header-anchor" href="#retrieving-all-books" aria-hidden="true">#</a> Retrieving all books</h3><p>To retrieve all the books, make a Fetch GET request to the URL <code>https://seussology.info/api/books</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// retrieves all books </span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://seussology.info/api/books&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={class:"try"},m={href:"https://codepen.io/IMD/pen/vYyqqKw",target:"_blank",rel:"noopener noreferrer"},b=a(`<h3 id="retrieving-a-book-by-id" tabindex="-1"><a class="header-anchor" href="#retrieving-a-book-by-id" aria-hidden="true">#</a> Retrieving a book by ID</h3><p>To retrieve a book by the book&#39;s ID, make a Fetch GET request to the URL <code>https://seussology.info/api/books/[id]</code>, with the last part being the desired book&#39;s ID.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// retrieves the book with the ID of 3</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://seussology.info/api/books/3&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={class:"try"},g={href:"https://codepen.io/IMD/pen/WNoqqjo",target:"_blank",rel:"noopener noreferrer"},f=a(`<h3 id="retrieving-random-quotes" tabindex="-1"><a class="header-anchor" href="#retrieving-random-quotes" aria-hidden="true">#</a> Retrieving random quotes</h3><p>To retrieve random quotes, make a Fetch GET request to the URL <code>https://seussology.info/api/quotes/random/[limit]</code>, with the last part being the desired number of quotes.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// retrieves 10 random quotes</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://seussology.info/api/quotes/random/10&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={class:"try"},_={href:"https://codepen.io/IMD/pen/gOLNNxp",target:"_blank",rel:"noopener noreferrer"},x=a(`<h2 id="project-setup" tabindex="-1"><a class="header-anchor" href="#project-setup" aria-hidden="true">#</a> Project Setup</h2><h3 id="_1-clone-the-repository" tabindex="-1"><a class="header-anchor" href="#_1-clone-the-repository" aria-hidden="true">#</a> 1. Clone the Repository</h3><p>Clone this repository from GitHub and use the provided file to complete the assignment.</p><h3 id="_2-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_2-install-dependencies" aria-hidden="true">#</a> 2. Install Dependencies</h3><p>Install the project dependencies by running the following command from within the project directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-start-development-server" tabindex="-1"><a class="header-anchor" href="#_3-start-development-server" aria-hidden="true">#</a> 3. Start Development Server</h3><p>Start the development server by running the following command from within the project directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The terminal window must remain open to keep the server running.</p></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ol><li>The web application must use Vue CLI to create the web application structure</li><li>The web application must use Vue Router to create routes for a books page, a book details page, and a quotes page.</li><li>The books page must dynamically retrieve and display the book cover images. Clicking on the a book image will take the user to that book&#39;s detail page.</li><li>The book&#39;s details page, must dynamically retrieve and display the book&#39;s title, book&#39;s cover image, and the book&#39;s description.</li><li>The quotes page must dynamically retrieve 10 random quotes and display them on the page.</li><li>The site must have a site wide navigation which allow moving to the books page and the quotes page.</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>`,13),w=e("h2",{id:"breakdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breakdown","aria-hidden":"true"},"#"),n(" Breakdown")],-1),j=a('<h2 id="rubric" tabindex="-1"><a class="header-anchor" href="#rubric" aria-hidden="true">#</a> Rubric</h2><table><thead><tr><th>Task</th><th style="text-align:center;">Points</th></tr></thead><tbody><tr><td>Dynamically retrieves and displays books images on the books page</td><td style="text-align:center;">5</td></tr><tr><td>Successfully links to a book&#39;s detail page when the corrosponding book&#39;s image is clicked</td><td style="text-align:center;">2</td></tr><tr><td>Dynamically retrieves and displays a book&#39;s title, image, and description on the book&#39;s detail page</td><td style="text-align:center;">5</td></tr><tr><td>Dynamically retrieves and displays 10 random quotes on the quotes page</td><td style="text-align:center;">5</td></tr><tr><td>Implements a functional site navigation</td><td style="text-align:center;">3</td></tr><tr><td><strong>Total</strong></td><td style="text-align:center;"><strong>20</strong></td></tr></tbody></table>',2);function q(T,I){const t=i("ExternalLinkIcon"),o=i("Youtube");return p(),c("div",null,[d,e("p",null,[n("For this assignment, you will be using the "),e("a",u,[n("Seussology API"),s(t)]),n(". This is a simple RESTful API for retrieving books written by Dr. Seuss and related information. The following will provide instruction on how to retrieve data from the Seussology API.")]),h,e("div",k,[e("p",null,[e("a",m,[n("Try it yourself on CodePen"),s(t)])])]),b,e("div",v,[e("p",null,[e("a",g,[n("Try it yourself on CodePen"),s(t)])])]),f,e("div",y,[e("p",null,[e("a",_,[n("Try it yourself on CodePen"),s(t)])])]),x,s(o,{id:"ccMJUyPnSxU"}),w,s(o,{id:"mR3aog49Hew"}),j])}const D=r(l,[["render",q],["__file","seuss-treasury.html.vue"]]);export{D as default};
