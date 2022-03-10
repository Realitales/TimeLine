(() => {
    const v = document.querySelector("#video")
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
        v.srcObject = stream;
        v.play();
    });
})();
