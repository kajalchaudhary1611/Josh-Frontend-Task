$(".video-button-play").click(function () {
        document.getElementById("video-play").style.display = "none";
        $(".video")[0].contentWindow.postMessage(
          '{"event":"command","func":"' + "playVideo" + '","args":""}',
          "*"
        );
      });

      $(".video-button-pause").click(function () {
        document.getElementById("video-play").style.display = "block";
        $(".video")[0].contentWindow.postMessage(
          '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
          "*"
        );
      });