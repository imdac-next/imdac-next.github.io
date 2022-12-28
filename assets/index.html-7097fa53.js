import{_ as o,M as i,p as m,q as n,R as e,t as a,N as d,a3 as t}from"./framework-dd056dd6.js";const l={},h=e("h1",{id:"css-box-sizing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-box-sizing","aria-hidden":"true"},"#"),a(" CSS Box Sizing")],-1),r=e("h2",{id:"content-box",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#content-box","aria-hidden":"true"},"#"),a(" Content Box")],-1),s=e("p",null,"The default setting for the box model has the width and height property to set the width and height of the content area of the box.",-1),c=e("p",null,"The width of HTML elements is then calculated by the combined values of the width, padding, and border properties. Similarly the height of the HTML elements is calculated by the combined value of height, padding, and border properties.",-1),g=e("p",null,"With this default setting, we've set a width and height of 100px on the box. There's a 5px wide border and 10px for the padding. When we click on the buttons we'll see the total calculated value is 130px.",-1),b=e("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/WwaMxO/?height=250&theme-id=0&default-tab=css,result&embed-version=2",allowfullscreen:"allowfullscreen",width:"300",height:"250"},'See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/WwaMxO/"&amp;amp;amp;amp;amp;amp;amp;gt;HTML Element Default Box Sizing&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.',-1),u=t('<p>Breaking down the measurements it looks like this:</p><ul><li>Total Width = width + padding-left + padding-right + border-left + border-right</li><li>Total Width = 100px + 10px + 10px + 5px + 5px = 130px</li><li>Total Height = height + padding-top + padding-bottom + border-top + border-bottom</li><li>Total Height = 100px + 10px + 10px + 5px + 5px = 130px</li></ul><p>These values give us a width and height of 130px each.</p><h2 id="border-box" tabindex="-1"><a class="header-anchor" href="#border-box" aria-hidden="true">#</a> Border Box</h2><p>The default of content-box needs us to consider the width, height, border and padding property values separately while creating a layout.</p><p>Box sizing allows us to simplify the calculation of the total width and total height by using the width property value for overall width of the element including the border and padding and height property value for overall height of the element including the border and padding.</p><p>Because of great browser support, we are safe to rely on leveraging the css property <code>box-sizing</code> to change the box-sizing model to calculate everything from the root width and height. <code>box-sizing:border-box;</code></p>',7),f=e("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/KzGQNZ/?height=250&theme-id=0&default-tab=css,result&embed-version=2",allowfullscreen:"allowfullscreen",width:"300",height:"250"},'See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/KzGQNZ/"&amp;amp;amp;amp;amp;amp;amp;gt;HTML Element Default Box Sizing&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.',-1),x=e("p",null,"When we click the buttons to display the total calculated width now - the box stays at 100px and the border and padding are calculated inside the width.",-1),w={href:"http://www.paulirish.com/2012/box-sizing-border-box-ftw/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>As we progress further along with our layouts we&#39;ll see the benefits of having these extra calculations done for us. It&#39;s a great advantage to have the total calculated width set by the width style.</p><h2 id="setting-the-box-sing-for-all-elements" tabindex="-1"><a class="header-anchor" href="#setting-the-box-sing-for-all-elements" aria-hidden="true">#</a> Setting the box-sing for all elements</h2><p>Before we start our CSS styles we can add the following code to set the box-sizing for every element on the page</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>html{
  box-sizing: border-box;
}
*,
*:before,
*:after{
  box-sizing: inherit;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(y,M){const p=i("ExternalLinkIcon");return m(),n("div",null,[h,r,s,c,g,b,u,f,x,e("p",null,[a("Paul Irish, a developer at google recommends assigning the box-sizing: border-box style to "),e("a",w,[a("all of our HTML elements"),d(p)]),a(".")]),v])}const z=o(l,[["render",_],["__file","index.html.vue"]]);export{z as default};
