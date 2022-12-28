import{_ as t,M as o,p as i,q as s,R as e,t as r,N as d,a3 as a}from"./framework-dd056dd6.js";const p={},l=a(`<h1 id="php-warning-and-errors" tabindex="-1"><a class="header-anchor" href="#php-warning-and-errors" aria-hidden="true">#</a> PHP Warning and Errors</h1><p>PHP generates different types of errors and warning depending on the problem. Knowing how to read these errors and warnings can make resolving the problem make easier. Of course, the first step it make sure we can see these errors and warnings.</p><h2 id="display-errors" tabindex="-1"><a class="header-anchor" href="#display-errors" aria-hidden="true">#</a> Display Errors</h2><p>By default, PHP will not display errors or warnings. If we can see the errors and warning we can deal with them. So we will want to make sure that PHP is reporting all error to us in development.</p><p>There are two ways to do this: add a line of code to the top of our PHP file OR to set error reporting in a <code>php.ini</code> file.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Displaying errors and warning during development is crucial for debugging our code. But, they should <strong>NOT</strong> be displayed in production.</p></div><h3 id="in-the-php-ini-file" tabindex="-1"><a class="header-anchor" href="#in-the-php-ini-file" aria-hidden="true">#</a> In the php.ini File</h3><p>The preferred way to set the error reporting for PHP is through the <code>php.ini</code>. The location of this file will vary depending on your server configuration. So, please refer to the [PHP Server] module for more information.</p><p>Once you have the <code>php.ini</code> file open in your text editor, search for the line containing <code>display_errors = </code>. Make sure the value is set to <code>On</code> and that the line is not commented out.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>display_errors = On
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, search for <code>error_reporting</code>. Make sure the value is set to <code>E_ALL</code> and that the line is not commented out.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error_reporting = E_ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="in-the-php-code" tabindex="-1"><a class="header-anchor" href="#in-the-php-code" aria-hidden="true">#</a> In the PHP Code</h3><p>If the <code>php.ini</code> is not accessible, it is possible to set error reporting in the PHP code. Just at the following lines to the PHP file you want error reporting.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token function">ini_set</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;display_errors&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;On&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token constant">E_ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-linter" tabindex="-1"><a class="header-anchor" href="#php-linter" aria-hidden="true">#</a> PHP Linter</h3><p>Another way to catch PHP errors, especially syntax errors is by using a PHP Linter. A linter is a small program that makes sure our code is well formatted and free of errors.</p><p>Visual Studio Code uses the official PHP Linter, out of the box, to provide live code feedback. This means has you type Visual Studio Code will provide highlighting and error messages if a syntax error is made.</p>`,18),c={href:"https://code.visualstudio.com/docs/languages/php#_linting",target:"_blank",rel:"noopener noreferrer"},h=a('<h2 id="type-of-php-errors" tabindex="-1"><a class="header-anchor" href="#type-of-php-errors" aria-hidden="true">#</a> Type of PHP Errors</h2><p>There are 5 categories of errors that PHP will report and display. They are <strong>Fatal Errors</strong>, <strong>Parse Errors</strong>, <strong>Warnings, Notices</strong>, and <strong>Deprecated</strong>.</p><h3 id="fatal-errors" tabindex="-1"><a class="header-anchor" href="#fatal-errors" aria-hidden="true">#</a> Fatal Errors</h3><p>Fatal runtime errors will kill the page completely. Common fatal runtime errors include running out of memory.</p><h3 id="parse-errors" tabindex="-1"><a class="header-anchor" href="#parse-errors" aria-hidden="true">#</a> Parse Errors</h3><p>Parse errors or syntax errors occur during compile time, and therefore occur before anything is sent to the page.</p><h3 id="warnings" tabindex="-1"><a class="header-anchor" href="#warnings" aria-hidden="true">#</a> Warnings</h3><p>Warnings are non-critical problems and typical will not kill the page. Warnings are an indication of poorly written code.</p><h3 id="notices" tabindex="-1"><a class="header-anchor" href="#notices" aria-hidden="true">#</a> Notices</h3><p>Notices are not problems, but is PHP way of providing advice. Like warning, notices can be an indication of poorly written code.</p><h3 id="deprecated" tabindex="-1"><a class="header-anchor" href="#deprecated" aria-hidden="true">#</a> Deprecated</h3><p>Is a notice that a method or statement being used will be removed from PHP in future versions and updated or replaced.</p>',12);function u(g,f){const n=o("ExternalLinkIcon");return i(),s("div",null,[l,e("p",null,[r("View the documentation to learn more about "),e("a",c,[r("PHP Linting with Visual Studio Code"),d(n)])]),h])}const v=t(p,[["render",u],["__file","warnings-errors.html.vue"]]);export{v as default};