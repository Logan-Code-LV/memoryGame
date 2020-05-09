$(document).ready(function() {
  //Turns html <card> into an array
  var cards = $(".card").toArray()

  //Create a shuffle function
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }
  //Shuffle all of our <.card> divs
  shuffle(cards)
  //After cards have been shuffled, place them within our <.container> div
  $(".container").html(cards)
  //Allow for cards to be flippable
  $(".container")
    .find(".card")
    .flip()

  var cardFlip = {
    cardFlipOne: "",
    cardFlipTwo: ""
  }

  const state = {
    card1: "",
    card2: ""
  }
  var matched = 1

  var lives = 20

  $(".container").on("click", ".card", function(e) {
    e.preventDefault()

    var value = $(this)

    // console.log(value)
    if (state.card1 === "") {
      cardFlip.cardFlipOne = $(this)
      state.card1 = $(this).data("value")
    } else if (state.card1 != "") {
      cardFlip.cardFlipTwo = $(this)
      state.card2 = $(this).data("value")
      setTimeout(() => {
        if (state.card1 == state.card2) {
          alert("goodjob")
          state.card1 = ""
          state.card2 = ""
          matched = matched + 1
        } else {
          alert("incorrect")
          $(cardFlip.cardFlipOne).flip(false)
          $(cardFlip.cardFlipTwo).flip(false)
          state.card1 = ""
          state.card2 = ""
          lives = lives - 1
          if (lives < 1) {
            window.location.href = "lose.html"
          }
        }
        if (matched === 10) {
          window.location.href = "win.html"
        }
      }, 1000)
    }
    console.log(state.card1)
    console.log(state.card2)
    // console.log(cardFlipOne)
    // console.log(state.card1)
  })
})
