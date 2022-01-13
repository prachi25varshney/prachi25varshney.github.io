function myscroll(myID) {
    var offset = jQuery("#" + myID).offset()
    window.scrollTo(0, offset.top);
}