  
	$("#submit_ride").click(function(){
 var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        function onYouTubeIframeAPIReady() {
            var numPl = Math.floor((Math.random() * 38) + 1);
            var player = new YT.Player("player", {
                height: '390',
                width: '640',
                playerVars: {
                    listType:'playlist',
                    list:'PLtGGAyMRLY7_ItP_oOEwWEt_h5CEsu2md',
                    index: numPl,
                    autoplay: 0,
    },
                events: {
                    'onReady': function (event) {
                        //event.target.cuePlaylist({list: "PLFgquLnL59anYA8FwzqNFMp3KMcbKwMaT"});
                        //event.target.playVideo();
                       setTimeout(function() {
		                                event.target.setShuffle({'shufflePlaylist' : true});
		                            }, 1000);
		                        }
		                    }
		                });
        }