document.addEventListener("DOMContentLoaded", function() {
  // Function to set the default color (green)
 const defaultColorButton = document.querySelector(".selected-color");
 selectColor(defaultColorButton);

 // Set default size to large
 const defaultSizeButton = document.querySelector(".selected");
 selectSize(defaultSizeButton);
});

function selectColor(element) {
 // Remove the tick icon from all colors
 document.querySelectorAll(".tick-svg").forEach(svg => svg.classList.add("hidden"));

 // Show the tick icon for the selected color
 element.querySelector(".tick-svg").classList.remove("hidden");
}

function selectSize(selectedButton) {
 // Remove active styles from all buttons
 document.querySelectorAll(".size-btn").forEach(btn => {
   btn.classList.remove("bg-black", "text-white");
   btn.classList.add("bg-black/10", "text-black");
 });

 // Apply active styles to the clicked button
 selectedButton.classList.remove("bg-black/10", "text-black");
 selectedButton.classList.add("bg-black", "text-white");
}

function range() {
   return {
     minprice: 1000, 
     maxprice: 7000,
     min: 100, 
     max: 10000,
     minthumb: 0,
     maxthumb: 0, 
     
     mintrigger() {   
       this.minprice = Math.min(this.minprice, this.maxprice - 500);      
       this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
     },
      
     maxtrigger() {
       this.maxprice = Math.max(this.maxprice, this.minprice + 500); 
       this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);    
     }, 
   }
}