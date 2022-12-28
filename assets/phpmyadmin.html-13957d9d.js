import{_ as n}from"./phpmyadmin-ab77661d.js";import{_ as e,p as s,q as a,a3 as o}from"./framework-dd056dd6.js";const i={},t=o(`<h1 id="installing-phpmyadmin-for-macos" tabindex="-1"><a class="header-anchor" href="#installing-phpmyadmin-for-macos" aria-hidden="true">#</a> Installing phpMyAdmin for macOS</h1><p><strong>1. Open a new Terminal window</strong></p><p><strong>2. Enter the following command into the Terminal window and hit <code>return</code>.</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. Enter one of the following command into the Terminal window and hit <code>return</code>.</strong></p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Homebrew stores files in different locations for Macs running Intel processor vs those using Apple Silicon. Please verify that you are using the correct command. Run only one of the following commands.</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## Only use one of the following commands</span>

<span class="token comment"># For Intel Macs </span>
<span class="token builtin class-name">cd</span> /usr/local/share/phpmyadmin


<span class="token comment"># For Apple Silicon Macs</span>
<span class="token builtin class-name">cd</span> /opt/homebrew/share/phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. Enter the following command into the Terminal window and hit <code>return</code>.</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>valet <span class="token function">link</span> phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5. Close the Terminal window</strong></p><p><strong>6. In the browser, go to <code>http://phpmyadmin.test/</code></strong></p><p>You should see a page similar to the following:</p><p><img src="`+n+'" alt="Screenshot of the phpMyAdmin login page"></p><p><strong>7. Use <code>root</code> for the username and password.</strong></p>',14),l=[t];function r(d,c){return s(),a("div",null,l)}const h=e(i,[["render",r],["__file","phpmyadmin.html.vue"]]);export{h as default};
