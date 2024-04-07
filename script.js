document.addEventListener('DOMContentLoaded', function() {
    // if you want to fork, change this to the directory of whatever you want downloaded
    var mp4Url = 'horizontally-spinning-rat.mp4';

    var downloadButton = document.getElementById('downloadButton');
    
    function startDownload() {
        var link = document.createElement('a');
        link.href = mp4Url;
        link.download = 'file.mp4';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadButton.addEventListener('click', startDownload);

    window.addEventListener('beforeunload', function(event) {

    });
});
