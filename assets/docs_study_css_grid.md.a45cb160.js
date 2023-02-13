import{_ as e,o as a,c as i,d as l}from"./app.2277f8cd.js";const r="/xfeng-blob/assets/grid.63a9f907.png",f=JSON.parse('{"title":"grid \u7F51\u683C\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u77E5\u8BC6","slug":"\u57FA\u7840\u77E5\u8BC6","link":"#\u57FA\u7840\u77E5\u8BC6","children":[{"level":3,"title":"\u5BB9\u5668\u5C5E\u6027","slug":"\u5BB9\u5668\u5C5E\u6027","link":"#\u5BB9\u5668\u5C5E\u6027","children":[]}]},{"level":2,"title":"display","slug":"display","link":"#display","children":[]},{"level":2,"title":"grid-template-columns","slug":"grid-template-columns","link":"#grid-template-columns","children":[]},{"level":2,"title":"grid-template-rows","slug":"grid-template-rows","link":"#grid-template-rows","children":[]},{"level":2,"title":"grid-row-gap","slug":"grid-row-gap","link":"#grid-row-gap","children":[]},{"level":2,"title":"grid-column-gap","slug":"grid-column-gap","link":"#grid-column-gap","children":[]},{"level":2,"title":"grid-gap","slug":"grid-gap","link":"#grid-gap","children":[]},{"level":2,"title":"grid-template-areas","slug":"grid-template-areas","link":"#grid-template-areas","children":[]},{"level":2,"title":"grid-auto-flow","slug":"grid-auto-flow","link":"#grid-auto-flow","children":[]},{"level":2,"title":"justify-items","slug":"justify-items","link":"#justify-items","children":[]},{"level":2,"title":"align-items","slug":"align-items","link":"#align-items","children":[]},{"level":2,"title":"place-items","slug":"place-items","link":"#place-items","children":[]},{"level":2,"title":"justify-content","slug":"justify-content","link":"#justify-content","children":[]},{"level":2,"title":"align-content","slug":"align-content","link":"#align-content","children":[]},{"level":2,"title":"place-content","slug":"place-content","link":"#place-content","children":[]},{"level":2,"title":"grid-auto-columns","slug":"grid-auto-columns","link":"#grid-auto-columns","children":[]},{"level":2,"title":"grid-auto-rows","slug":"grid-auto-rows","link":"#grid-auto-rows","children":[]},{"level":2,"title":"grid-template","slug":"grid-template","link":"#grid-template","children":[]},{"level":2,"title":"grid","slug":"grid","link":"#grid","children":[{"level":3,"title":"\u9879\u76EE\u5C5E\u6027","slug":"\u9879\u76EE\u5C5E\u6027","link":"#\u9879\u76EE\u5C5E\u6027","children":[]}]},{"level":2,"title":"grid-column-start","slug":"grid-column-start","link":"#grid-column-start","children":[]},{"level":2,"title":"grid-column-end","slug":"grid-column-end","link":"#grid-column-end","children":[]},{"level":2,"title":"grid-row-start","slug":"grid-row-start","link":"#grid-row-start","children":[]},{"level":2,"title":"grid-row-end","slug":"grid-row-end","link":"#grid-row-end","children":[]},{"level":2,"title":"grid-column","slug":"grid-column","link":"#grid-column","children":[]},{"level":2,"title":"grid-row","slug":"grid-row","link":"#grid-row","children":[]},{"level":2,"title":"grid-area","slug":"grid-area","link":"#grid-area","children":[]},{"level":2,"title":"justify-self","slug":"justify-self","link":"#justify-self","children":[]},{"level":2,"title":"align-self","slug":"align-self","link":"#align-self","children":[]},{"level":2,"title":"place-self","slug":"place-self","link":"#place-self","children":[]},{"level":2,"title":"\u5173\u952E\u5B57","slug":"\u5173\u952E\u5B57","link":"#\u5173\u952E\u5B57","children":[]}],"relativePath":"docs/study/css/grid.md"}'),t={name:"docs/study/css/grid.md"},d=l('<h1 id="grid-\u7F51\u683C\u5E03\u5C40" tabindex="-1">grid \u7F51\u683C\u5E03\u5C40 <a class="header-anchor" href="#grid-\u7F51\u683C\u5E03\u5C40" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1">\u57FA\u7840\u77E5\u8BC6 <a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a></h2><p>\u57FA\u7840\u77E5\u8BC6 <img src="'+r+`" alt=""></p><ol><li>\u5BB9\u5668\u548C\u9879\u76EE \u91C7\u7528\u7F51\u683C\u5E03\u5C40\u7684\u533A\u57DF\uFF0C\u79F0\u4E3A \u201C\u5BB9\u5668\u201D\uFF08container\uFF09\u3002\u5BB9\u5668\u5185\u90E8\u91C7\u7528\u7F51\u683C\u5B9A\u4F4D\u7684\u5B50\u5143\u7D20\uFF0C\u79F0\u4E3A \u201C\u9879\u76EE\u201D\uFF08item\uFF09</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;p&gt;1&lt;/p&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;p&gt;2&lt;/p&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;p&gt;3&lt;/p&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6700\u5916\u5C42\u7684 div \u5143\u7D20\u5C31\u662F\u5BB9\u5668\uFF0C\u5185\u5C42\u7684\u4E09\u4E2A div \u5143\u7D20\u5C31\u662F\u9879\u76EE\u3002 \u6CE8\u610F\uFF1A\u9879\u76EE\u53EA\u80FD\u662F\u5BB9\u5668\u7684\u9876\u5C42\u5B50\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u9879\u76EE\u7684\u5B50\u5143\u7D20\uFF0C\u6BD4\u5982\u4E0A\u9762\u4EE3\u7801\u7684 p \u5143\u7D20\u5C31\u4E0D\u662F\u9879\u76EE\u3002Grid \u5E03\u5C40\u53EA\u5BF9\u9879\u76EE\u751F\u6548\u3002</p><ol start="2"><li>\u884C\u548C\u5217 \u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u533A\u57DF\u79F0\u4E3A\u884Crow,\u5782\u76F4\u533A\u57DF\u79F0\u4E3A\u5217column\u3002</li><li>\u5355\u5143\u683C \u884C\u548C\u5217\u7684\u4EA4\u53C9\u533A\u57DF\uFF0C\u79F0\u4E3A \u5355\u5143\u683C\uFF08cell\uFF09\u3002 \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0Cn \u884C\u548C m \u5217\u4F1A\u4EA7\u751F n x m \u4E2A\u5355\u5143\u683C\u3002\u6BD4\u5982\uFF0C3 \u884C 3 \u5217\u4F1A\u4EA7\u751F 9 \u4E2A\u5355\u5143\u683C\u3002</li><li>\u7F51\u683C\u7EBF \u5212\u5206\u7F51\u683C\u7684\u7EBF\uFF0C\u79F0\u4E3A \u7F51\u683C\u7EBF\uFF08grid line\uFF09\u3002\u6C34\u5E73\u7F51\u683C\u7EBF\u5212\u5206\u51FA\u884C\uFF0C\u5782\u76F4\u7F51\u683C\u7EBF\u5212\u5206\u51FA\u5217\u3002 \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0Cn \u884C\u6709 n + 1 \u6839\u6C34\u5E73\u7F51\u683C\u7EBF\uFF0Cm \u5217\u6709 m + 1 \u6839\u5782\u76F4\u7F51\u683C\u7EBF\uFF0C\u6BD4\u5982\u4E09\u884C\u5C31\u6709\u56DB\u6839\u6C34\u5E73\u7F51\u683C\u7EBF</li></ol><h3 id="\u5BB9\u5668\u5C5E\u6027" tabindex="-1">\u5BB9\u5668\u5C5E\u6027 <a class="header-anchor" href="#\u5BB9\u5668\u5C5E\u6027" aria-hidden="true">#</a></h3><h2 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">display:grid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u901A\u8FC7\u5728\u5143\u7D20\u4E0A\u58F0\u660E display\uFF1Agrid \u6216 display\uFF1Ainline-grid \u6765\u521B\u5EFA\u4E00\u4E2A\u7F51\u683C\u5BB9\u5668\u3002\u58F0\u660E display\uFF1Agrid \u5219\u8BE5\u5BB9\u5668\u662F\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\uFF0C\u8BBE\u7F6E\u6210 display: inline-grid \u5219\u5BB9\u5668\u5143\u7D20\u4E3A\u884C\u5185\u5143\u7D20</p><h2 id="grid-template-columns" tabindex="-1">grid-template-columns <a class="header-anchor" href="#grid-template-columns" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">grid-template-columns:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BBE\u7F6E\u5217\u5BBD</p><h2 id="grid-template-rows" tabindex="-1">grid-template-rows <a class="header-anchor" href="#grid-template-rows" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u884C\u9AD8</p><h2 id="grid-row-gap" tabindex="-1">grid-row-gap <a class="header-anchor" href="#grid-row-gap" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u884C\u95F4\u8DDD</p><h2 id="grid-column-gap" tabindex="-1">grid-column-gap <a class="header-anchor" href="#grid-column-gap" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u5217\u95F4\u8DDD</p><h2 id="grid-gap" tabindex="-1">grid-gap <a class="header-anchor" href="#grid-gap" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u884C\u95F4\u8DDD\u548C\u5217\u95F4\u8DDD,grid-gap \u5C5E\u6027\u662Fgrid-row-gap\u8DDF grid-column-gap\u7B80\u5199</p><h2 id="grid-template-areas" tabindex="-1">grid-template-areas <a class="header-anchor" href="#grid-template-areas" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u533A\u57DF\uFF0C\u4E00\u4E2A\u533A\u57DF\u7531\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5355\u5143\u683C\u7EC4\u6210,\u4E00\u822C\u8FD9\u4E2A\u5C5E\u6027\u8DDF\u7F51\u683C\u5143\u7D20\u7684 grid-area \u4E00\u8D77\u4F7F\u7528\uFF0C</p><h2 id="grid-auto-flow" tabindex="-1">grid-auto-flow <a class="header-anchor" href="#grid-auto-flow" aria-hidden="true">#</a></h2><p>\u81EA\u52A8\u5E03\u5C40,\u9ED8\u8BA4\u503C\u662F row</p><h2 id="justify-items" tabindex="-1">justify-items <a class="header-anchor" href="#justify-items" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u6C34\u5E73\u4F4D\u7F6E</p><h2 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u5782\u76F4\u4F4D\u7F6E</p><h2 id="place-items" tabindex="-1">place-items <a class="header-anchor" href="#place-items" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u6C34\u5E73\u5782\u76F4\u65B9\u5411\uFF0C\u662Fjustify-items\u8DDFalign-items\u7684\u7B80\u5199</p><h2 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-hidden="true">#</a></h2><p>\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u4F4D\u7F6E</p><h2 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-hidden="true">#</a></h2><p>\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u5782\u76F4\u4F4D\u7F6E</p><h2 id="place-content" tabindex="-1">place-content <a class="header-anchor" href="#place-content" aria-hidden="true">#</a></h2><p>\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E,\u662Fjustify-content\u8DDFalign-content\u7684\u7B80\u5199</p><h2 id="grid-auto-columns" tabindex="-1">grid-auto-columns <a class="header-anchor" href="#grid-auto-columns" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u7F51\u683C\u4E2D\u5217\u7684\u9ED8\u8BA4\u5927\u5C0F</p><h2 id="grid-auto-rows" tabindex="-1">grid-auto-rows <a class="header-anchor" href="#grid-auto-rows" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u7F51\u683C\u4E2D\u884C\u7684\u9ED8\u8BA4\u5927\u5C0F</p><h2 id="grid-template" tabindex="-1">grid-template <a class="header-anchor" href="#grid-template" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E\u7F51\u683C\u4E2D\u884C\u8DDF\u5217\u7684\u9ED8\u8BA4\u5927\u5C0F,\u662Fgrid-auto-columns\u8DDFgrid-auto-rows\u7684\u7B80\u5199</p><h2 id="grid" tabindex="-1">grid <a class="header-anchor" href="#grid" aria-hidden="true">#</a></h2><p>grid \u662F\u4E00\u4E2A\u6240\u6709\u7F51\u683C\u5BB9\u5668\u7684\u7B80\u5199\u5C5E\u6027 grid \u5C5E\u6027\u662F\u4EE5\u4E0B\u5C5E\u6027\u7684\u7B80\u5199\u5C5E\u6027\uFF1A grid-template-rows grid-template-columns grid-template-areas grid-auto-rows grid-auto-columns grid-auto-flow</p><h3 id="\u9879\u76EE\u5C5E\u6027" tabindex="-1">\u9879\u76EE\u5C5E\u6027 <a class="header-anchor" href="#\u9879\u76EE\u5C5E\u6027" aria-hidden="true">#</a></h3><h2 id="grid-column-start" tabindex="-1">grid-column-start <a class="header-anchor" href="#grid-column-start" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u4ECE\u54EA\u4E00\u5217\u5F00\u59CB\u3002</p><h2 id="grid-column-end" tabindex="-1">grid-column-end <a class="header-anchor" href="#grid-column-end" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u8DE8\u8D8A\u591A\u5C11\u5217\uFF0C\u6216\u8005\u5728\u54EA\u4E00\u5217\u7ED3\u675F\u3002</p><h2 id="grid-row-start" tabindex="-1">grid-row-start <a class="header-anchor" href="#grid-row-start" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u4ECE\u54EA\u4E00\u884C\u5F00\u59CB\u3002</p><h2 id="grid-row-end" tabindex="-1">grid-row-end <a class="header-anchor" href="#grid-row-end" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u8DE8\u8D8A\u591A\u5C11\u884C\uFF0C\u6216\u8005\u5728\u54EA\u4E00\u884C\u7ED3\u675F\u3002</p><h2 id="grid-column" tabindex="-1">grid-column <a class="header-anchor" href="#grid-column" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u5217\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E,grid-column \u662F grid-column-start \u548C grid-column-end \u5C5E\u6027\u7684\u7B80\u5199\u5C5E\u6027\u3002</p><h2 id="grid-row" tabindex="-1">grid-row <a class="header-anchor" href="#grid-row" aria-hidden="true">#</a></h2><p>grid-row \u5C5E\u6027\u5B9A\u4E49\u4E86\u7F51\u683C\u5143\u7D20\u884C\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E,grid-row \u662F grid-row-start \u548C grid-row-end \u5C5E\u6027\u7684\u7B80\u5199\u5C5E\u6027\u3002</p><h2 id="grid-area" tabindex="-1">grid-area <a class="header-anchor" href="#grid-area" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u6307\u5B9A\u7F51\u683C\u5143\u7D20\u5728\u7F51\u683C\u5E03\u5C40\u4E2D\u7684\u5927\u5C0F\u548C\u4F4D\u7F6E grid-area\u7684\u7B80\u5199\u662F grid-row-start grid-column-start grid-row-end grid-column-end</p><h2 id="justify-self" tabindex="-1">justify-self <a class="header-anchor" href="#justify-self" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u6C34\u5E73\u4F4D\u7F6E</p><h2 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u5782\u76F4\u4F4D\u7F6E</p><h2 id="place-self" tabindex="-1">place-self <a class="header-anchor" href="#place-self" aria-hidden="true">#</a></h2><p>\u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\uFF0C\u7B80\u5199\u662Fjustify-self,align-self</p><h2 id="\u5173\u952E\u5B57" tabindex="-1">\u5173\u952E\u5B57 <a class="header-anchor" href="#\u5173\u952E\u5B57" aria-hidden="true">#</a></h2><ol><li>repeat()</li><li>auto-fill \u5173\u952E\u5B57</li><li>fr \u5173\u952E\u5B57</li><li>minmax()</li><li>auto \u5173\u952E\u5B57</li><li>\u7F51\u683C\u7EBF\u7684\u540D\u79F0</li></ol>`,69),n=[d];function s(o,c,g,h,p,u){return a(),i("div",null,n)}const w=e(t,[["render",s]]);export{f as __pageData,w as default};