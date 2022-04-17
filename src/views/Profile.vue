<template>
<div class="container mt-5">
  <div class="row d-flex justify-content-center">
    <div class="col-md-7">
      <div class="card p-3 py-4">
        <div>
          <button class="btn btn-sm float-end"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"> </div>
        <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
          <h5 class="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
          <div class="px-4 mt-1">
            <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <ul class="social-list">
            <li><i class="fa fa-facebook"></i></li>
            <li><i class="fa fa-dribbble"></i></li>
            <li><i class="fa fa-instagram"></i></li>
            <li><i class="fa fa-linkedin"></i></li>
            <li><i class="fa fa-google"></i></li>
          </ul>
          <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> <button class="btn btn-primary px-4 ms-3">Add Friend</button> </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>




<style scoped>
body {
  background: #eee
}

.card {
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer
}

.card:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #d8d4c8;
  transform: scaleY(1);
  transition: all 0.5s;
  transform-origin: bottom
}

.card:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #ffc107;
  transform: scaleY(0);
  transition: all 0.5s;
  transform-origin: bottom
}

.card:hover::after {
  transform: scaleY(1)
}

.fonts {
  font-size: 12px
}

.social-list {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0
}

.social-list li {
  padding: 10px;
  color: #ffc107;
  font-size: 19px
}

.buttons button:nth-child(1) {
  border: 1px solid #ffc107 !important;
  color: #ffc107;
  height: 40px
}

.buttons button:nth-child(1):hover {
  border: 1px solid #ffc107 !important;
  color: #fff;
  height: 40px;
  background-color: #ffc107
}

.buttons button:nth-child(2) {
  border: 1px solid #ffc107 !important;
  background-color: #ffc107;
  color: #fff;
  height: 40px
}
</style>
