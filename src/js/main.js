$(function () {
   $("#submit").click(function () {
       var ip='10.206.16.51'
       $.ajax({
           url:'http://'+ip+':8080/myapp/servlets/helloworld.html',
           type:'POST',
           async:true,
           data:{
               Method:'TIMING-NEW-CALL',
               caller:$("#txtCaller").val(),
               callee:$("#txtCallee").val(),
               second:$("#txtTime").val()
           },
           encoding:'utf-8',
           timeout:4000,
           dataType:'json',
           beforeSend:function (xhr) {
               console.log('发送前')
           },
           success:function (data,textStatus) {
               console.log('成功返回')
               txtAddStatus.innerHTML='<i>'+data['statusCode']+':'+data['reason']+'</i>'
           },
           error:function (xhr) {
               console.log("出错");
               console.log(xhr)
           }
       })
   })
})
