
function equalHeight(col) {
    col.each(function() {
		  container = $(this).parent().height();
			$(this).height(container);
    });
}

$(document).ready(function(){

	/** front-end print functionality **/
	$('.btn-coupon-print').each(function() {
	 $(this).click(function(){
		var id = $(this).parentsUntil('.coupon').parent();
		var attr = $(id).attr('id');
		var lang = $('html').attr('lang');
		var head = '<html><head>'
				head += '<title>Kia CA</title>'
				head += '<link rel="stylesheet" media="all" href="css/fonts.css"/>'
				head += '<link rel="stylesheet" media="screen" href="css/common.css"/>'
				head += '<link rel="stylesheet" media="print" href="css/print.css"/>'
				head += '</head><body><section id="coupons"><div id="' + attr + '" class="coupon shadow clearfix">'
		var foot = '</div></section></body></html>'
		var page = head + id.html() + foot;
		var w = window.open("", "", "width=1024, height=650, resizeable=0");
		w.document.write(page);
		setTimeout(function(){
		/** delay pageload so styles are called/loaded **/
		 w.print();
		}, 1250);
		w.document.close();
		return false;
	 });
	});

	/** screen width greater than 599 **/
	if ($(window).width() > 599) {
		/** consistent div heights **/
		equalHeight($('.coupon-offer'));
	}

}); /* END .ready */

$(window).resize(function() {

	/** resets coupon-offer height **/
	$('.coupon-offer').css('height','auto');

	if ($(this).width() > 599 ) {
		equalHeight($('.coupon-offer'));
	} else {
		$('.coupon-offer').css('height','auto');
	}

}); /* END .resize */
