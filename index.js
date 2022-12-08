const pageReloader = () => {
  window.location.reload();
};

const newCardDb = "database101";

const newCardDbInstance = JSON.parse(localStorage.getItem(newCardDb)) || [];

const addButton = document.getElementById("add-Btn");

//   COLLECTING NEW PLEDGE FROM THE USERS To THE CARD

const addNewPledge = () => {
  const newPledgeInput = document.getElementById("newPledgeInput");
  const pledge = newPledgeInput.value;
  console.log(pledge);

  const newPledgeObj = {
    id: Number(Math.random().toString().substr(2, 6)),
    pledge: pledge,
  };

  newCardDbInstance.push(newPledgeObj);
  localStorage.setItem(newCardDb, JSON.stringify(newCardDbInstance));
  pageReloader();
};

// RENDERING THE PLEDGE ON THE UI AND THE CARD

const renderPledgeToCard = () => {
  const cardContainer = document.getElementById("parentContainer");
  console.log(cardContainer);

  const cardItems = newCardDbInstance
    .map((e) => {
      // let do some destructuring here
      const { pledge, id } = e;
      return `
      <section class="thirdCardInfoCards">
      <div class="thirdCardInfoCardsTitlepledge">
        <p class="innerTitle">Bamboo Stand</p>
        <p class="pledges">${pledge}</p>
      </div>

      <p class="thirdCardInfoCardsparagraph">
        You get an egronomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you will be able to added to a
        special Blacker member list.
      </p>

      <div class="amountLeftReward">
        <p class="amountleft">101<span class="Left">left</span></p>
        <div class="rewardDelete">
            <p class="reward">Select Reward</p>
            <p class="deleteButton" onclick="cardDelete(${id})"><i class="fa-solid fa-trash"></i></p>
        </div>
      </div>
    </section>
      `;
    })
    .join("");

  cardContainer.innerHTML = cardItems;
};


// DELETE FUNCTION
const cardDelete = (id) => {
    const deletedCardDB = newCardDbInstance.filter((e) => e.id !== id);
    localStorage.setItem(newCardDb, JSON.stringify(deletedCardDB));
    pageReloader();
  };




//   MY EVENT LISTNER
addButton.addEventListener("click", addNewPledge);
renderPledgeToCard();
