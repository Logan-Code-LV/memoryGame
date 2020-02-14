$(document).ready(function() {
  var cards = $(".card").toArray()

  $(".container")
    .find(".card")
    .flip()

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
  shuffle(cards)
  console.log(cards)
  $(".container").html(cards)
  $(".container")
    .find(".card")
    .flip()
  var card1, card2
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
