<template>
  <footer class="bg-gradient-to-r from-white to-pink-100">
    <div class="icon-links">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" class="hover:text-pink-700">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="hover:text-pink-700">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
      </a>
      <div class="cv-download">
        <a href="/path/to/your-cv.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
    </div>
    <div class="developer-text">
      <p>Developed by Azmain Morshed</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp"
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
  background-color: #ff0084;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.developer-text {
  text-align: center;
  margin-top: 10px;
}
</style>
