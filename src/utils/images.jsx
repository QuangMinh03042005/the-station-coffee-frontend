// src/utils/images.js
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
});

// Chuyển đường dẫn còn lại cho dễ dùng
const formattedImages = Object.entries(images).map(([fullPath, src]) => {
    // 
    const relativePath = fullPath.replace('../assets/', '');
    const folderPath = relativePath.substring(0, relativePath.lastIndexOf('/'));
    return { src, path: folderPath};
});

console.log(formattedImages);


// get all image from path
export function getImages(path) {
    let images = formattedImages.filter(image => image.path == path).map(image => image.src)
    return images
}

// get only image with name == fileName from path
export function getImage(path, fileName) {
    let image = getImages(path).find(image => image.includes(fileName))
    return image
}
