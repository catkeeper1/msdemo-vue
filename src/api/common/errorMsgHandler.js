export default {
    handleError(vueComp, err) {

        var res = err.response;
        if(res == null) {
          return;
        }

        if(res.status != 500 || 
           res.data == null || 
           res.data.messageList == null || 
           res.data.messageList.length == null) {
          return;
        }

        
        for(var i = 0 ; i < res.data.messageList.length; i++) {
          var shownMsg = res.data.messageList[i].message;
          vueComp.$message({
            showClose: true,
            duration: 0,
            message: shownMsg,
            type: 'error'
          });

        }

    }
}

