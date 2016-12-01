(function (d, w, n) {
	'use strict';

	var ua = n.userAgent,
		mobile = ua.match(/android|iphone|ipad|ipod|windows phone|blackberry|mobile/i),
		desktop = ua.match(/linux|mac os|windows nt/i),
		browsers = ua.match(/chrome|safari|firefox|opera|opera mini|msie|iemobile|edge/i),
		isMobile = {
			android : function () {
				return ua.match(/android/i);
			},
			ios : function () {
				return ua.match(/iphone|ipad|ipod/i);
			},
			windows : function () {
				return ua.match(/windows phone/i);
			},
			blackberry : function () {
				return ua.match(/blackberry/i);
			},
			any : function () {
				return ( this.android() || this.ios() || this.windows() || this.blackberry() );
			}
		},
		isDesktop = {
			linux : function () {
				return ua.match(/linux/i);
			},
			mac : function () {
				return ua.match(/mac os/i);
			},
			windows : function () {
				return ua.match(/windows nt/i);
			},
			any : function () {
				return ( this.linux() || this.mac() || this.windows() );
			}
		},
		isBrowser = {
			chrome : function () {
				return ua.match(/chrome/i);
			},
			safari : function () {
				return ua.match(/safari/i);
			},
			firefox : function () {
				return ua.match(/firefox/i);
			},
			opera : function () {
				return ua.match(/opera|opera mini/i);
			},
			ie : function () {
				return ua.match(/msie|iemobile/i);
			},
			edge : function () {
				return ua.match(/edge/i);
			},
			any : function () {
				return ( this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera() );
			}
		},
		liUserAgent = d.querySelector('#user-agent'),
		liPlatform = d.querySelector('#platform'),
		liBrowser = d.querySelector('#browser'),
		container = d.querySelector('#container'),
		btnDevice = d.querySelector('#btn-device'),
		btnPlatform = d.querySelector('#btn-platform'),
		btnBrowser = d.querySelector('#btn-browser'),
		btnRedirect = d.querySelector('#btn-redirect'),
		deviceIcon,
		platformIcon,
		browserIcon,
		whereIGo;

		function redirectUA() {
			if ( isBrowser.edge() ) {
				whereIGo = 'http://www.reforma.com/';
			} else if ( isMobile.android() ) {
				whereIGo = 'http://www.reforma.com/EntradaAndroid.htm';
			} else if ( isMobile.ios() ) {
				whereIGo = 'http://www.reforma.com/EntradaIphone.htm';
			} else {
				whereIGo = 'http://www.reforma.com/';
			}

			w.location.href = whereIGo;
		}

		
		w.onload = function () {
			/*
			console.log(
				isMobile.android(),
				isMobile.ios(),
				isMobile.windows(),
				isDesktop.windows(),
				isMobile.any(),
				isBrowser.edge(),
				isBrowser.any()
			);
			*/

			liUserAgent.textContent = ua;
			
			/*
			if ( isMobile.any() ) {
				liPlatform.textContent = isMobile.any();
			} else {
				liPlatform.textContent = isDesktop.any();
			}
			*/

			liPlatform.textContent = ( isMobile.any() ) ? isMobile.any() : isDesktop.any();
			liBrowser.textContent = isBrowser.any();


			btnRedirect.addEventListener('click', redirectUA);

			//redirectUA();
		}

		//w.onload = redirectUA;
})(document, window, navigator);