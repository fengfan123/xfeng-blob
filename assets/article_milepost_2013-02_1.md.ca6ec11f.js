import{_ as s,o as a,c as n,d as l}from"./app.2277f8cd.js";const d=JSON.parse('{"title":"\u5B9A\u65F6\u5668\u8C03\u7528\u63A5\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"promise.all","slug":"promise-all","link":"#promise-all","children":[]},{"level":2,"title":"setInterval","slug":"setinterval","link":"#setinterval","children":[]}],"relativePath":"article/milepost/2013-02/1.md"}'),p={name:"article/milepost/2013-02/1.md"},e=l(`<h1 id="\u5B9A\u65F6\u5668\u8C03\u7528\u63A5\u53E3" tabindex="-1">\u5B9A\u65F6\u5668\u8C03\u7528\u63A5\u53E3 <a class="header-anchor" href="#\u5B9A\u65F6\u5668\u8C03\u7528\u63A5\u53E3" aria-hidden="true">#</a></h1><p>\u540E\u53F0\u6709\u4E2A\u4E0A\u4F20\u56FE\u7247\u7684\u63A5\u53E3\uFF0C\u9700\u8981\u4E00\u5F20\u4E00\u5F20\u4E0A\u4F20</p><h2 id="promise-all" tabindex="-1">promise.all <a class="header-anchor" href="#promise-all" aria-hidden="true">#</a></h2><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F,\u5F53\u6570\u636E\u91CF\u5C0F\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528promise.all\u7684\u65B9\u5F0F let data=[1,2,3,4,5,6,7,8,9,10];</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function uploadFile(data){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((reject\uFF0Cresolve)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u8BF7\u6C42\u7ED3\u679C\u6B63\u786E</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(success){</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            reject();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var reqArr=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">data.forEach((item=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    reqArr.push(uploadFile(item));</span></span>
<span class="line"><span style="color:#A6ACCD;">}))</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all(reqArr).then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(e&gt;={</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F3A\u70B9\u662F:<br> 1.\u5982\u679C\u6709\u8BF7\u6C42\u5931\u8D25\uFF0C\u4E0D\u6E05\u695A\u662F\u90A3\u4E00\u6B21\u8BF7\u6C42\u5931\u8D25\u7684\u3002<br> 2.\u5982\u679C\u8BF7\u6C42\u6B21\u6570\u8FC7\u591A\uFF0C\u540E\u53F0\u5904\u7406\u4E0D\u8FC7\u6765\uFF0C\u4F1A\u6709\u4E00\u90E8\u5206\u8BF7\u6C42\u5931\u6548\u3002</p><h2 id="setinterval" tabindex="-1">setInterval <a class="header-anchor" href="#setinterval" aria-hidden="true">#</a></h2><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5C31\u4F7F\u7528\u5B9A\u65F6\u5668</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    //data\u6570\u7EC4\u91CC\u9762\u4F1A\u670910000\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    var data=[1,2,3,4,5,6,7,8,9,10,...];</span></span>
<span class="line"><span style="color:#A6ACCD;">    var copyData=JSON.parse(JSON.stringify(data));</span></span>
<span class="line"><span style="color:#A6ACCD;">    var errorData=[];//\u9519\u8BEF\u7684\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">    var flag=true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var timer=setInterval(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(copyData.length&gt;0){</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(flag){</span></span>
<span class="line"><span style="color:#A6ACCD;">                flag=false;</span></span>
<span class="line"><span style="color:#A6ACCD;">                uploadFile(data[0]).then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    copyData.splice(i,1);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    flag=true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }).catch(e){//\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">                    errorData.push(data[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    copyData.splice(i,1); </span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(errorData);//\u5931\u8D25\u7684\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">            clearInterval(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },200)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function uploadFile(data){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise((reject\uFF0Cresolve)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            //\u8BF7\u6C42\u7ED3\u679C\u6B63\u786E</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(success){</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(); </span></span>
<span class="line"><span style="color:#A6ACCD;">            }else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject();</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            //\u5904\u7406\u8BF7\u6C42\u9700\u8981500ms</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),o=[e];function c(t,r,i,A,C,y){return a(),n("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
