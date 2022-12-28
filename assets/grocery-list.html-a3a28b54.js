import{_ as n,a as o}from"./laragon-url-fix-2-af7990a7.js";import{_ as s,M as d,p as l,q as h,R as e,t,N as i,a3 as r}from"./framework-dd056dd6.js";const c={},p=r('<h1 id="grocery-list" tabindex="-1"><a class="header-anchor" href="#grocery-list" aria-hidden="true">#</a> Grocery List</h1><h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>For this assignment, you will demonstrate your understanding of using Laravel to create a simple database-driven grocery list app.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><p>This simple grocery list app will be able to add or remove items from the list.</p><h2 id="project-setup" tabindex="-1"><a class="header-anchor" href="#project-setup" aria-hidden="true">#</a> Project Setup</h2><h3 id="_1-clone-the-repository" tabindex="-1"><a class="header-anchor" href="#_1-clone-the-repository" aria-hidden="true">#</a> 1. Clone the Repository</h3><p>Clone this repository from GitHub and use the provided file to complete the assignment.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If you are using Laragon, save your repository in the <code>{laragon}/www</code> directory.</p></div><h3 id="_2-create-the-database" tabindex="-1"><a class="header-anchor" href="#_2-create-the-database" aria-hidden="true">#</a> 2. Create the Database</h3><p>To import the database, using phpMyAdmin, complete the following instructions.</p>',11),m={href:"http://adminer.test",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"Log in to adminer using the root username and password",-1),g=e("li",null,'Click the "Create database" link',-1),f=e("li",null,[t("In the text field, enter "),e("code",null,"grocery_list"),t(" for the database name.")],-1),b=e("li",null,[t("Click the "),e("strong",null,"Save"),t(" button")],-1),v=r(`<h3 id="_3-install-laravel-dependencies" tabindex="-1"><a class="header-anchor" href="#_3-install-laravel-dependencies" aria-hidden="true">#</a> 3. Install Laravel Dependencies</h3><p>Install Laravel dependencies using composer</p><p>Using the terminal, navigate to the cloned repository directory and enter the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-create-environment-file" tabindex="-1"><a class="header-anchor" href="#_4-create-environment-file" aria-hidden="true">#</a> 4. Create Environment File</h3><p>In the project, find the <code>.env.example</code> file. Rename the file to be <code>.env</code>. Update the <code>.env</code> file to point to the <code>grocery_list</code> database.</p><p>Save the file.</p><h3 id="_5-generate-key" tabindex="-1"><a class="header-anchor" href="#_5-generate-key" aria-hidden="true">#</a> 5. Generate Key</h3><p>Using the terminal, enter the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-test-the-site" tabindex="-1"><a class="header-anchor" href="#_6-test-the-site" aria-hidden="true">#</a> 6. Test the site</h3><p>In the browser, go to: http://grocery-list-<em>username</em>.test</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If you are using Laragon, you will need to click the <strong>reload</strong> button in the Laragon window. This should automatically create a friendly URL for your Laravel project.</p></div><div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>If you are using Laragon and your friendly URL is not working, the following solution may work for you.</p><p>In the Laragon window, go to Menu &gt; Apache &gt; sites-enabled &gt; <em>your current laravel site</em></p><p><img src="`+n+'" alt="Laragon window - Apache Enabled Sites"></p><p>This will open a file in Notes++. From there, you will need to changes two lines, the <code>DocumentRoot</code> (line 2) and the <code>&lt;Directory&gt;</code> (line 5). In both lines, update the URL to include <code>/public/</code> at the end.</p><p><img src="'+o+`" alt="Notes++ - Site Config"></p></div><h3 id="_7-run-the-migration-files" tabindex="-1"><a class="header-anchor" href="#_7-run-the-migration-files" aria-hidden="true">#</a> 7. Run the Migration Files</h3><p>Use the provide migration files to create the database tables for the project.</p><p>In the terminal, enter the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-create-model-and-controller" tabindex="-1"><a class="header-anchor" href="#_8-create-model-and-controller" aria-hidden="true">#</a> 8. Create Model and Controller</h3><p>Create a model and controller for the items table.</p><p>To create the model and controller, run the following commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Item <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><h3 id="display-the-grocery-list" tabindex="-1"><a class="header-anchor" href="#display-the-grocery-list" aria-hidden="true">#</a> Display the Grocery List</h3><p>Display all the items in the <code>items</code> table in a list.</p><h3 id="adding-items-to-the-list" tabindex="-1"><a class="header-anchor" href="#adding-items-to-the-list" aria-hidden="true">#</a> Adding items to the list</h3><p>Add the functionality to add new items to the list.</p><ol><li>Add a form that will add a new item to the list.</li><li>The form should use the <code>POST</code> method to submit the form data.</li><li>The form data is used to add a new item to the database.</li><li>Redirect back to the list page with the added item.</li></ol><h3 id="removing-items-from-the-list" tabindex="-1"><a class="header-anchor" href="#removing-items-from-the-list" aria-hidden="true">#</a> Removing items from the list</h3><p>Add the functionality to remove an item from the list.</p><ol><li>Add a delete button next to each list item.</li><li>Clicking on the delete button should submit a form using the <code>DELETE</code> method to submit a form.</li><li>Submitting the form should remove the item from the database.</li><li>Redirect back to the list page with the item removed.</li></ol><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>`,32),_={href:"https://www.youtube.com/playlist?list=PLfow3Ls3kyIOIK6wK6MkSxfAmI8jupdRK",target:"_blank",rel:"noopener noreferrer"};function y(w,x){const a=d("ExternalLinkIcon");return l(),h("div",null,[p,e("ol",null,[e("li",null,[t("Open Adminer at "),e("a",m,[t("http://adminer.test"),i(a)])]),u,g,f,b]),v,e("p",null,[t("The "),e("a",_,[t("Grocery List video series"),i(a)]),t(" walks through how to complete this assignment.")])])}const I=s(c,[["render",y],["__file","grocery-list.html.vue"]]);export{I as default};