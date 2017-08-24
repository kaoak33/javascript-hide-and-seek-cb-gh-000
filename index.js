function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
  var rankList = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < rankList.length; i++){
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML,10) + n
  }
}

function deepestChild(){
  var node = document.querySelector("#grand-node")
  var nextNode = node.children[0]
  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
