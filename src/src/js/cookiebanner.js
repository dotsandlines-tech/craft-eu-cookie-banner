
(function () {

	function loadExternalScripts(type, selectionNames = []) {

		if (type && Array.isArray(selectionNames)) {
			selectionNames.forEach((selection) => {
				const scripts = window.cookiebanner[selection];
				if (typeof scripts === "function") {
					scripts();
				}
			})

		} else {
			const scripts = window.cookiebanner["all"]
			if (typeof scripts === "function") {
				scripts();
			}
		}
	}


	function getCookie(name) {
		const n = name + "="
		const decodedCookie = decodeURIComponent(document.cookie)
		const ca = decodedCookie.split(";")
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) == " ") {
				c = c.substring(1)
			}
			if (c.indexOf(n) == 0) return c.substring(n.length, c.length)
		}
		return false
	}


	function cookieIsSet(name) {
		return getCookie(name)
	}

	/* function set cookie name and value */
	function setCookie(key, value, expiresInDays) {
		const domain = window.location.host;
		const expires = new Date();
		expires.setTime(expires.getTime() + (expiresInDays * 24 * 60 * 60 * 1000));
		document.cookie = key + "=" + value + ";expires=" + expires.toUTCString() + "domain=" + domain + ";path=/";
	}


	function showNotice(cookiebar, settings) {
		cookiebar.classList.remove("cb-hidden");
		settings.classList.add("cb-hidden");
	}

	function hideNotice(cookiebar, settings) {
		cookiebar.classList.add("cb-hidden");
		settings.classList.remove("cb-hidden");
	}

	function showSettingsOption(settings) {
		settings.classList.remove("cb-hidden");
	}

	function addSettingsListener(cookiebar, settings) {
		settings.addEventListener("click", (e) => {
			e.preventDefault();
			showNotice(cookiebar, settings);
		});
	}

	function preselectCheckboxes(categoryArray) {
		categoryArray.forEach(categoryId => {
			const element = document.querySelector("#" + categoryId);
			if (element) {
				element.checked = true;
			}
		})
	}

	function init() {
		const cookiebar = document.querySelector("#cookiebar");
		const settings = document.querySelector("#cookieSettings");

		// check if cookiebar does exist
		if (cookiebar != null) {

			const type = cookiebar.dataset.cookiebarType;

			if (!cookieIsSet("cookie-consent")) {
				showNotice(cookiebar, settings);
			} else {
				if (type) {
					const categoryArray = getCookie("cookie-consent").split(",");
					preselectCheckboxes(categoryArray);
					loadExternalScripts(type, categoryArray);
				} else {
					if (getCookie("cookie-consent") === "all") {
						loadExternalScripts(type);
					}
				}

				if (settings) {
					showSettingsOption(settings);
					addSettingsListener(cookiebar, settings);
				}
			}

			if (type) {
				const savePreferences = document.querySelector("#savePreferences");

				savePreferences.addEventListener("click", (e) => {
					e.preventDefault();
					const selection = cookiebar.querySelectorAll("input[type=checkbox]:checked");

					let selectionNames = [];

					selection.forEach((select, index) => {
						selectionNames[index] = select.name;
					});

					setCookie("cookie-consent", selectionNames.toString(), cookiebar.dataset.expire);
					hideNotice(cookiebar, settings);
					addSettingsListener(cookiebar, settings);
					loadExternalScripts(type, selectionNames);
				});
			} else {
				const deny = document.querySelector("#deny");
				const submitAll = document.querySelector("#submitAll");

				deny.addEventListener("click", (e) => {
					e.preventDefault();
					setCookie("cookie-consent", "deny", cookiebar.dataset.expire);
					hideNotice(cookiebar, settings);
					addSettingsListener(cookiebar, settings);
				});

				submitAll.addEventListener("click", (e) => {
					e.preventDefault();
					setCookie("cookie-consent", "all", cookiebar.dataset.expire);
					hideNotice(cookiebar, settings);
					addSettingsListener(cookiebar, settings);
					loadExternalScripts(type);
				});
			}
		}
	}

	init();
})();