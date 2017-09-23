function Node(element){
    this.element=element;
    this.next=null
    this.previous=null
}
//创建链表
function Llist() {
    this.head=new Node("head")
    this.find=find
    this.insert=insert
    this.remove=remove
    this.display=display
    this.previous=previous
    this.findLast=findLast
    this.disqReverse=dispReverse
}
//移除
function remove(item){
    var currNode=this.find(item)
    if(currNode.next!=null){
        currNode.previous.next=currNode.next
        currNode.next.previous=currNode.previous
        currNode.next=null
        currNode.previous=null
    }
}
//显示链表
function display(){
    var currNode=this.head
    while(!(currNode.next==null)){
        currNode=currNode.next
    }
    return currNode
}
//反向显示
function disqReverse(){
    var currNode=this.head
    var current=this.findLast
    while(current.previous!=null){
        current=current.previous
    }
    return current;
}
//找到item
function find(item){
    var currNode=this.head
    while(currNode.element!=item){
        currNode=currNode.next
    }
    return currNode
}
//插入
function insert(newElement,item){
    var newNode=new Node(newElement);
    var current=this.find(item)
    newNode.next=current.next
    newNode.previous=current
    current.next=newNode
}
//显示最后一个
function findLast(){
    var currNode=this.head
    while(currNode.next!=null){
        currNode=currNode.next
    }
    return currNode
}