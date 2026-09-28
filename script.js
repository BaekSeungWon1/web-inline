(() => {
	const nav = document.querySelector('nav');
	const links = nav && nav.querySelector('.nav-links');
	if (!nav || !links) return;

	const breakpoint = 768;
	const toggle = document.createElement('button');
	toggle.type = 'button';
	toggle.className = 'nav-toggle';
	toggle.setAttribute('aria-label', '메뉴 열기');
	toggle.setAttribute('aria-expanded', 'false');
	if (!links.id) links.id = 'nav-links';
	toggle.setAttribute('aria-controls', links.id);
	toggle.innerHTML = '<span></span><span></span><span></span>';

	const style = document.createElement('style');
	style.textContent = `
		nav .nav-toggle { display: none; border: 0; background: transparent; padding: 8px; cursor: pointer; }
		nav .nav-toggle span { display: block; width: 24px; height: 2px; margin: 5px 0; background: currentColor; }
		@media (max-width: ${breakpoint}px) {
			nav .nav-toggle { display: block; }
			nav .nav-links { display: none; }
			nav .nav-links.is-open { display: flex; flex-direction: column; }
		}
	`;
	document.head.appendChild(style);
	links.parentNode.insertBefore(toggle, links);

	toggle.addEventListener('click', () => {
		const open = toggle.getAttribute('aria-expanded') !== 'true';
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
		links.classList.toggle('is-open', open);
	});
})();
