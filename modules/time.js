var Module = this.Module = function(){
};

Module.prototype.onDisconnect = function(connection){
  clearInterval(this.interval);
};

Module.prototype.onConnect = function(connection){
    this.interval = setInterval(function(){
	  var d = new Date()
      connection.send("" + d.getFullYear() + d.getMonth() + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }, 1000);
};