function fullPageInit(targetElement) {
  let currentPage = 0;
  let timeout = 500;
  let animated = false;

  const minPage = 0;
  const maxPage = targetElement.children.length - 1;
  const cssTransiton = `${timeout / 1000}s cubic-bezier(1,0,.61,1.01)`;

  targetElement.style.top = "0%";
  targetElement.style.transition = cssTransiton;

  function pageMove() {
    animated = true;
    targetElement.style.top = `-${currentPage * 100}%`;
    setTimeout(() => {
      animated = false;
    }, timeout);
  }

  document.addEventListener("mousewheel", function (event) {
    if (animated) return;
    const isMouseWheelDown = event.wheelDeltaY < 0;
    const isPageDown = isMouseWheelDown && currentPage < maxPage;
    const isPageUp = !isMouseWheelDown && minPage < currentPage;
    if (isPageDown) {
      currentPage++;
      pageMove();
    } else if (isPageUp) {
      currentPage--;
      pageMove();
    }
  });
}
