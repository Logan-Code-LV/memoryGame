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

  var card1
  var card2

  $(".container").on("click", ".card", function(e) {
    e.preventDefault()
    if (card1) {
      card2 = $(this)
      if (card1.find(".front").html() === card2.find(".front").html()) {
      } else {
        card1.flip()
        card2.flip()
      }
    } else {
      card1 = $(this)
    }
  })
})
