export default ({ Vue, options, router, siteData }) => {
  const sidebar = []

  // regularPath を使うと、ページトップの `#` で宣言した内容をタイトルとして使ってくれる。
  for (const page of siteData.pages) {
    sidebar.push(page.regularPath)
  }

  // regularPath を昇順にソート
  sidebar.sort((page1, page2) => {
    return page1.localeCompare(page2)
  })

  siteData.themeConfig.sidebar = sidebar
}