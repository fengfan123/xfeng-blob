import{_ as l,o as s,c as n,d as a}from"./app.2277f8cd.js";const e="/xfeng-blob/assets/getBoundingClientRect.17b76c17.png",o="/xfeng-blob/assets/navigator.0b65f5ea.png",g=JSON.parse('{"title":"BOM\u76F8\u5173","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E86\u89E3BOM","slug":"\u4E86\u89E3bom","link":"#\u4E86\u89E3bom","children":[]},{"level":2,"title":"window\u5BF9\u8C61","slug":"window\u5BF9\u8C61","link":"#window\u5BF9\u8C61","children":[]},{"level":2,"title":"location\u4F4D\u7F6E\u5BF9\u8C61","slug":"location\u4F4D\u7F6E\u5BF9\u8C61","link":"#location\u4F4D\u7F6E\u5BF9\u8C61","children":[]},{"level":2,"title":"history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61","slug":"history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61","link":"#history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61","children":[]},{"level":2,"title":"screen\u5C4F\u5E55\u5BF9\u8C61","slug":"screen\u5C4F\u5E55\u5BF9\u8C61","link":"#screen\u5C4F\u5E55\u5BF9\u8C61","children":[]},{"level":2,"title":"navigator \u5BF9\u8C61","slug":"navigator-\u5BF9\u8C61","link":"#navigator-\u5BF9\u8C61","children":[]}],"relativePath":"docs/study/javascript/bom.md"}'),i={name:"docs/study/javascript/bom.md"},t=a(`<h1 id="bom\u76F8\u5173" tabindex="-1">BOM\u76F8\u5173 <a class="header-anchor" href="#bom\u76F8\u5173" aria-hidden="true">#</a></h1><h2 id="\u4E86\u89E3bom" tabindex="-1">\u4E86\u89E3BOM <a class="header-anchor" href="#\u4E86\u89E3bom" aria-hidden="true">#</a></h2><p>BOM\u662F\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\uFF08Browser Object Model\uFF09\uFF0Cjs\u8BA4\u4E3A\u6574\u4E2A\u6D4F\u89C8\u5668\u53EF\u4EE5\u5F53\u6210\u4E00\u4E2A\u5BF9\u8C61window\uFF0CBOM\u4E2D\u5B9A\u4E49\u4E86\u5F88\u591A\u5BF9\u8C61\u3001\u5C5E\u6027\u548C\u65B9\u6CD5\u7528\u4E8E\u64CD\u4F5C\u6D4F\u89C8\u5668\u3002</p><p>\u6211\u4EEC\u77E5\u9053DOM\u662F\u6587\u6863\u5BF9\u8C61\u6A21\u578B\u7528\u4E8E\u8868\u793A\u548C\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684HTML\u6587\u6863\u90E8\u5206\uFF0C\u6240\u4EE5js\u8FDB\u4E00\u6B65\u8BA4\u4E3ADOM\u5C5E\u4E8E\u6D4F\u89C8\u5668\u5BF9\u8C61\u7684\u4E00\u90E8\u5206\u3002\u9664\u6B64\u4E4B\u5916\uFF0Cwindow\u4E0A\u8FD8\u5305\u62EClocation\u7528\u4E8E\u83B7\u53D6\u9875\u9762url\u5730\u5740\u7684\u4F4D\u7F6E\u5BF9\u8C61\u3001history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61\u3001screen\u5C4F\u5E55\u5BF9\u8C61\u3001navigator\u7B49</p><h2 id="window\u5BF9\u8C61" tabindex="-1">window\u5BF9\u8C61 <a class="header-anchor" href="#window\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>window\u4EE3\u8868\u6574\u4E2A\u6D4F\u89C8\u5668\uFF0C\u4EE3\u8868\u5168\u5C40\u3002\u6240\u4EE5\u5728\u5168\u5C40\u58F0\u660E\u7684\u51FD\u6570\u3001\u53D8\u91CF\u90FD\u662F\u5C5E\u4E8Ewindow\uFF0C\u5305\u62EC\u53D8\u91CF\u672A\u58F0\u660E\u5C31\u8D4B\u503C\u4E5F\u8BE5\u53D8\u91CF\u4E5F\u5C5E\u4E8Ewindow\u3002</p><ol><li>\u67E5\u770B\u6D4F\u89C8\u5668\u7A97\u53E3\u5C3A\u5BF8\uFF08\u6216\u8005\u53EB\u53EF\u89C6\u533A\u57DF\uFF0C\u4E0D\u5305\u62EC\u5DE5\u5177\u680F\u548C\u6EDA\u52A8\u6761\uFF09</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//IE9\u4EE5\u4E0A\u3001Chrome\u3001Firefox\u3001Opera \u4EE5\u53CA Safari\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">window.innerWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">window.innerHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;">//IE5,6,7,8</span></span>
<span class="line"><span style="color:#A6ACCD;">window.documentElement.clientHeight ;</span></span>
<span class="line"><span style="color:#A6ACCD;">window.documentElement.clientWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">//IE5,6,7,8\u517C\u5BB9\u6027\u7D0A\u4E71\u4E0A\u9762\u65B9\u6CD5\u4E0D\u4E00\u5B9A\u884C\uFF0C\u4E0D\u884C\u53EF\u7528\u4E0B\u9762\u8FD9\u79CD\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">window.body.clientWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">window.body.clientHeight</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C01\u88C5\u4E00\u4E2A\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u6D4F\u89C8\u5668\u53EF\u89C6\u5BBD\u9AD8\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.getInnerWH = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: window.innerWidth || window.documentElement.clientWidth || window.body.clientWidth,</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: window.innerHeight || window.documentElement.clientHeight || window.body.clientHeight</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u67E5\u770B\u5B8C\u6574\u7A97\u53E3\u5927\u5C0F</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.outerWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">window.outerHeight</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>\u67E5\u770B\u5143\u7D20\u7684\u5C3A\u5BF8</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var odiv = document.getElementsByTagName(&#39;div&#39;)[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">odiv.offsetWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">odiv.offsetHeight</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>offsetHeight = height + padding + border</p><p>offsetWidth = width + padding + border</p><ol start="4"><li>\u67E5\u770B\u5143\u7D20\u7684\u4F4D\u7F6E odiv.offsetLeft \u8DDD\u79BB\u5DE6\u8FB9\u8DDD\u79BB</li></ol><p>odiv.offsetTop \u8DDD\u79BB\u53F3\u8FB9\u8DDD\u79BB \u6709\u5B9A\u4F4D\u5143\u7D20\uFF0C\u8FD4\u56DE\u7684\u662F\u76F8\u5BF9\u4E8E\u6700\u8FD1\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7\u5143\u7D20\u7684\u4F4D\u7F6E;\u65E0\u5B9A\u4F4D\u5143\u7D20\uFF0C\u8FD4\u56DE\u7684\u662F\u76F8\u5BF9\u4E8E\u6587\u6863\u7684\u4F4D\u7F6E</p><ol start="5"><li><p>\u67E5\u770B\u5143\u7D20\u6700\u8FD1\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7 odiv.offsetParent\u8FD4\u56DE\u6700\u8FD1\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7\uFF0C\u82E5\u65E0\uFF0C\u5219\u8FD4\u56DEbody\uFF1Bbody\u7684offsetParent\u8FD4\u56DEnull\uFF1B</p></li><li><p>\u67E5\u770B\u5143\u7D20\u7684\u51E0\u4F55\u5C3A\u5BF8 odiv.getBoundingClientRect() \u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u91CC\u9762\u6709left\u3001right\u3001top\u3001bottom\u548Cwidth\u3001height\u3002 \u517C\u5BB9\u6027\u5F88\u597D\uFF0C\u4F46\u8FD4\u56DE\u7684\u7ED3\u679C\u5E76\u4E0D\u662F\u5B9E\u65F6\u7684\u3002 <img src="`+e+`" alt=""></p></li><li><p>\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.open(URL,name,specs,replace)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>URL\uFF1A\u8868\u793A\u8981\u6253\u5F00\u7684\u9875\u9762\u5730\u5740\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9AURL\uFF0C\u6253\u5F00\u7A7A\u767D\u7A97\u53E3</p><p>name\uFF1A\u6307\u5B9Atarget\u5C5E\u6027\u6216\u7A97\u53E3\u7684\u540D\u79F0</p><ul><li>_blank - URL\u52A0\u8F7D\u5230\u4E00\u4E2A\u65B0\u7684\u7A97\u53E3\u3002\u8FD9\u662F\u9ED8\u8BA4</li><li>_parent - URL\u52A0\u8F7D\u5230\u7236\u6846\u67B6</li><li>_self - URL\u66FF\u6362\u5F53\u524D\u9875\u9762</li><li>_top - URL\u66FF\u6362\u4EFB\u4F55\u53EF\u52A0\u8F7D\u7684\u6846\u67B6\u96C6</li><li>name - \u7A97\u53E3\u540D\u79F0 specs\uFF1A\u8BBE\u7F6E\u7A97\u53E3\u89C4\u683C\uFF0C\u53EF\u9009\u3002\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u9879\u76EE\u5217\u8868</li><li>height=pixels \u7A97\u53E3\u7684\u9AD8\u5EA6\u3002\u6700\u5C0F\u503C\u4E3A100</li><li>left=pixels \u8BE5\u7A97\u53E3\u7684\u5DE6\u4FA7\u4F4D\u7F6E</li><li>location=yes|no|1|0 \u662F\u5426\u663E\u793A\u5730\u5740\u5B57\u6BB5.\u9ED8\u8BA4\u503C\u662Fyes</li><li>menubar=yes|no|1|0 \u662F\u5426\u663E\u793A\u83DC\u5355\u680F.\u9ED8\u8BA4\u503C\u662Fyes</li><li>resizable=yes|no|1|0 \u662F\u5426\u53EF\u8C03\u6574\u7A97\u53E3\u5927\u5C0F.\u9ED8\u8BA4\u503C\u662Fyes</li><li>scrollbars=yes|no|1|0 \u662F\u5426\u663E\u793A\u6EDA\u52A8\u6761.\u9ED8\u8BA4\u503C\u662Fyes</li><li>status=yes|no|1|0 \u662F\u5426\u8981\u6DFB\u52A0\u4E00\u4E2A\u72B6\u6001\u680F.\u9ED8\u8BA4\u503C\u662Fyes</li><li>titlebar=yes|no|1|0 \u662F\u5426\u663E\u793A\u6807\u9898\u680F.\u88AB\u5FFD\u7565\uFF0C\u9664\u975E\u8C03\u7528HTML\u5E94\u7528\u7A0B\u5E8F\u6216\u4E00\u4E2A\u503C\u5F97\u4FE1\u8D56\u7684\u5BF9\u8BDD\u6846.\u9ED8\u8BA4\u503C\u662Fyes</li><li>toolbar=yes|no|1|0 \u662F\u5426\u663E\u793A\u6D4F\u89C8\u5668\u5DE5\u5177\u680F.\u9ED8\u8BA4\u503C\u662Fyes</li><li>top=pixels \u7A97\u53E3\u9876\u90E8\u7684\u4F4D\u7F6E.\u4EC5\u9650IE\u6D4F\u89C8\u5668</li><li>width=pixels \u7A97\u53E3\u7684\u5BBD\u5EA6.\u6700\u5C0F.\u503C\u4E3A100</li><li>channelmode=yes|no|1|0 \u662F\u5426\u8981\u5728\u5F71\u9662\u6A21\u5F0F\u663E\u793A window\u3002\u9ED8\u8BA4\u662F\u6CA1\u6709\u7684\u3002\u4EC5\u9650IE\u6D4F\u89C8\u5668</li><li>directories=yes|no|1|0 \u662F\u5426\u6DFB\u52A0\u76EE\u5F55\u6309\u94AE\u3002\u9ED8\u8BA4\u662F\u80AF\u5B9A\u7684\u3002\u4EC5\u9650IE\u6D4F\u89C8\u5668</li><li>fullscreen=yes|no|1|0 \u6D4F\u89C8\u5668\u662F\u5426\u663E\u793A\u5168\u5C4F\u6A21\u5F0F\u3002\u9ED8\u8BA4\u662F\u6CA1\u6709\u7684\u3002\u5728\u5168\u5C4F\u6A21\u5F0F\u4E0B\u7684 window\uFF0C\u8FD8\u5FC5\u987B\u5728\u5F71\u9662\u6A21\u5F0F\u3002\u4EC5\u9650IE\u6D4F\u89C8\u5668</li></ul><p>replace\uFF1A\u53EF\u9009\uFF0C\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5386\u53F2\u4E2D\u7684\u5F53\u524D\u6761\u76EE Optional.Specifies\u89C4\u5B9A\u4E86\u88C5\u8F7D\u5230\u7A97\u53E3\u7684 URL \u662F\u5728\u7A97\u53E3\u7684\u6D4F\u89C8\u5386\u53F2\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u6761\u76EE\uFF0C\u8FD8\u662F\u66FF\u6362\u6D4F\u89C8\u5386\u53F2\u4E2D\u7684\u5F53\u524D\u6761\u76EE\u3002\u652F\u6301\u4E0B\u9762\u7684\u503C\uFF1A</p><ul><li>true - URL \u66FF\u6362\u6D4F\u89C8\u5386\u53F2\u4E2D\u7684\u5F53\u524D\u6761\u76EE\u3002</li><li>false - URL \u5728\u6D4F\u89C8\u5386\u53F2\u4E2D\u521B\u5EFA\u65B0\u7684\u6761\u76EE\u3002</li></ul><ol start="8"><li>\u5173\u95ED\u6D4F\u89C8\u5668\u7A97\u53E3</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="9"><li>\u79FB\u52A8\u5F53\u524D\u7A97\u53E3\u4F4D\u7F6E window.moveTo(x,y) \u5C06\u7A97\u53E3\u7684\u5DE6\u4E0A\u89D2\u79FB\u52A8\u5230\u6307\u5B9A\u5750\u6807</li></ol><p>window.moveBy(x\u7684\u589E\u91CF\uFF0Cy\u7684\u589E\u91CF) \u7528\u4E8E\u589E\u52A0</p><p>open()\u3001close()\u3001moveTo()\u7684\u517C\u5BB9\u6027\u90FD\u5F88\u597D</p><ol start="10"><li>\u8C03\u6574\u5F53\u524D\u7A97\u53E3\u7684\u5C3A\u5BF8 window.resizeTo(width,height) \u7528\u4E8E\u628A\u7A97\u53E3\u5927\u5C0F\u8C03\u6574\u4E3A\u6307\u5B9A\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6</li></ol><p>window.resizeBy(\u5BBD\u7684\u589E\u91CF\uFF0C\u9AD8\u7684\u589E\u91CF) \u7528\u4E8E\u589E\u52A0\u5BBD\u9AD8</p><p>\u4F46\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5728\u65B0\u7248\u7684\u6D4F\u89C8\u5668\u4E2D\u5E9F\u9664\u4E86</p><ol start="11"><li>\u6D4F\u89C8\u5668\u7A97\u53E3\u5728\u5C4F\u5E55\u7684\u4F4D\u7F6E \u8DDD\u79BB\u5DE6\u8FB9\uFF1Awindow.screenX \u6216\u8005 window.screenLeft</li></ol><p>\u8DDD\u79BB\u4E0A\u8FB9\uFF1Awindow.screenY\u6216\u8005window.screenTop</p><ol start="12"><li>\u8BA9\u6EDA\u52A8\u6761\u6EDA\u52A8</li></ol><ul><li>scroll(x,y)</li><li>scrollTo(x,y)</li><li>scrollBy(x,y) x,y\u5206\u522B\u8868\u793A\u6EDA\u52A8\u6761\u5F80x\u8F74\u6EDA\u52A8\u8DDD\u79BB\u548C\u6EDA\u52A8\u6761\u5F80\u4E0B\u6EDA\u52A8\u7684\u8DDD\u79BB \u524D\u9762\u4E2A\u4E24\u4E2A\u65B9\u6CD5\u57FA\u672C\u4E00\u6837\uFF0C\u800CscrollBy()\u4F1A\u5728\u4E4B\u524D\u7684\u6570\u636E\u57FA\u7840\u4E0A\u505A\u7D2F\u52A0\u3002\u53EF\u4EE5\u5229\u7528scrollBy\u5B9E\u73B0\u5FEB\u901F\u9605\u8BFB\u7684\u529F\u80FD\u3002</li></ul><ol start="13"><li>\u67E5\u770B\u6EDA\u52A8\u6761\u6EDA\u52A8\u8DDD\u79BB window.pageXoffset</li></ol><p>window.pageYoffset \u4F46\u662F\u4F4E\u7248\u672CIE\u4E0D\u517C\u5BB9\uFF0C\u90A3\u5B83\u7528\u4E0B\u9762\u4E24\u7EC4\u65B9\u6CD5 document.documentElement.scrollLeft</p><p>document.documentElement.scrollTop \u56E0\u4E3A\u517C\u5BB9\u6027\u6BD4\u8F83\u7D0A\u4E71\uFF0C\u91C7\u53D6\u7684\u65B9\u6CD5\u662F\u4E24\u79CD\u65B9\u6CD5\u76F8\u52A0\uFF0C\u56E0\u4E3A\u4E0D\u53EF\u80FD\u4E24\u4E2A\u540C\u65F6\u6709\u503C \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E2A\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u67E5\u770B\u6EDA\u52A8\u6761\u6EDA\u52A8\u8DDD\u79BB\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.getScrollLT = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: window.pageXOffset || document.documentElement.scrollLeft + document.body.scrollLeft,</span></span>
<span class="line"><span style="color:#A6ACCD;">    top: window.pageYOffset || document.documentElement.scrollTop + document.body.scrollTo</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="14"><li>\u5F39\u7A97 js\u4E2D\u6709\u4E09\u79CD\u5F39\u7A97\uFF1A\u8B66\u544A\u6846\u3001\u786E\u8BA4\u6846\u3001\u63D0\u793A\u6846</li></ol><ul><li>window.alert(&quot;sometext&quot;) \u5F53\u8B66\u544A\u6846\u51FA\u73B0\u540E\uFF0C\u7528\u6237\u9700\u8981\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u624D\u80FD\u7EE7\u7EED\u8FDB\u884C\u64CD\u4F5C\u3002</li><li>window.confirm(&quot;sometext&quot;) \u786E\u8BA4\u6846\u901A\u5E38\u7528\u4E8E\u9A8C\u8BC1\u662F\u5426\u63A5\u53D7\u7528\u6237\u64CD\u4F5C\u3002 \u5F53\u786E\u8BA4\u5361\u5F39\u51FA\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u70B9\u51FB &quot;\u786E\u8BA4&quot; \u6216\u8005 &quot;\u53D6\u6D88&quot; \u6765\u786E\u5B9A\u7528\u6237\u64CD\u4F5C;\u5F53\u4F60\u70B9\u51FB &quot;\u786E\u8BA4&quot;, \u8FD4\u56DE true\uFF0C \u5982\u679C\u70B9\u51FB &quot;\u53D6\u6D88&quot;, \u8FD4\u56DE false\u3002</li><li>window.prompt(&quot;sometext&quot;,&quot;defaultvalue&quot;) \u5F53\u63D0\u793A\u6846\u51FA\u73B0\u540E\uFF0C\u7528\u6237\u9700\u8981\u8F93\u5165\u67D0\u4E2A\u503C\uFF0C\u7136\u540E\u70B9\u51FB\u786E\u8BA4\u6216\u53D6\u6D88\u6309\u94AE\u624D\u80FD\u7EE7\u7EED\u64CD\u7EB5\u3002 \u5982\u679C\u7528\u6237\u70B9\u51FB\u786E\u8BA4\uFF0C\u90A3\u4E48\u8FD4\u56DE\u503C\u4E3A\u8F93\u5165\u7684\u503C\u3002\u5982\u679C\u7528\u6237\u70B9\u51FB\u53D6\u6D88\uFF0C\u90A3\u4E48\u8FD4\u56DE\u503C\u4E3A null</li></ul><ol start="15"><li>\u5B9A\u65F6\u5668\u65B9\u6CD5\u4E5F\u662F\u5B9A\u4E49\u5728window\u4E0A</li></ol><ul><li>window.clearInterval()</li><li>window.setTimeout()</li><li>window.clearInterval()</li><li>window.clearTimeout()</li></ul><ol start="16"><li>window.onload</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.onload = function(){} </span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005 </span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;load&#39;,function(){})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>window.onload\u662F\u7A97\u53E3(\u9875\u9762)\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u5F53\u6587\u6863\u5185\u5BB9\u5B8C\u5168\u52A0\u8F7D\u5B8C\u6210\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6(\u5305\u62EC\u56FE\u50CF\u3001\u811A\u672C\u6587\u4EF6\u3001CSS\u6587\u4EF6\u7B49)\uFF0C\u5C31\u8C03\u7528\u7684\u5904\u7406\u51FD\u6570\u3002 \u6709\u4E86\u8FD9\u4E2Awindow.onload\u6211\u4EEC\u5C31\u53EF\u4EE5\u628Ajs\u4EE3\u7801\u653E\u5230\u9875\u9762\u7684\u4EFB\u4F55\u5730\u65B9\u3002</p><ol start="17"><li>window.onresize window.onresize\u662F\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u5F53\u89E6\u53D1\u65F6\u5C31\u8C03\u7528\u7684\u5904\u7406\u51FD\u6570\u3002</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window.onresize = function(){} </span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;resize&#39;,function(){})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="location\u4F4D\u7F6E\u5BF9\u8C61" tabindex="-1">location\u4F4D\u7F6E\u5BF9\u8C61 <a class="header-anchor" href="#location\u4F4D\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u83B7\u53D6\u9875\u9762\u7684url\u5730\u5740</p><ul><li>location.href \u8FD4\u56DE\u5F53\u524D\u9875\u9762\u6574\u4E2AURL</li><li>location.protocol \u8FD4\u56DEweb\u534F\u8BAE\uFF08<a href="http://xn--https-wm6jl44o" target="_blank" rel="noreferrer">http://\u6216\u8005https</a>\u{1F615}/\uFF09</li><li>location.hostname \u8FD4\u56DEweb\u4E3B\u673A\u7684\u57DF\u540D</li><li>location.port \u8FD4\u56DE\u7AEF\u53E3\u53F7</li><li>location.pathname \u8FD4\u56DE\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\u3002</li><li>location.hash \u8FD4\u56DE\u4E00\u4E2AURL\u7684\u951A\u90E8\u5206</li><li>assign() \u8F7D\u5165\u4E00\u4E2A\u65B0\u7684\u6587\u6863</li><li>reload() \u91CD\u65B0\u8F7D\u5165\u5F53\u524D\u6587\u6863</li><li>replace() \u7528\u65B0\u7684\u6587\u6863\u66FF\u6362\u5F53\u524D\u6587\u6863</li></ul><h2 id="history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61" tabindex="-1">history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61 <a class="header-anchor" href="#history\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61" aria-hidden="true">#</a></h2><ul><li>history.back();</li><li>history.forword(); \u5206\u522B\u5BF9\u5E94\u52A0\u8F7D\u5386\u53F2\u5217\u8868\u4E2D\u7684\u540E\u4E00\u4E2A\u548C\u524D\u4E00\u4E2AURL</li><li>history.go() \u52A0\u8F7D history \u5217\u8868\u4E2D\u7684\u67D0\u4E2A\u5177\u4F53\u9875\u9762</li><li>history.length \u5386\u53F2\u8BB0\u5F55\u6761\u76EE\u6570</li></ul><h2 id="screen\u5C4F\u5E55\u5BF9\u8C61" tabindex="-1">screen\u5C4F\u5E55\u5BF9\u8C61 <a class="header-anchor" href="#screen\u5C4F\u5E55\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u53EF\u7528\u7684\u5C4F\u5E55\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p><ol><li>\u5B8C\u6574\u7684\u5206\u8FA8\u7387\uFF1A <ul><li>screen.width</li><li>screen.height</li></ul></li><li>\u53BB\u6389\u4EFB\u52A1\u680F\u7684\u53EF\u7528\u5BBD\u548C\u9AD8\uFF08\u51CF\u53BB\u754C\u9762\u7279\u6027\uFF0C\u5982\u4EFB\u52A1\u680F\uFF09 <ul><li>screen.availWith</li><li>screen.availHeight</li></ul></li></ol><h2 id="navigator-\u5BF9\u8C61" tabindex="-1">navigator \u5BF9\u8C61 <a class="header-anchor" href="#navigator-\u5BF9\u8C61" aria-hidden="true">#</a></h2><ul><li>navigator \u5BF9\u8C61\u5305\u542B\u6709\u5173\u6D4F\u89C8\u5668\u7684\u4FE1\u606F</li><li>navigator.appCodeName \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u4EE3\u7801\u540D</li><li>navigator.appName \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u540D\u79F0</li><li>navigator.appVersion \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u5E73\u53F0\u548C\u7248\u672C\u4FE1\u606F</li><li>navigator.cookieEnabled \u8FD4\u56DE\u6307\u660E\u6D4F\u89C8\u5668\u4E2D\u662F\u5426\u542F\u7528 cookie \u7684\u5E03\u5C14\u503C</li><li>navigator.platform \u8FD4\u56DE\u8FD0\u884C\u6D4F\u89C8\u5668\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0</li><li>navigator.userAgent \u8FD4\u56DE\u7531\u5BA2\u6237\u673A\u53D1\u9001\u670D\u52A1\u5668\u7684user-agent \u5934\u90E8\u7684\u503C</li></ul><p><img src="`+o+'" alt=""></p>',61),p=[t];function c(r,d,w,h,u,y){return s(),n("div",null,p)}const A=l(i,[["render",c]]);export{g as __pageData,A as default};
