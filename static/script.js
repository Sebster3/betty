document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
    const intersectionOptions = {
        rootMargin: '10px 0px 0px 0px',
        threshold: 0.25
    }

    if ("IntersectionObserver" in window) {
        // Set up the IntersectionObserver callback
        let lazyImgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                    let lazyImage = entry.target
                    lazyImage.src = lazyImage.dataset.src
                    console.log("Lazy loading: " + lazyImage.src)
                    console.log("InterRect: " + entry.intersectionRect)
                    console.log("InterRatio: " + entry.intersectionRatio)
                    // lazyImage.srcset = lazyImage.dataset.srcset
                    // lazyImage.classList.remove('lazy')
                    lazyImgObserver.unobserve(lazyImage)
                }
            })
        }, intersectionOptions)

        // Set the observer on all 'lazy' images
        lazyImages.forEach(lazyImage => {
            lazyImgObserver.observe(lazyImage)
        })
    } else {
        console.warn("IntersectionObserver is not supported in this browser")
    }
})

function unhideLazy(img) {
    img.classList.remove('lazy')
}
