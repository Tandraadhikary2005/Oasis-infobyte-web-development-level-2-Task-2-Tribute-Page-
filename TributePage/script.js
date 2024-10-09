let currentImageIndex = 0;
        const images = document.querySelectorAll('.gallery img');
        const totalImages = images.length;

        function showNextImage() {
            images[currentImageIndex].classList.remove('active'); // Hide current image
            currentImageIndex = (currentImageIndex + 1) % totalImages; // Move to the next image
            images[currentImageIndex].classList.add('active'); // Show next image
        }
        setInterval(showNextImage, 3000); // Image will change every 3 seconds
