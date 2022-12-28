import{_ as t}from"./safari-preferences-91384482.js";import{_ as n,M as s,p as i,q as r,R as e,t as a,N as l,a3 as c}from"./framework-dd056dd6.js";const h="/images/chrome-dev-tools.png",d="/images/firefox-dev-tools.png",p="/images/dev-tools-tabs.png",g="/images/dev-tools-view.png",m="/images/dev-tools-selector.png",u="/images/dev-tools-selector-used.png",f="/images/dev-tools-responsive.png",v="/images/dev-tools-responsive-view.png",w={},b=c('<h1 id="browser-developer-tools" tabindex="-1"><a class="header-anchor" href="#browser-developer-tools" aria-hidden="true">#</a> Browser Developer Tools</h1><p>Our browsers come with built-in set of web authoring and debugging tools, that can help us in our web development process. Use the DevTools to iterate, debug, and profile your site. Some of the common tasks are:</p><ul><li>See and interact with the HTML of the page</li><li>See and interact with the CSS of the page</li><li>Output JavaScript console messages and look for errors</li><li>Inspect individual elements on the page to see and change the styles applied</li><li>Check the performance of the page</li><li>Check the network requests made by the webpage</li></ul><h2 id="accessing-developer-tools" tabindex="-1"><a class="header-anchor" href="#accessing-developer-tools" aria-hidden="true">#</a> Accessing Developer Tools</h2><p><strong>Chrome and Firefox</strong></p><p>In Chrome and Firefox we can open the dev tools by any of the two methods:</p><ol><li>Right click on the element you want to see the code for and select the <em>Inspect</em> or <em>Inspect Element</em> option</li><li>Press <code>Command + Option + I</code> (on Mac) or <code>Control + Option + I</code> (on Windows)</li></ol><p>This will open a window at the bottom of our browser.</p><p>Chrome Developer Tools <img src="'+h+'" alt="Chrome Dev Tools"></p><p>Firefox Developer Tools <img src="'+d+'" alt="Firefox Dev Tools"></p><p><strong>Safari (macOS only)</strong></p><p>By default, access to the developer tools in Safari is turned off. Follow the steps below activate the developer tools:</p><ol><li>While in Safari, open Safari&#39;s Preferences found under <strong>Safari &gt; Preferences</strong></li><li>Select the <strong>Advanced</strong> tab</li><li>Check the &quot;Show Developer menu in menu bar&quot; box</li></ol><p><img src="'+t+'" alt="Safari Preferences Window"></p><p>Once we have turned one the Develop Menu option we can access the developer tools in the same was as Chrome And Firefox.</p><h2 id="understanding-options" tabindex="-1"><a class="header-anchor" href="#understanding-options" aria-hidden="true">#</a> Understanding Options</h2><p>Most developer tools have similar options and labels for them. We will be looking at the screenshots from Google Chrome.</p><h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h3><p>There are different tabs available in dev tools. The most commonly used options are:</p><ul><li><strong>Elements</strong> - Viewing and editing HTML elements and styles applied on the elements in CSS</li><li><strong>Console</strong> - Used with JavaScript, where we can output information using JavaScript and see any errors in running our JavaScript</li><li><strong>Network</strong> - Displays the files downloaded by our webpage and information about each file</li><li><strong>Sources</strong> - More information about each file used on the webpage</li></ul><p><img src="'+p+'" alt="dev tools tabs"></p><h3 id="changing-the-location-of-devtools" tabindex="-1"><a class="header-anchor" href="#changing-the-location-of-devtools" aria-hidden="true">#</a> Changing the location of DevTools</h3><p>We can change the location of the dev tools to the bottom(default), left side, right side or out of the browser window by:</p><ol><li>Clicking on the three dots for more options in the top right of the dev tools window</li><li>Selecting the icon for the location we want the dev tools to appear in</li></ol><p><img src="'+g+'" alt="dev tools location"></p><h3 id="element-inspector-selector" tabindex="-1"><a class="header-anchor" href="#element-inspector-selector" aria-hidden="true">#</a> Element Inspector/Selector</h3><p>To easily inspect different elements on the page and select an element to see the styles applied on it. We can use the inspector/selector tool. <img src="'+m+'" alt="dev tools selector"></p><p>Once we have selected the tool we can hover over elements to inspect them and click on an element to select it.</p><p><img src="'+u+'" alt="dev tools selector used"></p><h3 id="responsive-view" tabindex="-1"><a class="header-anchor" href="#responsive-view" aria-hidden="true">#</a> Responsive view</h3><p>We can test our webpage on different screen sizes and see how the website content will display by using the responsive view tool.</p><p>Switch between the responsive view and normal view by clicking on the responsive view option <img src="'+f+'" alt="dev tools responsive"></p><p>Once in the responsive view we can either select the presets for screen sizes from the top or resize the screen manually by clicking and dragging the screen from one side. <img src="'+v+'" alt="dev tools responsive view"></p><h2 id="manipulating-html" tabindex="-1"><a class="header-anchor" href="#manipulating-html" aria-hidden="true">#</a> Manipulating HTML</h2><p>Using the Elements tab we can interact with the HTML of the webpage and perform the following actions:</p><ul><li><strong>Finding elements</strong> - click through the elements and unfold them to see the content of each elements</li><li><strong>Editing elements</strong> - edit elements by double clicking on the tag name</li><li><strong>Editing attributes</strong> - double click on the attribute name</li><li><strong>Delete element</strong> - select the element and then press delete</li><li><strong>Rearrange elements</strong> - Drag and drop elements to check different arrangement</li></ul><h2 id="manipulating-css" tabindex="-1"><a class="header-anchor" href="#manipulating-css" aria-hidden="true">#</a> Manipulating CSS</h2><p>We can use the CSS panel in the Elements tab to add new properties, remove existing properties and modify value of existing properties.</p><ul><li><strong>Change property name</strong> - click directly on the property name to change it</li><li><strong>Edit property value</strong> - click directly on the property value to edit it</li><li><strong>Toggle property</strong> - click on the checkbox in-front of the property to toggle it on or off</li><li><strong>Strike through</strong> - Properties that are either in-correct or overwritten by another property are displayed with a strike through</li><li><strong>Add new property</strong> - We can add new property by clicking on the curly brace <code>{</code> at the top</li><li><strong>User agent styles</strong> - the browsers default styles will be listed as &quot;user agent&quot;</li></ul><div class="custom-container danger"><p class="custom-container-title">Important</p><p>Any manipulations we do in the dev tools will not be saved in our files and will be lost when we refresh the page.</p></div>',40),y={href:"https://developer.chrome.com/docs/devtools/workspaces/",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"You can also use extensions that can be used to save the manipulations form dev tools into the files directly.",-1);function k(S,x){const o=s("ExternalLinkIcon");return i(),r("div",null,[b,e("ul",null,[e("li",null,[e("a",y,[a("Here is an article for setting up workspaces in chrome to save your code in your files."),l(o)])]),_])])}const D=n(w,[["render",k],["__file","dev-tools.html.vue"]]);export{D as default};
