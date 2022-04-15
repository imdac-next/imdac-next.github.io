import{_ as s,f as n}from"./app.96040f5d.js";const a={},e=n(`<h1 id="view-commit-log" tabindex="-1"><a class="header-anchor" href="#view-commit-log" aria-hidden="true">#</a> View Commit Log</h1><p>Git keeps track of the history of each commit made to the repository. This history is known as the commit log.</p><p>To view the commit log, use <code>git log</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Many options can be applied to the commit log. A few are shown below.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Limit to 5 most recent commits</span>
<span class="token function">git</span> log -n <span class="token number">5</span>

<span class="token comment"># Limit to commits since January 1, 2019</span>
<span class="token function">git</span> log --since<span class="token operator">=</span><span class="token number">2019</span>-01-01

<span class="token comment"># Limit to commits by author</span>
<span class="token function">git</span> log --author<span class="token operator">=</span><span class="token string">&quot;Michael&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6);function o(t,i){return e}var p=s(a,[["render",o]]);export{p as default};
