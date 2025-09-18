export const generatePlaceholderImageUrl = (title: string, width: number = 400, height: number = 200) => {
  const colors = ['#e67e22', '#27ae60', '#8e44ad', '#3498db', '#e74c3c', '#f39c12'];
  const colorIndex = title.length % colors.length;
  const color = colors[colorIndex];
  const textColor = '#ffffff';
  
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        fill="${textColor}" 
        font-size="16" 
        font-family="Arial, sans-serif"
        font-weight="600"
      >
        ${title.slice(0, 40)}${title.length > 40 ? '...' : ''}
      </text>
    </svg>
  `)}`;
};