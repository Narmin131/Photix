// var notChangedStepsCount = 0;
// var scrollInterval = setInterval(function() {
//     var element = document.querySelector(".element-selector");
//     if (element) { 
//         // element found
//         clearInterval(scrollInterval);
//         element.scrollIntoView();
//     } else if((document.documentElement.scrollTop + window.innerHeight) != document.documentElement.scrollHeight) { 
//         // no element -> scrolling
//         notChangedStepsCount = 0;
//         document.documentElement.scrollTop = document.documentElement.scrollHeight;
//     } else if (notChangedStepsCount > 20) { 
//         // no more space to scroll
//         clearInterval(scrollInterval);
//     } else {
//         // waiting for possible extension (autoload) of the page
//         notChangedStepsCount++;
//     }
// }, 50);

