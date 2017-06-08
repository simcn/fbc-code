var i=0;
function timeX(){
    i++;
    postMessage(i);

    if(i>9){
        postMessage('no 我不想动了');
        close(); //中止线程
    }
    setTimeout(function(){
        timeX();
    },1000);
}

timeX();

//收到主线程的消息
onmessage = function (oEvent) {
  postMessage(oEvent.data);
};