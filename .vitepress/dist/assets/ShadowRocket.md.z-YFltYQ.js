import{_ as a,o as e,c as o,R as t}from"./chunks/framework.emLw3Ecc.js";const k=JSON.parse('{"title":"Shadowrocket使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"ShadowRocket.md","filePath":"ShadowRocket.md"}'),r={name:"ShadowRocket.md"},h=t('<h1 id="shadowrocket使用指南" tabindex="-1">Shadowrocket使用指南 <a class="header-anchor" href="#shadowrocket使用指南" aria-label="Permalink to &quot;Shadowrocket使用指南&quot;">​</a></h1><h2 id="零、使用须知与误区警示" tabindex="-1">零、使用须知与误区警示 <a class="header-anchor" href="#零、使用须知与误区警示" aria-label="Permalink to &quot;零、使用须知与误区警示&quot;">​</a></h2><h3 id="使用须知" tabindex="-1">使用须知 <a class="header-anchor" href="#使用须知" aria-label="Permalink to &quot;使用须知&quot;">​</a></h3><p>阅读本教程之前，请阅读使用协议，并确认自己“自愿放弃看广告的福祉之权利”，方可使用此规则。</p><h3 id="误区警示" tabindex="-1">误区警示 <a class="header-anchor" href="#误区警示" aria-label="Permalink to &quot;误区警示&quot;">​</a></h3><p>虽然模块很方便，但本项目是规则，不是模块哦。</p><h2 id="一、建立代理分组-可选" tabindex="-1">一、建立代理分组（可选） <a class="header-anchor" href="#一、建立代理分组-可选" aria-label="Permalink to &quot;一、建立代理分组（可选）&quot;">​</a></h2><p>建立代理分组不是必选项，但强烈建议。创建代理分组后，您可以在ShadowRocket首页下拉以快速控制分流，可简化您的后续操作。</p><h3 id="_1-进入配置文件修改" tabindex="-1">1. 进入配置文件修改 <a class="header-anchor" href="#_1-进入配置文件修改" aria-label="Permalink to &quot;1. 进入配置文件修改&quot;">​</a></h3><p>打开ShadowRocket，点击屏幕底部的操作栏的配置，进入配置文件页面。<br> 此时，您应该可以看见本地文件与远程文件两类配置，当前正在使用的本地配置前会有一个橙色的点。<br> 点击您正在使用的配置文件后方的i，或是长按您正在使用的配置文件并点击编辑配置，进入配置文件修改。</p><blockquote><p>页面介绍<br> 顶部从左到右依次是返回、配置文件名称、新建按钮。<br> 第一项“通用”包含了必要的网络配置选项。此部分设置非常重要，但门槛也不低，请不要随意修改！<br> 第二项“规则”是你自己编写或引用的规则，如果某网站被规则匹配到，则按规则所指定的策略或代理分组来联网（或直接禁止其联网）。<br> 第三项“hosts”是ShadowRocket提供的Hosts功能，您可以在此指定某个域名对应的IP，ShadowRocket会返回给查询。<br> 第四项是“URL 重写”。可以用此功能改写应用尝试访问的链接，但需要一定基础。<br> 第五项是“HTTPS 解密”。此功能会使用中间人攻击（MITM）强行解开HTTPS的加密流量，以使ShadowRocket进行别的流量处理。此举动安全风险大，且会导致部分程序拒绝联网，不建议无基础的人使用。<br> 第六项是“脚本”。此处不是油猴脚本。此处设置的脚本会绑定配置文件，如非必要，建议使用“模块”来添加脚本。<br> 第七项是“代理分组”。此功能允许您按一定规则将代理分组，需搭配规则使用。<br> 下方的“复制”、“替换策略”及“测试规则”各如其名，分别是以文本形式复制此配置、查找和替换本规则内的某一特定文本，以及输入域名来查看它的处理规则。</p></blockquote><h3 id="_2-设置代理分组" tabindex="-1">2. 设置代理分组 <a class="header-anchor" href="#_2-设置代理分组" aria-label="Permalink to &quot;2. 设置代理分组&quot;">​</a></h3><p>点击代理分组，点击右上角的加号“+”新增分组。</p><blockquote><p>界面介绍<br> 第一项是“名称”，必填。此项的目的是方便您知晓其用途。您可以自由设置。<br> 第二项为“类型”，选择。决定此分组采用什么方式选择节点，如按延迟自动选择、手动选择等。<br> 第三项为“订阅”，开关。决定仅在此代理分组可用的策略，一般用不上。<br> 第四项为“正则”，选填。决定此代理分组会自动添加哪些策略到此分组中。如按地区分代理。</p></blockquote><p>名称填入“广告拦截”，类型为select，订阅开关保持关闭，正则为空。然后点击策略后方的省略号，将DIRECT和REJECT添加进来。如果您想让广告也走代理，还可添加PROXY。</p><h3 id="_4-确认您的代理分组" tabindex="-1">4. 确认您的代理分组 <a class="header-anchor" href="#_4-确认您的代理分组" aria-label="Permalink to &quot;4. 确认您的代理分组&quot;">​</a></h3><p>在代理分组页面，确认“策略”中的选项是您需要的，然后点击右上角的保存，保存代理分组。</p><h4 id="调整-策略" tabindex="-1">调整“策略” <a class="header-anchor" href="#调整-策略" aria-label="Permalink to &quot;调整“策略”&quot;">​</a></h4><p>您可以点击红色的-按钮，然后点击移除，将错误添加选项从策略中移除。<br> 您也可以按住选项后方的三横并拖动，以改变排序。</p><h2 id="二、添加分流规则" tabindex="-1">二、添加分流规则 <a class="header-anchor" href="#二、添加分流规则" aria-label="Permalink to &quot;二、添加分流规则&quot;">​</a></h2><p>此步骤为核心步骤。</p><h3 id="_1-进入配置文件修改-1" tabindex="-1">1. 进入配置文件修改 <a class="header-anchor" href="#_1-进入配置文件修改-1" aria-label="Permalink to &quot;1. 进入配置文件修改&quot;">​</a></h3><p>如果您操作了第一步，则保存后会回到配置文件修改页面。<br> 如果您没有操作第一步，请参见一、1</p><h3 id="_2-设置规则" tabindex="-1">2. 设置规则 <a class="header-anchor" href="#_2-设置规则" aria-label="Permalink to &quot;2. 设置规则&quot;">​</a></h3><p>点击规则选项，点击右上角的加号“+”，新建一个规则。</p><blockquote><p>界面介绍<br> 第一项是“类型”，选择。选择这是一个什么类型的规则。<br> 第二项是“策略”，选择。选择满足此规则的网站如何联网。<br> 第三项名称随类型改变，需按类型填入相应的数据。</p></blockquote><p>类型选择RULE-SET，策略选择第一步所添加的“广告拦截”代理分组（如未添加，此处应选择REJECT），规则集填入秋风广告规则订阅链接（Surge格式），然后保存。</p><h2 id="三、开始使用" tabindex="-1">三、开始使用 <a class="header-anchor" href="#三、开始使用" aria-label="Permalink to &quot;三、开始使用&quot;">​</a></h2><p>此步骤需回到首页。</p><h3 id="_1-切换shadowrocket全局路由" tabindex="-1">1. 切换ShadowRocket全局路由 <a class="header-anchor" href="#_1-切换shadowrocket全局路由" aria-label="Permalink to &quot;1. 切换ShadowRocket全局路由&quot;">​</a></h3><p>点击首页全局路由选项，打开启用回退，选择配置，回到首页进行下一步。</p><h3 id="_2-设置广告拦截的工作方式" tabindex="-1">2. 设置广告拦截的工作方式 <a class="header-anchor" href="#_2-设置广告拦截的工作方式" aria-label="Permalink to &quot;2. 设置广告拦截的工作方式&quot;">​</a></h3><p>在首页直接向下滑动找到广告拦截并点击，选择REJECT，然后确认广告拦截下方小字是“SELECT&gt;REJECT”。</p><h3 id="_3-启动quantumultx" tabindex="-1">3. 启动QuantumultX <a class="header-anchor" href="#_3-启动quantumultx" aria-label="Permalink to &quot;3. 启动QuantumultX&quot;">​</a></h3><p>上述步骤完成后，开启首页右上角的开关以启动ShadowRocket。广告规则将即刻生效。</p><p>本教程食用愉快。</p><hr><p>编写者：过去式<br> 初稿编写时间：2024年6月8日19:25 GTM+8</p>',38),l=[h];function d(i,c,n,s,b,u){return e(),o("div",null,l)}const _=a(r,[["render",d]]);export{k as __pageData,_ as default};
