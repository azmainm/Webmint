<template>
  <footer class="bg-gradient-to-r from-white to-pink-100">
    <div class="icon-links">
      <a href="https://github.com/azmainm" target="_blank" rel="noopener noreferrer" class="hover:text-pink-700">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </a>
      <a href="https://linkedin.com/in/azmain-morshed/" target="_blank" rel="noopener noreferrer" class="hover:text-pink-700">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
      </a>
      <div class="cv-download">
        <!-- Updated CV Download Button with target and rel attributes -->
       <a href="https://drive.google.com/uc?export=download&id=1hBMcfYeMH2R0Yq-LF26JjJp25gAg--K-" target="_blank" rel="noopener noreferrer" download="AzmainMorshedCV.pdf"> 
          <button class="bg-gray-900 hover:bg-pink-600">Grab my Resume <span><font-awesome-icon icon="fa-solid fa-download" class="text-xl text-white" /></span></button>
        </a>
      </div>
    </div>
    <div class="developer-text">
      <p>Developed by Azmain Morshed</p>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faDownload);

export default {
  name: "FooterComp",
  components:{
    FontAwesomeIcon,
  },
};

</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.icon-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}

.cv-download {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.developer-text {
  text-align: center;
  margin-top: 10px;
}
</style>
