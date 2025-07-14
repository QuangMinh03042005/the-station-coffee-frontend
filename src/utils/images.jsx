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

/*
    when deploy to production , vite uses dist/assets instead of src/assets, if using 
    [file name].{jpg, png, ...}, it doesn't work. Use only [file name] instead.
    example:
        const logo = getImage("images", "logo.jpg") // wrong, it's work only on local
        const logo = getImage("images", "logo") // right, it's work in both place.
*/
export function getImage(path, fileName) {
    let image = getImages(path).find(image => image.includes(fileName))
    return image
}
