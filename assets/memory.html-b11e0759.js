import{_ as o,M as n,p as l,q as d,R as e,t,N as a,a3 as s}from"./framework-dd056dd6.js";const h={},c=e("h1",{id:"memory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#memory","aria-hidden":"true"},"#"),t(" Memory")],-1),m={class:"custom-container danger"},p=e("p",{class:"custom-container-title"},"A GitHub Classroom Assignment",-1),u={href:"https://classroom.github.com/a/U52DdHEh",target:"_blank",rel:"noopener noreferrer"},f=s('<h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>For the final project, you will be demonstrating your cumulative understanding of HTML, CSS, and JavaScript to create an interactive game of Memory.</p><h2 id="game-play" tabindex="-1"><a class="header-anchor" href="#game-play" aria-hidden="true">#</a> Game Play</h2><p>When the page loads the player will be presented with a set of difficulty options. Once the player has selected a difficulty, the cards will appear and the game will begin.</p><p>The player will click on any card to show the card&#39;s pattern. The card&#39;s pattern will remain shown until a second card is clicked. If the second card&#39;s pattern matches the first, the game will indicate that a match has been found. If the second card&#39;s pattern does not match the first, the both patterns will be hidden. The player will continue selecting cards until all of the matches have been found.</p><p>Once all matches have been found the player with an end of game sequence. Then the player should be presented with the option to play the game again.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>The following requirement must be met in order to complete the assignment successfully:</p><ol><li>Clone this repository from GitHub. <strong>Aside from this README file, there are NO starter files for this project.</strong></li><li>When the page loads, the screen must display a set of difficulty levels.</li><li>There must be a minimum of 3 difficulty levels. NOTE: Difficulty level can be created simply by adding or removing the number of cards on the board. There should be at least 4 cards for each difficulty level.</li><li>Selecting a difficulty level should display a grid of cards.</li><li>The cards must be laid out in a responsive, user-friendly manner.</li><li>The cards should be created and added to the page dynamically using JavaScript.</li><li>Each card should have a pattern (image, shape, symbol, etc) that is hidden from the player.</li><li>Clicking on a card should show the pattern.</li><li>If the second card matches the first, there must be some indication that there was a match. For example, the matched cards stay open, or fade out or disappear all together.</li><li>If the second card does not match the first, both cards should hide their patterns. Hiding the pattern MUST be animated.</li><li>When all the matches have been found, an ending sequence must be initiated. The ending sequence must use CSS Animation.</li><li>At the end of the sequence the player must be presented with the option to play again.</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>The following video is an example of how a finished version of the assignment could look like.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>In the video, it says that when a pattern is revealed, it must be animated.</p><p><strong>This is no longer a requirement.</strong></p></div>',12),g=e("h2",{id:"hints",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hints","aria-hidden":"true"},"#"),t(" Hints")],-1),y=e("p",null,"Below are a few suggestions, recommendations, and answers to common questions on how to complete this project. This list will be updated as questions arise.",-1),b={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://davidwalsh.name/css-flip",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="rubric" tabindex="-1"><a class="header-anchor" href="#rubric" aria-hidden="true">#</a> Rubric</h2><p>The following rubric will be use to grade this assignment.</p><table><thead><tr><th>Task</th><th style="text-align:center;">Points</th></tr></thead><tbody><tr><td>The game has at least 3 difficulty levels</td><td style="text-align:center;">5</td></tr><tr><td>The cards are dynamically generated by JavaScript</td><td style="text-align:center;">5</td></tr><tr><td>The cards are displayed in a responsive grid.</td><td style="text-align:center;">5</td></tr><tr><td>Clicking on a card reveals it pattern.</td><td style="text-align:center;">5</td></tr><tr><td>The game responds properly when a match is found.</td><td style="text-align:center;">10</td></tr><tr><td>The game responds properly when a match is not found.</td><td style="text-align:center;">10</td></tr><tr><td>The game ends when all the matches are found.</td><td style="text-align:center;">5</td></tr><tr><td>There is a animated sequence at the end of the game.</td><td style="text-align:center;">5</td></tr><tr><td><strong>Total</strong></td><td style="text-align:center;"><strong>50</strong></td></tr></tbody></table><h2 id="submission" tabindex="-1"><a class="header-anchor" href="#submission" aria-hidden="true">#</a> Submission</h2><p>When the project is completed, follow the steps below to submit for grading:</p><ol><li>Create a commit with the message &quot;Completes the Memory assignment&quot;</li><li>Push all commits to GitHub.</li><li>Submit the URL to your GitHub repository to the <strong>Memory</strong> assignment on BrightSpace.</li></ol>',6);function v(x,T){const i=n("ExternalLinkIcon"),r=n("Youtube");return l(),d("div",null,[c,e("div",m,[p,e("p",null,[t("This assignment must be accepted on "),e("a",u,[t("GitHub Classroom"),a(i)]),t(".")])]),f,a(r,{id:"PAxCBI3IKYw"}),g,y,e("ol",null,[e("li",null,[t("While you can use anything you wish for the patterns of your cards, it is recommended that you keep it simple. You can used simple shapes (squares, circles, rectangles, etc) and colors or a icons. For example, an icon font like "),e("a",b,[t("Font Awesome"),a(i)]),t(" would be an acceptable choice.")]),e("li",null,[t("David Walsh has an excellent tutorial on how to "),e("a",w,[t("Create a CSS Flipping Animation"),a(i)]),t(".")])]),_])}const q=o(h,[["render",v],["__file","memory.html.vue"]]);export{q as default};
