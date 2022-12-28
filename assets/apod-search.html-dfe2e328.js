import{_ as o,M as n,p as i,q as r,R as e,t,N as s,a3 as l}from"./framework-dd056dd6.js";const d={},c=e("h1",{id:"apod-search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apod-search","aria-hidden":"true"},"#"),t(" APOD Search")],-1),h=e("h2",{id:"objective",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objective","aria-hidden":"true"},"#"),t(" Objective")],-1),p={href:"https://api.nasa.gov",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"app-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#app-overview","aria-hidden":"true"},"#"),t(" App Overview")],-1),g=e("p",null,"When a user first visits the site, they are presented with a form asking for a non-future date. With provided date, the app will make a request to the APOD API to retrieve that day's Astronomy Picture of the Day. The Picture of the Day will then be displayed on the page along with the title, date, and explanation. Clicking on the image should open the high definition version of the image.",-1),f=e("p",null,"The user will able to save images as favourites. Favourites images should be stored in local storage and display on the page whenever the user visits the site. Favourite images can also be deleted.",-1),m=e("h2",{id:"resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resources","aria-hidden":"true"},"#"),t(" Resources")],-1),v={href:"https://api.nasa.gov/#apod",target:"_blank",rel:"noopener noreferrer"},b={href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>The APOD API can be used to retrieve APOD data based on a specific date. The <code>date</code> parameter is added to url and is to indicate the date of the APOD image to retrieve. The format of the date should be as follows: <code>YYYY-MM-DD</code>.</p><p>The APOD API will return a JSON object, which will contain the <code>url</code> to the image, the <code>title</code> of the image, the <code>date</code> of the image, and the <code>explanation</code> of the image. An example of an APOD JSON object can be found below.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token string">&quot;2022-03-27&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;explanation&quot;</span><span class="token operator">:</span><span class="token string">&quot;Why would the surface of Titan light up with a blinding flash? The reason: a sunglint from liquid seas.  Saturn&#39;s moon Titan has numerous smooth lakes of methane that, when the angle is right, reflect sunlight as if they were mirrors.  Pictured here in false-color, the robotic Cassini spacecraft that orbited Saturn from 2004 to 2017 imaged the cloud-covered Titan in 2014 in different bands of cloud-piercing infrared light.  This specular reflection was so bright it saturated one of Cassini&#39;s infrared cameras. Although the sunglint was annoying -- it was also useful.  The reflecting regions confirm that northern Titan houses a wide and complex array of seas with a geometry that indicates periods of significant evaporation.  During its numerous passes of our Solar System&#39;s most mysterious moon, Cassini has revealed Titan to be a world with active weather -- including times when it rains a liquefied version of natural gas.&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;hdurl&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_2002.jpg&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;media_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;service_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Titan Seas Reflect Sunlight&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;url&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_960.jpg&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Not all APOD are images. Some are videos. The <code>media_type</code> property can be used to determine if the day&#39;s APOD is an image or a video.</p></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ol><li>The assignment should utilize one HTML (<strong>index.html</strong>), CSS (<strong>style.css</strong>), and JavaScript (<strong>script.js</strong>) file, each located at the root of the repository.</li><li>Feel free to use a modern CSS Framework like Bootstrap or Foundation, or a CSS reset (<strong>reset.css</strong>).</li><li>You may not use inline events. All DOM events must be handled using Event Listeners.</li><li>You may not declare variables with <code>var</code>. Use either <code>const</code> or <code>let</code>.</li><li>The use of JavaScript libraries is allowed.</li><li>Do not use the <code>XMLHttpRequest</code> object or the jQuery <code>ajax()</code> method. Use the Fetch API for asynchronous operations.</li><li>The web application should be responsive.</li><li>The web application should not experience any page refreshes.</li><li>The web application should include a form that asks the user to input a date.</li><li>The web application should asynchronously retrieve and display the Astronomy Picture of the Day using NASA&#39;s APOD API and date provided by the user.</li><li>The web application should display the APOD image, title, date, and explanation.</li><li>The web application should display a high definition version of the APOD image when it is clicked.</li><li>The web application should allow the user to save Pictures as favourites, which will be stored to local storage.</li><li>The web application should display any saved favourites.</li><li>The web application should allow the user to delete any saved Pictures as favourites, which will remove the image from the page and from local storage.</li></ol><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints" aria-hidden="true">#</a> Hints</h2>`,7),w=e("li",null,"Due to the limit on requests for the APOD API, students are encouraged to store the APOD data in local storage or use a static file during development.",-1),y=e("li",null,[t("When displaying the APOD image either after a APOD search or in the favourites section, the standard "),e("code",null,"url"),t(" property should be used. When displaying the high definition version of the image, the "),e("code",null,"hdurl"),t(" property should be used.")],-1),k=e("li",null,[t("Some APOD image are actually videos. The "),e("code",null,"media_type"),t(" property in provided JSON can be used to tell if the APOD is an image or a video. Student will not be required to work with videos nor implement them into their application.")],-1),A={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},q={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"};function P(S,T){const a=n("ExternalLinkIcon");return i(),r("div",null,[c,h,e("p",null,[t("You will design and develop a web application that will allow users to request different Astronomy Pictures of the Day by date using "),e("a",p,[t("NASA APOD API"),s(a)]),t(". Users will also be able to save pictures as favourites.")]),u,g,f,m,e("p",null,[t("To complete this assignment, students will be using the "),e("a",v,[t("NASA APOD API"),s(a)]),t(". Students are encouraged to register for an "),e("a",b,[t("API Key"),s(a)]),t(".")]),_,e("ol",null,[w,y,k,e("li",null,[t("An object can be an excellent way to store a web application settings. Storing an object to local storage does require using "),e("a",A,[t("JSON.stringify"),s(a)]),t(" and "),e("a",q,[t("JSON.parse"),s(a)]),t(".")])])])}const D=o(d,[["render",P],["__file","apod-search.html.vue"]]);export{D as default};
