 var modal = document.getElementById("appointmentModal");
      var btn = document.getElementById("appointmentButton");
      var cancelBtn = document.getElementById("cancelButton");

      btn.onclick = function () {
        modal.style.display = "block";
      };

      cancelBtn.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };