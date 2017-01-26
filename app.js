$( document ).ready(function() {
    console.log( "ready!" );
	
	  $('[data-numeric]').payment('restrictNumeric');
      $('.cc-number').payment('formatCardNumber');
      $('.cc-exp').payment('formatCardExpiry');
      $('.cc-cvc').payment('formatCardCVC');
      $.fn.toggleInputError = function(erred) {
        this.parent('.form-group').toggleClass('has-error', erred);
        return this;
      };
      
      
      
  var $form = $('#payment-form');
  $form.submit(function(event) {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    //Stripe.card.createToken($form, stripeResponseHandler);

    console.log($('.cc-exp').val());
    
    // Prevent the form from being submitted:
    return false;

});

});