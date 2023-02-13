import{_ as s,o as a,c as n,d as e}from"./app.2277f8cd.js";const y=JSON.parse('{"title":"mysql\u7684\u57FA\u672C\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FDE\u63A5\u6570\u636E\u5E93","slug":"\u8FDE\u63A5\u6570\u636E\u5E93","link":"#\u8FDE\u63A5\u6570\u636E\u5E93","children":[]},{"level":2,"title":"\u589E","slug":"\u589E","link":"#\u589E","children":[]},{"level":2,"title":"\u5220","slug":"\u5220","link":"#\u5220","children":[]},{"level":2,"title":"\u6539","slug":"\u6539","link":"#\u6539","children":[]},{"level":2,"title":"\u67E5","slug":"\u67E5","link":"#\u67E5","children":[]}],"relativePath":"docs/study/database/mysql.md"}'),l={name:"docs/study/database/mysql.md"},p=e(`<h1 id="mysql\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">mysql\u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#mysql\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1">\u8FDE\u63A5\u6570\u636E\u5E93 <a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysqli_connect(host,username,password,port);</span></span>
<span class="line"><span style="color:#A6ACCD;">host:\u4E3B\u673A\u7684IP</span></span>
<span class="line"><span style="color:#A6ACCD;">username:\u6570\u636E\u5E93\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">password:\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">dbname:\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u589E" tabindex="-1">\u589E <a class="header-anchor" href="#\u589E" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">INSERT INTO table_name ( field1, field2,...field )</span></span>
<span class="line"><span style="color:#A6ACCD;">                       VALUES</span></span>
<span class="line"><span style="color:#A6ACCD;">                       ( value1, value2,...value );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">field1:\u5B57\u6BB5\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5220" tabindex="-1">\u5220 <a class="header-anchor" href="#\u5220" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">DELETE FROM table_name WHERE (\u6761\u4EF6)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6539" tabindex="-1">\u6539 <a class="header-anchor" href="#\u6539" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">UPDATE table_name SET field1=new-value1, field2=new-value2</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE (\u6761\u4EF6)</span></span>
<span class="line"><span style="color:#A6ACCD;">field1:\u5B57\u6BB5\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5" tabindex="-1">\u67E5 <a class="header-anchor" href="#\u67E5" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">SELECT column_name,column_name</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE (\u6761\u4EF6)</span></span>
<span class="line"><span style="color:#A6ACCD;">column_name:\u5B57\u6BB5\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),c=[p];function o(t,i,r,d,C,h){return a(),n("div",null,c)}const u=s(l,[["render",o]]);export{y as __pageData,u as default};
