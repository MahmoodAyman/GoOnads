const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "من فضلك انتظر...";
  result.classList.add("progress");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.classList.add("success");
        result.innerHTML = "تم الإرسال بنجاح شكرا لك سنحاول الرد عليك في أقرب وقت ممكن";
        
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = " حدث خطأ ما برجاء المحاولة مرة اخرى";
      result.classList.add("error");
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.classList.remove("success");
        result.classList.remove("error");
        result.classList.remove("progress");
        result.style.display = "none";
      }, 3000);
    });
});
