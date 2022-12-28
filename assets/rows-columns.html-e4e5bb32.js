import{_ as o,M as p,p as l,q as c,R as n,t as a,N as e,a3 as s}from"./framework-dd056dd6.js";const u={},i=n("h1",{id:"bootstrap-rows-and-columns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bootstrap-rows-and-columns","aria-hidden":"true"},"#"),a(" Bootstrap Rows and Columns")],-1),d={href:"https://getbootstrap.com/docs/5.2/layout/grid/",target:"_blank",rel:"noopener noreferrer"},r=s(`<h2 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> Rows</h2><p>A row serves as a wrapper for columns and must be placed inside of a container. A row is created by adding the class <code>row</code> to any element inside of a container. By default columns will have horizontal padding (aka. a gutter), this can be removed by adding <code>no-gutter</code> to the row element. Rows also have negative margins applied to them so that the content will visually align down the left side.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- row with gutters --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- row without gutters --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row no-gutter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="columns" tabindex="-1"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> Columns</h2><p>All content must be placed inside of a column and only columns may be immediate children of rows. A column is created by adding the <code>col</code> inside any element that is inside of a row. By default, columns will be automatically layout as equal width columns.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- columns with equal width --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=n("iframe",{height:"190",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/gOpmbyj?height=190&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/gOpmbyj'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),g=n("h2",{id:"grid-options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid-options","aria-hidden":"true"},"#"),a(" Grid Options")],-1),m={href:"https://getbootstrap.com/docs/5.2/layout/grid/#grid-options",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"sm",-1),v=n("code",null,"md",-1),b=n("code",null,"lg",-1),f=n("code",null,"xl",-1),q=n("code",null,"col",-1),w=s(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- columns with equal width --&gt;</span>
  <span class="token comment">&lt;!-- columns will stack for screen smaller than 768px --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=n("iframe",{height:"380",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/XWbMbMM?height=380&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/XWbMbMM'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),y=s(`<p>A number can be added to <code>col</code> class to indicate the number of columns out of 12 a specific column should take. Bootstrap&#39;s auto-layout feature means that if only one or a few columns have a specific width the remaining siblings will automatically resize around it.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If using both breakpoint and the number of columns together, the number should always succeed the breakpoint abbreviation. <code>col</code> <code>-(breakpoint)</code> <code>-(columns)</code> example if we need a column to take 4 columns width at small breakpoint or above we will write the class as <code>col-sm-4</code></p></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- columns are different width --&gt;</span>
  <span class="token comment">&lt;!-- columns will stack for screen smaller than 576px --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),M=n("iframe",{height:"190",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/VwLpLbd?height=190&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/VwLpLbd'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),I=n("h2",{id:"alignment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#alignment","aria-hidden":"true"},"#"),a(" Alignment")],-1),D={href:"https://getbootstrap.com/docs/5.2/layout/grid/#alignment",target:"_blank",rel:"noopener noreferrer"},C={href:"https://getbootstrap.com/docs/5.2/utilities/flex/#justify-content",target:"_blank",rel:"noopener noreferrer"},x=s(`<h3 id="vertical-alignment" tabindex="-1"><a class="header-anchor" href="#vertical-alignment" aria-hidden="true">#</a> Vertical alignment</h3><p>To vertically align all columns, the <code>align-items-</code> group of classes can be applied to the row. The accepted values are <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, and <code>stretch</code> (default)</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- columns will be centered vertically --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row align-items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B=n("iframe",{height:"286",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/dyovojq?height=286&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/dyovojq'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),R=s(`<p>To align an individual column, the <code>align-self-</code> group of classes should be applied to the desired column. The accepted values are <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, and <code>stretch</code> (default)</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- the middle column will be at the bottom --&gt;</span>
  <span class="token comment">&lt;!-- the other columns will be at the top --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row align-items-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm align-self-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N=n("iframe",{height:"286",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/KKpWpGg?height=286&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/KKpWpGg'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),P=n("h3",{id:"horizontal-alignment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#horizontal-alignment","aria-hidden":"true"},"#"),a(" Horizontal alignment")],-1),T={href:"https://getbootstrap.com/docs/5.2/layout/grid/#horizontal-alignment",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"justify-content-",-1),O=n("code",null,"start",-1),S=n("code",null,"end",-1),W=n("code",null,"center",-1),j=n("code",null,"between",-1),A=n("code",null,"around",-1),E=s(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Horizontal alignment only works if the total width of all the columns does <strong>NOT</strong> equal the full width of the row.</p></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- the columns will be centered in the row --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row justify-content-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>.col-sm-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L=n("iframe",{height:"286",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/BaNWNEy?height=286&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/BaNWNEy'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),V=n("h2",{id:"row-columns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#row-columns","aria-hidden":"true"},"#"),a(" Row Columns")],-1),G={href:"https://getbootstrap.com/docs/5.2/layout/grid/#row-columns",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,".row-cols-*",-1),H=s(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row row-cols-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Column<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Column<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Column<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Column<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J=n("iframe",{height:"229",style:{width:"100%"},scrolling:"no",title:"Bootstrap Rows and Columns",src:"https://codepen.io/IMD/embed/mdJWeNO?height=229&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/mdJWeNO'>Bootstrap Rows and Columns</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function X(F,Q){const t=p("ExternalLinkIcon");return l(),c("div",null,[i,n("p",null,[a("Like most grid systems, Bootstrap's "),n("a",d,[a("grid system"),e(t)]),a(" is made up of rows and columns, and together they can be used to create any responsive layout you can imagine.")]),r,k,g,n("p",null,[a("There are many "),n("a",m,[a("grid options"),e(t)]),a(" that can be applied to the bootstrap Grid. The first is to force columns to stack at specific breakpoints. This is accomplished by appending the breakpoint abbreviation ("),h,a(", "),v,a(", "),b,a(", "),f,a(") to the "),q,a(" class.")]),w,_,y,M,I,n("p",null,[n("a",D,[a("Alignment"),e(t)]),a(" of columns is also possible when using the Bootstrap grid system. The "),n("a",C,[a("flexbox alignment utilities"),e(t)]),a(" can be used to vertically and/or horizontally align columns.")]),x,B,R,N,P,n("p",null,[n("a",T,[a("Horizontal alignment"),e(t)]),a(" can be achieved by adding the "),z,a(" group of classes to the row. The accepted values are "),O,a("(default), "),S,a(", "),W,a(", "),j,a(", and "),A]),E,L,V,n("p",null,[a("The "),n("a",G,[a("row columns"),e(t)]),a(" classes ("),K,a(") gives a quick way to set the number of columns in the specific row.")]),H,J])}const Y=o(u,[["render",X],["__file","rows-columns.html.vue"]]);export{Y as default};