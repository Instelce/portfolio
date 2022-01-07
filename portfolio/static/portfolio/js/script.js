// Buttons
class Button {
	static init() {
		const buttons = Array.from(document.querySelectorAll(".link"))

		buttons.forEach(button => {
			const text = button.firstChild
			const span = document.createElement('span')
			const secondSpan = document.createElement('span')
			// const bg = document.createElement('div')
			// bg.classList.add("button__bg")

			button.appendChild(secondSpan)
			secondSpan.appendChild(span)
			span.appendChild(text)
			// button.appendChild(bg)
		});
	}
}

Button.init()