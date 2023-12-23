<template>
  <!-- how Glucie work -->
  <div class="lg:max-w-[1200px] mx-auto my-16 lg:my-44 p-5 lg:p-0">
    <h2 class="text-3xl md:text-5xl text-center font-semibold">
      How Glucie Work
    </h2>
    <!-- progress bar -->
    <div class="bg-gray w-[500px]">
      <div class="step">
        <span class="circle active"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <div class="progress-bar">
          <span class="indicator"></span>
        </div>
        <!-- <div class="buttons">
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div> -->
      </div>

    </div>
    <!-- end progress bar -->
    <div
      class="flex lg:gap-28 flex-col-reverse lg:flex-row lg:justify-between mt-8 lg:mt-24"
    >
      <div class="flex-1 mt-10 lg:mt-0 relative h-[560px]">
        <div
          class="overflow-y-auto h-[560px] scrollbar-hide py-3 px-2"
          @scroll="onScroll"
        >
          <ol class="border-l-4 border-[#2251D4]">
            <!--First item-->
            <li>
              <div class="flex-start flex items-center">
                <div
                  class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                ></div>
              </div>

              <div class="mb-6 ml-12 pb-6 will-change-transform">
                <h4 class="-mt-6 text-2xl font-semibold">
                  01. Subscribe and receive your CGM
                </h4>
                <p class="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>

            <!--Second item-->
            <li>
              <div class="flex-start flex items-center">
                <div
                  class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                ></div>
              </div>
              <div class="mb-6 ml-12 pb-6">
                <h4 class="-mt-6 text-2xl font-semibold">
                  02. Log your meals and activities
                </h4>
                <p class="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>

            <!--Third item-->
            <li>
              <div class="flex-start flex items-center">
                <div
                  class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                ></div>
              </div>
              <div class="mb-6 ml-12 pb-6">
                <h4 class="-mt-6 text-2xl font-semibold">
                  03. Get personalised tips
                </h4>
                <p class="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>

            <!--Third item-->
            <li>
              <div class="flex-start flex items-center">
                <div
                  class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                ></div>
              </div>
              <div class="mb-6 ml-12 pb-6">
                <h4 class="-mt-6 text-2xl font-semibold">
                  04. Get personalised tips
                </h4>
                <p class="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div
          class="h-2/5 left-5 w-[calc(100%_-_20px)] bottom-0 opacity-60 absolute z-10"
        >
          <div class="h-full flex-1 bg-[#fff]"></div>
        </div>
      </div>
      <div class="flex-1">
        <img src="../assets/images/mobile.png" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
 //DOM Elements
 const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // update progress bar width based on current step
  progressBar.style.height = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
</script>

<style>
.step {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  margin-bottom: 50px;
  margin-left: -8px;
  color: #999;
  font-size: 22px;
  font-weight: 500;
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  background-color: white;
  /* z-index: 10; */
}

.circle.active{
  border-color: brown;
  color: blueviolet;
}

.progress-bar{
  position: absolute;
  width: 4px;
  height: 250px;
  background: #e0e0e0;
  z-index: -1;
}
.progress-bar .indicator{
  position: absolute;
  height: 0%;
  width: 100%;
  background-color: blue;
}
.buttons{
  display: flex;
  gap: 20;
}
.buttons button{
  padding: 8px 25px;
  background-color: black;
  color: #fff;
  border-radius: 10px;
}
</style>
