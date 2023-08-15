import { arucoToSVGString } from 'aruco-marker';

class ArucoMarkerElement extends HTMLElement {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['markerid', 'size'];
	}

	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this._upgradeProperty('markerId');
			this._upgradeProperty('size');
		}

		const svgContents = arucoToSVGString(this.markerId, this.size ?? undefined);
		this.shadowRoot!.innerHTML = svgContents;
	}

	_upgradeProperty(prop: 'markerId' | 'size') {
		if (this.hasOwnProperty(prop)) {
			let value = this[prop];
			delete this[prop];
			// @ts-expect-error ts(2322)
			this[prop] = value;
		}
	}

	attributeChangedCallback() {
		this.connectedCallback();
	}

	public get markerId() {
		const markerId = parseInt(this.getAttribute('markerid') ?? '', 10);
		if (Number.isNaN(markerId)) {
			throw new Error('markerid attribute must be set');
		}
		return markerId;
	}

	public set markerId(value: number) {
		this.setAttribute('markerid', value.toString());
	}

	public get size() {
		return this.getAttribute('size');
	}

	public set size(value: string | null) {
		if (!value) {
			this.removeAttribute('size');
		} else {
			this.setAttribute('size', value);
		}
	}
}

customElements.define('aruco-marker', ArucoMarkerElement, {});
