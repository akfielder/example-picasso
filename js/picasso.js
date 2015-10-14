// Lightbox

// Step 1: add a click event listener to our images inside of our sections.

$("section img").on("click", function(){

  // Step 2: fade in our lightbox over 250ms.
  $("#lightbox").fadeIn(250) ;

  // Step 3: Replace the image in our lightbox with the image that has been clicked on.

  // Store the src attribute of the image that we've clicked on.
  var imageSrc = $(this).attr("src");
  console.log(imageSrc);

  // Replace the lightbox img src with the img src we've stored in our variable.
  // $("body").css("background", "red"); - example of structure
  $("#lightbox img").attr("src", imageSrc)


});



// Step 4: Add a click event listener to our lightbox.

$("#lightbox").on("click", function(){

// Step 5: Set function to - Fade out our lightbox.
  $("#lightbox").fadeOut(250) ;
});


// Change the background-colour of the body as we scroll.

  // Step 1: Create a scroll event listener and attach it to the whole page.
  // The 'document' keyword allows us to attach an event listner to our entire page, this will be triggered every single time the page is scrolled.
  $(document).on("scroll", function (){

    // Step 2: Store the current pixels from the top of the page (this happens every time we scroll).
    var pixelsFromTop = $(document).scrollTop();
    console.log(pixelsFromTop);


    // Step 3: Change background colour according to how far from the top we currently are.
  //if  (thisIsTrue) {
    //do something
  //} else {
    //I'ts not true, do something else
  //}

// Here we check to see if pixelsFromTop is greater than 50, if it is apply a blue background.
if (pixelsFromTop > 50) {
  // Turn our background blue
  // .addClass allows us to add the blue class from our css to our body - note we do not need the . here as it is only expecting class names.
  $("body").addClass("blue");
} else {
  // Turn our background back to white
  $("body").removeClass("blue");
}

// Step 4: .toggleClass is an alternative way to the long way about - so same as step 3, but quicker.
// $(element).action("classname", condition);

// $(body).toggleClass("blue",pixelsFromTop > 50)
$("body").toggleClass("rose", pixelsFromTop > 1200);
$("body").toggleClass("cubism", pixelsFromTop > 2400);


});
