// eslint-disable-next-line import/no-anonymous-default-export
export default function(article = {}, action) {
  if (action.type === 'addArticle') {
    let articleCopy = action.article
    return articleCopy
  } else {
    return article
  }
}