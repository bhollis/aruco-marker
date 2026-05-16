import { arucoToSVGString as e } from "./aruco-marker.js";
//#region src/element.ts
var t = class extends HTMLElement {
	constructor() {
		super();
	}
	static get observedAttributes() {
		return ["markerid", "size"];
	}
	connectedCallback() {
		this.shadowRoot || (this.attachShadow({ mode: "open" }), this._upgradeProperty("markerId"), this._upgradeProperty("size"));
		let t = e(this.markerId, this.size ?? void 0);
		this.shadowRoot.innerHTML = t;
	}
	_upgradeProperty(e) {
		if (this.hasOwnProperty(e)) {
			let t = this[e];
			delete this[e], this[e] = t;
		}
	}
	attributeChangedCallback() {
		this.connectedCallback();
	}
	get markerId() {
		let e = parseInt(this.getAttribute("markerid") ?? "", 10);
		if (Number.isNaN(e)) throw Error("markerid attribute must be set");
		return e;
	}
	set markerId(e) {
		this.setAttribute("markerid", e.toString());
	}
	get size() {
		return this.getAttribute("size");
	}
	set size(e) {
		e ? this.setAttribute("size", e) : this.removeAttribute("size");
	}
};
customElements.define("aruco-marker", t, {});
//#endregion

//# sourceMappingURL=element.js.map