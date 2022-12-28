import{_ as a,M as i,p as r,q as n,R as e,t as o,N as s,a3 as l}from"./framework-dd056dd6.js";const c="/images/validation-by-url.png",d="/images/validation-by-code.png",p="/images/html-validation-input.png",h="/images/html-validation-validated.png",m="/images/html-validation-fixed.png",u={},g=e("h1",{id:"html-validation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#html-validation","aria-hidden":"true"},"#"),o(" HTML Validation")],-1),f=e("p",null,"Validating our code as we create our web pages is very important to make sure that we are writing error free, standard based code. There are many tools available for helping us to validate our code. By default Visual Studio Code will check for common errors such as missing closing tags, mistyped tag names etc. in our code.",-1),v={href:"https://validator.w3.org/",target:"_blank",rel:"noopener noreferrer"},_=l('<p>There are three options available for us to supply to HTML code we want to validate. We will be using the following two:</p><ol><li><p>We can supply a URI for the validation service to get the HTML from and validate it. Useful for files in GitHub repository or other web servers. <img src="'+c+'" alt="W3C HTML validator URL Input"></p></li><li><p>We can copy paste our HTML inside the Validate by Direct Input. Useful for local files in out computer. <img src="'+d+'" alt="W3C HTML validator Code Input"></p></li></ol><h2 id="validation-steps" tabindex="-1"><a class="header-anchor" href="#validation-steps" aria-hidden="true">#</a> Validation Steps</h2><p>After copy pasting the code in the direct input area, we can click on <strong>check</strong> button to start validation <img src="'+p+'" alt="HTML validation code input"></p><p>Once the validation is complete we see the list of errors and the location of errors on the page <img src="'+h+'" alt="HTML code validated"></p><p>We can reference the errors and fix the issues in our code. Repeat the validation process until we see a green success message saying No errors or warning to show. <img src="'+m+'" alt="HTML code fixed"></p><h2 id="common-errors-to-ignore" tabindex="-1"><a class="header-anchor" href="#common-errors-to-ignore" aria-hidden="true">#</a> Common Errors to Ignore</h2><p>Sometimes we cannot achieve the green success bar and it is okay, but we should aim to resolve as many issues as possible. The common messages to ignore are:</p><ul><li>Warnings related to HTML conformance and UTF-8</li><li>Google font errors</li></ul>',9);function w(b,T){const t=i("ExternalLinkIcon");return r(),n("div",null,[g,f,e("p",null,[o("We will be using an external website for validation the "),e("a",v,[o("W3C HTML Validation Service"),s(t)])]),_])}const y=a(u,[["render",w],["__file","index.html.vue"]]);export{y as default};