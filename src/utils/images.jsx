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

    return { src, path: folderPath };
});

function getImages(path) {
    let images = formattedImages.filter(image => image.path == path).map(image => image.src)
    return images
}

export default getImages;
