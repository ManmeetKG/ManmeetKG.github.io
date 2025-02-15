$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Open the envelope when clicked
    envelope.click(function () {
        open();
    });

    // Open the envelope when the "Open" button is clicked
    btn_open.click(function () {
        open();
    });

    // Close the envelope when the "Reset" button is clicked
    btn_reset.click(function () {
        close();
    });

    // Function to open the envelope
    function open() {
        envelope.removeClass("close").addClass("open");
    }

    // Function to close the envelope
    function close() {
        envelope.removeClass("open").addClass("close");
    }
}); // Added missing closing parenthesis