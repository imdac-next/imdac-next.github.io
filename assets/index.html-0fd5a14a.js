import{_ as i,M as m,p as n,q as s,N as e,R as a,t as p}from"./framework-dd056dd6.js";const r={},h=a("h1",{id:"sprite-animation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sprite-animation","aria-hidden":"true"},"#"),p(" Sprite Animation")],-1),l=a("p",null,[p("In 1878 "),a("span",null,"Edward Muybridge produced"),p(" the first sequence of photography setup using a device known as a "),a("a",{href:"/content/enforced/39845-17W_MTM6230_010/wiki_content/%24WIKI_REFERENCE%24/pages/css-sprite-animations","data-api-endpoint":"https://algonquin.instructure.com/api/v1$WIKI_REFERENCE$/pages/css-sprite-animations","data-api-returntype":"Page"},"Zoopraxiscope "),p("to produce the first known instance of videography.")],-1),d={href:"http://designmodo.com/steps-css-animations/",target:"_blank",rel:"noopener noreferrer"},c=a("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/ORLzGz/?height=565&theme-id=0&default-tab=result&embed-version=2",width:"300",height:"565",allowfullscreen:"allowfullscreen"},'See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/ORLzGz/"&amp;amp;amp;amp;amp;amp;amp;amp;gt;ORLzGz&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;.',-1),f=a("h2",{id:"the-first-four-frames",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#the-first-four-frames","aria-hidden":"true"},"#"),p(" The first four frames")],-1),u=a("p",null,"If we were building our own sprite we would keep the coordinates of the image in a singular row or column to make the measurements easier. To simulate that we're going to resize our container for only the first row of pictures. Let's pretend our sprite is just these four pictures arranged in this order. We've adjusted the size of the image container and the position so only the first four frames are visible in the container.",-1),g=a("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/rrBpgR/?height=365&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"365",allowfullscreen:"allowfullscreen"},'See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/rrBpgR/"&amp;amp;amp;amp;amp;amp;gt;rrBpgR&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.',-1),_=a("h2",{id:"resizing-for-one-frame",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#resizing-for-one-frame","aria-hidden":"true"},"#"),p(" Resizing for one frame")],-1),w=a("p",null,"Each frame is about 250px.",-1),b=a("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/ORLzZQ/?height=365&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"365",allowfullscreen:"allowfullscreen"},'See the Pen &amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/ORLzZQ/"&amp;amp;amp;amp;amp;gt;ORLzZQ&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;.',-1),I=a("h2",{id:"steps-timing-function",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#steps-timing-function","aria-hidden":"true"},"#"),p(" Steps Timing Function")],-1),M=a("p",null,"We can leverage the steps property to break up the animation into (#) parts from 0 - 100%. In our example below we break the transition from sliding the image left the width of itself into 4 parts. This automatically calculates the position at 4 points, these four points line up with the width of our pictures.",-1),y=a("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/qaWpgO/?height=665&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"665",allowfullscreen:"allowfullscreen"},'See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/qaWpgO/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;qaWpgO&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.',-1),D=a("p",null,"Without steps its a smooth transition. This example is slowed down from the previous example.",-1),x=a("iframe",{style:{width:"100%"},src:"//codepen.io/IMD/embed/yaBpmw/?height=665&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"665",allowfullscreen:"allowfullscreen"},'See the Pen &amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/yaBpmw/"&amp;amp;amp;gt;yaBpmw&amp;amp;amp;lt;/a&amp;amp;amp;gt; by IMD (&amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;gt;@IMD&amp;amp;amp;lt;/a&amp;amp;amp;gt;) on &amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;gt;CodePen&amp;amp;amp;lt;/a&amp;amp;amp;gt;.',-1);function v(R,z){const t=m("Youtube"),o=m("ExternalLinkIcon");return n(),s("div",null,[h,l,e(t,{id:"IEqccPhsqgA",citation:"Published by <a href='https://www.youtube.com/channel/UC8ZyvXxO0tvyct3ixFUbdiA'>silentfilmhouse</a>"}),a("p",null,[p("This sequence of images has since entered public domain and we can use it to introduce a new animation property "),a("a",d,[p("steps"),e(o)]),p(". We'll start looking at the public domain image.")]),c,f,u,g,_,w,b,I,M,y,D,x])}const k=i(r,[["render",v],["__file","index.html.vue"]]);export{k as default};
