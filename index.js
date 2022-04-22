const sharp = require('sharp');

sharp(
  Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" id="svg" width="512" height="512" viewport="0 0 512 512" version="1.1">
  <circle r="378" cx="256" cy="256" fill="transparent" stroke-dashoffset="0" stroke="#cccccc" stroke-width="300px"/>
  <circle r="378" cx="256" cy="256" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" stroke="#4f80ee" stroke-width="300px" style="stroke-dasharray: 2375; stroke-dashoffset: 1306.25; transform: rotate(-90deg);
    transform-origin: center;"/>
</svg>
`)
)
  .png()
  .toFile('output.png');
