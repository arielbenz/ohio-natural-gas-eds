export default function decorate(block) {
  const text = block.querySelector("p")?.innerHTML || "";

  block.innerHTML = `
    <div class="call-bar-inner">
      <p>${text}</p>
    </div>
  `;
}
