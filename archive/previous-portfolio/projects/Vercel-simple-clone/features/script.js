
// source = https://youtu.be/T33NN_pPeNI

const observer = new IntersectionObserver(

    /* callback function, function that is used as a parameter  */
    (entries) => {
        console.log("check");
        console.log(entries);
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show"); // add show class
            }
            else
            {
                entry.target.classList.remove('show');
            }
        });
});


const hiddenElements = document.querySelectorAll('.one_feature');

console.log(hiddenElements);

hiddenElements.forEach((el) => observer.observe(el));

/*
function checkhidden(el) {
    return observer.observer(el);
}

*/
/* EXAMPLE turning normal function to =>

function isPositive(number) {
    return number >= 0
}

const checkPositive = (number) => {
    number >= 0
}

*/

