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
  //After cards have been shuffled, place them within out <.container> div
  $(".container").html(cards)
  //Allow for cards to be flippable
  $(".container")
    .find(".card")
    .flip()

  const state = {
    card1: "",
    card2: ""
  }

  $(".container").on("click", ".card", function(e) {
    e.preventDefault()

    var value = $(this).data("value")

    console.log(value)
    if (state.card1 === "") {
      state.card1 = $(this).data("value")
    } else if (state.card1 != "") {
      state.card2 = $(this).data("value")
    }
    console.log(state.card1, state.card2)
    if (state.card1 == state.card2) {
      alert("goodjob")
    } else {
      .flip(false)
    }

    // if (state.card1.find(".back").html() === state.card2.find(".back").html()) {
    //   this.disabled = true
    // }
  })
})
