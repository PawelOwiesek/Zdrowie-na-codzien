{
  onFormSubmit = (event) => {
    event.preventDefault();
    const height = document.querySelector(".js-height").value;
    const weight = document.querySelector(".js-weight").value;
    const score = document.querySelector(".js-score");
    let result;
    result = weight / (height / 100) ** 2;
    score.innerText = result.toFixed(0);

  };

  const execute = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  execute();
}
