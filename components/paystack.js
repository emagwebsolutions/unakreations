const paystack = (email, amnt) => {
  const amount = parseFloat(amnt)
  var handler = PaystackPop.setup({
    key: 'pk_test_4589bf9fa76134b0892747bf3cc7edec56a72017', // Replace with your public key
    email,
    amount,
    currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars
    ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Replace with a reference you generated
    callback: function (response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function () {
      alert('Transaction was not completed, window closed.');
    },
  });

  handler.openIframe();
};
export default paystack;
