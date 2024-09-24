<template>
  <footer>
    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'github']" size="2x" />
    </a>
    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
    </a>
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
  justify-content: center;
  gap: 20px;
}
</style>
