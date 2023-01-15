/** @param category{String} */
function topNav(category) {
    let element = document.getElementById('top-nav');
    element.className = 'top-nav';
    element.innerHTML += `<li><a ${category === 'index' ? 'class="active"' : 'href="/index.html"'}>主页</a></li>
<li><a ${category === 'blog' ? 'class="active"' : 'href="blog/index.html"'}>博客</a></li>
<li class="right">
    <a href="https://github.com/XenFork/XenFork.github.io" target="_blank" rel="noopener noreferrer">
        View on GitHub</a>
</li>`;
}

function siteFooter() {
    let element = document.getElementById('site-footer');
    element.innerHTML += `<hr class="article-footer-separate">
<footer class="footer">
    <div class="dropup">
        <h4>成员</h4>
        <div class="dropup-content">
            <ul class="top-nav">
                <li>
                    <a href="https://github.com/AmazingRabbit-Studio" target="_blank" rel="noopener noreferrer">
                        <img src="https://avatars.githubusercontent.com/u/79623476?s=200&v=4"
                             alt="AmazingRabbit Studio Logo" title="AmazingRabbit Studio"
                             width="80" height="80"></a>
                </li>
                <li>
                    <a href="https://github.com/Funny-Developers" target="_blank" rel="noopener noreferrer">
                        <img src="https://avatars.githubusercontent.com/u/74489243?s=200&v=4"
                             alt="Funny Developers Logo"
                             title="Funny Developers"
                             width="80" height="80"></a>
                </li>
                <li>
                    <a href="https://github.com/Over-Run" target="_blank" rel="noopener noreferrer">
                        <img src="https://avatars.githubusercontent.com/u/66425408?s=200&v=4"
                             alt="Overrun Logo"
                             title="Overrun Organization"
                             width="80" height="80"></a>
                </li>
            </ul>
        </div>
    </div>
</footer>`;
}

/**
 * @param updatedDate{String}
 * @param authors{String}
 * @param categories{String} */
function articleInfo(updatedDate, authors, categories) {
    let element = document.getElementById('article-info');
    element.className = 'article-info';
    // TODO: Add link for categories
    element.innerHTML += `🕗更新时间：${updatedDate}　·　📝作者：${authors}　·　📚分类：${categories}`;
}

/** @param category{String} */
function pageTemplate(category) {
    topNav(category)
    siteFooter()
}

/**
 * @param category{String}
 * @param updatedDate{String}
 * @param authors{String}
 * @param categories{String} */
function articleTemplate(category, updatedDate, authors, categories) {
    topNav(category)
    articleInfo(updatedDate, authors, categories)
    siteFooter()
}
