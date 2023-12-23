<template>
  <!-- how Glucie work -->
  <div class="lg:max-w-[1200px] mx-auto my-16 lg:my-44 p-5 lg:p-0">
    <h2 class="text-3xl md:text-5xl text-center font-semibold">
      How Glucie Work
    </h2>

    <div
      class="flex lg:gap-28 flex-col-reverse lg:flex-row lg:justify-between mt-8 lg:mt-24"
    >
      <div class="flex-1 mt-10 lg:mt-0 relative h-[580px]">
        <div id="scroll-id"
          class="scroll-text overflow-scroll h-[580px] scrollbar-hide py-3 px-2"
          @scroll="onScroll"
        >
          <div class="flex">
            <!-- progress bar -->
            <div class="w-10">
              <div class="bg-gray w-[500px]">
                <div class="step">
                  <span class="circle active"></span>
                  <span class="circle active"></span>
                  <span class="circle" id="circle"></span>
                  <div class="progress-bar">
                    <span class="indicator" id="indicator"></span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end progress bar -->
            <!-- start order list text -->
            <div>
              <ol class="py-2">
                <!--First item-->
                <li>
                  <div class="flex-start flex items-center">
                    <!-- <div
                      class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                    ></div> -->
                  </div>

                  <div class="mb-6 ml-12 pb-10 will-change-transform">
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
                    <!-- <div
                      class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                    ></div> -->
                  </div>
                  <div class="mb-6 ml-12 pb-10">
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
                    <!-- <div
                      class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                    ></div> -->
                  </div>
                  <div class="mb-6 ml-12 pb-10">
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

                <!--Fourth item-->
                <li>
                  <div class="flex-start flex items-center">
                    <!-- <div
                      class="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#2251D4] bg-white"
                    ></div> -->
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
          </div>
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

<script>

export default {

  mounted(){
    const progressbar = document.getElementById("indicator");
    const article = document.getElementById("scroll-id");
    const circle = document.getElementsByClassName("circle");

    console.log("progressbar",progressbar)
    console.log("scroll-text",article)

     console.log("article.scrollY",article.scrollY)
  },

  methods:{
    onScroll(){
      const progressbar = document.getElementById("indicator");
    const article = document.getElementById("scroll-id");
      let circle = document.getElementById("circle");
      let height = 200

      if(article.scrollTop < 104){
         height = 200
      }else{
         height = article.scrollTop + 200 - 104
      }

     progressbar.style.height = height + "px"

     if(height >= 340){
      circle.classList.add("active");
     }else if(height < 340){
      circle.classList.remove("active");
     }


    }
  }
}


</script>

<style>
.step {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  margin-bottom: 150px;
  margin-left: -5px;
  color: #999;
  font-size: 22px;
  font-weight: 500;
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  background-color: white;
  /* z-index: 10; */
}

.circle.active {
  border-color: rgb(64, 146, 240);
}

.progress-bar {
  position: absolute;
  width: 4px;
  height: 340px;
  background: #e0e0e0;
  z-index: -1;
}
.progress-bar .indicator {
  position: absolute;
  height: 200px;
  width: 100%;
  background-color: blue;
}
.buttons {
  display: flex;
  gap: 20;
}
.buttons button {
  padding: 8px 25px;
  background-color: black;
  color: #fff;
  border-radius: 10px;
}
</style>
