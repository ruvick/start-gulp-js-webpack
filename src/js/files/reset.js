// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// Модуль закрытия по ESC 
if (document.documentElement.clientWidth > 1024) {
	document.addEventListener("DOMContentLoaded", () => {
		window.onkeydown = function (event) {
			console.log(event.keyCode)
			console.log(showedWindow)
			if (event.keyCode == 27) {

				// Удалить все  перед использованием =========================
				if (showedWindow == "headerMenuCatalog") toggleCatalog()

				// Сбрасывание инпутов
				if (searchFormInput) {
					searchFormInput.value = "";
				}

				if (catEntityMenuSearch) {
					catEntityMenuSearch.classList.remove('_active');
				}

				$('.catalog-entity-table').removeClass('fullScreen');

				$('.menuTable').removeClass('_active');

				bodyUnlockMain()
				// ===========================================================

			}
		};
	})
}