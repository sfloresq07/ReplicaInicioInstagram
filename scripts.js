   startImageTransition();
  
        function startImageTransition() {
            let images = document.getElementsByClassName("transitionImg");
  
            for (let i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }
  
            let top = 1;
  
            let cur = images.length - 1;
  
            setInterval(changeImage, 4000);
  
            async function changeImage() {
  
                let nextImage = (1 + cur) % images.length;
  
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;
  
                await transition();
  
                images[cur].style.zIndex = top;
  
                images[nextImage].style.zIndex = top + 1;
  
                top = top + 1;
  
                images[cur].style.opacity = 1;
                
                cur = nextImage;
  
            }
  
            function transition() {
                return new Promise(function(resolve, reject) {
                    let del = 0.01;
  
                    let id = setInterval(changeOpacity, 10);
  
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
  
                })
            }
        }

        