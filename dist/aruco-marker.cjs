function r(r){if(r<0||r>1023)throw new RangeError("Marker ID must be in the range [0..1023]");var t=[16,23,9,14],e=0,i=0,o=0,n=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];for(o=0;o<5;o++)for(e=t[r>>2*(4-o)&3],i=0;i<5;i++)n[i][o]=e>>4-i&1;return n}exports.arucoMarkerMatrix=r,exports.arucoToSVGString=function(t,e){var i=0,o=0,n=r(t),h="";for(h="<svg "+(e=e?'height="'+e+'" width="'+e+'"':"")+' viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="7" height="7" fill="black"/>\n',o=0;o<5;o++)for(i=0;i<5;i++)1===n[i][o]&&(h+='  <rect x="'+(i+1)+'" y="'+(o+1)+'" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />\n');return h+"</svg>"};
//# sourceMappingURL=aruco-marker.cjs.map