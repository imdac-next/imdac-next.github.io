import{_ as e,p as a,q as o,a3 as i}from"./framework-dd056dd6.js";const t={},d=i(`<h2 id="accessing-the-command-line" tabindex="-1"><a class="header-anchor" href="#accessing-the-command-line" aria-hidden="true">#</a> Accessing the Command Line</h2><p>Terminal is the application for MacOS to interact with the computer using a command line.</p><p>Window&#39;s alternative to terminal is Command Prompt or if you installed Git then GitBash.</p><p>The Visual Studio Code application also comes with a built-in terminal which can be accessed from Terminal option or by pressing <code>control</code> <code>shift</code> \` back-tick</p><h2 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands" aria-hidden="true">#</a> Common Commands</h2><p>We will not go into too much detail but will only look at some basic commands that will help us to use the command line effectively.</p><p>To run each command we hit the enter key.</p><h3 id="where-we-are" tabindex="-1"><a class="header-anchor" href="#where-we-are" aria-hidden="true">#</a> Where we are</h3><p><code>pwd</code> print working directory, to know the path of the directory where we are on our computer</p><h3 id="what-is-in-this-folder" tabindex="-1"><a class="header-anchor" href="#what-is-in-this-folder" aria-hidden="true">#</a> What is in this folder</h3><p><code>ls</code> list all the files and folders inside the current folder we are in</p><h3 id="what-is-in-a-specific-folder" tabindex="-1"><a class="header-anchor" href="#what-is-in-a-specific-folder" aria-hidden="true">#</a> What is in a specific folder</h3><p><code>ls folder-name</code> list the contents of a specific folder. Note in this command we have supplied a second value separated by space after the command</p><h3 id="move-inside-a-folder" tabindex="-1"><a class="header-anchor" href="#move-inside-a-folder" aria-hidden="true">#</a> Move inside a folder</h3><p><code>cd folder-name</code> change directory to the specified folder(directory) name</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can use the <code>tab</code> key to autocomplete the folder names in command line.</p></div><h3 id="move-out-of-the-current-folder" tabindex="-1"><a class="header-anchor" href="#move-out-of-the-current-folder" aria-hidden="true">#</a> Move out of the current folder</h3><p><code>cd ../</code> change directory and move one level out similarly we can write <code>cd ../../</code> to move two levels out and so on</p><h3 id="the-path" tabindex="-1"><a class="header-anchor" href="#the-path" aria-hidden="true">#</a> The Path</h3><p>We can use file and folder paths with the <code>cd</code> command to move from one folder to another</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> - week-1/
    - index.html
    - images/
        - birds/
            - birds.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above directory structure if we are in thee week-1 folder and we want to move inside the birds folder we can write the command as:</p><p><code>cd images/birds</code></p><p>and to move out of birds folder to the week-1 folder we can write the command:</p><p><code>cd ../../</code></p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>There is much more to the command line but these basic commands will help you navigate to the proper folders and run other commands as required.</p></div>`,26),n=[d];function r(c,s){return a(),o("div",null,n)}const l=e(t,[["render",r],["__file","index.html.vue"]]);export{l as default};