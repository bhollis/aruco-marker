class t extends HTMLElement{constructor(){super()}static get observedAttributes(){return["markerid","size"]}connectedCallback(){var t;this.shadowRoot||(this.attachShadow({mode:"open"}),this._upgradeProperty("markerId"),this._upgradeProperty("size"));const e=function(t,e){let r=0,i=0;const s=function(t){if(t<0||t>1023)throw new RangeError("Marker ID must be in the range [0..1023]");const e=[16,23,9,14];let r=0,i=0,s=0,o=0;const n=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];for(o=0;o<5;o++)for(r=t>>2*(4-o)&3,i=e[r],s=0;s<5;s++)n[s][o]=i>>4-s&1;return n}(t);let o="";for(o="<svg "+(e=e?'height="'+e+'" width="'+e+'"':"")+' viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="7" height="7" fill="black"/>\n',i=0;i<5;i++)for(r=0;r<5;r++)1===s[r][i]&&(o+='  <rect x="'+(r+1)+'" y="'+(i+1)+'" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n');return o+="</svg>",o}(this.markerId,null!=(t=this.size)?t:void 0);this.shadowRoot.innerHTML=e}_upgradeProperty(t){if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(){this.connectedCallback()}get markerId(){var t;const e=parseInt(null!=(t=this.getAttribute("markerid"))?t:"",10);if(Number.isNaN(e))throw new Error("markerid attribute must be set");return e}set markerId(t){this.setAttribute("markerid",t.toString())}get size(){return this.getAttribute("size")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}}customElements.define("aruco-marker",t,{});
//# sourceMappingURL=element.modern.js.map
