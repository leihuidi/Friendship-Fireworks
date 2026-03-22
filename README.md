# Friendship Witness Website (开源友谊见证网站)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

这是一个简单的友谊见证网站，基于 GPL v3 协议开源。  旨在为朋友们提供一个表达和纪念友谊的平台。

## 项目地址

[https://github.com/leihuidi/Friendship/](https://github.com/leihuidi/Friendship/)

## 效果演示

[friend.leihuidi.top](https://friend.leihuidi.top/)

## 简介

本网站包含以下核心功能：

*   **主页 (index.html):**  展示网站的简介和导航。
*   **友谊见证页 (fireworks.html):**  核心页面，通过精美的烟花特效和友谊宣言，见证和庆祝友谊。



## 使用方法

1.  **克隆仓库:**

    ```bash
    git clone https://github.com/leihuidi/Friendship-Fireworks.git
    ```

2.  **打开 `index.html` 或 `fireworks.html`:**  直接在浏览器中打开 `index.html` 或 `fireworks.html` 文件即可体验。

3.  **定制 (可选):**

    *   修改 `style.css` 文件来定制网站的样式。
    *   修改 `script.js` 和 `fireworks.js` 文件来定制页面交互和烟花特效。
    *   编辑 `index.html` 和 `fireworks.html` 来修改页面内容和布局。

## 贡献

欢迎任何形式的贡献！ 

我们也欢迎你提交 issue 报告 bug 或提出改进建议。

## 许可证

本项目使用 [GPL v3](https://www.gnu.org/licenses/gpl-3.0) 许可证。  详情请查看 [LICENSE](LICENSE) 文件

> **通俗解释：**
> 如果你看不懂法律条文，可以简单理解为：
> 1. **随便魔改**：你想怎么改都行。
> 2. **禁止商用**：别拿去卖钱。
> 3. **必须开源**：如果你发布了修改版，必须把你的源代码也免费公开。
## 联系方式

如果你有任何问题或建议，请通过以下方式联系我：

*   Email: [leihuidi@gmail.com](mailto:leihudi@gmail.com)


## 常见问题

**Q: 怎么把字换成我女朋友的名字？**

A: 很简单，请按以下步骤操作：
1. [点击这里](js/fireworks.js)
2. 点击右上角的小铅笔
3. 找到第110行，看到 `const text = 的地方。
4. 修改引号里的文字即可。

> 注意， 如果需要换行，请使用 `\n` 符号，不要直接按回车键，否则不会生效

错误示范：
"王翠花

做我女朋友吧"

正确示范：
"王翠花\n做我女朋友吧"

如果实在不会，可以把fireworks.js整个文件扔给AI，让AI帮你改，然后再用AI帮你改好的文件覆盖原来的
