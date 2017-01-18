import Color from 'color-js'
console.log(Color);


const icons = {
  star:`<g transform="translate(3.000000, 4.000000) scale(2.5)">
    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
     <path d="M0 0h18v18H0z" fill="none"/>
   </g>`,
  face:`<g transform="translate(6.000000, 5.000000) scale(1.5)">
    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
   <path d="M0 0h24v24H0z" fill="none"/>
   </g>`
}



export const getMarkerSVGIcon = ({ fill='#F67B4D', icon='star', iconColor='#fff' }) => {
  const markerColor = Color(fill);
  const markerIcon = icons[icon];
  const encodedString = btoa(`<svg width="54px" height="72px" viewBox="0 0 54 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-3.000000, -1.000000)">
              <g id="Group-3" transform="translate(5.000000, 3.000000)">
                  <g id="Group-2">
                      <g id="Group" stroke="${markerColor.setLightness(0.7).toString()}" stroke-width="5" fill="${markerColor.toString()}">
                          <path d="M25,66.7768957 C25,66.7768957 34.9470817,57.2894849 41.8569808,46.2109375 C48.76688,35.1323901 49.7235023,28.3155339 49.7235023,22.8838235 C49.7235023,10.2454368 38.6544133,0 25,0 C11.3455867,0 0.276497696,10.2454368 0.276497696,22.8838235 C0.276497696,28.0826338 2.79165467,36.4067957 8.79503888,46.2109375 C14.7984231,56.0150793 25,66.7768957 25,66.7768957 Z" id="Oval-2"></path>
                      </g>
                      <g fill="${iconColor}">
                        ${markerIcon}
                       </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>`);
  return `data:image/svg+xml;base64,${encodedString}`;
}
