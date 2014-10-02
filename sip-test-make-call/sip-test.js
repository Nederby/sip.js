var session;

var endButton = document.getElementById('endCall');
endButton.addEventListener("click", function () {
    session.bye();
    alert("Call Ended");
}, false);

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
  traceSip: false,

  stunServers: 'null',

};

function onAccepted() {
    // Gets the video elements
    var remoteVideo = document.getElementById('remoteVideo');
    var localVideo = document.getElementById('localVideo');

    // Attaches the received video stream to the Video Elements
    attachMediaStream(remoteVideo, session.mediaHandler.getRemoteStreams()[1]);
    attachMediaStream(localVideo, session.mediaHandler.getLocalStreams()[0]);

    // Plays the Video Elements
    remoteVideo.play();
    localVideo.play();
}

function attachMediaStream(element, stream) {
    if (typeof element.srcObject !== 'undefined') {
        element.srcObject = stream;
    } else if (typeof element.mozSrcObject !== 'undefined') {
        element.mozSrcObject = stream;
    } else if (typeof element.src !== 'undefined') {
        element.src = URL.createObjectURL(stream);
    } else {
        console.log('Error attaching stream to element.');
    }
}

//Creates the anonymous user agent so that you can make calls
var userAgent = new SIP.UA(config);

//here you determine whether the call has video and audio
var options = {
    media: {
        constraints: {
            audio: true,
            video: true
        }
    }
};

//makes the call
session = userAgent.invite('1002', options);

session.on('accepted',onAccepted);



