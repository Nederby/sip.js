var session;

/*var endButton = document.getElementById('endCall');
endButton.addEventListener("click", function () {
    session.bye();
    alert("Call Ended");
}, false);*/

var config = {
  // Replace this IP address with your FreeSWITCH IP address
  uri: '1002@178.62.246.45',
  
  // Replace this IP address with your FreeSWITCH IP address
  // and replace the port with your FreeSWITCH port
  wsServers: 'ws://178.62.246.45:5066',
  
  // FreeSWITCH Default Username
  authorizationUser: '1002',
  
  // FreeSWITCH Default Password
  password: 'leverpostej',

  // Enable sip traces on js console
  //traceSip: false,

  //stunServers: 'null',

};

//Creates the anonymous user agent so that you can make calls
var userAgent = new SIP.UA(config);

userAgent.on('invite', function (session) {
    session.accept({
        media: {
            render: {
                remote: {
                    video: document.getElementById('remoteVideo')
                },
                local: {
                    video: document.getElementById('localVideo')
                }
            }
        }
    });
});
