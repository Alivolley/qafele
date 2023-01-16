const scrollFinder = (setTopScroll) => {
   let scrollTop = window.scrollY;

   let documentHeight = document.body.clientHeight;

   let windowHeight = window.innerHeight;

   let scrollPercent = scrollTop / (documentHeight - windowHeight);

   setTopScroll(scrollPercent);
};

export default scrollFinder;
