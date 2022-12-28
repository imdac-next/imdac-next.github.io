import{_ as e,p as t,q as o,a3 as i}from"./framework-dd056dd6.js";const s="/images/github-repo-copy1.png",a="/images/github-repo-copy2.png",n="/images/vscode-git-clone.png",r="/images/vscode-git-clone-url.png",c="/images/vscode-git-clone-location.png",h="/images/vscode-git-clone-trust.png",d="/images/vscode-git-clone-open.png",g="/images/vscode-git-edit.png",p="/images/vscode-git-sc.png",l="/images/vscode-git-stage.png",m="/images/vscode-git-commit.png",u="/images/vscode-git-pull.png",f="/images/vscode-git-push.png",y="/images/github-updated.png",w={},b=i('<h1 id="working-with-a-github-repository" tabindex="-1"><a class="header-anchor" href="#working-with-a-github-repository" aria-hidden="true">#</a> Working with a GitHub Repository</h1><p>To start working with a GitHub Repository we first have to bring it to our computer, a process called cloning.</p><h2 id="cloning-a-repository" tabindex="-1"><a class="header-anchor" href="#cloning-a-repository" aria-hidden="true">#</a> Cloning a repository</h2><p>Click on the clipboard icon next to the repository URL. <img src="'+s+'" alt="github copy repo"></p><p>If your repository page looks different than above screenshot the link can be found under <strong>code</strong> button <img src="'+a+'" alt="github copy repo code button"></p><p>Now, open Visual Studio Code and on a Mac computer press <code>Command Shift P</code> or on a Windows computer press <code>Control Shit P</code> to open commands panel.</p><p>Search for <strong>clone</strong> and select <strong>Git Clone</strong> option.</p><p><img src="'+n+'" alt="vs code git clone"></p><p>Paste in the repository URL copied from GitHub.com and hit enter. <img src="'+r+'" alt="vs code git clone url"></p><p>Select the location for your repository. Note: <strong>DO NOT</strong> select an existing repository folder as the location to clone this repository. <img src="'+c+'" alt="vs code git clone location"></p><p><em>(Optional)</em> if prompted to trust the authors of the files select <em>&quot;Trust authors of all files&quot;</em><img src="'+h+'" alt="vs code git clone trust authors"></p><p>Once the cloning process is complete you will see a prompt to open the folder or open in new window. Click on <strong>Open</strong>. <img src="'+d+'" alt="vs code git clone open folder"></p><h2 id="adding-a-file" tabindex="-1"><a class="header-anchor" href="#adding-a-file" aria-hidden="true">#</a> Adding a file</h2><p>You can now start working with the repository, let&#39;s start by adding a file with the name <code>index.html</code><img src="'+g+'" alt="vs code adding a file to repo"></p><h2 id="using-source-control" tabindex="-1"><a class="header-anchor" href="#using-source-control" aria-hidden="true">#</a> Using Source Control</h2><p>When we add, edit or remove any files from the repository the changes are tracked by the git version control system and in VS Code we can see these changes and register them as a version from the source control tab. <img src="'+p+'" alt="vs code source control tab"></p><h2 id="staging-the-changes" tabindex="-1"><a class="header-anchor" href="#staging-the-changes" aria-hidden="true">#</a> Staging the changes</h2><p>When we make any changes to the files in our repository by adding new files, editing existing files or deleting files we need to stage these changes. Staging the changes is like recognizing the changes that we want to be saved as a version. We can select one or multiple files that have been changed to be part of a version by clicking the <code>+</code> by the file name. <img src="'+l+'" alt="vs code staging changes"></p><h2 id="committing-the-staged-changes" tabindex="-1"><a class="header-anchor" href="#committing-the-staged-changes" aria-hidden="true">#</a> Committing the staged changes</h2><p>Commit is the process to create a version of the changes that we staged in the previous step. When we commit our staged changes we tell the git version control system to save these changes as a version of our repository.</p><p>While committing we add a message in the text field, this message needs to be short and descriptive of the action being performed by the changes you are committing.</p><p>A good way to write the message is to assume that you are writing it as &quot;This commit...&quot;. Now, you will not write &quot;this commit&quot; but the next part. Example: &quot;This commit&quot; adds index.html file, so the message will be <em>adds index.html</em></p><p><img src="'+m+'" alt="vs code git commit changes"></p><h2 id="pull-changes" tabindex="-1"><a class="header-anchor" href="#pull-changes" aria-hidden="true">#</a> Pull changes</h2><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You will skip this step if this is your first commit to the repository as there is no code to be pulled.</p></div><p>Pull is the process to download and merge any code that might have been added to the repository by your team mate, or if you are often changing computers to work on your project. This way you can make sure that you are not going to overwrite someone&#39;s work or create other issues.</p><p>For pull simply go under more options and select pull.</p><p><img src="'+u+'" alt="vs code git pull"></p><h2 id="push-your-changes" tabindex="-1"><a class="header-anchor" href="#push-your-changes" aria-hidden="true">#</a> Push your changes</h2><p>Push is the process of pushing your code to the GitHub repository for your teammates to pull and work with. This will send your code along with the commits to GitHub.com <img src="'+f+'" alt="vs code git pull"></p><h2 id="check-for-the-update" tabindex="-1"><a class="header-anchor" href="#check-for-the-update" aria-hidden="true">#</a> Check for the update</h2><p>You can now head over to GitHub.com and check for the update to show-up in your repository. You will notice a few things as highlighted in the screenshot below: your commit message, when the repository was updated, when the commit was made and how many commits you have. <img src="'+y+'" alt="GitHub repository updated screen"></p>',32),v=[b];function _(k,x){return t(),o("div",null,v)}const S=e(w,[["render",_],["__file","working.html.vue"]]);export{S as default};
