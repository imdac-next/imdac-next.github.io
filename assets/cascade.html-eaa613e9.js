import{_ as i,M as o,p as n,q as s,R as e,t as a,N as t,a3 as c}from"./framework-dd056dd6.js";const d={},l=c('<h1 id="cascade" tabindex="-1"><a class="header-anchor" href="#cascade" aria-hidden="true">#</a> Cascade</h1><p>According to the W3C:</p><p>The <strong>cascade</strong> takes an unordered list of declared values for a given property on a given element, sorts them by their declaration’s precedence as determined below, and outputs a single cascaded value.<br> The cascade sorts declarations according to the following criteria, in descending order of priority:</p><h2 id="origin-and-importance" tabindex="-1"><a class="header-anchor" href="#origin-and-importance" aria-hidden="true">#</a> Origin and Importance</h2><p>The origin of a declaration is based on where it comes from and its importance is whether or not it is declared <code>!important</code> The precedence of the various origins is, in descending order:</p><ol><li>Transition declarations</li><li>Important user agent declarations</li><li>Important user declarations</li><li>Important author declarations</li><li>Animation declarations</li><li>Normal author declarations</li><li>Normal user declarations</li><li>Normal user agent declarations</li></ol><p><em>Declarations from origins earlier in this list win over declarations from later origins.</em></p><h2 id="specificity" tabindex="-1"><a class="header-anchor" href="#specificity" aria-hidden="true">#</a> Specificity</h2>',8),h={href:"https://www.w3.org/TR/selectors/#specificity",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.w3.org/TR/css-style-attr/#interpret",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"order-of-appearance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#order-of-appearance","aria-hidden":"true"},"#"),a(" Order of Appearance")],-1),u=e("p",null,[a("The last declaration in document order wins. For this purpose:"),e("br"),a(" Declarations from imported style sheets are ordered as if their style sheets were substituted in place of the @import rule."),e("br"),a(" Declarations from style sheets independently linked by the originating document are treated as if they were concatenated in linking order, as determined by the host document language."),e("br"),a(" Declarations from style attributes are ordered according to the document order of the element the style attribute appears on, and are all placed after any style sheets.")],-1),m=e("h2",{id:"further-review",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#further-review","aria-hidden":"true"},"#"),a(" Further Review")],-1),g={href:"https://www.linkedin.com/learning/search?keywords=css%20cascade&u=2199673",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),a(" See Also")],-1),y={href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",target:"_blank",rel:"noopener noreferrer"};function w(v,S){const r=o("ExternalLinkIcon");return n(),s("div",null,[l,e("p",null,[a("The "),e("a",h,[a("Selectors module"),t(r)]),a(" describes how to compute the specificity of a selector. Each declaration has the same specificity as the style rule it appears in. For the purpose of this step, declarations that do not belong to a style rule (such as the "),e("a",p,[a("contents of a style attribute"),t(r)]),a(" ) are considered to have a specificity higher than any selector. The declaration with the highest specificity wins.")]),f,u,m,e("p",null,[e("a",g,[a("Lynda.com - Cascading and selector specificity"),t(r)])]),_,e("ul",null,[e("li",null,[e("a",y,[a("Cascade and inheritance - Learn web development | MDN"),t(r)])]),e("li",null,[e("a",b,[a("Introducing the CSS Cascade - CSS: Cascading Style Sheets | MDN"),t(r)])])])])}const C=i(d,[["render",w],["__file","cascade.html.vue"]]);export{C as default};
