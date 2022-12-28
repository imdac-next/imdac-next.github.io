import{_ as c,M as a,p as i,q as l,R as s,t as n,N as t,a3 as e}from"./framework-dd056dd6.js";const u={},d={id:"hearts",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#hearts","aria-hidden":"true"},"#",-1),k={class:"custom-container danger"},g=s("p",{class:"custom-container-title"},"A GitHub Classroom Assignment",-1),m={href:"https://classroom.github.com/a/io2VF9cZ",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>Using what you know about the fundamentals of Javascript, create a standard deck of cards and deal out all the cards to the four players.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>The following requirements must be met in order to complete the assignment successfully:</p><h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step 1</h3><p>Clone this repository from GitHub. The repository contains an <code>index.html</code> file, <code>styles.css</code> file, and a <code>script.js</code> file. You may change any of the files as necessary.</p><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step 2</h3><p>Using the provided <code>suits</code> and <code>ranks</code> arrays and nested loops, create an array of objects. Each object will contain <code>suit</code> and <code>rank</code> property representing each card in a standard deck of cards.</p><p><em>The computed array of objects should look something like this</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;clubs&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;clubs&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;clubs&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;clubs&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;clubs&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;spades&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token string">&quot;J&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;spades&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token string">&quot;Q&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;spades&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token string">&quot;K&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string-property property">&quot;suit&quot;</span><span class="token operator">:</span><span class="token string">&quot;spades&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;rank&quot;</span><span class="token operator">:</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step 3</h3><p>Using the provide <code>shuffle()</code> function, shuffle the newly created deck of cards (Refer to the Shuffle Function section below). Store the results of the <code>shuffle()</code> to the provided game object.</p><h3 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step 4</h3><p>Using the shuffled deck and players object, deal out a card to each player one card at a time until every card has been dealt. Each player should have 13 cards.</p><h3 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5" aria-hidden="true">#</a> Step 5</h3><p>Create a button for each player with the player&#39;s name on the button. Use the following button as a template. You may add additional attributes and classes as necessary.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Player 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6" aria-hidden="true">#</a> Step 6</h3><p>Add event handler to each button that will create and display the hand of each player, when the player&#39;s button is clicked. Use the following template for each card. You may add additional attributes and classes as necessary.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number hearts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/hearts.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number hearts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shuffle-function" tabindex="-1"><a class="header-anchor" href="#shuffle-function" aria-hidden="true">#</a> Shuffle Function</h2><p>The following screencast shows how to use the provided <code>shuffle()</code> function.</p>`,22),v=e('<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p><em><strong>Coming Soon</strong></em></p><h2 id="rubric" tabindex="-1"><a class="header-anchor" href="#rubric" aria-hidden="true">#</a> Rubric</h2><table><thead><tr><th>Task</th><th style="text-align:center;">Points</th></tr></thead><tbody><tr><td>Creates a full deck of cards</td><td style="text-align:center;">5</td></tr><tr><td>Shuffles the deck of cards</td><td style="text-align:center;">3</td></tr><tr><td>Deal out the cards to each player properly</td><td style="text-align:center;">5</td></tr><tr><td>Create and display each players hands</td><td style="text-align:center;">7</td></tr><tr><td><strong>Total</strong></td><td style="text-align:center;"><strong>20</strong></td></tr></tbody></table><h2 id="submission" tabindex="-1"><a class="header-anchor" href="#submission" aria-hidden="true">#</a> Submission</h2><ol><li>Create a commit with the message &quot;Completed the Hearts Assignment&quot;</li><li>Push to GitHub</li><li>Submit the URL to your GitHub Repository to the <strong>Hearts</strong> assignment on BrightSpace</li></ol><h2 id="plagiarism-honor-code" tabindex="-1"><a class="header-anchor" href="#plagiarism-honor-code" aria-hidden="true">#</a> Plagiarism Honor Code</h2><p>By making the submission you also agree to the Algonquin College Student Attestation of Academic Integrity below:</p><p><strong>I hereby declare that the work I submit throughout the duration of this course/program will be my own work.</strong></p><p><strong>I understand that plagiarism, whether done deliberately or accidentally, is defined as presenting someone else’s work, in whole or in part, as one’s own, and includes the verbal or written submission of another work (for example, ideas, wording, code, graphics, music, and inventions) without crediting that source. This includes all electronic sources (for example, the Internet, television, video, film, and recordings), all print and written sources (for example, books, periodicals, lyrics, government publications, promotional materials, and academic assignments), and all verbal sources (for example, conversations and interviews).</strong></p><p><strong>I understand that the facilitation of plagiarism, that is, one student sharing his or her work with other students, is also considered an act of plagiarism.</strong></p><p><strong>I understand that contravening Algonquin College Policy AA 20 - Plagiarism will result in an academic sanction(s) as described in this directive.</strong></p>',12);function q(y,f){const o=a("Badge"),p=a("ExternalLinkIcon"),r=a("Scrimba");return i(),l("div",null,[s("h1",d,[h,n(" Hearts "),t(o,{text:"Exercise",vertical:"middle"})]),s("div",k,[g,s("p",null,[n("This assignment must be accepted on "),s("a",m,[n("GitHub Classroom"),t(p)])])]),b,t(r,{id:"/c/cR3EJaTk"}),v])}const w=c(u,[["render",q],["__file","hearts.html.vue"]]);export{w as default};
